var kthSmallest = function(root, k) {
    let arr = [];
    let stack = [];
    let curr = root;

    while (curr !== null || stack.length) {
        while (curr !== null) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop();
        arr.push(curr.val)
        curr = curr.right
    }
    // console.log(arr)
    return arr[k-1]
};
