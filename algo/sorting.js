/*
There are 7 sorting common algorithms
Visual Examples
https://www.toptal.com/developers/sorting-algorithms
*/

/*** Merge sort ***/
// 1. It's combination of two things - merging and sorting
// 2. Exploits the fact that arrays of 0 or 1 element are always sorted
// 3. Works by decomposing an array into smaller arrays of 0 or 1 elements,
//    then building up a newly sorted array

// How does it work?
// [8,3,5,4,7,6,2,1]
// [8,3,5,4] [7,6,2,1]
// [8,3] [5,4] [7,6] [2,1]
// [8][3] [5][4] [7][6] [2] [1]
// [3, 8] [4, 5] [6, 7] [1, 2]
// [3, 4, 5, 8] [1, 2, 6, 7]
// [1, 2, 3, 4, 5, 6, 7, 8]

// How to implement?
// 1. Create func merges two sorted  arrays, which return new array with sorted elements
// 2. This function should run in O(n + m) time and O(n + m) space and should not
//    modify the parameters passed to it. It means if n grows super large and m doesn't grow
//    super large it should be n + m

// Pseudocode
// 1. Create empty array, result = []
// 2. If val1 from arr1 <= val2 from arr2, push val1 to result and move on to the next val in arr1
// 3. If val from arr1 > val2 from arr2, push val2 to result and move on to the next val in arr2
// 4. Once we exhaust one array, push in all remaining values from the other array

function merge(arr1, arr2) {
	let results = []
	let i = 0
	let j = 0

	while(i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i])
			i++
		} else {
			results.push(arr2[j])
			j++
		}
	}

	while (i < arr1.length) {
		results.push(arr1[i])
		i++
	}

	while (j < arr2.length) {
		results.push(arr2[j])
		j++
	}

	return results
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]))

// ?Time complexities of algorithms

// Bubble, selection and insertion sort algorithms perform well on small data set
// Time and space complexity - roughly equivalent

// Insertion sort
// Builds up the sort by gradually creating larger left half which is always sorted

// Pseudocode:
// 1. Start by picking the second element in the array
// 2. Now compare the second element with the one before it and swap if necessary
// 3. Continue to the next element and if it is in the incorrect order, iterate through the sorted
// (i.e the left side) to place the element in the correct place
// repeat until the array is sorted

function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let currentVal = arr[i]
		for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j]
		}
		arr[j+1] = currentVal
	}
}

// Selection sort
// Find the minimum element and swap it with beginning
// [5, 3, 4, 1, 2]

function selectionSort(arr) {
	// compare each element to other element,
	// reduce number of swapping in comparison with bubble sort
	// O(n2)
	for (let i = 0; i < arr.length; i++) {
		let lowest = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j
			}
		}
		const temp = arr[i]
		arr[i] = arr[lowest]
		arr[lowest] = temp
	}
	return arr
}

// i, j, lowest
console.log(selectionSort([5, 3, 4, 1, 2]))

/*
Bubble Sort
[5, 3, 4, 1, 2]
[3, 5, 4, 1, 2]
[3, 4, 5, 1, 2]
[3, 4, 1, 5, 2]
[3, 4, 1, 2, 5]

[1, 2, 3, 4, 5]
*/
let arr = [1, 2, 0, 2, 10, 5]

function bubbleSort([...arr]) {
	function swap(arr, idx1, idx2) {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
	}
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr.length; j++) {
			// case 1: when previous value more than current, we need to swap values
			if (arr[j-1] > arr[j]) {
				// save current value to temp variable
				// es5
				let temp = arr[j]
				arr[j] = arr[j-1]
				arr[j - 1] = temp
				// es6
				//	swap(arr, j, )
			}
		}
	}
	return arr
}

// console.log(bubbleSort(arr, arr))
// console.log(arr)