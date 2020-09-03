/*

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

construct Node {
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
Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]

Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

Constraints:
The number of nodes in the given tree is less than 4096.
-1000 <= node.val <= 1000

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

/* psuedocode
since this is a perfect binary tree, we dont need to account for any cases where we go deeper into a tree that doesn't have nodes.

BFS through tree
at every level, we want to have the node point to the next node on its level. In order to do that, we need to make use of our queue and as we shift off, we set it's .next value to the previous node. instead of shifting, we can pop off from each queue what we have and set that to null or its previous nodes

*/

var connect = function(root) {
  //edgecase
  if (!root) return root;

  let q = [root];

  while (q.length) {
    let len = q.length;
    // let prevNode = null;
    // let levelArr = [];

    //push elements into q in order
    for (let i = 0; i < len; i++) {
      let currNode = q.shift();
      // levelArr.push(currNode)

      //Optimize without storing the ele in additional space and looping again. We just look at the first ele in our queue and it will be the .next node
      //We will have at most 2 levels in our queue. the check looks for if we're at the last node in our level.
      if (i < len-1) {
        currNode.next = q[0]
      }

      if (currNode.left) {
          q.push(currNode.left)
      }
      if (currNode.right) {
          q.push(currNode.right)
      }
    }

    // //loop backwards by popping from levelArr to set its .next vals
    // while (levelArr.length) {
    //   let currNode = levelArr.pop();
    //   currNode.next = prevNode
    //   prevNode = currNode
    // }
  }

  return root;
};

/* Complexity, n - # of nodes in tree.
Time - O(n). We traverse and process each node once.
Space - O(n). Worst case is our last level in our perfect BT is N/2. Our queue will occupy at MOST n/2 which will round up to n.
*/


//Optimized Approach saving N space
var connect = function(root) {
  if (!root) return root;

  let leftMostNode = root;

  //start with the root node. There are no next pointers that need to be set up. Move onto next node
  while (leftMostNode.left) {
    //the leftmost root node on that level
    let currHead = leftMostNode

    while (currHead) {
      //make the connection from .left child node to the .right child node
      currHead.left.next = currHead.right

      //IF currHead has a .next, make the connection from the currNode .right child node to the NEXT node's .left child property
      if (currHead.next) {
        currHead.right.next = currHead.next.left
      }
      //traversing the nodes in the level like a linkedList since they have .next properties from being set up above.
      currHead = currHead.next;
    }
    //traverse down the tree diagonally from the left
    leftMostNode = leftMostNode.left
  }

  return root;
}
/* Complexity, n - # of nodes in tree.
Time - O(n). We traverse and process each node once.
Space - O(1). assigning nodes in-place.
*/
