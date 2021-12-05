// i, j, lowest
// console.log(selectionSort([5, 3, 4, 1, 2]))

/*
 Bubble Sort
 Bubble Sort is the simplest sorting algorithm that works by
 repeatedly swapping the adjacent elements if they are in wrong order.
 Example:
 First Pass:
 ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first
 two elements, and swaps since 5 > 1.
 ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
 ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
 ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are
 already in order (8 > 5), algorithm does not swap them.
 Second Pass:
 ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
 ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
 ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )
 Now, the array is already sorted, but our algorithm does not know
 if it is completed. The algorithm needs one whole pass without
 any swap to know it is sorted.
 Third Pass:
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
 ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
 
 T - O(n2)
 S - O(1)
 */
function bubbleSortQuadratic(arr) {
  const lng = arr.length
  // Traverse through all array elements
  for (let i = 0; i < lng; i++) {
    for (let j = i + 1; j < lng; j++) {
      // Compare elements
      if (arr[i] > arr[j]) {
        const temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  console.log(arr)
  return arr
}

bubbleSortQuadratic([1,-1,5,6])
bubbleSortQuadratic([-9,-1,5,-4])
bubbleSortQuadratic([9,1,5,4])

/*
* The above function always runs O(n^2) time even
* if the array is sorted. It can be optimized by stopping
* the algorithm if inner loop didn’t cause any swap.
*
* WT - O(n2)
* AT - O(n2)
* BT - O(n)
* S - O(1)
* */
function bubbleSortOptimized(arr) {
  const lng = arr.length
  // Traverse through all array elements
  for (let i = 0; i < lng; i++) {
    let swapped = false
    
    for (let j = i + 1; j < lng; j++) {
      // Compare elements
      if (arr[i] > arr[j]) {
        const temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
        swapped = true
      }
    }
    // if two element weren't swapped it means array
    // is already sorted
    if (!swapped) {
      break;
    }
  }
  console.log(arr)
  return arr
}

bubbleSortOptimized([1,-1,5,6])
bubbleSortOptimized([-9,-1,5,-4])
bubbleSortOptimized([9,1,5,4])

