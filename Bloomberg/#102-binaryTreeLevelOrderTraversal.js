/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */

//Second attempt Iteratively
// var levelOrder = function(root) {
//   let res = [];
//   if (!root) return res;

//   let queue = [root];

//   while (queue.length) {
//     let len = queue.length, levelNodes = [];

//     for (let i = 0; i < len; i++) {
//       let currNode = queue.shift()
//       levelNodes.push(currNode.val)
//       if (currNode.left) queue.push(currNode.left)
//       if (currNode.right) queue.push(currNode.right)
//     }
//     if (levelNodes) res.push(levelNodes)
//   }

//   return res;
// };

//Second attempt recursively
var levelOrder = function(root) {
  let res = [];

  function traverse(root,depth) {
    if (!root) return;

    if (!res[depth]) res[depth] = [];

    res[depth].push(root.val);

    traverse(root.left, depth+1)
    traverse(root.right, depth+1)
  }

  traverse(root, 0)
  return res;
};

/* complexity for Iterative and recursive. N - # of nodes in tree

Time - O(N). Both algos will traverse each node once.
Space - O(N). Both will store a node val in its depth array. Recursive call will also add at worst O(n) space in the callstack.

*/
