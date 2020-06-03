var invertTree = function(root) {
  if (root === null) return root;

  let q = [root];

  while (q.length) {
      let curr = q.shift();
      [curr.left, curr.right] = [curr.right, curr.left]

      if (curr.left !== null) q.push(curr.left);
      if (curr.right !== null) q.push(curr.right);

  }
  return root;
};

