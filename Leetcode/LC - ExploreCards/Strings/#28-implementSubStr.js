/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//Psuedocode
//loop through the haystack, look for where the first idx of both are the same
//IF they are the same, have a second for loop where you continue tracking its next idx;
//  IF - the next str idx of needle & haystack are not equal, exit for loop.
//  ELSE - continue looping and check for the condition where the currIdx +1 === needle.length
//IF - it hits the condition above, you return the firstIdx you started looping.
//ELSE - return -1;
var strStr = function(haystack, needle) {
  if (!needle) return 0;
  if (needle.length > haystack.length) return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[j+i] !== needle[j]) break;
      if (j + 1 === needle.length) return i; //accounting for idx+1 to get length
    }
  }

  return -1;
};
//Time Complexity - O(n * h). n - needle.length, h - haystack.length
//Space Complexity - O(1). Not taking up any additional space.
