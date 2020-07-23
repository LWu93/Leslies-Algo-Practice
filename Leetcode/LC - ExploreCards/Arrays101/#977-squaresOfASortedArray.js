/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Example 2:
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Note:
1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */

//Psuedocode
//have a squares arr to track the new arr to return.
//Use a 2 pointers approach with a loop. let left,right.
//since the arr is sorted from a-b, we KNOW the biggest values will be from either the front or end
//check which element is greater and set that to the last idx of the arr, looping backwards
//return squares arr
var sortedSquares = function(A) {
  let squares = []
  let idx = A.length-1;
  let left = 0
  let right = A.length-1;

  for (let i = A.length-1; i >= 0; i--) {
    let leftNum = A[left] * A[left]
    let rightNum = A[right] * A[right]

    if (leftNum > rightNum) {
      squares[idx]=leftNum
      left++
    } else {
      squares[idx] = rightNum
      right--
    }
    idx--
  }

  return squares
};
//Time - O(n). n - A.length
//Space - O(n). n - A.length

//Another approach would be to loop through A, square each number and sort for O(n log n) time.
