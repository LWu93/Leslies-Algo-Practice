var maxAreaOfIsland = function(grid) {
    let max = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, dfs(grid, i, j))
            }
        }
    }
    return max;
};

//TEST TOP BOTTOM LEFT RIGHT
const dfs = (grid, i, j, area = 0) => {

    //check if its out of bounds;
    if (i < 0 || i > grid.length - 1 || j > grid[i].length - 1 || j < 0 || grid[i][j] === 0) {
        return 0;
    }

    if (grid[i][j] === 1) {
        grid[i][j] = 0
        area += 1
    };

    area += dfs(grid, i - 1, j)
    area += dfs(grid, i + 1, j)
    area += dfs(grid, i, j - 1)
    area += dfs(grid, i, j + 1)

    return area;
}
