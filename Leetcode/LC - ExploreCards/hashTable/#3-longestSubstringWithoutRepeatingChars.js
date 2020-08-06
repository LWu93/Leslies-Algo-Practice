/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */

//psuedocode
//sliding window approach. initiate a set - to track unique chars, longest - to track length of substr
//slide your end ptr (while loop) so that it keeps going until there are no more uniques in your set
//slide your start ptr (while) until it hits a point where the new char is now unique.
//return longest
var lengthOfLongestSubstring = function(s) {
  let set = new Set(), longest = 0, start = 0, end = 0;
  if (!s.length) return longest;

  while (end < s.length) {
    let currChar = s[end];

    while (set.has(currChar)) {
      set.delete(s[start]);
      start++
    }

    set.add(currChar)
    longest = Math.max(longest, end - start + 1) //+1 to acc for idx
    end++
  }

  return longest;
}
//n - s.length
//Time - O(n). Although we have 2 while loops, it simplifies to n since the inner while loop doesn't grow linearly with n.
//Space - O(n). Worst case - the entire set is filled as every char in s is unique.
