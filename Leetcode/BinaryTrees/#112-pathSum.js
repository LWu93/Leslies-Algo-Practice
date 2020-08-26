/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

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
 * @param {number} sum
 * @return {boolean}
 */

//psuedocode
//if there is no root, return false.
//If its only root, check if the root.val === sum
//Else, recursively call the .left and .right properties with a new sum, which is the sum - root.val

var hasPathSum = function(root, sum) {
  if (root === null) return false;
  if (!root.left && !root.right) return root.val === sum;

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum- root.val)
};
//N - # of nodes in tree
//Time - O(N). Hits every node in tree.
//Space - O(N). Unbalanced tree can cause our call stack to have N recursive calls in callstack.

//Iterative approach - go level by level
//At every level, you add the child.val to our let currSum = 0 and check if it === sum
//If it does, return true. Else you've run through the entire tree/queue and can return false.
