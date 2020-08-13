/* PROMPT

You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

Example 1:
Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]

Explanation:
The multilevel linked list in the input is as follows: *Image on LC
After flattening the multilevel linked list it becomes: *Image on LC

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


Constraints:

Number of Nodes will not exceed 1000.
1 <= Node.val <= 10^5
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
//there will potentially be multi LL that we need to account for and we want repeatedly do logic. Sounds like we can use recursion.
//have a pointer for curr. You will want to while loop thru till !== null.
//at every curr, you want to check if they have children.
//If they do, you want to recursively call flatten and pass in .child which is a LL. it will also return its LL
//The returned LL will have to be attached to curr.next.
//You also need a pointer before reassigning curr.next to have a reference to the next node in the original ll.
//check if there is a nextPointer. Reassign curr = curr.next. return head
//Constraints - there will be at least 1 node.

var flatten = function(head) {
  if (!head) return head;

  let curr = head;

  while (curr) {
    if (curr.child) {
      //we need a ptr to ref node 4 via the example
      let nextNodePtr = curr.next;

      curr.next = flatten(curr.child);
      curr.next.prev = curr;
      curr.child = null;

      //loop to get to the end of curr which now has our nested ll attached as .next
      while (curr.next !== null) {
        curr = curr.next
      }

      //set curr.next to the ref of node 4
      curr.next = nextNodePtr;
      //check if there is nextNode even exists. Using the ex: set node 4 .prev to reference node 10.
      if (nextNodePtr) curr.next.prev = curr;
    }

    curr = curr.next
  }

  return head;
}
// n - # of nodes in the entire Doubly LL. k - number of nested ll's.
//Time - O(n). Traversing the entire LL but also recursively.
//Space - O(k). Space in the call stack as re recursively call flatten.
