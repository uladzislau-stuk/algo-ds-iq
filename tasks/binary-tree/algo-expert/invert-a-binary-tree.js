const BinarySearchTree = require('../in-pre-post-order-traversals');
// https://afteracademy.com/blog/invert-a-binary-tree
// TODO: TIME, SPACE Complexities

// Input:
//    5
//   / \
//  3   6
// / \   \
// 2 4    7

// Output:
//    5
//   / \
//  6   3
// /   / \
// 7  4   2

// Solution #1
// Recursive solution
function invertBinaryTreeRecursive(head) {
  // base case
  if (!head) {
    return;
  }
  
  const tmp = head.left
  head.left = head.right
  head.right = tmp
  
  invertBinaryTreeRecursive(head.left)
  invertBinaryTreeRecursive(head.right)
  
  return head
}

// #Solution #2
// Using Iterative Preorder Traversal
// LIFO
function invertBinaryTreeUsingIterativePreorderTraversal(head) {
  // base case
  if (!head) {
    return
  }
  
  // create empty stack
  const stack = []
  stack.push(head)
  
  while (stack.length > 0) {
    // pop last
    const curr = stack.pop();
    
    // swap nodes
    const tmp = curr.left
    curr.left = curr.right
    curr.right = tmp
  
    // push right child of popped node to the stack
    if (curr.right) {
      stack.push(curr.right)
    }
  
    // push left child of popped node to the stack
    if (curr.left) {
      stack.push(curr.left)
    }
  }
  
  return head
}

// #Solution #3
// Using Level Order Traversal
// FIFO

// Output:
//    5
//   / \
//  6   3
// /   / \
// 7  4   2
function invertBinaryTreeUsingLevelOrderTraversal(head) {
  // base case
  if (!head) {
    return
  }
  
  // create empty stack
  const stack = []
  
  stack.unshift(head)
  
  while (stack.length > 0) {
    // pop last
    const curr = stack.shift();
    
    // swap nodes
    const tmp = curr.left
    curr.left = curr.right
    curr.right = tmp
    
    // push right child of shifted node to the stack
    if (curr.right) {
      stack.unshift(curr.right)
    }
  
    // push left child of shifted node to the stack
    if (curr.left) {
      stack.unshift(curr.left)
    }
  }
  
  return head
}

const tree = BinarySearchTree.create()
console.log(tree)
// const invertedTree = invertBinaryTreeRecursive(tree.root)
const invertedTree = invertBinaryTreeUsingLevelOrderTraversal(tree.root)
console.log(invertedTree)
