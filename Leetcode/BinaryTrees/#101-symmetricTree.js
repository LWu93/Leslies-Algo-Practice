/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3


But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3


Follow up: Solve it both recursively and iteratively.
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
 * @return {boolean}
 */
//psuedocode - check if one side is a mirror of the other

//Recursively - create a hf checkIfMirror(root1, root2) that checks if both roots passed in are equal
//when you recursively call the .left and .right properties, you have to remember to flip it
//Check the truthyness of the root.val as well as the returned children property
//If any one returns false, its NOT a mirror meaning we're using &&
var isSymmetric = function(root) {
  if (!root) return true;
  if (!root.left && !root.right) return true;

  const isMirror = (root1, root2) => {
    if (root1 === null && root2 === null) return true; //if both are empty, they match.
    if (!root1 || !root2) return false; //if 1 of them are null, return false.
    if (root1.val !== root2.val) return false;

    // order from outwards in
    return isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left)
  }

  return isMirror(root.left, root.right)
};
//N - # of nodes in tree
//Time - O(N). Traversing every node once
//Space - O(N). recursive calls are bound by height of tree. Worst case is a unbalanced tree with N calls.

//Iteratively - Traverse the tree in level order traversal
//Check bounds of root and cases if its just the root val
//Same checks as recursive calls but we need to track the adj nodes with a queue
//While there are nodes in our queue, traverse the level and return false if they dont match
//keep popping off of queue and doing the 3 conditional checks
//if you hit the end, its a symmetric tree

var isSymmetric = function(root) {
  if (!root) return true;
  if (!root.left && !root.right) return true;

  let queue = [root.left, root.right];

  while (queue.length) {
    let firstNode = queue.shift()
    let secondNode = queue.shift()

    if (firstNode === null && secondNode === null) continue;
    if (!firstNode || !secondNode) return false;
    if (firstNode.val !== secondNode.val) return false;

    //order from outwards in
    queue.push(firstNode.left)
    queue.push(secondNode.right)
    queue.push(firstNode.right)
    queue.push(secondNode.left)
  }

  return true;
};
//N - # of nodes in tree
//Time - O(N). Traversing every node once
//Space - O(N). space in our queue. Avg case, it should just be # of children in each level. Worst case is if its a unbalanced tree.
