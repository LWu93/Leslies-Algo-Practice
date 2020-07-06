//Constructing a Singly Linked List

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    //keep track of the newTail which is the node prior to the tail
    //have another node be one node ahead of the new tail so we can server the connection
    let curr = this.head;
    let newTail = curr

    while (curr.next) {
      newTail = curr
      curr = curr.next
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    //if there is no length, the LL is empty
    return curr;
  }
  //shifting this.head to its next node
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    return oldHead;
  }

  addNewHead(val) {
    const newHead = new Node(val);
    //if there's no head, set head and tail to the newHead
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count = 0;
    let curr = this.head

    while (count !== idx) {
      curr = curr.next;
      count++
    }

    return curr
  }

  set(val, idx) {
    let foundNode = this.get(idx)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false;
  }

  insert(val, idx) {
    //if idx is out of bounds
    if (idx < 0 || idx > this.length) return false;
    //if idx is at the end of the ll, call add method to add to the end.
    if (idx === this.length) return !!this.add(val)
    //if there is nothing in the LL, call addNewHead method
    if (idx === 0) return !!this.addNewHead(val)

    //otherwise, create a new node, find where the previous node is with .get method and reassign pointers.
    const newNode = new Node(val)
    const prevNode = this.get(idx-1)
    const temp = prevNode.next

    //reassigning
    prevNode.next = newNode
    newNode.next = temp

    this.length++
    return true
  }

  remove(idx) {
    //if removing, you should be removing from the middle, not the end. Otherwise you just call the pop method.
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop()

    const prevNode = this.get(idx-1);
    const removedNode = prevNode.next;
    //reassign
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode
  }

  reverse() {
    //You need 3 pointers to keep track of your curr, prev, and next nodes
    let currNode = this.head;
    let prevNode = null;
    let nextNode;

    //loop through until currNode gets to the end of the LL
    //you want to reassign the next node to your currNode.next's value so you can continue traversing
    //Next reassign currNode.next to be the prevNode
    while (currNode !== null) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode
    }

    return this.head;
  }

}
/*
Time Complexity
adding - O(1)
removing - O(n)
searching - O(n)
accessing - O(n)
