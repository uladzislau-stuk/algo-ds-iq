/*
 TODO: Preorder-traversal solution
 https://leetcode.com/problems/validate-binary-search-tree/discuss/1471241/Javascript-Two-ways%3A-recursive-and-in-order-traversal-to-solve-this-question
 
 https://algodaily.com/sections/binary-search-trees-interview-questions
 https://leetcode.com/problems/validate-binary-search-tree/submissions/
 
 Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 
 A valid BST is defined as follows:
 
 The left subtree of a node contains only nodes with keys less than the node's key.
 The right subtree of a node contains only nodes with keys greater than the node's key.
 Both the left and right subtrees must also be binary search trees.
 */

/*
        5
      /   \
     4     6
    / \   / \
   1   2 3   2

         5
       /   \
      4     8
     /     / \
    1     7  10
         / \
        6   9
        
  How to solve this task?
  1) If we go to the left we change max
  2) If we go to the right we change min
  
  PS. Remember BST Invariant rules
* */

const TreeFactory = require('../../binary-tree/binary-tree-factory');

function validateBinarySearchTree(root) {
  const isValid = (tree, min, max) => {
    return (
      tree.val > min &&
      tree.val < max &&
      isValid(tree.left, min, tree.val) &&
      isValid(tree.right, tree.val, max)
    )
  }
  
  return isValid(root.left, Number.MIN_SAFE_INTEGER, root.val) &&
  isValid(root.right, root.val, Number.MAX_SAFE_INTEGER)
}

// function validateBinarySearchTree(root) {
//   const isValid = (node, min, max) => {
//     if (!node) return true;
//     return (
//       node.val > min &&
//       node.val < max &&
//       isValid(node.left, min, node.val) &&
//       isValid(node.right, node.val, max)
//     );
//   };
//   return (
//     isValid(root.left, Number.MIN_SAFE_INTEGER, root.val) &&
//     isValid(root.right, root.val, Number.MAX_SAFE_INTEGER)
//   );
// }

// Leetcode -> not valid [5,4,6,null,null,3,7]
// #2 Recursively check if all the nodes are qualified as BST nodes (O(logn) + O(n)) :
// left nodes on left tree need to be smaller than parent node value
// right nodes on left tree need to be bigger parent node but smaller than root
// left nodes on right tree need to be smaller than parent node value but bigger than root
// right nodes on right tree need to be bigger than parent node
const isValid = validateBinarySearchTree(
  TreeFactory.create({
    val: 5,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 6,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  }).root,
);

console.log(isValid);
