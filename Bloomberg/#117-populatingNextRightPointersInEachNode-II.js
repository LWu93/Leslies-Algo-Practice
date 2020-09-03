/*
Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.

Example 1:
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

Constraints:
The number of nodes in the given tree is less than 6000.
-100 <= node.val <= 100
*/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var connect = function (root) {
	if (!root) return root;

	let leftmostRoot = root;

	//start with the leftmost root node. There are no next pointers that need to be set up. Move onto next node
	while (leftmostRoot !== null) {
		//start currNode as leftMostRoot. start prevNode at null to track the first prev leftNodes aka the head of the next level.
		let currNodeInLevel = leftmostRoot,
			prevNode = null,
			nextLevelsLeftMost = null;

		leftmostRoot = null; //set to null so we can find the leftmostNode to begin with at the next level

		//traverse currNode as if it was a LL
		while (currNodeInLevel !== null) {
			if (currNodeInLevel.left) {
				//if there is a prevNode, set that to the currnodes left child
				if (prevNode) {
					prevNode.next = currNodeInLevel.left;
				} else {
					nextLevelsLeftMost = currNodeInLevel.left;
				}
				prevNode = currNodeInLevel.left;
			}
			//same checks for the right child
			if (currNodeInLevel.right) {
				if (prevNode) {
					prevNode.next = currNodeInLevel.right;
				} else {
					nextLevelsLeftMost = currNodeInLevel.right;
				}
				prevNode = currNodeInLevel.right;
			}

			currNodeInLevel = currNodeInLevel.next;
		}
		//set leftMostRoot to the nextLevelsLeftMost
		leftmostRoot = nextLevelsLeftMost;
	}

	return root;
};
/* Complexity. N - number of nodes in tree

Time - O(N). Traversing every node once using BFS
Space - O(1). assigning in-place.

*/
