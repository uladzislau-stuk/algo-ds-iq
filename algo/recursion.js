// flatten


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

// console.log(fibMemoized(5))
// function fibMemoized(n, savedFibs = {}) {
// 	if (n <= 0) { return 0 }
// 	if (n <= 2) { return 1 }
//
// 	if (!savedFibs[n-1]) {
// 		savedFibs[n-1] = fibMemoized(n - 1, savedFibs)
// 	}
//
// 	if (!savedFibs[n-2]) {
// 		savedFibs[n-2] = fibMemoized(n - 2, savedFibs)
// 	}
//
// 	return savedFibs[n-1] + savedFibs[n-2]
// }

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