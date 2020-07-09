class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let curr = this.root;

      while (true) {
        //check to see if the val already exists in the Tree. We can either keep count of it or just return false.
        if (val === curr.val) return false;
        if (val < curr.val) {
          if (curr.left === null) {
            curr.left = newNode;
            return this;
          }
          curr = curr.left;
        } else {
          if (curr.right === null) {
            curr.right = newNode;
            return this;
          }
          curr = curr.right;
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return false;

    let curr = this.root;
    let found = false;

    while (!found && curr) {
      if (val < curr.val) {
        curr = curr.left
      } else if (val > curr.val) {
        curr = curr.right
      } else {
        found = true; //not necessary but this just means we found the node
        return curr; //return the node itself
      }
    }

    return false; //return false if curr never hits the last else statement
  }
}

//Time Complexity
//insertion - O(log n)
//searching - O(log n)
