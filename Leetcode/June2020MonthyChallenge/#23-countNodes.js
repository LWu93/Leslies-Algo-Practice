var countNodes = function(root) {
    let count = 0;
    if (root === null) return count;
    let queue = [root]

    while (queue.length) {
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let curr = queue.shift();
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        count += length
    }

    return count
};
