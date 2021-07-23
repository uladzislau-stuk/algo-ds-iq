// flatten

/*
* FIND SUM OF NUMBERS
* */

// const arr = [1, [2,3,[5]], 5, 18, [[1,2,[10]]]]
function findSumSolutionOne(arr) {
	const sum = 0;
	
	const getSum = (arr, sum) => {
		for (const arrElement of arr) {
			if (Array.isArray(arrElement)) {
				sum = getSum(arrElement, sum)
			} else {
				sum += arrElement
			}
		}
		
		return sum
	}
	
	return getSum(arr, 0)
}
// console.log(findSumSolutionOne(arr)) // 47

// const arr = [1, [2,3,[5]], 5, 18, [[1,2,[10]]]]
function findSumSolutionTwo(arr) {
	if (!arr.length) {
		return 0
	}
	return arr.flat(Infinity).reduce((acc, num) => (acc += num), 0)
}
// console.log(findSumSolutionTwo(arr)) // 47

// reverse
// e + reverse(r)
function reverse(word) {
	let newWord = ''

	for (var i = 0; i < word.length; i++) {
		newWord += word[word.length - 1 - i]
	}

	return newWord
}
console.log(reverse('reverse'))

// fib
// Fibonnaci tabulation approach - solve problems from bottom to top
function fibTabulation(n) {
	// array declaration - notice that we figure out how many elements
	// will be here before the calculations begin. This is the 'tabulation'
	// approach so let's make a new array and fill it with 0s
	var arr = new Array(n+1).fill(0)
	// base case assignment
	arr[1] = 1;
	// calculating the fibonacci and storing the values
	for(var i = 2; i <= n; i++) {
		arr[i] = arr[i-1] + arr[i-2]
	}
	return arr[n]
}

/*
* FIBONACCI RECURSION
* (4!)
*
* 4 * fib(3)
* 3 * fib(2)
* 2 * fib(1)
*
* 4 * 6 = 24
* 3 * 2
* 2 * 1
* */
function fibonacci(num) {
	if (num <= 1) {
		return num
	}
	
	return num * fibonacci(num - 1)
}

/*
 * FIBONACCI NUMBER AT GIVEN INDEX - O(n)
 * (6)
 *
 * [0,1]
 * [0,1,1]
 * [0,1,1,2]
 * [0,1,1,2,3]
 * [0,1,1,2,3,5]
 * [0,1,1,2,3,5,8]
 * */
function fibonacciAtGivenIndex(idx) {
	let fibo = [0,1]
	
	if (idx < 0) {
		return -1
	}
	
	for (let i = 2; i <= idx; i++) {
		let num = fibo[i - 1] + fibo[i - 2]
		fibo[i] = num
	}
	
	return fibo[idx]
}

// console.log(fibonacciAtGivenIndex(2)) // 1
// console.log(fibonacciAtGivenIndex(3)) // 2
// console.log(fibonacciAtGivenIndex(4)) // 3
// console.log(fibonacciAtGivenIndex(5)) // 5
// console.log(fibonacciAtGivenIndex(6)) // 8

/*
 * RECURSION FIBONACCI NUMBER BY GIVEN INDEX - O(2^n)
 * 					fib(4)
 * 				fib(3)	fib(2)
 * 			fib(2)	fib(1)	fib(1)	fib(0)
 * 		fib(1)	fib(0)	fib(1)
 * */
function fibonacciRecursion(n) {
	// basic case
	if (n < 2) {
		return n
	}
	
	return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2)
}

/*
* RECURSION MEMOIZED FIBONACCI NUMBER BY GIVEN INDEX - O(n)
* 						fib (5)
* 					fib (4) = 3 fib(3)
* 				fib (3) = 2 fib(2) = 1
* 			 fib(2) = 1 fib(1) = 1 fib(1) fib(0)
* */

function fibMemoized(n, savedFibs = {}) {
	if (n <= 0) {
		return 0
	}
	
	if (n <= 2) {
		return 1
	}

	if (!savedFibs[n-1]) {
		savedFibs[n-1] = fibMemoized(n - 1, savedFibs)
	}

	if (!savedFibs[n-2]) {
		savedFibs[n-2] = fibMemoized(n - 2, savedFibs)
	}

	return savedFibs[n-1] + savedFibs[n-2]
}


// product of the numbers
function productOfArrays(arr = []) {
	if (arr.length === 0) return 1
	return arr[0] * productOfArrays(arr.slice(1))
}

// console.log(productOfArrays([1,2,3,4,5]))

// pure recursion
function collectOddValues(arr = []) {
	let newArr = []

	if (arr.length === 0) {
		return newArr
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0])
	}

	newArr = newArr.concat(collectOddValues(arr.slice(1)))

	return newArr
}

// console.log(collectOddValues([1,2,3,4,5,5,5,99]))

// recursion with helper
function collectOdds(arr = []) {
	let result = []

	 function helper(array) {
	 	if (array.length === 0) {
	 		return
	 	}

	 	if (array[0] % 2 !== 0) {
	 		result.push(array[0])
	 	}

	 	return helper(array.slice(1))
	 }

	 helper(arr)

	 return result
}

// console.log(collectOdds([1,2,3,4,5]))
