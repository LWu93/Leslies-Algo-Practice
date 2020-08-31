/*
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Note: Time complexity should be O(height of tree).

Example:

root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7

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
 * @param {number} key
 * @return {TreeNode}
 */

/* psuedocode
Since its a valid bst, we can search for the key using Binary Search. with log n time.
we need to be able to keep track of the previous root node as well as the children so that when we delete and replace the child/root nodes, it doesn't invalidate the BST.

Cases to keep in mind,
1 - When you find the key and there are no children, you can simply delete the nodes reference
2 - When they keyNode has a .right property. You want to find the next lowest node
3 - When there are children of the key to delete, you need to adjust the nodes accordingly to satisfy that .left is < than .root and .right is > .root

Have a recursive function traverse the root until you find the key.
Have a HF help you check and handle changing/moving the node values around
*/

//create a predecessor and successor HF to find its respective nodes
var deleteNode = function(root, key) {
  //successor HF - go right once and then go left many times as possible
  function getSuccessor(root) {
    root = root.right;
    while (root.left) {
      root = root.left
    }
    return root.val
  }
  //predecessor HF - go left once and then go right as many times as possible
  function getPredecessor(root) {
    root = root.left;
    while (root.right) {
      root = root.right
    }
    return root.val
  }

  if (!root) return root;

  //traverse root using BS
  if (key > root.val) {
    root.right = deleteNode(root.right, key)
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key)
  } else {
    //the node is === key.
    //We need the cases above to check if the node has children, .left or .right children
    if (!root.left && !root.right) root = null;
    //if the node has a right child
    else if (root.right) {
      root.val = getSuccessor(root)
      root.right = deleteNode(root.right, root.val)//deleting the successorNode
    } else {//we have a .left child. Get its predecessor
      root.val = getPredecessor(root)
      root.left = deleteNode(root.left, root.val)
    }
  }

  return root;
}

/* n - # of nodes. h - height of tree

Time - O(h). We only traverse as far as the the height of the tree itself. If we find the node === key at the top of the tree, we need to find AND delete the successor/predecessor node. Worst case, it could be at the bottom of the tree. Similarly, if the keyNode is at the bottom of the tree, we need to recursively call deleteNode until we get there.

Space - O(h). We only recursively call .left or .right properties. Similarly as the time, we only need to take up as much space in the callstack as we need to traverse to find the nodeToDelete or the successor/predecessor.

*/
