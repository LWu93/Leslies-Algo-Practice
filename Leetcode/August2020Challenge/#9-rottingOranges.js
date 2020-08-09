/*
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

Example 1:
Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

Note:
1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

//psuedocode
//loop through the matrix and track fresh oranges(count) and rotting oranges
//We want to use a queue to BFS through each rotting orange so we can count the increment in mins

var orangesRotting = function(grid) {
  let rottenOranges = [], fresh = 0, minutes = 0;
  const TBLR = [[0, -1], [0, 1], [-1, 0], [1, 0]];

  //track fresh and rotten oranges
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) fresh++
      else if (grid[i][j] == 2) rottenOranges.push([i,j]) //coords
    }
  }

  //while there are still fresh oranges and rottenOranges, rot their adj TBLR oranges
  while (fresh && rottenOranges.length) {
    //use arr to store next set of rotting oranges so we can track its minute++
    let rottingOranges = []

    while (rottenOranges.length) {
      let [i,j] = rottenOranges.pop(); //order doesn't matter as they all rot at the same tick.

      //TBLR loop
      for (let k = 0; k < 4; k++) {
        let [x,y] = [i + TBLR[k][0], j + TBLR[k][1]]; //new coords

        //if the new coord is truthy and if it is a fresh orange, make it rotten.
        //fresh-- and push the now rotting orange into rottingOranges
        if (grid[x] && (grid[x][y] == 1)) {
          grid[x][y] = 2;
          fresh--;
          rottingOranges.push([x,y])
        }
      }
    }

    //our rottenOranges is now storing the oranges that were fresh and now rotten. Next tick.
    rottenOranges = rottingOranges;
    minutes++;
  }

  if (fresh) return -1; //we can't reach all the fresh oranges aka it didn't rot all of them.
  return minutes;
};
//n - grid.length, m - grid[i].length, k - max # of rotting -> fresh in 1 tick
//Time - O(n*m + k). loop through matrix. while loop may potentially loop as many times as n*m in worse case as # of rotting oranges converts fresh oranges to rot === n*m
//Space - O(n*m). worst case, every orange is rotten and we store in rottenOranges.
