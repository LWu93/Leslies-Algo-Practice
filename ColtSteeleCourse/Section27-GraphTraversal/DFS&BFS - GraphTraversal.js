/*
Recursive DFS Graph Traversal Psudocode

function accepts a starting vertex
create a results arr, list or any DS to hold your data.
create a DS to store visited vertices
create a recursive HF that takes in a vertex
  base case - if vertex is empty, return.
  add vertex to results list or any DS if it fits your problems criteria.
  mark vertex as visited
    loop through neighbors {
      if (neighbors are not visited) DFS(neighbor)
    }
call recursive HF with starting vertex
return results DS
*/

/*
Iterative DFS Graph Traversal Psudocode

function accepts a starting vertex
create a results arr, list or any DS to hold your data.
create a DS to track visited vertices.
create a stack to keep track of vertices to traverse.
add the starting vertex to the stack and mark as visited.
 while (stack.length) {
  pop the next vertex off the stack.
  if (vertex has not been visited) {
    mark as visited
    add to the results arr
    push neighbors into the stack
  }
 }
return results DS
*/

/*
Iterative BFS Graph Traversal Psudocode

function accepts a starting vertex
create a results arr, list or any DS to hold your data.
create a DS to track visited vertices.
create a queue to keep track of vertices to traverse.
add the starting vertex to the queue and mark as visited.
 while (queue.length) {
  shift the first vertex off the queue.
  if (vertex has not been visited) {
    mark as visited
    add to the results arr
    push neighbors into the queue if they have not been visited
  }
 }
return results DS
*/

//Took graph constructor from prior Section
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    //you can add conditionals to check if they're valid keys
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    //you can add conditionals to check if they're valid keys
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(currVertex => currVertex !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(currVertex => currVertex !== vertex1)
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  DFSRecursively(start) {
    let result = [];
    let visited = {};
    const adjList = this.adjacencyList; //in your regular functions, you will most likely have access to a created adjList

    function DFS(vertex) {
      if (!vertex) return;

      visited[vertex] = true; //mark as visited
      result.push(vertex); //push vertex into your results arr. Also where you would potentially check if this satisfies your questions requirements.

      adjList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) DFS(neighbor) //if you haven't visited this vertex yet, recursively call DFS
      })

    }

    DFS(start); //call recursively beginning with the start vertex.
    return result;
  }

  DFSIteratively(start) {
    const stack = [start];
    const result = [];
    const visited = {};

    visited[start] = true;

    while (stack.length) {
      let currVertex = stack.pop();
      result.push(currVertex);

      this.adjacencyList[currVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      })
    }

    return result;
  }

  BFS(start) {
    const queue = [start];
    const result = [];
    let visited = {};
    visited[start] = true;

    while (queue.length) {
      let currVertex = queue.shift();
      result.push(currVertex);

      this.adjacencyList[currVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }

    return result;
  }
}

/*
|V| - # of vertices
|E| - # of edges

Time Complexity of DFS and BFS Graph Traversal generally equate to the same value.
Undirected Graph - O(V) + O(2E) ==> O(V + E).
Directed Graph - O(V) + O(E) ==> O(V + E).
V - you traverse each node once. In a undirected graph, you will potentially be traversing the same node twice.
E - Number of edges, accounted for as you loop through its neighbors.
*/
