/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//Psuedocode
//We can have a additional array and loop through nums, push any nonzeroes into the array, then iterate through the rest of the array to fill with 0s
//We can also do this in-place by having a pointer track all nonzero numbers and swap with the currIdx
var moveZeroes = function(nums) {
  let nonZeroPtr = 0;

  //Swap HF
  const swap = function(nums,start,end) {
    [nums[start], nums[end]] = [nums[end], nums[start]]
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      swap(nums,nonZeroPtr, i)
      nonZeroPtr++
    }
  }
}
//Time - O(n)
//Space - O(1)

//Second Approach
// var moveZeroes = function(nums) {
//   let pointer = 0;
//   let notZeros = nums.length;

//   for(let i = 0; i < notZeros; i++){
//     if(nums[i] !== 0){
//       nums[pointer] = nums[i]
//       pointer++
//     }
//   }

//   for(let i = pointer; i < notZeros; i++){
//     nums[i] = 0;
//   }

//   return nums;
// };
//Time - O(n)
//Space - O(1)
