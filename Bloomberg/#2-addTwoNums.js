 //Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//psuedocode
//while loop through both ll and add curr vals. initialize var carry to track any overflow
//if there is a carry, we add that to the next iteration and reset carry.
//at the same time, we want to build our new ll and build it backwards with curr = sum.
//we will use l1 and l2 as the 2 pointers. initiate a dummyHead, track new node with curr
//Keep in mind the the edge case where one ll is longer than the other.

var addTwoNumbers = function(l1, l2) {
  let carry = 0, dummyHead = new ListNode(0), curr = dummyHead;

  while (l1 !== null || l2 !== null) {
    let newNum = (l1.val || 0) + (l2.val || 0) + carry;

    //reset carry
    carry = 0;

    //if sums overflow
    if (newNum > 9) {
      carry = 1
      newNum = newNum % 10
    }

    //reset l1, l2, and curr
    curr.next = new ListNode(newNum);
    curr = curr.next;
    l1 = l1.next
    l2 = l2.next
  }

  if (carry) curr.next = new ListNode(1)
  return dummyHead.next;
};
//n - # of l1 nodes. m - # of l2 nodes
//Time - O(Math.max(n,m)).
//Space - O(Math.max(n,m)).
