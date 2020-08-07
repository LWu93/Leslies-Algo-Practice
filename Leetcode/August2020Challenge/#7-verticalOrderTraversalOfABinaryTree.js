/*
Given a binary tree, return the vertical order traversal of its nodes values.
For each node at position (X, Y), its left and right children respectively will be at positions (X-1, Y-1) and (X+1, Y-1).
Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).
If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.
Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.

Example 1:
Input: [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]

Explanation:
Without loss of generality, we can assume the root node is at position (0, 0):
Then, the node with value 9 occurs at position (-1, -1);
The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
The node with value 20 occurs at position (1, -1);
The node with value 7 occurs at position (2, -2).

Example 2:
Input: [1,2,3,4,5,6,7]
Output: [[4],[2],[1,5,6],[3],[7]]

Explanation:
The node with value 5 and the node with value 6 have the same position according to the given scheme.
However, in the report "[1,5,6]", the node value of 5 comes first since 5 is smaller than 6.

Note:
The tree will have between 1 and 1000 nodes.
Each node's value will be between 0 and 1000.
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

//psuedocode
//we need to traverse the entire tree and at each node, keep track of its coord.
//as we traverse, we need to update its internal coord to match .left/.right -> [x-1,y-1] [x+1, y-1]
//store in a arr as [node, [coords]],, note - y axis does not matter
//have a nodesCorrds arr that will store the vals in arrays
//vals inside the arr have to be sorted and returned in order

var verticalTraversal = function(root) {
  const nodesCoords = [];

  dfs(root, 0, 0);

	function dfs(node, x, y) {
    if (node) {
      nodesCoords.push([x, y, node.val]);
      dfs(node.left, x - 1, y - 1); // traverse left
      dfs(node.right, x + 1, y - 1); // traverse right
    }
  }

	// sort by following order:
	//  1. x coordinate so long that they aren't equal
	//  2. y coordinate so long that they aren't equal
	//  3. node val in asc order.
  nodesCoords.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2]);

  const map = new Map();

  for (const [x, y, val] of nodesCoords) {
    if (!map.has(x)) map.set(x, []);
    map.get(x).push(val);
  }

  return [...map.values()];
};
//N - # of nodes in tree.
//Time - O(N log N). dfs -> N, sort -> N log N, loop through map -> N, map.values -> N.
//Space - O(N + log N). log N -> recursive calls in dfs. log N -> .sort space. 3N -> array of nodes and coords. N + log N -> x key in map(?) and val value in map.
