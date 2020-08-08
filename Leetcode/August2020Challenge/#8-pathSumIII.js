/*
You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
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
 * @param {number} sum
 * @return {number}
 */

//psuedocode - def DFS approach
//we want to start at the root and traverse down. We want to find # of paths that can get to the sum
//the path can start anywhere so you need to account for each node's additional path as you traverse.
//dfs(root, currSum) - we want to call dfs starting at the root. we check for IF !root ==> return
//dfs will add root val to currSum. Have a check that will see if that currSum === sum. if it does, increment our var count outside of the function.
//Otherwise - call dfs on its .left and .right property. BUT also call dfs on its children starting with a new sum of 0
//return count

var pathSum = function(root, sum) {
  let count = 0;

  const helper = (root, sum) => {
    if(!root) return;
    sum -= root.val;
    if(sum === 0) count++;

    //traverse the children with a reset sum
    helper(root.left, sum);
    helper(root.right, sum);
  }

  const dfs = (root, sum) => {
    if(!root) return;
    helper(root, sum);
    dfs(root.left, sum);
    dfs(root.right, sum);
    return ;
  }

  dfs(root, sum);
  return count;
};
//n - # of nodes in tree
//Time - O(n). Traverse every node
//Space - O(n). recursive calls in call stack since its not a bst. worst case is all nodes are on left or right side.
