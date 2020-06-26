var sumNumbers = function(root) {
    //we want to DFS the root and keep track of each individual number as it goes down and hits a leaf
    //set up a helper function to keep track of the individual num
    //have an outside sum to keep track each time your HF hits a leaf
    //return sum

    let sum = 0
    if (root === null) return sum

    const rootToLeaf = (root, num) => {
        if (!root) return

        num += root.val
        //it hit a leaf if theres no more left or right properties
        if (!root.left && !root.right) {
            sum += parseInt(num)
        }

        if (root.left) {
            rootToLeaf(root.left, num)
        }
        if (root.right) {
            rootToLeaf(root.right,num)
        }
    }

    rootToLeaf(root, '')

    return sum;
};
//Time - O(N). You have to traverse every single node
//Space - O(h). h being the height of the tree. The recusive calls that fill up the call stack.
