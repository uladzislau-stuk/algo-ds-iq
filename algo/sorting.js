

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


