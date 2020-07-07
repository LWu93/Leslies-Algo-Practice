/*
In a gold mine grid of size m * n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position you can walk one step to the left, right, up or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.


Example 1:

Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
Output: 24
Explanation:
[[0,6,0],
 [5,8,7],
 [0,9,0]]
Path to get the maximum gold, 9 -> 8 -> 7.
Example 2:

Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
Output: 28
Explanation:
[[1,0,7],
 [2,0,6],
 [3,4,5],
 [0,3,0],
 [9,0,20]]
Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

//Psudocode
//have a var maxGold to keep track of the maximum gold it returns from each recursive dfs call
//loop through the grid and IF the curr ele is NOT 0, you then want call dfs
//dfs should return the maxGold it could potentially get from going TDLR
//dfs - should keep track of each individual traversal and return the gold from its travels
//dfs - will return the max from each top/bottom/left/right traversal
//maxGold will take either the maxGold its currently at or the new val from the dfs call
//return maxGold

var getMaximumGold = function(grid) {
    let maxGold = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            maxGold = Math.max(maxGold, dfs(grid,i,j))
        }
    }

    return maxGold;
};

const dfs = (grid,i,j, goldCount = 0) => {

    if (i < 0 || i>= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
        return goldCount
    }

    let currVal = grid[i][j];
    //add currVal to goldCount
    goldCount += currVal;

    //mark as visited
    grid[i][j] = 0;

    let top = dfs(grid,i-1,j,goldCount)
    let bottom = dfs(grid,i+1,j,goldCount)
    let left = dfs(grid,i,j-1,goldCount)
    let right = dfs(grid,i,j+1,goldCount)

    //after the dfs calls, turn the currVal back to its original val.
    grid[i][j] = currVal

    return Math.max(top,bottom,left,right)
}

//Time Complexity - O(n*m*d). n - length of grid. m - length of grid[i]. d - depth until you hit out of bounds or a 0.
//Space Complexity - O(d). d - # of dfs calls in our callstack.
