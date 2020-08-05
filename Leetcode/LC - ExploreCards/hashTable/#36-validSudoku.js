/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.
The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:
Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true

Example 2:
Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false

Explanation: Same as Example 1, except with the 5 in the top left corner being
modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */

//Psuedocode
//create HF(s) for each individual row, col and 3x3 subsquare. They will check if the map already has the num aka not unique.
//checkRow will use the first for loop var row.
//checkCol will use the second for loop var col.
//checkSubBox will go through each 3x3 box using the idx's as the borders.
//if any of the checks above don't pass, return false
//if all of the above is true and we hit the end, return true

//LC post - https://leetcode.com/problems/valid-sudoku/discuss/775088/Javascript-Approach-using-maps

//Refactored second approach using a HF
var isValidSudoku = function(board) {
  let rowMap = new Map(), colMap = new Map(), subSquareMap = new Map();

  //creating a set for each rowMap, colMap, and subSquareMap
  for (let i = 0; i < 9; i++) {
    rowMap.set(i,new Set())
    colMap.set(i,new Set())
    subSquareMap.set(i,new Set())
  };

  //Helper Func to help track each row, col and subsquare
  var mapUniques = function(map, dir, num) {
    if (map.get(dir).has(num)) return true;
    map.get(dir).add(num)
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      let curr = board[row][col]
      if (curr == '.') continue;

      //covers rows
      if (mapUniques(rowMap,row, curr)) return false;

      //covers cols
      if (mapUniques(colMap,col, curr)) return false;

      //covers each subBox as 3x3s using the idx's as a border
      //we can Math.floor(row/3) * 3 + Math.floor(col/3) to distinctly separate the subSquares
      let subSquare = (Math.floor(row/3) * 3) + Math.floor(col/3);
      if (mapUniques(subSquareMap, subSquare, curr)) return false
    }
  }

  return true;
};

var isValidSudoku = function(board) {
  let rowMap = new Map(), colMap = new Map(), subBoxMap = new Map(), rowBox, colBox;

  //creating a set for each rowMap, colMap, and subBoxMap
  for (let i = 0; i < 9; i++) {
    rowMap.set(i,new Set())
    colMap.set(i,new Set())
    subBoxMap.set(i,new Set())
  };

  for (let row = 0; row < board.length; row++) {
    //covers 1-3 of rowBox rows
    if (row < 3) rowBox = 0
    else if (row < 6) rowBox = 3
    else rowBox = 6

    for (let col = 0; col < board[row].length; col++) {
      let curr = board[row][col]
      if (curr == '.') continue;

      //covers rows
      if (rowMap.get(row).has(curr)) return false;
      rowMap.get(row).add(curr)

      //covers cols
      if (colMap.get(col).has(curr)) return false;
      colMap.get(col).add(curr)

      //covers 1-3 of colBox
      if (col < 3) {
        colBox = rowBox;
        if (subBoxMap.get(colBox).has(curr)) return false;
        subBoxMap.get(colBox).add(curr)
      } else if (col < 6) {
        colBox = rowBox + 1;
        if (subBoxMap.get(colBox).has(curr)) return false;
        subBoxMap.get(colBox).add(curr)
      } else {
        colBox = rowBox + 2;
        if (subBoxMap.get(colBox).has(curr)) return false;
        subBoxMap.get(colBox).add(curr)
      }
    }
  }

  return true;
};
//n - # of rows ==> 9. m - # of cols ==> 9
//Time - O(n * m)
//Space - O(3* (n*m)) ==> O(n*m). Worst case is each map gets filled up with #1-9s

