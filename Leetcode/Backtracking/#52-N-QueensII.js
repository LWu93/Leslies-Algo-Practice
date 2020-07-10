/*
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example:

Input: 4
Output: 2

Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
*/

/**
 * @param {number} n
 * @return {number}
 */

var totalNQueens = function(n) {
  let queens = 0;
  let board = new Array(n).fill(".").map(ele => new Array(n).fill("."));

  const backtrack = (row) => {
    //check if the curr cell can house a valid queen
    //check if your curr row === n. If we get here, it satisfies a distinct solution. queens++
    if (row === n) {
      queens++
      return
    }

    //loop through each col to see if the queen attacks another.
    for (let col = 0; col < n; col++) {
      //Helper Func to determine if any queens attack this specific square
      //IF - the queen at this square is not attacked, backtrack. Else - do nothing

      if (notAttacked(row,col)) {
        board[row][col] = 'Q' //Set queen at first sq
        backtrack(row+1);
        board[row][col] = '.';//Reset back to empty sq
      }
    }
  }

  function notAttacked(row, col) {
    //check if rows have any queens attacking the row
    for (let i = 0 ; i < row; i++) {
        if (board[i][col] === 'Q') return false;
    }

    //check top left diagonals for any queens
    for (let j = row-1, k = col-1; j >= 0 && k >= 0; j--, k--) {
        if (board[j][k] === 'Q') return false;
    }

    //check top right diagonals for any queens
    for (let a = row-1, b = col+1; a >= 0 && b < n; a--, b++) {
        if (board[a][b] === 'Q') return false;
    }

    return true;
  }

  backtrack(0)
  return queens;
};
