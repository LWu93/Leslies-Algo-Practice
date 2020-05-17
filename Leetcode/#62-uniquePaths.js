var uniquePaths = function(row, col) {
    let arrayOfOnes = new Array(col).fill(1)
    let dpGrid = new Array(row).fill(arrayOfOnes)

    for (let i = 1; i < dpGrid.length; i++) {
        for (let j = 1; j < dpGrid[i].length; j++) {
            dpGrid[i][j] = dpGrid[i-1][j] + dpGrid[i][j-1]
        }
    }
    // console.log(dpGrid)

    return dpGrid[row-1][col-1];
};

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

// Input: m = 7, n = 3
// Output: 28
