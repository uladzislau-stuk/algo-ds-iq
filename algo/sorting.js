/*
There are 7 sorting common algorithms
Visual Examples
https://www.toptal.com/developers/sorting-algorithms
*/

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

console.log(bubbleSort(arr, arr))
console.log(arr)