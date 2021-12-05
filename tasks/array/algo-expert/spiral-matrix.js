/*
 
 
 [
 [1]
 [2]
 [3]
 ]
 
 [
 []
 []
 []
 ]
 
 Approach: 4 boundaries
 
 Solution:
 To build spiral matrix we need to iterate in each direction:
 left->right
 top -> bottom
 right -> left
 bottom -> top
 
 note:
 we decrement/increment each pointer after every loop
 (to avoid same corner value from being stored in the arr twice)
 
 we loop till we fill new array with all elements from matrix
 we decrement/increment each pointer after every loop
 (to avoid same corner value from being stored in the arr twice)
 
 we want to keep checking if the output.length < size of the grid,
 since once we enter the while loop, we might exceed the size, and might keep adding values,
 since the only way to check would be the main while loop,
 that's why it's better to keep checking for the size
 of the new array before adding values inside it
 
 T - O(mn) ?
 S - O(mn) ?
 */

var spiralOrder = function (matrix) {
  // new array
  const output = [];
  
  let left = 0;
  let right = matrix[0].length - 1;
  
  let top = 0;
  let bottom = matrix.length - 1;
  
  // number elements in matrix
  const size = matrix.length * matrix[0].length;
  
  
  while (output.length < size) {
    // right
    for (let i = left; i <= right; i++) {
      if (output.length < size) output.push(matrix[top][i]);
    }
    top++;
    
    // down
    for (let i = top; i <= bottom; i++) {
      if (output.length < size) output.push(matrix[i][right]);
    }
    right--;
    
    // left
    for (let i = right; i >= left; i--) {
      if (output.length < size) output.push(matrix[bottom][i]);
    }
    bottom--;
    
    // up
    for (let i = bottom; i >= top; i--) {
      if (output.length < size) output.push(matrix[i][left]);
    }
    left++;
  }
  
  console.log(output);
  return output;
};

spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]); //  1,  2,  3, 4, 8, 12, 11, 10, 9, 5, 6,  7
