/*

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7

return its bottom-up level order traversal as:

[
  [15,7],
  [9,20],
  [3]
]

*/

//Psudocode
//Traverse tree BFS and implement a queue
//loop through its children and push vals into arr.
//If those nodes have children, push into queue.
//push nodeVals array into the res arr. Return res reversed.

//Iterative
var levelOrderBottom = function(root) {
    let res = []
    if (!root) return res;
    let q = [root]

    while (q.length) {
        let length = q.length
        let nodeVals = []

        for (let i = 0; i < length; i++) {
            let curr = q.shift()
            nodeVals.push(curr.val)
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }

        res.push(nodeVals)
    }

    return res.reverse()
};

//Time Complexity - O(N). N - number of nodes in tree and we're looping through each node in the queue.
//The nested for loop and shift() will be constant in the big picture.
//Space Complexity - O(N). We will be pushing its nodes into a new arr.
