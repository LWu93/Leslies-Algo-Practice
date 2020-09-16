/*
Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

The successor of a node p is the node with the smallest key greater than p.val.

Example 1:
Input: root = [2,1,3], p = 1
Output: 2
Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.

Example 2:
Input: root = [5,3,6,2,4,null,null,1], p = 6
Output: null
Explanation: There is no in-order successor of the current node, so the answer is null.

Note:

If the given node has no in-order successor in the tree, return null.
It's guaranteed that the values of the tree are unique.

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
 * @param {TreeNode} p
 * @return {TreeNode}
 */

/* psuedocode
two cases to keep in mind to find an inorder successor

1 - if there are any nodes to the right of the node we're at. Since its a BST, we know the right node will be greater than its current node. Then we need to keep going left until we can't go anymore because the leftmost node will be the smallest val after the right node.

2 - if there are no nodes to the right? we have to search for the first node that is less than the node.val we're looking from. Then from there, we can traverse left until we find the smallest node
*/

var inorderSuccessor = function (root, p) {
	let successor = null;
	let curr;

	//case 1
	if (p.right) {
		curr = p.right;
		while (curr) {
			successor = curr;
			curr = curr.left;
		}
	} else {
		//case 2 - start from root. find last node.val > p.val then go left
		curr = root;
		while (curr) {
			//case - when we hit the node without finding its successor
			if (curr.val === p.val) break;
			if (curr.val > p.val) {
				successor = curr;
				curr = curr.left;
			} else {
				curr = curr.right;
			}
		}
	}

	//returns null if we dont hit any of the cases above
	return successor;
};

/* complexity. H - height of tree
Time - O(H). We only traverse as far as the height of the tree itself. we will either hit conditions of there being nomore nodes that satisfy the curr.val > p.val check or if there are no more left nodes.
Space - O(1). Keeping track using 2 variables.
*/
