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
