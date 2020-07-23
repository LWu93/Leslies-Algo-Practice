/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

*/


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

//Psuedocode
//initiate a res arr to track order of spiral elements
//while loop inside of top/bottom/left/right loops.
//Have 4 pointers to track the moving rows/cols
//loop until you get to the point where r1 <= r2 and c1 <= c2
//when you do TBLR loops, remember the corner elements that are already accounted for
//Edge case - if its a rectangle, you will add additional ele's in the columns that are already counted
var spiralOrder = function(matrix) {
  if (!matrix.length) return [];

  let res = [];
  let r1 = 0, r2 = matrix.length-1, c1 = 0, c2 = matrix[0].length-1;

  while (r1 <= r2 && c1 <= c2) {
    //top - keep r1 constant, push in r1's eles. r1++
    for (let i = c1; i <= c2; i++) {
      res.push(matrix[r1][i])
    }

    //right - keep c2 constant, push in its c2 eles. c2--
    //+1 to account for its most right ele
    for (let j = r1 + 1; j <= r2; j++) {
      res.push(matrix[j][c2])
    }

    //Account for if its a rectangle (Ex 2) and not a perfect square
    if (r1 < r2 && c1 < c2) {
      //bottom - keep r2 constant, push in its r2 vals. r2--
      //-1 to account for its bottom right ele
      for (let k = c2 - 1; k > c1; k--) {
        res.push(matrix[r2][k])
      }

      //left - keep c1 constant, push in its c1 vals. c1++
      for (let l = r2; l > r1; l--) {
        res.push(matrix[l][c1])
      }
    }

    r1++;
    c2--;
    r2--;
    c1++;
  }

  return res;
};
//Time Complexity - O(n). n - # of ele's in the matrix. Even though we have a while -> 4(for loops), we are accounting for the fact that we are removing elems/rows/cols as we traverse. We will only traverse each ele once.
//Space Complexity - O(n). n - # of ele's we're adding to our res arr
