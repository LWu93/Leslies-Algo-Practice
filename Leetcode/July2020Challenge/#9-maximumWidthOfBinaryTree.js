/*

Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.

The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.

Example 1:

Input:

           1
         /   \
        3     2
       / \     \
      5   3     9

Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
Example 2:

Input:

          1
         /
        3
       / \
      5   3

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).
Example 3:

Input:

          1
         / \
        3   2
       /
      5

Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
Example 4:

Input:

          1
         / \
        3   2
       /     \
      5       9
     /         \
    6           7
Output: 8
Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).

*/

var widthOfBinaryTree = function(root) {
  if (!root) return 0;
  let maxWidth = 1
  //keep track of the position of the node. Root being 0 and other nodes being * 2 its position
  let queue = [[root, 0]];

  while(queue.length) {
    let level = [];
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [node, pos] = queue.shift();
      if(node.left){
          queue.push([node.left, pos * 2])
      }
      if(node.right){
          queue.push([node.right, pos * 2 + 1])
      }
      level.push([node, pos])
    }

    maxWidth = Math.max(level[level.length-1][1] - level[0][1] + 1, maxWidth) ? Math.max(level[level.length-1][1] - level[0][1] + 1, maxWidth) : 1
  }

  return maxWidth
}
