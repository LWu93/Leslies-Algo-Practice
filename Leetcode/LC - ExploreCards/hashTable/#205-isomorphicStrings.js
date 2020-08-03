/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true

Note:
You may assume both s and t have the same length.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Psuedocode
//Loop through s and store its idx/char its key/val pair
//if we ever hit a combination where the idx is already inside and !== t[idx], return false
//at the end we need to check for duplicate idx values
//constraints -> we can assume both strings are the same length
var isIsomorphic = function(s, t) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], t[i])
    } else if (map.get(s[i]) !== t[i]) {
      return false
    }
  }
  //have to cover the cases where no 2 char can === another char. AKA any duplicated values
  //Ex: "ab" --> "aa" should be false
  let set = new Set([...map.values()])
  return set.size === map.size
};
//n - s.length. m - t.length
//Time - O(n).
//Space - O(n+m). A map and a set
