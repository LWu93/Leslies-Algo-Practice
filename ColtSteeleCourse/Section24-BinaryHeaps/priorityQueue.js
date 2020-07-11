/*
Priority Queue - where each elements has a priority. Elements with a higher priority go before lower priorities.

Example: A ER where someone has a severe injury will have a higher prio vs someone with a sprained ankle.
There are different ways to approach a priority queue. Generally, you store your data in a sort of list or array.
Use a min/max heap to implement a priority queue. Based on the determined priority, they will be inserted into a Heap and ordered afterwards.
Everytime we add/remove from the heap, we will do a operation of O(log n) complexity vs looking through the whole queue which is O(n).

*/

/*
Psudocode for creating a priority queue

- Write a Min Binary Heap - lower number means higher priority.
- Each node has a val and a priority. Use the priority to build the heap.
- Enqueue method accepts a val and a prio. Make a new Node and put it in its appropriate place in the MBH
- Dequeue method will remove the root ele and rearrange heap using priority. return root node.

Take the constructor code from MBH. update node to reflect a val and priority. Update checks to look at the priority, not the val.
*/

class Node {
  constructor(val, priority) {
    val,
    priority
  }
}

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
    const end = this.values.pop;
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
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
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

//Time Complexity - insertion/removal is O(log n). Searching would be O(n) but you dont usually use a PQ for searching.
//Space Complexity - O(n). n - number of nodes.
