/*
103. Binary Tree Zigzag Level Order Traversal

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7

return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//Psuedocode
//This seems like Tree Traversal BFS except you reverse the eles when you're at an even level
//BFS - Keep track of the level with a queue using a while --> for loop
//keep track of the level you're at var level = 1
//have a innerArr keep track of each levels nodes. push array into res arr after you traverse a level
//return result;
var zigzagLevelOrder = function(root) {
  let result = []
  if (root === null) return result;

  let q = [root];
  let level = 1

  while (q.length) {
    let length = q.length;
    let innerArr = [];

    for (let i = 0; i < length; i++) {
      let curr = q.shift();

      if (curr.left) q.push(curr.left)
      if (curr.right) q.push(curr.right)

      innerArr.push(curr.val)
    }

    if (level % 2 === 0) result.push(innerArr.reverse());
    else result.push(innerArr);
    level++;
  }

  return result;
}
//Time - O(n). n - number of nodes in the tree.
//Space - O(n). storing a nested array that consists of all the tree nodes.
