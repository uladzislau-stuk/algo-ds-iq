/*

The selection sort algorithm sorts an array
by repeatedly finding the minimum element
(considering ascending order) from unsorted
part and putting it at the beginning.

arr[] = 64 25 12 22 11

// Find the minimum element in arr[0...4]
// and place it at beginning
11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
11 12 22 25 64


Time Complexity: O(n2) as there are two nested loops.
Auxiliary Space: O(1)
The good thing about selection sort is it never make
more than O(n) swaps and can be useful when memory write
is a costly operation.
* */
function notStableSelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    
    // find element with lowest value
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    
    const temp = arr[i]
    arr[i] = arr[lowest]
    arr[lowest] = temp
  }
  console.log(arr)
  return arr
}

notStableSelectionSort([1,-1,5,6])
notStableSelectionSort([-9,-1,5,-4])
notStableSelectionSort([9,1,5,4])

/*
 https://www.geeksforgeeks.org/stable-selection-sort/
 
 A sorting algorithm IS SAID TO BE STABLE
 if two objects with equal or same keys appear
 IN THE SAME ORDER IN SORTED OUTPUT AS THEY APPEAR
 IN THE INPUT ARRAY TO BE SORTED.

 4A 5 3 2 4B 1, minIdx = 5
 4A 5 3 2 4B 4B, minIdx = 4
 4A 5 3 2 2 4B, minIdx = 3
 4A 5 3 3 2 4B, minIdx = 2
 4A 5 5 3 2 4B, minIdx = 1
 4A 4A 5 3 2 4B, minIdx = 0
 1 4A 5 3 2 4B
 
 [4A 5 3 2 4B] 1
  1 4A 5 3 2 4B
 1 [4A 5 3] 2 4B
 1 2 4A 5 3 4B
 1 2 [4A 5] 3 4B
 1 2 3 4A 5 4B
*/
function stableSelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
  
    // Find minimum element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
  
    // Move minimum element at current i.
    let val = arr[min];
    
    // shift every element one way forward
    while (min > i) {
      arr[min] = arr[min - 1];
      min--;
    }
    
    arr[i] = val;
  }
  console.log(arr)
  return arr
}

stableSelectionSort([4, 5, 3, 2, 4, 1])
