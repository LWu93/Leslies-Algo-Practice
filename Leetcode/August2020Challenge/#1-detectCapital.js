/*
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.

Example 1:
Input: "USA"
Output: True

Example 2:
Input: "FlaG"
Output: False

Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
*/

/**
 * @param {string} word
 * @return {boolean}
 */

//psuedocode
//we need to cover the 3 cases that define if a word has correct Capitalization
//If the whole word is lowercased
//If the whole word is uppercased
//If only the first letter of the word is Upper and rest is lower
//Make 3 copies of each case. and check for if all of them are true
//return false
var detectCapitalUse = function(word) {
  if (word.toUpperCase() === word) return true;
  if (word.toLowerCase() === word) return true;
  if (`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}` === word) return true;

  return false;
};
//Time - O(n). n - word.length
//Space - O(1).
