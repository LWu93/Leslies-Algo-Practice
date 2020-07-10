/*
You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

Example 1:

Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]

// *example image on LC*

Example 2:

Input: head = [1,2,null,3]
Output: [1,3,2]
Explanation:

The input multilevel linked list is as follows:

  1---2---NULL
  |
  3---NULL
Example 3:

Input: head = []
Output: []


How multilevel linked list is represented in test case:

We use the multilevel linked list from Example 1 above:

 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL

The serialization of each level is as follows:

[1,2,3,4,5,6,null]
[7,8,9,10,null]
[11,12,null]
To serialize all levels together we will add nulls in each level to signify no node connects to the upper node of the previous level. The serialization becomes:

[1,2,3,4,5,6,null]
[null,null,7,8,9,10,null]
[null,11,12,null]
Merging the serialization of each level and removing trailing nulls we obtain:

[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]

*/

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

//Psudocode
//there will potentially be multi LL that we need to account for. Use recursion or while loop
//have 2(?) pointers for curr and next. You will want to while loop thru till !== null.
//at every curr, you want to check if they have children.
//If they do, you want to recursively call flatten and pass in .child node. it will return the LL
//The returned LL will have to be attached to curr.next.
//You also need a pointer before reassigning curr.next to get the next node in the original ll.
//check if there is a nextPointer. Reassign curr = curr.next. return head
//Constraints - there will be at least 1 node.

var flatten = function(head) {
  if (head === null) return null
  let curr = head;

  while (curr) {
    if (curr.child) {
      //keep a pointer for the the node before attaching the MultiLevel LL
      let nextPtr = curr.next;
      //recursively get the bottom level LL. Reassign pointers.
      curr.next = flatten(curr.child);
      curr.next.prev = curr;
      curr.child = null; //set it to null to sever connection.

      //get to the end of our bottom level LL
      while(curr.next !== null) {
          curr = curr.next
      }

      //assign curr.next to the pointer before attaching MultiLevel LL
      curr.next = nextPtr;

      //if there is a next Node in the LL, you need to set it's prev to the curr node.
      if (nextPtr) nextPtr.prev = curr;
    }
    curr = curr.next;
  }

  return head
};

//ITERATIVE APPROACH

// => need a data structure to keep track of nodes. A Stack
// traverse LL normally while cur != null
// check if .child exists
// -> push cur.next into stack so it's at the top of the stack to be retrieved later
// **-> set pointers cur -> child, child.p -> cur, cur.child -> null
// -> if stack has anything, pop it, set cur.next -> popped, popped.prev -> cur
// traverse along ll

var flatten = function(head) {
  if (head === null) return null
  let cur = head;
  let stack = [];

  while (cur != null){
    if (cur.child != null){
      if (cur.next != null) stack.push(cur.next)
      cur.next = cur.child
      cur.child.prev = cur
      cur.child = null
    }

    if (cur.next == null && stack.length){
      let nextNode = stack.pop()
      cur.next = nextNode
      nextNode.prev = cur
    }
    cur = cur.next
  }
  return head
}
