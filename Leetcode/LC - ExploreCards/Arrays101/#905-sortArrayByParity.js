/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Example 1:
Input: [3,1,2,4]
Output: [2,4,3,1]

The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */

//psuedocode
//2 pointers approach. Have a evenPtr and 1 looping through A.
//IF, the num is even, swap to where evenPtr is. evenPtr++. This makes it so only evens are in front
//create a swap HF

var sortArrayByParity = function(A) {
  let evenPtr = 0;

  const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]]
  };

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      swap(A,evenPtr, i)
      evenPtr++
    }
  }

  return A
};
//Time - O(n). n - A.length
//Space - O(1). modifying in-place
