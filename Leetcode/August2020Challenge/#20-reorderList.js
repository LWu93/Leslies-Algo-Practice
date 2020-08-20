/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:
Given 1->2->3->4, reorder it to 1->4->2->3.

Example 2:
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

//psuedocode
//this is essentially reverse a linked list and merge the end of the reversed to the beginning
//Get the midpoint of the linkedlist. We can use the tortoise and the hare method to do so
//Reverse the second half of the linkedList
//Merge the 2 linkedlists together
var reorderList = function(head) {
  if (head === null) return;
  let dummy = new ListNode(0);
  dummy.next = head;

  //fast --> slow
  let slow = head
  let fast = head
  while (fast !== null && fast.next !== null){
    slow = slow.next
    fast = fast.next.next
  }

  // reverse second half
  let curr = slow
  let prev = null
  while (curr !== null){
    let nextNode = curr.next
    curr.next = prev
    prev = curr
    curr = nextNode
  }

  // merge ll
  let l1 = dummy.next
  let l2 = prev
  while (l2.next !== null){
    let next1 = l1.next
    l1.next = l2
    l1 = next1

    let next2 = l2.next
    l2.next = l1
    l2 = next2
  }

  return dummy.next
};
//N - # of nodes in LL
//Time - O(3n) ==> O(n). 3 loops, fast/slow, reverse, merge.
//Space - O(1). merging in-place
