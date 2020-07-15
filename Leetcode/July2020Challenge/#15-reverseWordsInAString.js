/*
Given an input string, reverse the string word by word.

Example 1:
Input: "the sky is blue"
Output: "blue is sky the"

Example 2:
Input: "  hello world!  "
Output: "world! hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:
Input: "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string
*/

/**
 * @param {string} s
 * @return {string}
 */

//Psudocode
//split the string into separate words, accounting for the empty spaces.
//create a new array called reversed to store the words
//loop through the split words. if the word is not an empty str, push the words into reversed.
//return reversed.join(" ")

//approach without array methods
//loop through s backwards
//you need to keep track of each word and the new Reversed s. let reversedStr = '', let currWord = ""
//IF - currChar is not an empty str, add it to currWord
//ELSE - check if reversedStr has any words. If not, set reversedStr - currWord. Else, add it to reversedStr with a space
//Continue looping until you hit i. IF i is 0 and we still have a currWord, add it to reversedStr. we still need to check if reversedWord has a word or not.

//With Array methods
var reverseWords = function(s) {
  const words = s.split(" ");
  let reversed = [];

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i]) {
        reversed.push(words[i])
    }
  }

  return reversed.join(" ")
};
//Time Complexity - O(3n) ==> O(n). n - s.length;
//Space Complexity - O(2n) ==> O(n). n - storing reversed words.

//In place destructure/swap
var reverseWords = function(s) {
  let split = s.split(' ');
  let left = 0;
  let right = split.length-1;

  while(left < right){
    [split[left], split[right]] = [split[right], split[left]]
    left++
    right--
  }

  return split.filter(elem => elem.length >= 1).join(' ') //filter out extra " "
};
//Time Complexity - O(3n) ==> O(n). n - s.length;
//Space Complexity - O(n). n - storing reversed words.

//No array methods
var reverseWords = function(s) {
  let reversedStr = "";
  let currWord = "";
  let i = s.length - 1;

  while (i >= 0) {
    currChar = s[i];

    if (currChar !== " ") {
      currWord = currChar + currWord;
    } else if (currWord) {
      if (!reversedStr) {
        reversedStr = currWord
      } else {
        reversedStr = reversedStr + " " + currWord;
      }
      currWord = ""
    }

    if (i === 0 && currWord) {
      if (!reversedStr) {
        reversedStr = currWord
      } else {
        reversedStr = reversedStr + " " + currWord;
      }
    }

    i--
  }

  return reversedStr
};
//Time Complexity - O(n). n - s.length;
//Space Complexity - O(n + m). n - storing the reversed sentence. m - largest word in s.
