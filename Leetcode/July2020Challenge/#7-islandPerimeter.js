/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.



Example:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

//Psudocode
//loop through the board, if we hit water, we want to recursively call our DFS helper func.
//Since there's only one island, you can return DFS from there as it should traverse its neighbors.
//DFS - should take in (grid,i,j,perimeter = 0). The perimeter should start at 0 for every DFS
//we need to account that each square we hit, we add its 4 sides when we hit bounds.
//IF we go back to a square we've visited, we don't want to account for its side but still DFS
//Continue until you hit no more water or unvisited neighbors

const islandPerimeter = (grid) => {
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 1) {
              return dfs(grid,i,j)
          }
      }
  }
}

const dfs = (grid, i, j, perimeter = 0) => {
  //Bounds - If we see water, return 1 since that's a side
  if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[i].length - 1 || grid[i][j] === 0) {
      return 1;
  }

  //If we come back to a visited square, just return 0 or perimeter.
  if (grid[i][j] === "V") return perimeter;

  //set our current square to "V"
  grid[i][j] = "V";

  //Add perimeter from each square it traverses.
  perimeter += dfs(grid, i-1, j)
  perimeter += dfs(grid, i+1, j)
  perimeter += dfs(grid, i, j-1)
  perimeter += dfs(grid, i, j+1)

  return perimeter;
}

//Time Complexity - O(n*m*l). n-length of grid. m-length of grid[i]. l-length of island
//Space Complexity - O(l). l-# of dfs calls in our callstack.
