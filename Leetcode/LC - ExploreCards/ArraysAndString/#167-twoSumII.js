/*

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.

Example:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//Psuedocode
//since we know the numbers are sorted, the right nums MUST be higher than the left
//therefore, we can have 2 pointers keep track of the left and right idx's.
//while loop through numbers arr so long as the pointers don't cross
//IF, the sum of the 2 ele's at the pointers === target, we can return [leftIdx, rightIdx]
//ELSE IF, sum > target, we can move rightIdx--
//ELSE, sum < target, leftIdx++

var twoSum = function(numbers, target) {
  let leftIdx = 0, rightIdx = numbers.length-1, currSum;

  while (leftIdx < rightIdx) {
    currSum = numbers[leftIdx] + numbers[rightIdx];

    if (currSum === target) return [leftIdx+1, rightIdx+1];
    else if (currSum > target) rightIdx--;
    else leftIdx++
  }
};

//Time Complexity - O(n). n - numbers.length.
//Space Complexity - O(1). No additional space.
