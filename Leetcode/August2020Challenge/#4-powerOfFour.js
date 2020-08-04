/*
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:
Input: 16
Output: true

Example 2:
Input: 5
Output: false

Follow up: Could you solve it without loops/recursion?
*/

/**
 * @param {number} num
 * @return {boolean}
 */

//psuedocode
//loop starting from 1 and multiply by 4 until you hit the num or go over. hit = true, over = false
//You can do the same thing with recursion
//Another way to solve via the Follow Up is using bit manipulation (Optimal?)
var isPowerOfFour = function(num) {

  for (let i = 1; i <= num; i *= 4) {
    if (i === num) return true
  }

  return false
};
//Time - O(log 4 n) ==> O(n)
//Space - O(1)
