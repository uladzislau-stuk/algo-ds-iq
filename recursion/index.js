// Fibonnaci memoization approach
function fibMemoized(n, savedFibs = {}) {
  if (n <= 0) { return 0 }
  if (n <= 2) { return 1 }

  if (!savedFibs[n-1]) {
    savedFibs[n-1] = fib(n - 1, savedFibs)
  }

  if (!savedFibs[n-2]) {
    savedFibs[n-2] = fib(n - 2, savedFibs)
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

// console.log(collectIdsTwo(tree))