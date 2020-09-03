/*
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:
Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.

Example 2:
Input: "aba"
Output: False

Example 3:
Input: "abcabcabcabc"
Output: True

Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

*/

/**
 * @param {string} s
 * @return {boolean}
 */

/* psuedocode - recursive approach

recursively check if every substring of s would satisfy s.

brute force -
A nested for loop and check every potential combination. Build the substrs and check from there
Create a HF to check if substrings === s, recursively.

More optimized approach,
Split the word in half recursively to check if firstHalf*2 === word and then secondHalf*2 === word
If that's not true, return its half'd word recursively
continue doing that until we get to the basecase where we only have 1 char left.

*/

//if you double the word and cut off the first and last letter, you can see that if the pattern we're checking for does exist in the original word, it will also be in the doubledWord.
//"abab" * 2 === "abababab"
// Does "bababa".includes("abab") ==> yes
var repeatedSubstringPattern = function(s) {
  let doubledS = s + s
  let cutOffStr = doubledS.slice(1, (2*s.length) - 1)

  if (cutOffStr.includes(s)) return true
  return false
};
//Time - O(n^2). cuttOffStr is essentially 2n and includes will loop through n using n.length === n^2.
//Space - O(n). space needed to store doubledS

/* Alex's solution using Rabin Karp
 there can be some optimization in only testing lengths that are factors of s.length, but i think the continue takes care of that
 * actually. an ex: if s.length = 24, possible substrs are of length: 2,3,4,6,8,12 BUT rabinkarp says you only need to test 2,3,4...????
 Side note. The good practice is to verify the equality of two substrings after the hash match. This logic is not hard to add, and it could bring you kudos during the interview.
According to solution: since we're not sliding, we're jumping length L of potential strings, we're slicing in L time, for N/L substrings so all the work is done in O(N) time
*/
var repeatedSubstringPattern = function(s) {
  // edge case s.length<=2
  if (s === null || s.length <= 1) return false;
  if (s.length === 2) return s.charAt(0) === s.charAt(1)
  for (let len = 1; len <= Math.floor(s.length/2); len++){
    if (s.length % len !== 0) continue;
    let potentialStr = s.slice(0, len);
    let found = true
    for (let j = len; j <= s.length - len; j+=len){
      if (s.slice(j, j+len) !== potentialStr){
        found = false
        break;
      }
    }
    if (found) return true
  }
  return false;
};
