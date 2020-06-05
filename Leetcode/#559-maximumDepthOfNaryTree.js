//Recursive
var maxDepth = function(root) {

    if (root === null) return 0;

    let height = 1;

    for (let child of root.children) {
        let childDepth = 1;
        childDepth += maxDepth(child);
        height = Math.max(childDepth, height);
    };

    return height;
};

//Iterative
var maxDepth = function(root) {

    if (root === null) return 0;

    let stack = [[root, 1]];
    let height = 1;
    //height = 3
    //[5, 6]
    while (stack.length) {
        // console.log("stack", stack, "height", height)
        let [curr, localDepth] = stack.pop();

        if (curr !== null) {
            height = Math.max(height, localDepth)
            for (const child of curr.children) {
                stack.push([child, localDepth + 1])
            }
        }
    }

    return height;
};
