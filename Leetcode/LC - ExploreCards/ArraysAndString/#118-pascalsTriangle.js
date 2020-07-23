/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

//Psuedocode
//for every array.length <= 2, the eles are all going to be 1
//loop through numRows to dynamically create a new row every iteration
//You want to to is calculate the previous Row's elements at its current idx
//you add its top 2 idx's --> resArr[prevRow][currIdx] + resArr[preRow][currIdx-1]
//set that value as its new idx or push it into a new arr
//add that array to your ResArr to create the next row
//continue until you hit numRow

//Naive First Approach
var generate = function(numRows) {
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1,1]]

  const createPascalRow = (length) => {
    let res = new Array(length);
    res[0] = 1;
    res[res.length-1] = 1
    return res
  };

  let res = [[1], [1,1]]
  let currRow = 3

  while (currRow <= numRows) {
    let newRow = createPascalRow(currRow);
    let prevRow = currRow-2; //accounting for the fact that we're creating a new Row and idx-1

    for (let i = 1; i < newRow.length-1; i++) {
      newRow[i] = res[prevRow][i-1] + res[prevRow][i]
    }

    res.push(newRow);
    currRow++
  }

  return res
};

//Optimized Approach
//We can double for loop and just account for the arrays as we loop through it.
//our second loop will account for the new pascalsRow we're creating and check for the edges of the arr
var generate = function(numRows) {
  let res = []
  if (numRows === 0) return res;

  //looping through each num and build out the new pascalRow
  for (let i = 0; i < numRows; i++) {
    let pascalRow = [];

    for (let j = 0; j <= i; j++) {
      //edges of the row
      if (j === 0 || j === i) {
        pascalRow.push(1)
      } else {
        //calculate prior 2 vals of the row on top. DP.
        pascalRow.push(res[i-1][j-1] + res[i-1][j])
      }
    }
    //push new pascalRow into res arr
    res.push(pascalRow);
  }

  return res;
};
//Time Complexity - O(n^2). n - num of triangles we're making. nested for loops
//Space Complexity - O(n^2). n - num of triangle arrays we're making and storing in our res arr.
