//Abstract DS
//You can implement a queue in multiple ways
//Key concept - to store data in a FIFO method. First In, First Out

//Very common to use a array as a stack
const queue = [];

//we can use the built in arr method .push to mimic adding onto the queue
queue.push("google")
queue.push("instagram")
queue.push("youtube")
//queue --> ["google", "instagram", "youtube"]

//we can use the built in arr method .shift to mimic removing the last item on the queue. First Out.
let lastEle = queue.shift() //returns "google". queue --> ["instagram", "youtube"]
lastEle = queue.shift() //returns "instagram". queue --> ["youtube"]

//queue with linkedList implementation

class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    return this.size++;
  }

  dequeue() {
    if (!this.first) return null;

    const temp = this.first;
    if (this.size === 1) {
      this.last = null
    }
    //same thing
    // if (this.first === this.last) {
    //   this.last = null
    // }

    this.first = this.first.next;
    this.size--;
    return temp;
  }
}

/*
Time Complexity

Insertion - O(1)
Removal - O(1)
Searching - O(n)
Accessing - O(n)
*/
