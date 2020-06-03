var levelOrder = function(root) {
    let arr = [];
    if (root === null) return arr;

    let q = [[root]];

    //[1,2,3,4,5]
    //q - []
    //arr - []
    while (q.length) {
        let currValues = []; //[]
        let curr = q.shift();//[1]
        let level = [];

        for (let i = 0; i < curr.length; i++) {
            currValues.push(curr[i].val)
            if (curr[i].left) {
                level.push(curr[i].left)
            };

            if (curr[i].right) {
                level.push(curr[i].right)
            };
        }
        if (level.length > 0) q.push(level)
        if (currValues.length > 0) arr.push(currValues)

    }

    return arr;
};
