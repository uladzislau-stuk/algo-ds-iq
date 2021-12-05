/*
* {val: 5, left: {val: 5, left: null, right: {//...}}, right: {//..}}
*
*
* */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class TreeFactory {
  constructor() {
    this.root = null
  }
  
  static createSubtree(treeObj) {
    // base case
    if (!treeObj) {
      return null;
    }
    // create new node
    const tree = new TreeNode(treeObj.val)
    
    // build left part
    tree.left = TreeFactory.createSubtree(treeObj.left)
  
    // build right part
    tree.right = TreeFactory.createSubtree(treeObj.right)
    
    return tree
  }
  
  static create(treeObj) {
    const tree = new TreeFactory()
    tree.root = new TreeNode(treeObj.val)
  
    tree.root.left = TreeFactory.createSubtree(treeObj.left)
    tree.root.right = TreeFactory.createSubtree(treeObj.right)
    
    console.log(tree)
    return tree
  }
}

// # Example
// TreeFactory.create({
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 3,
//       left: null,
//       right: null,
//     },
//     right: null
//   },
//   right: null
// })

module.exports = TreeFactory
