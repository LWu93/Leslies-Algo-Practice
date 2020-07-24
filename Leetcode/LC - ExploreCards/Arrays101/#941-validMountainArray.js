/*

Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:
A.length >= 3
There exists some i with 0 < i < A.length - 1 such that:
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]

Example 1:
Input: [2,1]
Output: false

Example 2:
Input: [3,5,5]
Output: false

Example 3:
Input: [0,3,2,1]
Output: true

Note:
0 <= A.length <= 10000
0 <= A[i] <= 10000

*/

/**
 * @param {number[]} A
 * @return {boolean}
 */

//Psuedocode
//Edgecase - check if A.length >= 3 so that it can be a mountain
//If we're starting from the left, we continue checking if its increasing until we hit the tip
//If we hit the tip, we should only be checking for decreasing, having a flip var to account for it
//if at any point either checks above fail, return false
//else you hit the end of the loop and return true

var validMountainArray = function(A) {
  if (A.length <= 2) return false; //edge case

  let decreasing = false, increasing = false;

  for (let i = 1; i < A.length; i++) {
    //case when its increasing
    if (A[i-1] < A[i] && !decreasing) {
      increasing = true
      continue;
    }
    //when we finally stop increasing
    decreasing = true

    if (A[i-1] <= A[i]) return false;
  }

  //have to account for if mountain never stops increasing
  return decreasing && increasing
};
//Time - O(n). n - A.length
//Space - O(1). 3 constant vars
