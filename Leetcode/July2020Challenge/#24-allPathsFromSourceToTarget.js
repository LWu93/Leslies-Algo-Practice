/*
Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
Input: [[1,2], [3], [3], []]
Output: [[0,1,3],[0,2,3]]

Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3

There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Note:
The number of nodes in the graph will be in the range [2, 15].
You can print different paths in any order, but you should keep the order of nodes inside one path.
*/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

//Psuedocode
//we're given a directed graph already with idx representing the nodes, so we have an adjList already
//Loop through graph provided and DFS through each node(the idx of graph).
//DFS will take in (graph,node,currPath, target).
//node is what node we're currently at. currPath --> empty arr at first. target --> graph.length-1
//our basecase or check is when the currPath[currPath.length-1] === target. push currPath into res arr
//return res arr
var allPathsSourceTarget = function(graph) {
  let res = [];

  dfs(0,graph,[],graph.length-1)

  function dfs (node,graph,currPath,target) {
    currPath.push(node)
    //Base Case
    if (currPath[currPath.length-1] == target) {
      res.push(currPath)
      return
    }

    let neighbors = graph[node]
    for (const child of neighbors) {
      //pruning optimization - instead of making a copy, we can push the child node in here and then pop it off after we've done our DFS check on this specific iteration #BACKTRACKING
      let copyOfPaths = [...currPath]
      dfs(child,graph,copyOfPaths,target)
    }
  }

  return res;
};
//N - number of vertices.
//Time - O(2^N * N). Each path could have up to N-2 connecting nodes,, it takes O(N) time to build each path in the DFS. it's also an additional O(N) because you have to loop through each child in neighbors.
//Space - O(2^N * N). Similar to the time complexity above. We're creating a new additional path every single time we hit a child and that continues going. There's also the recursive calls on the callstack which add an additional O(N) but its simplified down to just O(N).
