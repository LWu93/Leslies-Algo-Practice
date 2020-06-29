var uniquePaths = function(row, col) {
  //create a dp matrix that will mirror the grid we need
  let dp = new Array(row).fill().map(ele => new Array(col).fill(1))

  //we can skip the first row & col since we've filled it all with 1's.
  //they take atleast a minimum of 1 step to get there.
  //as you loop through the dp matrix, you want to add the top and left coords of itself to calculate     its new value
  for (let i = 1; i < dp.length; i++) {
      for (let j = 1; j < dp[i].length; j++) {
          dp[i][j] = dp[i-1][j] + dp[i][j-1]
      }
  }
  //return the new calculated values of the dp grid at row-1 and col-1
  return dp[row-1][col-1]
};
