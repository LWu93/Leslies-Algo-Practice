/*
Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

Example:

Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */

//psuedocode
//turn this into two 2sum problems. Use the difference approach to find sums === 0. init var count
//double loop through A and B to find its sum to store as key in a map, val == frequency
//double loop through C and D to find, diff = 0 - C[i] + D[i].
//If diff exists in map, add val to total count. return count
var fourSumCount = function(A, B, C, D) {
  let count = 0, map = new Map();

  for (const a of A) {
    for (const b of B) {
      let sum = a + b;

      let freq = map.get(sum) || 0;
      map.set(sum, freq + 1)
    }
  }

  for (const c of C) {
    for (const d of D) {
      let diff = 0 - (c + d); //beware of negative nums

      if (map.has(diff)) {
        count += map.get(diff)
      }
    }
  }

  return count
};
//n - length of arrays
//Time - O(n^2). simplified from 2 double loops.
//Space - O(n). worst case is there are n # of diff sums in the map.
