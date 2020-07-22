/*
Given an array nums and a value val, remove all instances of that value in-place and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example 1:
Given nums = [3,2,2,3], val = 3,
Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length.

Example 2:
Given nums = [0,1,2,2,3,0,4,2], val = 2,
Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
Note that the order of those five elements can be arbitrary.
It doesn't matter what values are set beyond the returned length.

Clarification:
Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
  print(nums[i]);
}
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//Psuedocode
//Have 2 pointers, fast and slow that will track where we are replacing and removing the elements.
//the fast pointer will iterate through the entire nums arr
//the slow pointer will keep track of where we place our new num when our fast pointer !== val
var removeElement = function(nums, val) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      //swap or replace the first slowIdx with the val so we fill in the front of the arr.
      nums[slow] = nums[fast]
      slow++
    }
  }
  //return length aka what idx #slow is at
  return slow
};
//Time - O(n). n- nums.length
//Space - O(1). modifying inplace

//Another approach to this problem would be to swap all the elements that are === val with the last Idx of the arr and then subtract var totalLength by 1 every time
//while (slow < totalLength) {if (nums[slow] === val) {swap, totalLenght--} else slow++}
