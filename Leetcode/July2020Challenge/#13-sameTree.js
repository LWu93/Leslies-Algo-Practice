/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:
      1         1
    / \       / \
    2   3     2   3

  [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:
           1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:
           1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

//Psudocode
//Base case - if both trees are null, return true. If one or the other is null, then you return false
//Check if p.val === q.val. IF true, recursively check their .left and .right vals.
//recursive function should cover all cases for when .left/.right is null or has a value associated.
//ELSE - return false
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  } else {
    return false
  }

};

//Time Complexity - O(n). n - # of nodes.
//Space Complexity - O(log n). the callstack should have only half of the recursive calls of left/right.
