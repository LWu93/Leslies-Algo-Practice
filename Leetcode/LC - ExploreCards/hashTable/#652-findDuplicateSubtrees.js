/*
Given a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with same node values.

Example 1:

        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
The following are two duplicate subtrees:

      2
     /
    4
and

    4

Therefore, you need to return above trees' root in the form of a list.
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
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */

//Approach using DFS which traverses tree bottom up
var findDuplicateSubtrees = function(root) {
  let hash = {}, res = [];
  if (root.val === undefined) return res;

  const traverse = tree => {
    if (!tree) return "#"; //this gives a buffer for our serialization of empty tree nodes
    let serial = tree.val + traverse(tree.left) + traverse(tree.right);

    hash[serial] ? hash[serial]++ : hash[serial] = 1;
    if (hash[serial] === 2) res.push(tree)
    // console.log(hash)
    return serial; //returns serial so you can build the parent trees serial.
  }

  traverse(root)
  return res;
};
//n - # of nodes in tree
//Time - O(n). We're doing a DFS recursive call through the tree
//Space - O(n). While storage is constant except for the potential of the res arr, the recursive calls can potentially take O(n) space in the call stack if tree is unbalanced.
