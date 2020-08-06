/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:
Input: J = "z", S = "ZZ"
Output: 0

Note:
S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

//Psuedocode - Approach using a Set
//initiate a set to store unique jewels and a jewels count
//loop through jewel and add to set
//loop through stones, if set has that stone, jewels++.
//return jewels
var numJewelsInStones = function(J, S) {
  let jewels = 0;
  let set = new Set();

  for (const jewel of J) {
    set.add(jewel)
  }

  for (const stone of S) {
    if (set.has(stone)) jewels++
  }

  return jewels;
};
//n - J.length. m - S.length
//Time - O(n+m).
//Space - O(n).
