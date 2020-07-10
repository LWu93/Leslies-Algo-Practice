/*
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]

Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
*/

/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function(n) {
  let queens = [];
  let board = new Array(n).fill(".").map(ele => new Array(n).fill("."));

  const backtrack = (row) => {
    //check if the curr cell can house a valid queen
    //check if your curr row === n. If we get here, it satisfies a distinct solution. queens++
    if (row === n) {
      let copy = board.map(ele => ele.join(""))
      queens.push(copy)
      return
    }

    //loop through each col to see if the queen attacks another.
    for (let col = 0; col < n; col++) {
      //Helper Func to determine if any queens attack this specific square
      //IF - the queen at this square is not attacked, backtrack. Else - continue
      if (notAttacked(row,col)) {
        board[row][col] = 'Q' //Set queen at first sq
        backtrack(row+1);
        board[row][col] = '.';//Reset back to empty sq
      }
    }

  }

  function notAttacked(row, col) {
    //check if rows are valid
    for (let i = 0 ; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }

    //check top left corners
    for (let j = row-1, k = col-1; j >= 0 && k >= 0; j--, k--) {
      if (board[j][k] === 'Q') return false;
    }

    //check top right corners
    for (let a = row-1, b = col+1; a >= 0 && b < n; a--, b++) {
      if (board[a][b] === 'Q') return false;
    }

    return true;
  }

  backtrack(0)

  return queens;
};

//Time Complexity - O(n!). You are checking every single possible combination of where queens can be placed.
//Space Complexity - O(n^2). Accounting for size of the board. O(n) for space in the call stack.
