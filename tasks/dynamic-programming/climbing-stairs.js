// https://www.youtube.com/watch?v=ZMNRb9TYiQM

/*
 You are climbing a staircase. It takes n steps
 to reach the top.
 
 Each time you can either climb 1 or 2 steps.
 In how many distinct ways can you climb to the top?
 
 # Example 1:
 Input: n = 2
 Output: 2
 Explanation: There are two ways to climb to the top.
 1. 1 step + 1 step
 2. 2 steps
 
 # Example 2:
 Input: n = 3
 Output: 3
 Explanation: There are three ways to climb to the top.
 1. 1 step + 1 step + 1 step
 2. 1 step + 2 steps
 3. 2 steps + 1 step
 
 Solution:
 n = (n - 1) + (n - 2)
 The distinct ways to reach the top equals
 the sum of two previous distinct ways to reach
 the top
 */


// T - O(n)
// S - O(1)
function climbingStairs(n) {
  if (n <= 2) return n;
  
  let oneStep = 1;
  let twoStep = 2;
  
  for (let i = 3; i <= n; i++) {
    let tmp = twoStep;
    twoStep = twoStep + oneStep;
    oneStep = tmp;
  }
  
  console.log(twoStep);
  return twoStep;
}

climbingStairs(1);
climbingStairs(2);
climbingStairs(3);
climbingStairs(4);
climbingStairs(5);
climbingStairs(6);
climbingStairs(7);
climbingStairs(20);
