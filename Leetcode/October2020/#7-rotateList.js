/*
Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:
Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL

Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL

Example 2:
Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL

Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL

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
 * @param {number} k
 * @return {ListNode}
 */

/* psuedocode.

brute force - loop to the end of the LL, keep a pointer at the 2nd to last tail. For k in list, simply swap tail to newHead, newHead.next = head, and 2ndToLastTail is now the head.

Using the approach above, we know that we can cut out some repetitions with k % LL's length.The returned result allows us to cut out atleast 1 full rotation or more. Ex: if list was 3 nodes long and k was 7, we would rotate back to the front twice and move 1 node down. Keep track of our dummyHead and count how many nodes we've processed.

*/

var rotateRight = function (head, k) {
	//edgecase - if there's no list or only 1, we can't rotate
	if (head === null || head.next === null) {
		return head;
	}

	//get the length of the head, 1 ptr to traverse entire LL, another ptr to rotate
	let length = 1,
		traverse = head,
		rotateHead = head;

	while (traverse.next !== null) {
		traverse = traverse.next;
		length++;
	}

	//update length to be # of rotations AFTER 1 full rotation hence length-k.
	//Then % by length -1 to account for the first node you start at but dont rotate.
	length = length - (k % length) - 1;

	//rotate
	while (length > 0) {
		rotateHead = rotateHead.next;
		length--;
	}

	traverse.next = head;
	let dummyHead = rotateHead.next;
	rotateHead.next = null;
	return dummyHead;
};

/* complexity. N - Number of nodes in LL
Time - O(N). 1 loop through entire LL and worstcase, 1 additional N-1 loop to rotate. Then swap in-place.
Space - O(1). Only using ptrs.
*/
