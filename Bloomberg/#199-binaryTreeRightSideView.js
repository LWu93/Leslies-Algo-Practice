/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]

Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

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
 * @return {number[]}
 */

//Given a binary tree. Meaning it could be all on one side, so we have to account for the left as well
//Iterate through tree with bfs. Reason is, we can get the last idx from each level and push that into our res arr
//we will end up with the most far right value in that level of the tree, regardless of left/right
var rightSideView = function(root) {
  if (!root) return []

  let queue = [root], res = [];

  while (queue.length) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let curr = queue.shift();

      if (i == length-1) res.push(curr.val) //if we're at the last idx of our level, thats the visible node from the right
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }

  }

  return res;
};
//n - # of nodes in tree. d - depth of tree
//Time - O(n). We have to traverse every node
//Space - O(d). Storing d amount of ele's in our res arr.
