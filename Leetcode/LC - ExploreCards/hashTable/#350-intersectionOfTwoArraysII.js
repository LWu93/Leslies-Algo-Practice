/*
Given two arrays, write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//Psuedocode - FU attempt, as if it is sorted
//Use 2 pointers that will follow nums1 and nums2 at the same time.
//Don't need to check for sorter arr since that will be covered in our while loop
//initialize res arr, push in ele every time num1 ptr === num2 ptr

var intersect = function(nums1, nums2) {
  nums1.sort((a,b) => a-b)
  nums2.sort((a,b) => a-b)
  let p1 = 0, p2 = 0, res = [];

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      res.push(nums1[p1])
      p1++
      p2++
    } else if (nums1[p1] < nums2[p2]) {
      p1++
    } else {
      p2++
    }
  }

  return res;
};
//n - longest arr length between nums1 and nums2. Assuming we don't need to sort
//Time - O(n)
//Space - O(n). Worst case - every ele is a intersection
