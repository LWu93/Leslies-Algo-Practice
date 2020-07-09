/*
Psudocode for DFS(DFS) PreOrder Tree Traversal - Recursive

- Create a DS(generally an arr) called res to store the nodes we are visiting.
- Have a var, curr, which will store the root of the BST
- Write a helper function, traverse, that takes in a node as an arg.
  - push curr.val(root.val will be the FIRST val) into our DS.
  - if the node has a left property, recursively call HF on the left node
  - if the node has a right property, recursively call HF on the right node
- invoke the HF with the root and it will recursively call its children.
- return res.
*/

const DFSPreOrder = (tree) => {
  const res = [];
  let curr = tree;
  //You dont need the curr var but it may be helpful to store as a var in diff approaches to tree traversal

  const traverse = (node) => {
    res.push(node)
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(curr);
  return res;
}
//Use case - used to export a tree structure so that it is easily reconstructed or copied.

/*
Psudocode for DFS(DFS) PostOrder Tree Traversal - Recursive

- Create a DS(generally an arr) called res to store the nodes we are visiting.
- Have a var, curr, which will store the root of the BST
- Write a helper function, traverse, that takes in a node as an arg.
  - if the node has a left property, recursively call HF on the left node
  - if the node has a right property, recursively call HF on the right node
- push curr.val(root.val will be the LAST val) into our DS.
- invoke the HF with the root and it will recursively call its children.
- return res.
*/

const DFSPostOrder = (tree) => {
  const res = [];

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    res.push(node)
  }

  traverse(tree);
  return res;
}
//Use case -

/*
Psudocode for DFS(DFS) InOrder Tree Traversal - Recursive

- Create a DS(generally an arr) called res to store the nodes we are visiting.
- Have a var, curr, which will store the root of the BST
- Write a helper function, traverse, that takes in a node as an arg.
  - if the node has a left property, recursively call HF on the left node
- push curr.val(root.val will be the MIDDLE val) into our DS.
  - if the node has a right property, recursively call HF on the right node
- invoke the HF with the root and it will recursively call its children.
- return res.
*/

const DFSInOrder = (tree) => {
  const res = [];

  const traverse = (node) => {
    if (node.left) traverse(node.left);
    res.push(node)
    if (node.right) traverse(node.right);
  }

  traverse(tree);
  return res;
}
//Use case - Commonly used with BSTs. You can retrieve all nodes in ascending order.

//Time Complexity - BFS and DFS are essentially the same. Traversing every node once.
//Space Complexity - BFS generally takes up more space than but it depends on the tree setup and its max height/width.
