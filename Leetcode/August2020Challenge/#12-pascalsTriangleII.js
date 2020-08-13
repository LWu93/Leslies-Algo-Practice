/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
Input: 3
Output: [1,3,3,1]

Follow up:
Could you optimize your algorithm to use only O(k) extra space?
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

//Psuedocode
//build out pascals triangle starting with [1] but idx is 0
//since we only need the previous row, we can build on it in order to get to the next row
//While loop through
//for loop until you get to the rowIndex
//build a new Array and take the top row's currIdx + currIdx+1 to get the val at the new idx point

var getRow = function(rowIndex) {
    let pascal = [1];
    let currIdx = 0;

    while (currIdx < rowIndex) {
        let newPascals = new Array(pascal.length+1).fill(1)

        for (let i = 1; i < newPascals.length-1; i++) {
            newPascals[i] = pascal[i] + pascal[i-1]
        }
        //finish for loop, set pascal to newPascal. Increment currIdx
        pascal = newPascals
        currIdx++
    }
    return pascal;
}
//n - rowIndex
//Time - O(n^2). while loop is n time. Although the second for loop increments from 1, you still have to account for when it hits n.length-1.
//Space - O(n). We're replacing pascal after every iteration.
