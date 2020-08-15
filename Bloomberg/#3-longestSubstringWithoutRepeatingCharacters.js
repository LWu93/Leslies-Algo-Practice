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
// var lengthOfLongestSubstring = function(s) {
//     let left = 0;
//     let right = 0;
//     let hash = {};
//     let max = 0;

//     while (right < s.length) {
//         if (!hash.hasOwnProperty(s[right])) {
//             hash[s[right]] = true;
//             right++;
//             max = Math.max(max, Object.keys(hash).length);
//         } else {
//             delete hash[s[left]];
//             left++;
//         }
//     }

//     return max;

//     if (!s.length) return 0;
//     let left = 0;
//     let right = 0;
//     let sum = 0;
//     let uniqueChars = [];
//     let maxUnique = {};

//     while (right < s.length) {
//         if (!uniqueChars.includes(s[right])) {
//             uniqueChars.push(s[right])
//             right++
//             maxUnique.push(uniqueChars.length)
//         } else {
//             uniqueChars = [];
//             left++;
//             right = left;
//         }
//     }

//     let maxUniqueArray = Object.values(maxUnique)

//     return sum;
// };

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
//Time - O(n*25). Although we have 2 while loops, it simplifies to n since the inner while loop doesn't grow linearly with n. Worst case, the while loop inside accounts for 25 char before it finds its prev unique char.
//Space - O(26) ==> O(1). Worst case - the entire set is filled with the alphabet.

//Suble Optimization using a map
//we can store (char,lastIdxWhereDidntSeeChar) as key/val in a map.
//If we see another char, we can simply skip to the last idx where we didn't see it
//then we can set longest to be max(longest, end-start+1) to acc for indices
//you have to reset the char we just saw to the currIdx+1 since thats the last time we DONT see it
var lengthOfLongestSubstring = function(s) {
  let map = new Map(), longest = 0, start = 0, end = 0;
  if (!s.length) return longest;

  while (end < s.length) {
    let currChar = s[end];

    if (map.has(currChar)) {
      //get the most recent idx of where the last char existed
      start = Math.max(start, (map.get(currChar)))
    }
    longest = Math.max(longest, end-start+1)
    map.set(currChar, end+1) //plus 1 since that's the next idx where we DON'T see it
    end++
  }

  return longest;
}
//n - s.length
//Time - O(n). One loop through.
//Space - O(26) ==> O(1). Worst case - the entire map is filled with the alphabet.
