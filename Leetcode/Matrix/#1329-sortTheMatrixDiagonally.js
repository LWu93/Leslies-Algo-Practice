/*
Given a m * n matrix mat of integers, sort it diagonally in ascending order from the top-left to the bottom-right then return the sorted array.

Example 1:
Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

Constraints:
m == mat.length
n == mat[i].length
1 <= m, n <= 100
1 <= mat[i][j] <= 100
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

//psuedocode
//if we do a nested for loop, each diagonal has a unique sum of its idx's and you can store its vals in an arr
//store each val in its individual sumOfIdxs in the resArr
//sort the resArr afterwards b-a
//double for loop again and pop out the val(the lower sorted val via .sort). modify in-place
var diagonalSort = function(mat) {
  if (mat.length === 1 && mat[0].length === 1) return mat; //constraints

  let diagonals = new Map();

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      let currDiag = i - j;

      if (!diagonals.has(currDiag)) {
        diagonals.set(currDiag, [])
      }
      diagonals.get(currDiag).push(mat[i][j])
    }
  }

  diagonals.forEach(arr => arr.sort((a,b) => b-a))

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      let currDiag = i - j;
      mat[i][j] = diagonals.get(currDiag).pop()
    }
  }

  return mat;
};
//n - mat.length. m - mat[i].length.
//Time - O(n*m). 2 nested loops and 1 sort O(n*m * n log n * n*m)
//Space - O(n*m). Storing # of elements in matrix in a Map. modifying in-place
