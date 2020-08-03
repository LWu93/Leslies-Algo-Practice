/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false

Constraints:
s consists only of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

//psuedocode
//loop through string with 2 pointers from front and back
//move the pointers in cases where there's NOT a alphanumeric char
//check if the first and last chars match. return false if they dont match
//reach the end and return true
var isPalindrome = function(string) {
  //subtle optimizations/refactors. Add alphas and nums together and then add into a set.
  //check if set has those chars since that has instant access time rather than .includes
  let newStr = "", alpha = "abcdefghijklmnopqrstuvwxyz", nums = "0123456789", left = 0, right = string.length-1;

  while (left <= right) {
    let leftChar = string[left].toLowerCase();
    let rightChar = string[right].toLowerCase();

    //covers puncuation and nums
    if (!alpha.includes(leftChar) && !nums.includes(leftChar)) {
      left++
      continue
    } else if (!alpha.includes(rightChar) && !nums.includes(rightChar)) {
      right--
      continue
    }

    if (leftChar !== rightChar) return false;

    left++;
    right--;
  }

  return true
};
//n - string.length
//Time - O(n).
//Space - O(1).
