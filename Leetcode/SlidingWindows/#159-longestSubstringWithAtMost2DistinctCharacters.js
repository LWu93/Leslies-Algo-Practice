/**
 * @param {string} s
 * @return {number}
 */

/* psuedocode - sliding window

We want to find the max substr in str that fits at most 2 distinct chars.
We can store each individual char inside of a map and check at each iteration if the size of the map is > 2.
If it is, we bring the beginning window until map is no longer > 3
at the end of this iteration, store the max length of the substr

*/
var lengthOfLongestSubstringTwoDistinct = function(str) {
  let maxSubstr = 0, chars = new Map();
  let start = 0, end = 0;

  while (end < str.length) {
    let curr = str[end]
    if (!chars.has(curr)) {
      chars.set(curr, 1)
    } else {
      chars.set(curr, (chars.get(curr)) + 1)
    }

    while (chars.size > 2) {
      let prev = str[start]
      let prevFreq = chars.get(prev) - 1

      if (prevFreq === 0) {
        chars.delete(prev)
      } else {
        chars.set(prev, prevFreq)
      }

      start++
    }
    // console.log(start,end, chars)
    maxSubstr = Math.max(maxSubstr, end-start+1)
    end++
  }

  return maxSubstr
};
/* Complexity. n - str.length

Time - O(n). One loop through the characters.
Space - O(1). map takes up at most 3 chars
*/
