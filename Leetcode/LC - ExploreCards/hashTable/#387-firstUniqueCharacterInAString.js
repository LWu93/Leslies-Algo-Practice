/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

Note: You may assume the string contains only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */

//Psuedocode using a hashmap
//loop through the string to store freq of chars in a map
//loop through again and check if freq === 1. return at curr idx.
//return -1 if you dont hit a unique char
var firstUniqChar = function(s) {
  if (!s.length) return -1;

  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) map.set(s[i], 0);
    let freq = map.get(s[i])
    map.set(s[i], freq += 1)
  }

  for (const idx in s) {
    if (map.get(s[idx]) === 1) return parseInt(idx)
  }

  return -1
};
//Time - O(n). n - s.length
//Space - O(1). 26 chars in a map ==> constant.
