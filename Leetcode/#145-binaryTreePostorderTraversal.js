var postorderTraversal = function(root) {
  if (root === null) return [];

  let stack = [root];
  let ans = [];
    //stack = [4, 5]
    // ans = [4,5,2,3,1]
    //[1,2,3,4,5]
    //.     1
    //.    / \
    //.   2   3
    //.  / \
    //. 4   5

  while(stack.length) {
      let node = stack.pop(); //1

      if (node.left) {
          stack.push(node.left)
      }
      if (node.right) {
          stack.push(node.right)
      }

      ans.push(node.val);
      // console.log("stack", stack)
  }

  return ans.reverse();
};
