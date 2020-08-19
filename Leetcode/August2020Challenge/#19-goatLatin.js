/*
A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.

If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".

Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin.

Example 1:
Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

Example 2:
Input: "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

Notes:
S contains only uppercase, lowercase and spaces. Exactly one space between each word.
1 <= S.length <= 150.
*/


/**
 * @param {string} S
 * @return {string}
 */

//psuedocode
//we want to split S and loop through each word. Initialize newStr = '' and add 'a' for idx+1
//loop through S and check for conditions of if word[0] is a vowel or not
//If it is, add word + ma + 'a'.repeat(idx+1)
//Else, add word.slice(1) + word[0] + ma + 'a'.repeat(idx+1)
//return newStr

var toGoatLatin = function(S) {
  let newStr = '', vowels = 'AEIOU';

  S = S.split(" ")

  for (let i = 0; i < S.length; i++) {
    if (vowels.includes(S[i][0].toUpperCase())) {
      newStr += S[i] + 'ma' + 'a'.repeat(i+1)
    } else {
      newStr += S[i].slice(1) + S[i][0] + 'ma' + 'a'.repeat(i+1)
    }

    newStr += " "
  }

  return newStr.trim();
};
//n - S.length. m - word.length
//Time - (n * m). Looping through S and potentially slicing a word to add onto newStr
//Space - O(2n) ==> O(n). We are essentially doubling our string as we grow but simplifies to n.
