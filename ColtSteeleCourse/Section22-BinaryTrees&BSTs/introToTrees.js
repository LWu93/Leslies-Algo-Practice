/*
Trees are non linear. There can be many directions.
A tree must have a root which represents the top node in the tree.
Nodes on a tree must point downwards or have a parent/child relationship.
Each node can be considered its own "root" node.
Child - A node directly connected to another node when moving away from the root.
Parent - A node directly above a child. Converse notion of a child node.
Nodes cannot point horizontally to sibling nodes. or diagonally to "aunt/uncle" nodes.
Leaf - a node with no children. The last node in a "branch" of a tree.
Edge - the connection between one node and another. The "arrow" from parent -> child.

Different applications of Trees

HTML DOM - a large object where each individual element is seen as a node or a branch of a tree.
For ex: the <body> can be accessed as a individual node/element and you can from there access its children nodes/branches.

Network routing -

Abstract Syntax Trees -

Artificial Intelligence / Machine Learning - The "root" can be the beginning point of a simulation and the paths/branches are how they learn.
Ex: tictactoe game: If player 1 makes a move, there are 9 potential outcomes or branches where that root can continue.
From there, a goal of the AI would be to find the best possible move in order for player 2 to win. Or vice versa.
Each potential move from either player would create a new branch from the root.

Folders in OS - Folders/Directorys represent what a tree looks like. Theres always a "root" folder.
The root folder can have many branches/children that can either represent a file(in that case it would become a leaf) or another root folder.

*/

/*
Binary Search Trees or BSTs

rules - a tree with a root node and every parent node has at most 2 children.
Every nodes.val to the left of a parent node is always less than(or potentially equal) to the parent nodes.val. It depends on how you structure your tree.
Every node to the right will be greater than the parent nodes.val.

These rules make it much easier to insert and more importantly, SEARCH, through the tree to look for specific values.
*/

