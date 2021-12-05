/*
 TODO: Need repetition

 https://www.geeksforgeeks.org/insertion-sort/
 
 Bubble, selection and insertion sort algorithms
 perform well on small data set
 
 Time and space complexity - roughly equivalent
 
 Insertion sort
 Builds up the sort by gradually creating larger left half which is always sorted
 
 Pseudocode:
 1. Start by picking the second element in the array
 2. Now compare the second element with the one before
 it and swap if necessary
 3. Continue to the next element and if it is in
 the incorrect order, iterate through the sorted
 (i.e the left side) to place the element in the correct place
 repeat until the array is sorted
 
 
 12, 11, 13, 5, 6
  |   |
 
 11, 12, 13, 5, 6
          |  |
 11, 12, 5, 13, 6
      |  |
 11, 5, 12, 13, 6
 |   |
 5, 11, 12, 13, 6
 |   |
 
 T - O(n2)
 S - O(1)
*/
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // current element
    let val = arr[i]
    
    // previous element idx
    let j = i - 1
    
    // previous element with current one
    while (j >= 0 && arr[j] > val) {
      arr[j + 1] = arr[j]
      j--
    }
    
    arr[j + 1] = val
  }
}
