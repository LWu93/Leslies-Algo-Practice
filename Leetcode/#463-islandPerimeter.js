var islandPerimeter = function(grid) {
    let perimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                perimeter += dfs(grid,i,j)
            }
        }
    }
    return perimeter;
};

const dfs = (grid, i, j, perimeter = 0) => {

    //Top, Bottom, Left, Right
    if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[i].length - 1 || grid[i][j] === 0) {
        return 1;
    }

    //if we've visited the ele before, it'll be 2 and should not count the perimeter.
    if (grid[i][j] === 2) return 0;

    //set our visited DFS to 2
    grid[i][j] = 2;

    perimeter += dfs(grid, i-1, j) //1 //1 //1
    perimeter += dfs(grid, i+1, j) //  //  //
    perimeter += dfs(grid, i, j-1)
    perimeter += dfs(grid, i, j+1)

    // console.log("perimeter", perimeter)
    return perimeter;
}
