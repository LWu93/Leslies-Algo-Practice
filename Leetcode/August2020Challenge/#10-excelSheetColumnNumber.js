/**
 * @param {string} s
 * @return {number}
 */

//psuedocode
//we know we are capped at A-Z -> 0-26
//we can loop through each string and account for the char at each idx point. A - Z by itself is its #
//as we added the next char, we have to add to account for if there is a next char, we multiply by 26.
//multiples of 26 based on your curr char

//A - 1
//AB - 1 + (2*26) --> 28
//AAA - 1*26 + 1*26*26 + 1 --> 703
//ZZZ - 26 + 26*26 + 26*(26*26) --> 18278
var titleToNumber = function(s) {
  let total = 0, map = new Map(), multiple = 1, startingA = 65;

  //create our Char/Vals
  for (let i = 1; i <= 26; i++) {
    map.set(String.fromCharCode(startingA), i);
    startingA++
  }

  for (let i = 0; i < s.length; i++) {
    total += (map.get(s[i]) * multiple)
    multiple *= 26
  }

  return total
};
//n - s.length
//Time - O(n).
//Space - O(1). our map is a constant 26 and doesn't grow with n so it simplifies down.
