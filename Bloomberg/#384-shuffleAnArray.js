/*
Shuffle a set of numbers without duplicates.

Example:
// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();
*/

/**
 * @param {number[]} nums
 */

/** .reset()
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */

/** .shuffle
 * Returns a random shuffling of the array.
 * @return {number[]}
 */

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
class Solution{
  constructor(nums) {
    this.nums = nums,
    this.copy = [...nums]
  }

  reset() {
    this.nums = this.copy
    this.copy = [...this.copy];
    return this.nums
  }

  shuffle() {
    const swap = (arr,i,j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    for (let i = 0; i < this.nums.length; i++) {
      let swapIdx = Math.floor(Math.random()*this.nums.length);
      swap(this.nums, i, swapIdx)
    }

    return this.nums
  }
};

/* psuedocode
use the original array to shuffle the random shuffling of arrays
Use Fisher-Yates algo so shuffle the array accordingly. Via the hint, we should use the original array to shuffle the elements in-place. Meaning we need to keep track of the original order of the nums array. To do that we can make a copy of the nums array and store it in another variable, creating additional O(N) space. We also need to reestablish the PBR from the original array to the copied array.

Fisher-Yates uses the swap in-place method as we loop through each iteration of the ele inside the array to swap them all truly "randomly"
*/
