const TreeFactory = require('./binary-tree-factory');
// TODO: Time/Space Complexity
// Check Identity Binary Tress

/*
 Tree 1
 1
 / \
 3   2
 /     \
 5       6
 
 Tree 2
 1
 / \
 3   2
 / \   \
 5   0   6
 */

// Recursive Solution
function checkIdentityBinaryTrees(root1, root2) {
  // we reached the end of trees
  if (root1 === null && root2 === null) {
    return true;
  }
  
  if (root1 === null && root2 !== null) {
    return false
  }
  
  if (root1 !== null && root2 === null) {
    return false
  }
  
  if (root1.val !== root2.val) {
    return false;
  }
  
  // check left subtree
  const areLeftSubTreesIdentical = checkIdentityBinaryTrees(root1.left, root2.left);
  
  if (!areLeftSubTreesIdentical) {
    return false;
  }
  
  // check right subtree
  const areRightSubTreesIdentical = checkIdentityBinaryTrees(root1.right, root2.right);
  
  if (!areRightSubTreesIdentical) {
    return false;
  }
  
  return true;
}

const areTreesIdentical = checkIdentityBinaryTrees(
  TreeFactory.create({
    val: 1,
    left: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
    right: null,
  }).root,
  TreeFactory.create({
    val: 1,
    left: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  }).root,
);

console.log(areTreesIdentical)

