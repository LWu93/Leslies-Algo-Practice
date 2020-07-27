/*
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

//Psuedocode
//we know the root is at the end of the postorder arr
//we can begin from the end and use inorder traversal to get the positioning of branches in tree
//we can use postorder to pop off every val as we begin to build our tree recursively
//base case for recursive func should be when we go past the initial root nodes idx
//return root node - this should be done with 1 recursive call that builds out the root tree
var buildTree = function(inorder, postorder) {
  let hash = {};

  //built out a hash for instant access to idx values in recursive calls.
  for (let i = 0; i < inorder.length; i++) {
    hash[inorder[i]] = i;
  }

  let buildTree = function(start, end) {
    //base case - return null to complete the .left/.right properties of tree
    if (start > end) return null;

    let val = postorder.pop(); //we can always pop off bec the right tree will always finish first
    let newRoot = new TreeNode(val);
    newRoot.right = buildTree(hash[val]+1, end) //+1 for right side of curr roots idx.
    newRoot.left = buildTree(start, hash[val]-1) //-1 for left side of curr roots idx.
    return newRoot; //first instance will be root. newRoot.right & .left will recursively build
  }

  return buildTree(0, inorder.length-1);
};

//n - arr.length or # of nodes in tree.
//Time - O(n). Hashing idx vals saves us additional O(n) so we don't have to slice arr vals.
//Space - O(n). Worst case is we have n amount of recursive calls in callstack.
