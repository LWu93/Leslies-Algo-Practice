/*
Given a directed acyclic graph of N nodes. Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
Input: [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Constraints:

The number of nodes in the graph will be in the range [2, 15].
You can print different paths in any order, but you should keep the order of nodes inside one path.
*/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

/* psuedocode - second approach
    its already a DAG. We know that each idx is a node and the ele inside of the arr graph provided is the edges.
    let paths = [] to store all possible paths.
    since we have access to all the edges, we are essentially provided a adjList
    DFS through each node and go through its neighbors to see how many times we get to the end.

    function DFS (node, endPoint) {
    base case - when we hit endPoint aka the last idx/node
        loop through neighbors and call dfs on each node
    }

    return paths
*/

var allPathsSourceTarget = function(graph) {
  if (!graph.length) return 0;

  let paths = [], endPoint = graph.length-1;

  function DFS(node, currPath) {
    //basecase - the last ele is the same as the endPoint
    if (currPath[currPath.length-1] === endPoint) {
      paths.push(currPath)
    };

    let neighbors = graph[node];
    for (let i = 0; i < neighbors.length; i++) {
      //push neighbor into the newPath.. then recursively call from that path. then take out that neighbor.
      let currNeighbor = neighbors[i];
      currPath.push(currNeighbor)
      let newPath = [...currPath]
      DFS(currNeighbor, newPath)
      currPath.pop()
    }
  }

  DFS(0, [0])
  return paths;
};

/* Complexity. N - Graph.length OR # of Nodes
Time - O(2^N*N). Worst case - we will start from 0 and go to the end of the graph. That will include the initial loop to build the graph for O(N) time and then we DFS through its neighbors. If every neighbor has a path that goes to the end of the path, that creates 2^N * N time complexity.

Space - O(2^N*N). Similarly to above, we have to account for the recursive DFS calls, Worstcase - O(N). Worst case for space in paths - we will be filling out paths array with nested paths and each node can have a path to the target or endPoint.

*/
