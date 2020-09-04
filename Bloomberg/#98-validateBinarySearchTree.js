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

/* psuedocode

First approach with recursion

basecase - if !root return true;

check if .left and .right properties exist and if left < curr and right > curr
take both values and return the && checks of both

approach with stack - use inoreder traversal.

- traverse the entire root to the bottom most leftnode first.
- Then go back up the left nodes to find the first right nodes. continue until you get back to the top.
- once you get to the top, curr will be null, then you want to traverse right.
- both steps above use the fact that curr will be null when we cant go left anymore, therefore we can pop the first ele off the stack
- ele popped off stack is where we can begin to traverse right.
- if we hit the top of the root again, all .left and .right properties have been hit from the left trees.
- do the same on the right side.
*/

//Recursive approach
// var isValidBST = function(root, min = null, max = null) {
//   if (!root) return true;
//   if (min && root.val <= min.val) return false;
//   if (max && root.val >= max.val) return false;

//   //traverse left and right side of the root by using the min/max values from the root
//   return isValidBST(root.left, min, root) && isValidBST(root.right, root, max)
// };

/* complexity. n - # of nodes in tree. h - height of tree
Time - O(n). Traversing every node
Space - O(h). Worst case is we get down to a leaf. If the tree is unbalanced, it should return false and not traverse down the entire tree.
*/

//Iterative approach
var isValidBST = function(root) {
  const stack = [];
  let prev = -Infinity, curr = root;

  //while curr exists or while there is still nodes in our stack to process.
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    //once we stopped traversing left, we hit the first bottom right node.
    if (prev >= curr.val) {
      return false;
    }
    prev = curr.val;
    curr = curr.right;
  }
  return true;
};

/* complexity. n - # of nodes in tree. h - height of tree
Time - O(n). Traversing every node
Space - O(n). Worst case is we store the entire tree in our stack before popping anything off.
*/
