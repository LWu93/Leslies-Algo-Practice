/*
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

Example:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]

*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

//Psuedocode
//initialize a res arr to store the order of the eles.
//the sum of diagonal idx's equate to the same sum. so first diagonal 0,0 === 0
//0,0 -> 0,1 -> 1,0 -> 2,0 -> 1,1 -> 0,2 -> 1,3 -> 2,1 -> 2,2
//second diagonals, 0,1 and 1,0 both equal 1. Third diagonal, 2,0 -> 1,1 -> 0,2 equals 3. and so on.
//double for loop. track diagonals in a map = new Map().
//loop through each val in the map in order. push ele's into res arr. If key is even, reverse the eles

var findDiagonalOrder = function(matrix) {
  let res = [];
  let map = new Map();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let sum = i+j;

      if (!map.has(sum)) {
          map.set(sum, [])
      }
      let arr = map.get(sum)
      map.set(sum, arr.concat(matrix[i][j]))
    }

  }

  //map through each array of sums, beginning from 0. If even, reverse the array
  map.forEach((val, key) => {
    if (key % 2 === 1) {
      res.push(...val)
    } else {
      let reversed = val.reverse()
      res.push(...reversed)
    }
  })

  return res;
};
