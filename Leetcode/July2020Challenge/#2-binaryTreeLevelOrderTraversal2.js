
//Iterative
var levelOrderBottom = function(root) {
    let arr = []
    if (!root) return arr;
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

        arr.push(nodeVals)
    }

    return arr.reverse()
};

//Time Complexity - O(N). N - number of nodes in tree and we're looping through each node in the queue.
//The nested for loop and shift() will be constant in the big picture.
//Space Complexity - O(N). We will be pushing its nodes into a new arr.
