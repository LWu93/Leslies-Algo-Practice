/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

Note:
All inputs will be in lowercase.
The order of your output does not matter.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//psuedocode
//create a mapping func that will put each anagram in a specific key and the val = []
//sort each word so that we can insert it in as a unique key for every anagram
//loop through the set and push in each arr into res arr. return res
var groupAnagrams = function(strs) {
  let map = new Map(), res = [];

  for (const char of strs) {
    let sorted = char.split('').sort().join('')
    if (!map.has(sorted)) map.set(sorted, []);
    map.get(sorted).push(char)
  }

  map.forEach(arr => res.push(arr))

  return res;
};
//n - strs.length. m - longest string.length. k - # of distinct string lengths(?)
//Time - O(n* (m log m)). looping through strs. Also sorting based on m.
//Space - O(n*m). map is storing k as keys and n # of ele's as vals. res arr is also n  so it simplifies down.
//Worst case is if the sort of each char is all the same m but on a avg case, you can argue its O(n * log m)

//Second approach using buckets to store each word's letters
//You use the bucket as the key for your hash.
//after you've looped through the strs arr, just return Object.values(hash) as arr of arrays
var groupAnagrams = function(strs) {
  let hash = {};

  for (const word of strs) {
    let charArr = new Array(26).fill(0);

    //loop through word to store each letter in a bucket
    for (const char of word) {
      charArr[char.charCodeAt()-97]++;
    }

    if (!hash[charArr]) hash[charArr] = [];
    hash[charArr].push(word)
  }

  return Object.values(hash)
};
//n - strs.length. m - longest string.length.
//Time - O(n*m). looping through strs and each letter of the word.
//Space - O(n). hash is storing n and returning n amount of words.
