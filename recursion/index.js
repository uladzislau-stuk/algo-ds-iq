// Write a function that takes two strings, s1 and s2, and returns the longest common subsequence of s1 and s2.

// create recursive palindrome
// 'abmba'
// 'a' or '' - palindrome
function isPalindrome(string) {
  if (string.length <= 1) {
    return true
  } else if (string[0] !== string[string.length - 1]) {
    return false
  } else {
    return isPalindrome(string.slice(1, string.length - 1))
  }
}

// console.log(isPalindrome('abmmba'))

// create tree
let categories = [
  {id: 'phone', parent: null},
  {id: 'samsung', parent: 'phone'},
  {id: 'apple', parent: 'phone'},
  {id: 'galaxy 5', parent: 'samsung'},
  {id: 'galaxy 6', parent: 'samsung'},
  {id: 'iphone 7', parent: 'apple'},
  {id: 'iphone 8', parent: 'apple'},
  {id: '64gb', parent: 'iphone 7'},
]

function makeTree(arr, parent = null) {
  var tree = {}

  arr
    .filter(c => c.parent === parent)
    .forEach(c => tree[parent] = makeTree(arr, c.id))

  return tree
}

console.log(makeTree(categories))

// flat object
// {a:1, b: {a: 1, b: {a: 5, b: 8, c: {c: 4, g: 12}}}}
function flat(obj, level = 0) {
  var flatObj = {}

  Object.keys(obj).forEach(k => {
    if (typeof obj[k] === 'object') {
      flatObj = {
        ...flatObj,
        ...(level ? flat(obj[k], level - 1) : {[k]: obj[k]})
      }
    } else {
      flatObj = {...flatObj, [k]: obj[k]}
    }
    console.log(flatObj)
  })

  return flatObj
}
var obj = {a:1, b: {a: 1, b: {a: 5, b: 8, c: {c: 4, g: 12}}}}
var flatObj = flat(obj, 0)
// console.log(flatObj)

// "ABAZDC", "BACBAD" → "ABAD"
// "AGGTAB", "GXTXAYB" → "GTAB"

// A, AB, ABA, ABAD
// BA, BAD, BAC

// Dynamic programming
// 1. Recursive solution
// 2. Memorize Intermediate result
// 3. Bottom-up approach

function getLcsLengths(str1, str2) {
  var result = [];
  for (var i = -1; i < str1.length; i = i + 1) {
    result[i] = [];
    for (var j = -1; j < str2.length; j = j + 1) {
      if (i === -1 || j === -1) {
        result[i][j] = 0;
      } else if (str1[i] === str2[j]) {
        result[i][j] = result[i - 1][j - 1] + 1;
      } else {
        result[i][j] = Math.max(result[i - 1][j], result[i][j - 1]);
      }
    }
  }
  return result;
}
console.table(getLcsLengths('abcmbv', 'amb'))

// function longestCommonSubsequence(str1, str2) {
//   if (!str1.length || !str2.length) return ''
//
//   var sequences = []
//
//   for (var i = 0; i < str1.length; i++) {
//     for (var j = 0; j < str2.length; j++) {
//       var startPoint = ~str2.indexOf(str1[i])
//       if (!startPoint) break
//       // AB
//       j++
//       var tempSequence = str1.slice(i, j + 1)
//       // A
//       var tempResult = str1[i]
//       for (let k = startPoint; startPoint < str2.length; k++) {
//         if (str2[k] === tempSequence[tempSequence.length - 1]) {
//           tempResult += tempSequence[tempSequence.length - 1]
//           j++
//         }
//       }
//     }
//   }
// }



// Fibonnaci tabulation approach - solve problems from bottom to top
function fibTabulation(n) {
  // array declaration - notice that we figure out how many elements will be here before the calculations begin. This is the 'tabulation' approach so let's make a new array and fill it with 0s
  var arr = new Array(n+1).fill(0)
  // base case assignment
  arr[1] = 1;
  // calculating the fibonacci and storing the values
  for(var i = 2; i <= n; i++) {
    arr[i] = arr[i-1] + arr[i-2]
  }
  return arr[n]
}


// Fibonnaci memoization approach - solve problems from top to bottom
function fibMemoized(n, savedFibs = {}) {
  if (n <= 0) { return 0 }
  if (n <= 2) { return 1 }

  if (!savedFibs[n-1]) {
    savedFibs[n-1] = fibMemoized(n - 1, savedFibs)
  }

  if (!savedFibs[n-2]) {
    savedFibs[n-2] = fibMemoized(n - 2, savedFibs)
  }

  return savedFibs[n-1] + savedFibs[n-2]
}

// console.log(fibMemoized(50))
// 1) fib(5) + fib()
// 2) fib(3) + fib(4)


// ************************************
// * Write function which collect ids *
// ************************************
var tree = {
  id: 1,
  children: [
    {
      id: 2,
      children: [
      {
          id: 999,
          children: []
        },
        {
          id: 3,
          children: []
        }
      ]
    },
    {
      id: 4,
      children: []
    }
  ]
}

function collectIdsOne(tree = {}) {
  var ids = []

  if (Object.prototype.toString.call(tree) !== '[object Object]') {
    return ids
  }

  ids.push(tree.id)

  if (tree.children.length) {
    for (var i = 0; i < tree.children.length; i++) {
      ids = ids.concat(collectIdsOne(tree.children[i]))
    }
  }

  return ids
}

function collectIdsTwo(tree = {}) {
	return Object.prototype.toString.call(tree) === '[object Object]'
		? tree.children.length
			? tree.children.reduce((acc, c) => (
				acc.concat(collectIdsTwo(c))
			), [tree.id])
			: [tree.id]
		: []
}

function collectIdsThree({id, children}) {
  let ids  = [id]
  if (children.length) {
    children.forEach(c => ids = ids.concat(collectIdsThree(c)))
  }
  return ids
}

// console.log(collectIdsTwo(tree))