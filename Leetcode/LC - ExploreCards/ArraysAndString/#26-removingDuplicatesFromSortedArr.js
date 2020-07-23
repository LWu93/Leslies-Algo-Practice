/*
26. Remove Duplicates from Sorted Array

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the returned length.

Example 2:
Given nums = [0,0,1,1,1,2,2,3,3,4],
Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
It doesn't matter what values are set beyond the returned length.

Clarification:
Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//Psuedocode
//Have 2 pointers, curr and beginIdx. Loop through nums arr. beginIdx will also hold the idx points of unique nums
//IF - nums[curr] !== nums[beginIdx], that means you've hit a new num since nums is sorted. beginIdx++
//you also want to swap that new num to the front of the arr where beginIdx is
//you want to return beginIdx pointer + 1 at the end, accounting for idx.
var removeDuplicates = function(nums) {
  if (!nums.length) return 0;
  let beginIdx = 0;

  for (let curr = 1; curr < nums.length; curr++) {
    //when we DON'T hit a duplicate, its a new num
    if (nums[curr] !== nums[beginIdx]) {
      beginIdx++;
      nums[beginIdx] = nums[curr] //we simply just replace the next idx with the new num
    }
  }

  return beginIdx + 1;
};
//Time - O(n). n - nums.length
//Space - O(1).
