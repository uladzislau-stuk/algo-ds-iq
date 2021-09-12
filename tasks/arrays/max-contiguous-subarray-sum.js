/*
* [-2,1,-3,4,-1,2,1,-5,4]
*
* Solution #1. Loop through all items and find max sub sum of sub arrays
* Technique: -
*
* -2,1,...,-5,4
* 1,-3,...,-5,4
* -3,4,...,-5,4
*
* -2+1 = 1
* 1-3 = -2
* -2+4 = 2
*
*
* Complexity:
* T - O(n2) = n*(3n-6) => 3n2-6n => n2
* S - O(1)
* */
function maxContiguousSubarraySumQuadratic(arr) {
  let maxSum = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    let subSum = arr[i];
    maxSum = Math.max(maxSum, subSum);
    
    for (let j = i + 1; j < arr.length; j++) {
      subSum += arr[j];
      maxSum = Math.max(maxSum, subSum);
    }
  }
  // console.log('maxContiguousSubarraySum', maxSum);
  return maxSum;
}

maxContiguousSubarraySumQuadratic([-2,1,-3,4,-1,2,1,-5,4]) // 2
maxContiguousSubarraySumQuadratic([-2,1,-3,100]) // 100
maxContiguousSubarraySumQuadratic([-5,1]) // 1
maxContiguousSubarraySumQuadratic([-5]) // -5
maxContiguousSubarraySumQuadratic([6,1,-3,100]) // 104


/*
 * Solution #2. Calculate the maximum sum of ‘k’ consecutive elements in the array
 * Technique: Sliding Window
 *
 * [1,2,-5,6,8], n=4
 *  ______
 *    ______
 *      ______
 * Complexity:
 * T - O(n)
 * S - O(1)
 * */

/*
* 1, 4, 2, 10, 2, 3, 1, 0, 20
* |         | - 17
*    |         | - 18
*       |         | - 17
*           |        | - 17
*              |         | - 6
*                 |         | - 24
* */
function maxContiguousSubarraySumOfConsecutiveElements(arr, k) {
  let maxSum = 0;
  let subSum = 0;
  // find initial sum of first k elements
  for(let i = 0; i < k; i++) {
    subSum += arr[i];
  }
  maxSum = subSum;
  // move window to right and find subSum
  for (let j = k; j < arr.length; j++) {
    subSum += arr[j] - arr[j-k];
    // compare if subSum is more than maxSum, if yes then replace max with new sum value
    if (subSum > maxSum) {
      maxSum = subSum
    }
  }
  
  console.log('maxContiguousSubarraySumOfConsecutiveElements', maxSum);
  return maxSum;
}

maxContiguousSubarraySumOfConsecutiveElements([1, 4, 2, 10, 2, 3, 1, 0, 20 ], 4) // 24
maxContiguousSubarraySumOfConsecutiveElements([-4, -2, -10, -2], 2) // -6


/*
 * Solution #3. Dynamic Programming
 * -10 ,  1,   2,   -5,   6,   8
 * -10 + |1 +  2|   -5|   6  + 8
 *    -9    3     -5        14
 *     0    0     0
 *
 *
 * Complexity:
 * T - O(n)
 * S - O(1)
 * */
function maxContiguousSubarraySumLinear(arr) {
  let maxSubarraySum = arr[0]
  let subarraySum = 0
  
  for (const num of arr) {
    if (subarraySum < 0) {
      subarraySum = 0
    }
    subarraySum += num
    maxSubarraySum = Math.max(maxSubarraySum, subarraySum)
  }
  
  console.log('maxContiguousSubarraySumLinear', maxSubarraySum)
  return maxSubarraySum;
}

maxContiguousSubarraySumLinear([1, 4, 2, 10, 2, 3, 1, 0, 20 ]) // 43
maxContiguousSubarraySumLinear([-4, -2, -10, -2]) // -2
maxContiguousSubarraySumLinear([-4, 2, -3, 8, 1]) // 9

