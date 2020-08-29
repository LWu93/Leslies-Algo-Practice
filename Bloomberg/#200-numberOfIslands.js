/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1


Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

/* psuedocode
if a bunch of 1s are connected, they are considered one island. That means we have to track the islands by DFS. Every time we hit an island, we DFS and begin to mark them as "visited". As we call dfs once when we hit a 1, it will recursively check its neighbors and traverse those cells to convert any of their adj 1s to "visited" cells. Double for loop through the grid and check for any 1s in order to covert to visited. The DFS will mutate in place so once the initial DFS call is finished, the grid will have changed in-place at its next iteration.
*/


const numIslands = (grid) => {
  let count = 0;

  //DFS HF
  const DFS = (grid, i, j) => {
    //bounds - if we hit any walls OR if we already visited the cell in prior recursive calls, stop.
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
      return;
    }

    grid[i][j] = '0';

    //Recursively call its adj cells
    DFS(grid, i-1, j)
    DFS(grid, i+1, j)
    DFS(grid, i, j-1)
    DFS(grid, i, j+1)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        DFS(grid,i,j)
        count++
      }
    }
  }

  return count;
};

/* n - grid.length. m - grid[i].length;
Time - O(n*m). nested loops through the grid. While we are also calling DFS inside, its simplified as the furthest it can go is up to n or m length long.
Space - O(n*m). Recursive calls. Worst case is the entire grid is 1s and we start from the top left and traverse to the bottom right which is n*m
*/
