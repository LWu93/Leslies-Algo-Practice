/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Example 1:
Input: [3,1,2,4]
Output: [2,4,3,1]

The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Note:
1 <= A.length <= 5000
0 <= A[i] <= 5000
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */

//psuedocode
//use a evenPtr that will swap every ele that is even to the front.
//iterate through A and use i as the second ptr.
//return A
var sortArrayByParity = function(A) {
  let evenPtr = 0;

  const swap = (arr, i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      swap(A, i, evenPtr)
      evenPtr++
    }
  }

  return A;
};
//n - A.length
//Time - O(n).
//Space - O(1).
