const postOrder = (root) => {
    //push in the root.val
    //loop through first children and check to see if they have children. push in those children first.
    //return to parent node if there are no children and continue to do DFS.

    // if (root = null) return [];
//     let arr = [];

//     const helper = (node) => {
//         if (node === null) return;
//         for (child of node.children) {
//             helper(child)
//         }
//         arr.push(node.val)
//     }

//     helper(root);

//     return arr;

    //Iteratively
     const result = []

    if (root === null) {
        return result
    }
    const stack = [root]

    while (stack.length) {
        let current = stack.pop()
        if (current === null) continue
        result.push(current.val)
        stack.push(...current.children)
    }

    return result.reverse()
};

//root = [1,null,3,2,4,null,5,6]
postOrder([1,null,3,2,4,null,5,6]) // ==> [5,6,3,2,4,1]

//root = [1,null,3,2,4,null,5,6]
postOrder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14])
// ==> [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
