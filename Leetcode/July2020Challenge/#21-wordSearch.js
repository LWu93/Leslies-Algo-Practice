/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

Constraints:

board and word consists only of lowercase and uppercase English letters.
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3

*/

//Psuedocode
//loop through the board, and look for where the word[0] === letter
//IF it does match, you want to DFS that letter.
//DFS(board,i,j,word). It will look in 4 directions to see if the next letter matches
//IF we hit the case where the word is an empty string, you can return true - before bounds checks
//ELSE DFS will mark that letter as visited or (#) and then traverse TBLR
//TBLR will take in the word.slice(1)
//Finally, you want to check if any of those return true. If one returns true, return true, else return false
//IF DFS doesn't return true, continue looping through the board. return false if you reach the end
var exist = function(board, word) {
  if (!word) return true;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if (DFS(board,i,j,word)) return true;
      }
    }
  }

  return false;
}

const DFS = (board,i,j,word) => {
  //Base case
  if (word.length === 0) return true

  //Bounds
  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== word[0] || board[i][j] === '#') {
      return false
  }

  let temp = board[i][j]; //store letter so we can change it back after we mark as visited
  let newWord = word.slice(1);

  board[i][j] = '#'; //mark as visited
  //TBLR - if any direction yields true, we want to restore the previous letter and return true. otherwise, restore prev letter and return false
  if (DFS(board,i-1,j,newWord) ||
      DFS(board,i+1,j,newWord) ||
      DFS(board,i,j-1,newWord) ||
      DFS(board,i,j+1,newWord)
    ) {
      board[i][j] = temp; //restore previous letter
      return true
    } else {
      board[i][j] = temp; //restore previous letter
      return false
    }
}
