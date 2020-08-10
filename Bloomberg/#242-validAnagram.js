/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Psuedocode
//we know that we need to track the amount of letters that appear in both words. If freq !== 0, it's not an anagram
//Approaching the Followup, we can store each char/freq in a map as key/val pairs.
//Loop through both words and add them into our map. we can simply have 1 word add to the map and the other subtract from it.
//Loop through the map and if freq !== 0, we can return false
//Else we go through the entire code and return true
//Subtle optimization - We don't need to loop if only one of the words don't exist OR if the lengths dont equal each other
var isAnagram = function(word1, word2) {
  if ((!word1.length && word2.length) || (!word2.length && word1.length) || word2.length !== word1.length) return false

  let hash = {}

  for (let i = 0 ; i < word1.length; i++) {
    hash.hasOwnProperty(word1[i]) ? hash[word1[i]]++ : hash[word1[i]] = 1
    hash.hasOwnProperty(word2[i]) ? hash[word2[i]]-- : hash[word2[i]] = -1
  }

  for (let key in hash) {
    if (hash[key] !== 0) return false
  }

  return true;
};

//Second Approach - using a char bucket
const isAnagram = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  let bucket = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    bucket[word1.charCodeAt(i) - 97]++
    bucket[word2.charCodeAt(i) - 97]--
  }

  for (let num of bucket) {
      if (num !== 0) return false
  }

  return true
}
//n - word1.length
//Time - O(2n) ==> O(n).
//Space - O(26) ==> O(1).
