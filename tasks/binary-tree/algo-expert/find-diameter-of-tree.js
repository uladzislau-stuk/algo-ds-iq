/*
TODO: Iterative Solution; https://leetcode.com/problems/diameter-of-binary-tree/discuss/1416350/JavaScript-Iterative-Solution

Solution:
1) Max path can pass through the root
2) Max path can not pass through the root

https://www.youtube.com/watch?v=ey7DYc9OANo
* */

function findDiameterOfTree(root) {
  let diameter = 0;
  
  const findDiameter = (tree) => {
    if (tree === null) return 0;
    const left = findDiameter(tree.left);
    const right = findDiameter(tree.right);
    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  };
  
  findDiameter(root);
  
  return diameter;
}