const numIslands = (grid) => {
  //do a nested for loop through the grid in order to traverse each point
  //we will have a count = 0 for each island thats not connected
  //call dfs when we hit land === '1'.
  //When we call Dfs, it will traverse its neighbors and mark all land as visited or '0'/water in this case.
  //we increment count so that once the recursive calls stop, it's turned all its connected land to visited

  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        count++;
      }
    }
  }

  return count;
};

const dfs = (matrix, i, j, count = 0) => {
  //top, bottom, left, right
  if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length) {
    return 0;
  }
  //if we hit land, we want to return 0
  if (matrix[i][j] === '0') return '0';

  //mark water as visited or '0' since they will be considered an island
  matrix[i][j] = '0';

  //check to see if these are an island in itself
  //these will call itself so that it hits every point of land thats connected
  dfs(matrix, i - 1, j)
  dfs(matrix, i + 1, j)
  dfs(matrix, i, j - 1)
  dfs(matrix, i, j + 1)
}
