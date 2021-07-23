/*
There are 7 sorting common algorithms
Visual Examples
https://www.toptal.com/developers/sorting-algorithms
*/


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
// console.log(selectionSort([5, 3, 4, 1, 2]))

/*
Bubble Sort
[5, 3, 4, 1, 2]
[3, 5, 4, 1, 2]
[3, 4, 5, 1, 2]
[3, 4, 1, 5, 2]
[3, 4, 1, 2, 5]

[1, 2, 3, 4, 5]
*/
// let arr = [1, 2, 0, 2, 10, 5]

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


/*
* MERGE SORT - O (n * log n)
*
* 1. It's combination of two things - merging and sorting
* 2. Exploits the fact that arrays of 0 or 1 element are always sorted
* 3. Works by decomposing an array into smaller arrays of 0 or 1 elements,
* then building up a newly sorted array
*
* How does it work?
* 			[1,4,2,8,345]
* 			[1,4] [2, 8,345]
* 		[1][4]		[2] [8,345]
*		[1, 4]			 [8] [345]
* 							[8,345]
* 					[2,8,345]
* 		[1,4] [2,8,345]
* 		[1,2,4, 8, 345]
* */
function merge(leftArr, rightArr) {
	const outputs = []
	let leftIndex = 0
	let rightIndex = 0
	
	while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
		const leftNum = leftArr[leftIndex]
		const rightNum = rightArr[rightIndex]
		
		if (leftNum < rightNum) {
			outputs.push(leftNum)
			leftIndex++
		} else {
			outputs.push(rightNum)
			rightIndex++
		}
	}
	
	while (leftIndex < leftArr.length) {
		outputs.push(leftArr[leftIndex])
		leftIndex++
	}
	
	while (rightIndex < rightArr.length) {
		outputs.push(rightArr[rightIndex])
		rightIndex++
	}
	
	return outputs
}

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr
	}
	
	const middleIndex = Math.floor(arr.length / 2)
	const leftArr = arr.slice(0, middleIndex)
	const rightArr = arr.slice(middleIndex)
	
	return merge(mergeSort(leftArr), mergeSort(rightArr))
}

const arr = [1, 10, 50, 2, 14, 99, 100]
console.log(mergeSort(arr))

/*
* QUICK SORT - O (n * log n)
* Quick sort faster than Merge Sort
*
* If we always pick up first element as pivot (worst case) - O(n)
* If we always pick middle element as pivot (best case) - O(log n)
*
*        P
* [1,123,43,92,5200]
*
* [1] + 43 + [123, 92, 5200]
* [1, 43] + [123, 92, 5200]
* 			[]  + 92 + [123, 5200]
* 				[92, 123, 5200]
* [1, 43, 92, 123, 5200]
* */

// best case when we pick up middle element
function quickSort(arr) {
	// basic case
	if (arr.length <= 1 ) {
		return arr
	}
	
	const pivotIdx = Math.floor(arr.length / 2)
	const pivot = arr[pivotIdx]
	const leftArr = []
	const rightArr = []
	
	for (let i = 0; i < arr.length; i++) {
		if (pivotIdx === i) {
			continue
		}
		
		if (arr[i] < pivot) {
			leftArr.push(arr[i])
		} else {
			rightArr.push(arr[i])
		}
	}
	
	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

// const arr = [1,123,43,92,5200, -1, -17, 0, 1, 1, 2]
// console.log(quickSort(arr))
// console.log(arr)
