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

  insert(val) {
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

  remove() {
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
}
