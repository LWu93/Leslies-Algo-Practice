/*
This question is about implementing a basic elimination algorithm for Candy Crush.

Given a 2D integer array board representing the grid of candy, different positive integers board[i][j] represent different types of candies. A value of board[i][j] = 0 represents that the cell at position (i, j) is empty. The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

If three or more candies of the same type are adjacent vertically or horizontally, "crush" them all at the same time - these positions become empty.
After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. (No new candies will drop outside the top boundary.)
After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
If there does not exist more candies that can be crushed (ie. the board is stable), then return the current board.
You need to perform the above rules until the board becomes stable, then return the current board.

Example:

Input:
board =
[[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]

Output:
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]

Explanation: *diagram on LC*

Note:
The length of board will be in the range [3, 50].
The length of board[i] will be in the range [3, 50].
Each board[i][j] will initially start as an integer in the range [1, 2000].

*/

/**
 * @param {number[][]} board
 * @return {number[][]}
 */

/* psuedocode
you need to loop through the entire board to see if there are any crushable rows or cols. Create a HF to check each row and col

HF - checkBoard
check if the board is crushable. If it is, you want to crush and then move the candies down. Nested for loop through each row/col to look for each cell and if there is a 'c', we want to remove from that row/col

HF - crushBoard.
You need to crush the board to represent the new board after its crushed. uses a stack to check every single col

*/
var candyCrush = function(board) {
  mark(board)
  while(!isStable(board)) {
    crush(board)
    mark(board)
  }
  return board
};

//marks the candies on the board as crushable or not. If it is crushable, the element will be the negative representation of the element
function mark(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let fixed = Math.abs(board[row][col])
      if (board[row + 1] &&
        (Math.abs(board[row + 1][col]) === fixed) &&
        (board[row - 1] &&
          Math.abs(board[row - 1][col]) === fixed)) {
        board[row - 1][col] = -Math.abs(board[row - 1][col])
        board[row][col] = -Math.abs(board[row][col])
        board[row + 1][col] = -Math.abs(board[row + 1][col])
      }
      if (Math.abs(board[row][col + 1]) === fixed && Math.abs(board[row][col - 1]) === fixed) {
        board[row][col + 1] = -Math.abs(board[row][col + 1])
        board[row][col] = -Math.abs(board[row][col])
        board[row][col - 1] = -Math.abs(board[row][col - 1])
      }
    }
  }
}

//checks if board is stable at every iteration
function isStable(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] < 0) return false
    }
  }
  return true
}

//crush HF takes advantage of using a stack to store each candy that needs to be crushed as the representation of a column.
//we do a nested for loop "backwards" so we can go through each COL and add it to our stack if its a valid candy. Then we loop backwards so that we can refill in our bottom col with all valid candies. Finally, fill in the rest of the stack or col with 0s to represent empty cells.
function crush(board) {
  for (let col = 0; col < board[0].length; col++) {
    let stack = []
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] > 0) {
        stack.push(board[row][col])
      }
    }
    let bottomInd = board.length - 1
    while (stack.length) {
      board[bottomInd][col] = stack.pop()
      bottomInd--
    }
    while (bottomInd >= 0) {
      board[bottomInd][col] = 0
      bottomInd--
    }
  }
}
/* n - board.length. m - board[n].length

Time - O((n*m)^2). We need to check if the board is stable by doing a nested for loop. Then inside that while condition, we arecrushing the board and then remarking it.

Space - O(1). Editing the board in-place.

*/
