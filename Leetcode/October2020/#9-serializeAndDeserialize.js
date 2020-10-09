/*
Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

Example 1:
Input: root = [2,1,3]
Output: [2,1,3]

Example 2:
Input: root = []
Output: []

Constraints:

The number of nodes in the tree is in the range [0, 104].
0 <= Node.val <= 104
The input tree is guaranteed to be a binary search tree.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
	//you can destruct a BST using pre order.
	let data = [];

	function traverse(node) {
		if (node === null) return;
		data.push(node.val);
		traverse(node.left);
		traverse(node.right);
	}

	traverse(root);
	return data.join(',');
};
//Time - O(N) where N is number of nodes in tree
//Space - O(D) where D is the depth of the tree

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	//in order to put the tree back together, you need to use a queue and recursively call
	if (!data) return null;

	function insert(root, val) {
		if (root === null) return new TreeNode(val);
		if (val < root.val) root.left = insert(root.left, val);
		if (val > root.val) root.right = insert(root.right, val);
		return root;
	}

	let arr = data.split(',');
	let root = new TreeNode(arr[0] * 1);

	for (let i = 1; i < arr.length; i++) {
		let curr = arr[i] * 1;
		insert(root, curr);
	}

	return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
