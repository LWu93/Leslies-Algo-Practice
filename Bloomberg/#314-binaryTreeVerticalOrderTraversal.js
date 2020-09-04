/*
Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Examples 1:

Input: [3,9,20,null,null,15,7]

   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7

Output:

[
  [9],
  [3,15],
  [20],
  [7]
]
Examples 2:

Input: [3,9,8,4,0,1,7]

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7

Output:

[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]
Examples 3:

Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2

Output:

[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
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

/* psuedocode

BFS through the tree so we can keep order from left to right
As we pull each node from the tree, we can also account for its current col its at.
When we add its children in, we can add/subtract accordingly. Since we are BFS'ing, if they are in the same row/col, we don't need additional logic. Need to sort the cols accordingly.

Second approach - Instead of sorting, we can simply keep track of min -> maxcols and loop from those points.

*/

var verticalOrder = function(root) {
  if (!root) return [];

  let q = [[root,0]], res = new Map();
  let minCol = 0, maxCol = 0;

  while (q.length) {
    let len = q.length;

    for (let i = 0; i < len; i++) {
      let [currNode, col] = q.shift();

      //update min/max cols accordingly
      minCol = Math.min(minCol, col);
      maxCol = Math.max(maxCol, col);

      if (!res.has(col)) res.set(col, []);
      res.get(col).push(currNode.val);

      if (currNode.left) {
        q.push([currNode.left, col-1])
      }
      if (currNode.right) {
        q.push([currNode.right, col+1])
      }
    }
  }

  let entries = [];

  for (let i = minCol; i <= maxCol; i++) {
      entries.push(res.get(i))
  }

  return entries
};
/* Complexity. n - # of nodes;
Time - O(n). We will traverse every node via BFS. We will also loop from minCol -> maxCol but that is dependent on shape/size of tree.
Space - O(n). Storing every node in our res Map and entries array.
*/
