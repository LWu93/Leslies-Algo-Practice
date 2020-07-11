/*
Binary Heap - Very similar to a BST but with some different rules.
Each node in a binary heap can have up to 2 children. There are no relationships to its parent other than the fact that its children nodes must be smaller or greater.
Binary heaps are as compact as possible. All the children of each node have to be filled before moving on and the left is always filled first.

In a MaxBinaryHeap, parent nodes are always larger than children nodes. No guarantees between siblings.
In a MinBinaryHeap, parent nodes are always smaller than the children nodes. No guarantees between siblings.

Binary Heaps are used to implement Priority Queues, which are a VERY commonly used DS. Also used often with graph traversal.


To access the children of a node in a binary heap if it was outlined in an array of n...
For any index of its node, the left child is stored at 2n + 1 and the right child is stored at 2n + 2

To access the parent of a child node in a binary heap if it was outlined in an array of n...
its parent is at index Math.floor((n-1)/2).

*/
