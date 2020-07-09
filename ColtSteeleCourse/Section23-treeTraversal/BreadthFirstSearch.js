/*
Psudocode for BreadthFirstSearch(BFS) Tree Traversal

- Create a queue and a var, currNode, to store the nodes we are visiting.
- Place the root node in the queue
- We will also need a DS to hold the values we're going to return
- Loop as long as there are elements in the queue
- Shift off the first node in the queue and push the val of that node into our DS holding our values.
  - If currNode has a left property, add it to the queue
  - If currNode has a right property, add it to the queue
- Return DS.
*/

const BFS = (tree) => {
  let res = [];
  let queue = [tree];
  let curr;

  while (queue.length) {
    curr = queue.shift();
    res.push(curr);

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return res;
}
