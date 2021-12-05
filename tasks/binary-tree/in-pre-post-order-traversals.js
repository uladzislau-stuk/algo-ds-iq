// https://algodaily.com/challenges/binary-tree-inorder-traversal

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  
  isLeaf() {
    return this.left === null
      ? this.right === null
      : false
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  
  inOrder() {
    const res = []
    this._inOrderTraversal(this.root, res)
    console.log(res)
    return res
  }
  
  //    5
  //   / \
  //  3   6
  // / \   \
  // 2 4    7
  inOrderIterative() {
    // create empty stack
    const stack = []
    
    // initialize current node as root
    let current = this.root
    
    // [5,3,2]
    // [5,3], 2
    // [5], 2,3
    // [5,4] 2,3
    // [5] 2,3,,4
    // [5] 2,3,4
    // [] 2,3,4,5
    // [6] 2,3,4,5
    // [] 2,3,4,5,6
    // [7] 2,3,4,5,6
    // [] 2,3,4,5,6,7
    
    // if current is null and stack is empty - we checked last node
    while (stack.length || current !== null) {
      if (current !== null) {
        // populate stack
        stack.push(current)
        current = current.left
      } else {
        // pop the top item from stack
        const node = stack.pop()
        console.log(node.val)
        current = node.right
      }
    }
  }
  
  _inOrderTraversal(node, res) {
    if (node === null) return
    
    this._inOrderTraversal(node.left, res)
    res.push(node.val)
    this._inOrderTraversal(node.right, res)
  }
  
  preOrder() {
    const res = []
    this._preOrderTraversal(this.root, res)
    console.log(res)
    return res
  }
  
  _preOrderTraversal(node, res) {
    if (node === null) return
  
    res.push(node.val)
    this._preOrderTraversal(node.left, res)
    this._preOrderTraversal(node.right, res)
  }
  
  postOrder() {
    const res = []
    this._postOrderTraversal(this.root, res)
    console.log(res)
    return res
  }
  
  _postOrderTraversal(node, res) {
    if (node === null) return
    
    this._postOrderTraversal(node.left, res)
    this._postOrderTraversal(node.right, res)
    res.push(node.val)
  }
  
  //    5
  //   / \
  //  3   6
  // / \   \
  // 2 4    7
  
  static create() {
    const tree = new BinarySearchTree()
    tree.root = new TreeNode(5)
    
    tree.root.left = new TreeNode(3)
    tree.root.right = new TreeNode(6)
    
    tree.root.left.left = new TreeNode(2)
    tree.root.left.right = new TreeNode(4)
    
    tree.root.right.right = new TreeNode(7);
    
    return tree
  }
}

const tree = BinarySearchTree.create()
// T - O(n)
// S(average) - O(logn)
// S(worst - skewed binary tree) - O(n)
tree.inOrder()
tree.inOrderIterative()
// tree.preOrder()
// tree.postOrder()

module.exports = BinarySearchTree

