/*
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

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
 * @return {number}
 */

//psuedocode
//traverse through the root and look for only the .left properties
//if .left exists, we can add to our global sum
//continue traversing .left and .right properties so long that they have children
//create a traverse HF. traverse from root. return sum.
var sumOfLeftLeaves = function(root) {
  let sum = 0;

  const traverse = (start) => {
    if (!start) return;

    if (!start.left && !start.right) return start //found a leaf node

    //check if left val property is a leaf and THEN add to sum
    let leftLeaf = traverse(start.left)
    if (leftLeaf) {
        sum += leftLeaf.val
    }
    //still have to traverse right side to cover any leaf .left properties
    traverse(start.right)
  }

  traverse(root)
  return sum;
};
//n - # of nodes in tree
//Time - O(n). Traversing entire tree
//Space - O(n). Worst case, the binary tree is imbalanced and recursive calls take up n space.
