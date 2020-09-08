/*
Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers.

Example 1:
Input: [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

Note:
The number of nodes in the tree is between 1 and 1000.
node.val is 0 or 1.
The answer will not exceed 2^31 - 1.

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

/* psuedocode

traverse tree in any fashion to get to the leaf node. Once you hit a leaf, you want to add all the binary nums together to calculate into a decimal #. Then add all nums together

traverse(root, binaryNum)
    if (!root) return

    create the binaryNum with the new root and node.val - will be reversed

    basecase - when there are no children, convert binaryNum to dec and add to running sum

    traverse leftNode with new binaryNum
    traverse rightNode with new binaryNum

traverse(root, '')
return sum
*/

var sumRootToLeaf = function (root) {
	let sum = 0;

	function traverse(root, num) {
		if (!root) return;

		//create the new binaryNum with root.val. binaryNum goes first
		let newBinaryNum = `${num}${root.val}`;

		//basecase
		if (!root.left && !root.right) {
			sum += parseInt(newBinaryNum, 2);
		}

		//traverse children
		traverse(root.left, newBinaryNum);
		traverse(root.right, newBinaryNum);
	}

	traverse(root, '');
	return sum;
};

/* Complexity - N - # of nodes in tree. H - height of tree

Time - O(N). Traversing tree to hit each node.
Space - O(H) avg case, O(N) worst case. In the worst case, its a unbalanced tree where one side has N nodes.
*/
