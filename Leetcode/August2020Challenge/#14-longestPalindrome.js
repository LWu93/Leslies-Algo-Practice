/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"
Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */

//psuedocode
//we know letters needed to make a palindrome must be even. We can track char/freq in a map.
//loop through s, get the val in map. if the freq is even, add to our count
//check if map.size is odd. if it is, we can add 1 to account for an additional char in the middle
//Ex: "aaabaaa", "abcDcba"
var longestPalindrome = function(s) {
  let count = 0, map = new Map()

  for (let char of s) {
    let freq = map.get(char) || 1
    if (freq % 2 === 0) count += 2;
    map.set(char, freq + 1)
  }

  if (s.length !== count) count++

  return count;
};
//n - s.length
//Time - O(n). 1 for loop
//Space - O(1). Constant since our key/val are fixed at 56(lower and uppercase letters).
