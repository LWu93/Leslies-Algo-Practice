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
  //no return - modify in-place
}
//n - nums.length
//Time - O(n).
//Space - O(1).
