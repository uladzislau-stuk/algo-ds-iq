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
  const outputs = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftNum = leftArr[leftIndex];
    const rightNum = rightArr[rightIndex];
    
    if (leftNum < rightNum) {
      outputs.push(leftNum);
      leftIndex++;
    } else {
      outputs.push(rightNum);
      rightIndex++;
    }
  }
  
  while (leftIndex < leftArr.length) {
    outputs.push(leftArr[leftIndex]);
    leftIndex++;
  }
  
  while (rightIndex < rightArr.length) {
    outputs.push(rightArr[rightIndex]);
    rightIndex++;
  }
  
  return outputs;
}

// [1,2,-1,10,20]
// [1,2] [-1,10,20]
// [1][2] [-1,10,20]
// [1,2]  [-1] [10,20]
//             [10] [20]
//               [10,20]
//         [-1,10,20]
// [-1,1,2,10,20]

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);
  
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const arr = [1, 10, 50, 2, 14, 99, 100];
console.log(mergeSort(arr));

// Tasks
// THE BIGGEST SUM OF SUBARRAY
// [-1,1,4,2,1,-9] = 8, base case arr.length = 1
// [-1,1,4] [2,1,-9]
// [-1] [1,4] [2] [1,-9]
//  0  [1][4]  2  [1] [-9]
//      1  4       1    0
//       1+4         1+0
//    0+5         2+1
//         5+3
//          8

function maxSumOfSubarray(nums, maxSum = 0) {
  if (nums.length === 1) {
    if (maxSum + nums[0] > maxSum) {
      return maxSum + nums[0];
    } else {
      return maxSum;
    }
  }
  
  const mid = Math.ceil(nums.length / 2);
  const leftArr = nums.slice(0, mid);
  const rightArr = nums.slice(mid);
  
  const leftArrSum = maxSumOfSubarray(leftArr, maxSum);
  const rightArrSum = maxSumOfSubarray(rightArr, maxSum);
  
  return leftArrSum + rightArrSum;
}

console.log(maxSumOfSubarray([-10, 1, -1, 0, 1, -1])); // 2
console.log(maxSumOfSubarray([-1, 1, 4, 2, 1, -9])); // 8
console.log(maxSumOfSubarray([10, -10])); // 10
