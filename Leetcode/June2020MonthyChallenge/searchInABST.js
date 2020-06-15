var searchBST = function(root, val) {
    if (root === null) return null;
    if (root.val === val) return root;

    let left = searchBST(root.left, val)
    let right = searchBST(root.right, val)

    if (left) return left;
    if (right) return right;

    return null
};

var searchBST = function(root, val) {
    if (root === null) return null;
    if (root.val === val) return root;

    //left
    if (root.val > val) {
        return searchBST(root.left, val)
    } else {
        return searchBST(root.right, val)
    }
};

var searchBST = function(root, val) {
    if (root === null) return null;
    if (root.val === val) return root;

    let stack = [root];

    while (stack.length) {
        let curr = stack.pop()

        if (curr.val === val) return curr;

        if (curr.left)stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }

    return null
};
