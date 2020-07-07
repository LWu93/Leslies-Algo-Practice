/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

//Psudocode
//loop through board. If the letter in the board matches the first letter of the word, DFS
//in your DFS, you want to mark the letter as visited and DFS neighbors with the hash
//IF you ever enter a dfs call with a empty str, you've hit that word
//IF it comes back and hasn't met the word, set board[i][j] back to its original letter.
//at the end - return false

//constraints - word won't be empty. board won't be empty

var exist = function(board, word) {

  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length;j++) {
          if (board[i][j] === word[0]) {
              if (dfs(board,i,j,word,0)) return true
          }
      }
  }

  return false
};

//Using idx instead of slicing
const dfs = (board,i,j,word, idx) => {
  if (word.length === idx) return true

  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] === '!' || board[i][j] !== word[idx]) {
      return false
  }

  //set var equal to its currVal so you can backtrack
  const letter = board[i][j];

  //if currVal !== the idx we're at, you can simply return false
  if (letter !== word[idx]) return false;

  //set currVal to visited
  board[i][j] = '!'

  if (dfs(board,i-1,j,word, idx+1)
      || dfs(board,i+1,j,word, idx+1)
      || dfs(board,i,j-1,word, idx+1)
      || dfs(board,i,j+1,word, idx+1)
      ) return true

  //set visited back to its letter
  board[i][j] = letter

  return false;
}

//Time Complexity - O(n*m*l).
//Avg time complexity - n = board.length, m = board's row.length, l = longest length of word.
//Space Complexity - O(d). d - # of dfs calls in our callstack.
