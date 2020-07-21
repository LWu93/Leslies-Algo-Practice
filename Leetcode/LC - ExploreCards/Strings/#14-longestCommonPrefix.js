/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""

Explanation: There is no common prefix among the input strings.

Note: All given inputs are in lowercase letters a-z.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */

//Psuedocode
//loop through the strs array and look at every word's beginning prefix
//we can look at the first word and check if any of the other words match the 1st prefix, 2nd, etc
//initialize var currChar to check if they matches
//if they all match in the word, you continue iterating in first loop to the second prefix letter
//if it doesn't match the currChar or if you hit the end of the words length, you know thats the largest possible prefix for any word. Return the word.slice(0, i) i being the letter we're at in our for loop
//if we never enter the for loop, it means the other words outside of the first one dont match or the word itself is "". return the first word in strs that we're checking.
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";

  //Doesn't matter which word we start with since the shortest word can be the longestPrefix
  for (let i = 0; i < strs[0].length; i++) {
    let currChar = strs[0][i];
    //start at the next word and loop through all the words
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== currChar || i == strs[j].length) {
        return strs[0].slice(0,i)
      }
    }
  }

  return strs[0];
};
//Time Complexity - O(n*m). n - length of strs arr. m - length of longest possible prefix.
//Space Complexity - O(1).
