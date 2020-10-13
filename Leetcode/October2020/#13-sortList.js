/*
Given the head of a linked list, return the list after sorting it in ascending order.

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

Example 1:
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105

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
 * @return {ListNode}
 */

/* psuedocode

Brute Force
    traverse the ll, store nodes in an array.
    sort array.
    rebuild the ll frm the array in order.
Time - O (N log N), Space - O(N)

Optimal approach - sorting in-place using merge sort and merge LL
create a mergeLL HF

use the tortoise hare approach to split the LL in half so you can merge the linked list
Once the LL is split, you can merge from the head and the second half.

*/

var sortList = function (head) {
	if (!head || !head.next) return head;

	//tortoise hare
	let fast = head,
		slow = head;
	while (fast.next && fast.next.next) {
		fast = fast.next.next;
		slow = slow.next;
	}

	let mid = slow.next;
	slow.next = null;

	return mergeLL(sortList(head), sortList(mid));
};

//mergeLL HF
const mergeLL = (l1, l2) => {
	let dummyHead = new ListNode(0);
	let curr = dummyHead;

	while (l1 && l2) {
		if (l1.val < l2.val) {
			curr.next = l1;
			l1 = l1.next;
		} else {
			curr.next = l2;
			l2 = l2.next;
		}
		curr = curr.next;
	}

	//leftover nodes
	if (l1) curr.next = l1;
	if (l2) curr.next = l2;

	return dummyHead.next;
};

/* complexity. N - # of Nodes in LL

Time - O(N log N). Looping through LL. Sorting and recursive calls.
Space - O(log N). Recursive space in callstack.

*/
