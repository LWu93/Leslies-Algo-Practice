/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

/* psuedocode

get to the root, traverse BST as if it was inorder traversal.

Case 1 - We need to check if the successor is right of the node you're at. if it is, you want to go right then as far left as you possibly can.

Case 2 - The successor has to be above the node and we have to traverse to its parent node until it is no longer the .right property of the parent node

iterative approach - while loop for both cases above.

recursive approach - pass in as var and recursively call both loops. 1 - checks if .right exists, then recursive call. 2 - traverse its parent until that node is no loger the parent node.

*/

//iterative approach
var inorderSuccessor = function (node) {
	//if .right property exists, it has to be below it. go right and left until you cant anymore
	if (node.right) {
		node = node.right;
		//go left
		while (node.left) {
			node = node.left;
		}
		return node;
	} else {
		//node has to be a parent node
		while (node.parent && node === node.parent.right) {
			node = node.parent;
		}
		//return parent node as per Ex:4. We've hit the point where 15's .right is NOT 6
		return node.parent;
	}
};
/* complexity. H - height of BST

Time - O(H). Worst case is we traverse from bottom of the tree to the top.
Space - O(1). keeping track of 1 var

*/
