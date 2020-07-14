
/*
Building a graph.

- Have a class Graph that has the property adjacencyList = {};

psudocode for addVertex method
- accepts 1 argument, name of the vertex
- Add a key to the adjacencyList with the name of the vertex and set its value to an empty arr

psudocode for addEdge method
- accepts 2 arguments, the first and second vertex to add.
- the function should find the key of vertex1 and push vertex2 into its value arr.
- It should also do the same for vertex2 and push vertex 1 into its value arr.

psudocode for removeEdge method
- accepts 2 arguments, the first and second vertex to remove.
- the function should find the key of vertex1 and remove vertex2 from its arr.
- It should also do the same for vertex2 and remove vertex1 from its arr.

psudocode for removeVertex method
- accepts 1 arguments, the vertex to remove.
- the function should loop as long as there are any vertices inside of the adjList for that vertex.
- Call removeEdge() inside of the vertex we're removing and any values in the adjList for that vertex.

*/

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
}
