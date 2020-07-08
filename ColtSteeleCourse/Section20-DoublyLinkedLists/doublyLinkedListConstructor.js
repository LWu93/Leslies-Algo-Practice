//Constructing a doubly Linked List

class Node {
  constructor(val) {
    this.val = val,
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      //need to remove the connection of the oldTail to the DLL
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }

  shift() {
    if (this.length === 0) return undefined;

    const oldHead = this.head
    if (this.length === 1) {
      this.head = null;
      this.tail = null
    } else {
      this.head = oldHead.next;
      this.head.prev = null
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newHead = new Node(val);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let count, curr;

    if (idx <= this.length/2) {
      count = 0;
      curr = this.head;
      while (count !== idx) {
        curr = curr.next;
        count++
      }
    } else {
      count = this.length - 1;
      curr = this.tail;

      while (count !== idx) {
        curr = curr.prev;
        count--;
      }
    }
    return curr;
  }

  set(val,idx) {
    let foundNode = this.get(idx);

    if (foundNode) {
      foundNode.val = val;
      return true
    }

    return false;
  }

  insert(val, idx) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    const newNode = new Node(val)
    const beforeNode  = this.get(idx-1); //get the node before where we want to insert
    const afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode; //set pointers of beforeNode to newNode
    newNode.next = afterNode, afterNode.prev = newNode; //set pointers of afterNode to newNode

    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return !!this.shift();
    if (idx === this.length - 1) return !!this.pop();

    const removedNode = this.get(idx);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.next = null, removedNode.prev = null;

    this.length--;
    return removedNode;
  }

}

/*
Time Complexity
adding - O(1)
removing - O(n)
searching - O(n/2) ~~> O(n/2)
accessing - O(n)
*/
