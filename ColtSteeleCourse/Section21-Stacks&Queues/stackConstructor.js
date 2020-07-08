//Abstract DS
//You can implement a stack in multiple ways
//Key concept - to store data in a LIFO method. Last In, First Out

//Very common to use a array as a stack
const stack = [];

//we can use the built in arr method .push to mimic adding onto the call stack
stack.push("google")
stack.push("instagram")
stack.push("youtube")
//stack --> ["google", "instagram", "youtube"]

//we can use the built in arr method .pop to mimic removing the last item on the stack
let lastEle = stack.pop() //returns "youtube". stack --> ["google", "instagram"]
lastEle = stack.pop() //returns "instagram". stack --> ["google"]

//Stack with linkedList implementation

class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return this.size++
  }

  pop() {
    if (!this.length) return null;

    const temp = this.first;
    if (this.size === 1) this.last = null;
    this.first = this.first.next;

    this.size--;
    return temp.val
  }
}

/*
Time Complexity

Insertion - O(1)
Removal - O(1)
Searching - O(n)
Accessing - O(n)
*/
