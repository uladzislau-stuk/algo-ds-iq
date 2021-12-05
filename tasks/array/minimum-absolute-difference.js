/*
 https://stackoverflow.com/questions/57763205/what-is-array-prototype-sort-time-complexity
 
 Given an array of distinct integers arr find all
 pairs of elements with the min. absolute difference of any two elements
 
 Return a list of pairs in ASCENDING order(with respect to pairs),
 each pair [a, b] follows  a, b are from arr a < b b - a equals
 to the minimum absolute difference of any two elements in arr

 Examples:
 Input = [4,2,1,3]
 Output = [[1,2],[2,3],[3,4]]
 minimumAbsoluteDifference = 1
 
 Input = [1,3,6,10,15]
 Output = [[1,3]]
 minimumAbsoluteDifference = 2
 
 Input = [3,8,-10,23,19,-4,-14,27]
 Output = [[-14,-10],[19,23],[23,27]]
 minimumAbsoluteDifference = 4
 
 T - O(n log(n))
 S - O(n)
 
 Solution:
 Create COPY and SORT input array.
 Start ITERATION from the SECOND element.
 Find the diff between current and previous elements
 Assign new value to minAbsDiff if it is undefined
 Compare new diff and minAbsDiff
  if equals
   push pair to pairs array
  else if new diff less than minAbsDiff
   assign newDiff to minAbsDiff
   reset pairs
   push pair to pairs array
 Return pairs
*/

const minimumAbsDifference = function(arr) {
  // make copy of array and sort it
  const sortedArr = [...arr].sort((a, b) => a - b);
  
  // store minimum abs diff
  let minAbsDiff;
  
  // store all found pairs
  let pairs = [];
  
  for (let i = 1; i < sortedArr.length; i++) {
    // find difference
    const diff = Math.abs(sortedArr[i - 1] - sortedArr[i]);
    
    // assign new value to minAbsDiff if it is undefined
    if (!minAbsDiff) {
      minAbsDiff = diff;
    }
    
    if (diff === minAbsDiff) {
      pairs.push([sortedArr[i - 1], sortedArr[i]]);
      // reset previous pairs and assign new minAbsDiff
    } else if (diff < minAbsDiff) {
      pairs.length = 0;
      minAbsDiff = diff;
      pairs.push([sortedArr[i - 1], sortedArr[i]]);
    }
  }
  
  console.log(pairs);
  return pairs;
};
