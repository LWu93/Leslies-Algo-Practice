/*
Dijkstras Algorithm - Finds the shortest/fastest path between 2 vertices on a graph.

Graph Traversal uses
- GPS. Finding fastest/shortest route
- Network routing. Finds open shortest path for data
- Biology. Used to model the spread of viruses among humans.
- Airline tickets. Finding the cheapest route to your destination. Potentially adding different factors such as 1 stop or 2, stopping at a specific city, etc, price, etc.

In order to use Dijkstras algo, it needs to be a weighted graph. There needs to be a attribute or value associated with the vertices to find the "shortest" path.

Psudocode
- Start with a "root" node. We write code to pick the neighboring node with the smallest known distance to visit first.
- Implement a BASIC priority queue to sort by priority/smallest distance.
- Once we've moved to that node, we want to look at each of its neighbors.
- For each neighboring node, we calculate the distance by summing the total edges that lead up to the node from the starting node.
- If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.

Step by step approach
- Create a function that accepts a starting and ending vertex
- Create an obj called distances and set each key to be every vertex in the adjList with a value of infinity, except for the starting vertex which is 0.
- Add each vertex with a priority of infinity to the priority queue. The starting vertex will have a priority of 0 so we begin with that vertex.
- Create an obj called previous and have every vertex in the adjList be a key with the value of null.
- While (priority queue has vertices) {
  - dequeue the first vertex from the PQ.
  - IF, that vertex is the same as the ending vertex, check for problems constraints... then return since we've hit our target.
  - ELSE, loop through each neighbor in the adjList of the dequeued vertex
    - Calculate the distance to that vertex from the starting vertex. resultingDistance = ...
    - If resultingDistance is less than what is currently stored in our distances obj, update distances[vertex] = resultingDistance.
    - update previous to contain the vertex
    - queue.push(vertex with the total distance from the start node)
}

*/

//Naive implementation of a PQ using .sort()
// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(val, priority) {
//     this.values.push({val, priority});
//     this.sort();
//   }

//   dequeue() {
//     return this.values.shift();
//   }

//   sort() {
//     this.values.sort((a,b) => a.priority - b.priority)
//   }
// }

class Node {
  constructor(val, priority) {
    val,
    priority
  }
}

//Optimized Implementation of a PQ using a min Binary Heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let currIdx = this.values.length - 1; //start the bubbleUp at the last ele
    const element = this.values[currIdx];

    while (currIdx > 0) {
      let parentIdx = Math.floor((currIdx - 1)/2);
      let parent = this.values[parentIdx];

      //exit loop if the elements priority is less than the parent's
      if (element.priority >= parent.priority) break;

      //swap values with parent and child. reset currIdx
      this.values[parentIdx] = element;
      this.values[currIdx] = parent;
      currIdx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    //Edge Case - when this.values has 1 element left in its arr, it continues to set the 0th idx back to the val we popped off.
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown(); //bubbleDown or heapifyDown
    }

    return min;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx+1;
      let rightChildIdx = 2 * idx+2;
      //declare vars and see if the children are potentially out of bounds or not
      let leftChild, rightChild;
      let swap = null;
      //if leftIdx is in bounds and if leftChild is less than the element, set swap to leftChildIdx
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx
        }
      }
      //if rightChildIdx is in bounds and you have to check for 2 cases,
      //IF swap is null AND rightChild is less than the first element
      //Or if swap is already set to the leftChildIdx AND its greater than the leftChild
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx
        }
      }
      //if there's nothing to swap, break. Otherwise, do the swap.
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      //set idx to the new childIdx which is stored as swap
      idx = swap;
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex]
  }

  addEdge(vertex1, vertex2, weight) {
    //our adjList will be an array of objects where the object stores a node/vertex and a weight property
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }

  Dijkstras(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    //build up distances obj
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity)
      }
      //setting up our previous (or traversed) obj with just 1 for loop through the adjList
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        //find neighboring node
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor]; //keep in mind this is an obj with .weight and .node properties

          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight; //weight = value of edge. See PQ

          //if the new distance is less than the current distance it takes to get to the next node
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate; //updates distances obj of next node to be the shortest path
            previous[nextNode.node] = smallest; //updates previous obj with how we got to the previous node
            nodes.enqueue(nextNode.node, candidate)
          }
        }
      }

    }

    return path.concat(smallest).reverse(); //adds the first vertex to the path array and then returns it.
  }

}

