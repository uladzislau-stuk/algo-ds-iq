/*
 https://github.com/pinglu85/algoExpert/blob/main/Easy/minimum-waiting-time.md
 Find the miniumum time to execute all queries. Number represents the request's time to be completed. Request can be done in any order. First request is executed immediately.
 
 [4  1 10  9  8]
 
 1  4  8  9  10
 0  1  5  13 22
 
 Solution:
 1) Sort array in asc
 2) Sum prev time up to min waiting time
 
 T - O(nlogn)
 S - 0(1)
 */

function minimumWaitingTime(arr) {
  arr = arr.sort((a, b) => a - b);
  let minWaitingTime = 0;
  
  for (let i = 1; i < arr.length; i++) {
    minWaitingTime += arr[i - 1];
  }
  console.log(minWaitingTime)
  return minWaitingTime;
}

minimumWaitingTime( [4,1,10,9,8]) // 22
minimumWaitingTime( [1000,1]) // 1