/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//psuedocode - without reversing the lls but adding more space via arrays
//loop through l1 and l2 and add their node.val's to their respective arr
//since they will potentially have different lengths, we can loop backwards from the arrays and create the linked lists from the sums of the arr.
//have a var carry to account for overflow
//since they want the nums flipped, we need to create a reversed ll
//var curr, next, prev to make the reversed ll
//return prev
var addTwoNumbers = function(l1, l2) {
  if (l1 == null || l2 == null) return l1 || l2; //does this work?lol

  let arr1 = [], arr2 = [], carry = 0, curr, prev = null, next;
  while (l1 !== null || l2 !== null) {
    if (l1) {
      arr1.push(l1.val)
      l1 = l1.next
    }
    if (l2) {
      arr2.push(l2.val)
      l2 = l2.next
    }
  }

  //loop backwards with the arr
  while (arr1.length || arr2.length || carry) {
    let sum = (arr1.pop() || 0) + (arr2.pop() || 0) + carry;
    carry = 0;

    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    }

    //reverse a ll
    curr = new ListNode(sum);
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  //Subtle optimization to simply check if carry exists in our while loop.
  // if (carry) {
  //     curr = new ListNode(1);
  //     curr.next = prev;
  //     prev = curr
  // }

  return prev;
};
//n - l1.length. m - l2.length
//Time - O(max(n,m)). 2 while loops through the longest lengths of the 2 lls + potential 1 for carry.
//Space - O(max(n,m)). Creating a new linked list but also storing the eles in an arr.
