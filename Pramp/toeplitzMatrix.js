/*   Toeplitz Matrix

A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same element. Given a non-empty matrix arr, write a function that returns true if and only if it is a Toeplitz matrix. The matrix can be any dimensions, not necessarily square.

For example,

[[1,2,3,4],
 [5,1,2,3],
 [6,5,1,2]]
is a Toeplitz matrix, so we should return true, while

[[1,2,3,4],
 [5,1,9,3],
 [6,5,1,2]]
isn’t a Toeplitz matrix, so we should return false.

Constraints:

[time limit] 5000ms
[input] array.array.integer arr
0 ≤ arr.length ≤ 20
0 ≤ arr[i].length ≤ 20
0 ≤ arr[i][j] ≤ 20
[output] boolean
*/


/*
============== HINT ==============

If your peer is stuck, ask them if they know how to traverse a undirected graph.
At this point, you peer may come up with a recursive solution by using a Breadth-First Search (BFS) or a Depth-First Search (DFS) algorithm. While this works, see if you can nudge them toward an iterative solution. This is not a must, but preferable.
Make sure that your peer’s code does not access out of bound indices, especially when trying to traverse adjacent cells in binaryMatrix.
Watch out for duplicate island counting in your peer’s code. It’s important that a visited cell of 1 is marked properly to avoid redundant counting.
Any solution that takes more than O(N⋅M) time isn’t optimal.

============== ANSWER ==============

This problem is very similar to counting the number of connected components in an Undirected Graph. However, Graph Theory isn’t necessary to solve this problem or to understand its solution. In an undirected graph, a connected component is a group of vertices in which every vertex is connected to at least one other vertex. In a similar way, an island in the matrix is a group of adjacent (connected) 1s.

To solve this problem, we’ll traverse binaryMatrix and every time we come across a cell of 1 we’ll do the following: Change that cell and all its vertically and horizontally (but not diagonally) adjacent 1s into -1s. We do this “expansion” in order to avoid recounting of islands. Increment islands - which is our counter for number of islands - by 1. Expanding from a cell whose value is 1 to other adjacent 1s in binaryMatrix is similar to running a Breadth-First Search (BFS) or a Depth-First Search (DFS).

In our case, we’ll avoid using a recursion and instead opt for an iterative approach to expand to all adjacent 1s. We do so by using queue that holds the next indices to visit. We keep expanding to other adjacent 1s as long as the queue is not empty. Whenever we encounter a value of -1 in our traversal, we ignore it since it is part on an island we’ve already counted.

Pseudocode:

function getNumberOfIslands(binaryMatrix):
    islands = 0
    rows = binaryMatrix.length # number of rows
    cols = binaryMatrix[0].length # number of columns

    for i from 0 to rows-1:
        for j from 0 to cols-1:
            if (binaryMatrix[i][j] == 1):
                markIsland(binaryMatrix, rows, cols, i, j)
                islands++

    return islands

function markIsland(binaryMatrix, rows, cols, i, j):
    q = new Queue()
    q.push([i,j])
    while (!q.isEmpty()):
        item = q.pop()
        x = item[0]
        y = item[1]
        if (binaryMatrix[x][y] == 1):
            binaryMatrix[x][y] = -1
            pushIfValid(q, rows, cols, x-1, y)
            pushIfValid(q, rows, cols, x, y-1)
            pushIfValid(q, rows, cols, x+1, y)
            pushIfValid(q, rows, cols, x, y+1)


function pushIfValid(q, rows, cols, x, y):
    if (x >= 0 AND x < rows AND y >= 0 AND y < cols):
        q.push([x,y])

Time Complexity: let N and M be the numbers of columns and rows in binaryMatrix, respectively. Each cell in binaryMatrix is visited a constant number of times. Once during the iteration and up to 4 times during an island expansion. Therefore, the time complexity is linear in the size of the input, i.e. O(N⋅M).

Space Complexity: since we are allocating a queue in the algorithm, the space complexity is linear O(N⋅M). For instance, consider a matrix that is all 1s.

*/
