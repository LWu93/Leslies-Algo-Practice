var lowestCommonAncestor = function(root, p, q) {
    //We do DFS through the nodes
    //we check for if the node === p or q
    //we find one of the nodes and then traverse the children
    //if one of the children is the other letter, then we KNOW the LCA is the value we found

    if (root === null || root.val === q.val || root.val === p.val) return root;

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    //if left and right returns a root, then we know the first root will be parent;
    if (left && right) return root;
    //if left returns null, then we know both values of p and q are on the right side and we return the recursive call of the right nodes
    if (left === null) return right;
    //if right returns null, we know both values of p and q are on the left side and we return the recursive call of the left nodes
    if (right === null) return left;

};
