/*
Remove all elements from a linked list of integers that have a value equal to val.

Example 1:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

Example 2:

Input:  1->1 val = 1
Output: null

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
 * @param {number} val
 * @return {ListNode}
 */

//Psuedocode
//loop through LL - While (curr !== null). Have a prev and curr tracker
//IF the curr.val is === val, we want to disconnect curr and attach prev.next to the curr node
//ELSE reassign pointers to continue traversing a LL
//return head

var removeElements = function(head, val) {
  if (!head) return null;

  let curr = head.next;
  let prev = head;

  while (curr !== null) {
    if (curr.val === val) {
      curr = curr.next;
      prev.next = curr;
    } else {
      curr = curr.next;
      prev = prev.next;
    }
  }

  if (head.val === val) return head.next;
  return head;
};

//Time Complexity: O(n). n - size of LinkedList;
//Space Complexity: O(1). constant reassigning of pointers.
