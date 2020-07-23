/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle. Note that the row index starts from 0.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 3
Output: [1,3,3,1]

Follow up: Could you optimize your algorithm to use only O(k) extra space?

*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

//Psuedocode
//build out pascals triangle
//since we only need the previous row, we can build on it in order to get to the next row
//Have a var starting with the first case of 0
//for loop until you get to the rowIndex
//build a new Array and take the top row's currIdx + currIdx+1 to get the val at the new idx point
var getRow = function(rowIndex) {
  let pascalsRow = [1];
  let currRow = 1;

  while (currRow <= rowIndex) {
    let newRow = new Array(currRow+1).fill(1);

    for (let i = 1; i < newRow.length-1; i++) {
      newRow[i] = pascalsRow[i] + pascalsRow[i-1]
    }

    pascalsRow = newRow
    currRow++
  }

  return pascalsRow
};
//Time - O(n^2). n - rowIndex. We loop to rowIndex and loop through each ele which is n-2 (excluding edges)
//Space - O(k). k - (num of elements inside of pascalsRow) === rowIndex+1.
