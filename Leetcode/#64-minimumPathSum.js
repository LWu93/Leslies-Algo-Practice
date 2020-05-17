//Alex's Solution
var minPathSum = function(grid) {

  /*
  //previous grid
[ [ 1, 3, 1 ],
  [ 1, 5, 1 ],
  [ 4, 2, 1 ]
]
//new dpGrid to find the minimum pathing
[ [ 1, 4, 5 ],
  [ 2, 7, 6 ],
  [ 6, 8, 7 ]
]
  */

  let dpGrid = [];

  for (let i = 0; i < grid.length; i++) {
    dpGrid.push(new Array(grid[0].length).fill(0))
  };

  for (let i = 0; i < dpGrid.length; i++) {
    for (let j = 0; j < dpGrid[i].length; j++) {
      if (i === 0 && j === 0){
        dpGrid[i][j] = grid[i][j]
        continue;
      }
      dpGrid[i][j] += grid[i][j]
      if (i === 0) {
        dpGrid[i][j] += dpGrid[i][j-1]
      } else if (j === 0) {
        dpGrid[i][j] += dpGrid[i-1][j]
      } else {
        dpGrid[i][j] += Math.min(dpGrid[i-1][j], dpGrid[i][j-1])
      }
    }
  }

    // console.log(dpGrid)
    return dpGrid[grid.length -1][grid[0].length -1]
};
