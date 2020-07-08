/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//Psudocode
//Sort the nums. Have pointers at a left, middle and right idx
//you want to have a for loop to keep track of the left idx
//and a while loop inside to use the 2 pointers method to account for its low/high values.
//check if its vals === 0 and if they do, push in vals into res array
//IF you do find sum === 0, you want to move middle++ and right-- since they're sorted
//you also need to check if the next num is the same as the prev pointer to avoid duplicate nums
//ELSE, you continue looping.
//RETURN res

var threeSum = function(nums) {
  let res = [];
  //no constraints, check for subtle optimization
  if (nums.length < 3) return res;

  //sort inplace so we can check from lowest -> highest
  nums.sort((a,b) => a-b)

  for (let left = 0; left < nums.length;left++) {
      let mid = left + 1
      let right = nums.length - 1
      //edge case where the left val is the same as the prev val. Avoid dups
      if (nums[left] === nums[left-1]) continue;

      while (mid < right) {
          let currSum = nums[left] + nums[mid] + nums[right]
          if (currSum === 0) {
              res.push([nums[left], nums[mid], nums[right]])
              mid++
              right--
              //edge case where the mid val is the same as the prev val. Avoid dups
              while (nums[mid] === nums[mid-1]) {
                  mid++
              }
          } else if (currSum < 0) {
              mid++
          } else {
              right--
          }
      }
  }

  return res;
}
//Time Complexity - O(n^2). n - nums.length
//Although we are looping through limited parts of nums with subtle optimizations, worsecase is still n^2.
//Space Complexity - O(n^2) worst case. n - nums.length
//in order to store its solution sets, you have cases where you potentially have more than double n num of sets.
