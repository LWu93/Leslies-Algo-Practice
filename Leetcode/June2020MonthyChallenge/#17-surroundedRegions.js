var solve = function(board) {
  if(!board.length) return;

  for(let i = 0; i < board.length; i++){
      dfs(board, i, 0)
      dfs(board, i, board[0].length-1)
  }

  for(let i = 0; i < board[0].length-1; i++){
      dfs(board, 0 , i);
      dfs(board, board.length-1, i)
  }
  for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[0].length; j++){
          if(board[i][j] === 'O'){
              board[i][j] = 'X'
          }
          if(board[i][j] === 'V'){
              board[i][j] = 'O'
          }
      }
  }
};

const dfs = (board, i, j) => {
  if(i < 0 || i > board.length -1 || j < 0 || j > board[0].length - 1){
      return;
  }

  if(board[i][j] === 'X' || board[i][j] === 'V'){
      return;
  }
  //Set to visited
  board[i][j] = 'V';

  dfs(board, i-1, j);
  dfs(board, i + 1, j);
  dfs(board, i, j - 1);
  dfs(board, i, j + 1);
}
