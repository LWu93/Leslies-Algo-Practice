/*
Given two binary search trees root1 and root2.

Return a list containing all the integers from both trees sorted in ascending order.

Example 1:
Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]

Example 2:
Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
Output: [-10,0,0,1,2,5,7,10]

Example 3:
Input: root1 = [], root2 = [5,1,7,0,2]
Output: [0,1,2,5,7]

Example 4:
Input: root1 = [0,-10,10], root2 = []
Output: [-10,0,10]

Example 5:
Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]

Constraints:
Each tree has at most 5000 nodes.
Each node's value is between [-10^5, 10^5].
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

/* psuedocode

brute force - push all nodes using any tree traversal into a result array and return them sorted. Time - O(n log n).

We can do a little bit better time wise if we do inorder traversal of each tree and then push them into their respective arrays. Since they are BSTs, its given that inorder nodes will produce nodes in asc order. after that, merge the 2 arrays into 1. That will be a worsecase Time - O(4N) or just N, with N being the max

*/
var getAllElements = function (root1, root2) {
	let arr1 = [],
		arr2 = [];

	//Inorder traversal
	function dfs(root, arr) {
		if (!root) return;

		if (root.left) {
			dfs(root.left, arr);
		}
		//we've gotten to the bottomleft most node
		arr.push(root.val);

		if (root.right) {
			dfs(root.right, arr);
		}
	}

	dfs(root1, arr1);
	dfs(root2, arr2);

	//HF to merge sortedArrays
	function mergeSortedArrays(arr1, arr2) {
		let p1 = 0,
			p2 = 0,
			res = [];

		while (p1 < arr1.length && p2 < arr2.length) {
			if (arr1[p1] <= arr2[p2]) {
				res.push(arr1[p1]);
				p1++;
			} else {
				res.push(arr2[p2]);
				p2++;
			}
		}
		while (p1 < arr1.length) {
			res.push(arr1[p1]);
			p1++;
		}
		while (p2 < arr2.length) {
			res.push(arr2[p2]);
			p2++;
		}
		return res;
	}

	return mergeSortedArrays(arr1, arr2);
};
/* Complexity - N - # of nodes in tree. To simplify, lets say N is max # of nodes of both trees

Time - O(4N) ==> O(N). 2 DFS calls which are both N time. Then we are sorting through both arrays which have N nodes in them.

Space - O(2N) ==> O(N). Recursive calls in BST goes as far as its height which is less than N. N is being accounted for via its returned array holding 2N elements.
*/
