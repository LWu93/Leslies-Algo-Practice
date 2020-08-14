/*
Matrix Spiral Copy
Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should return that array. Analyze the time and space complexities of your solution.

Example:
input:  inputMatrix  = [ [1,    2,   3,  4,    5],
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]

output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

See the illustration below to understand better what a clockwise spiral order looks like.

Constraints:
[time limit] 5000ms
[input] array.array.integer inputMatrix
1 ≤ inputMatrix[0].length ≤ 100
1 ≤ inputMatrix.length ≤ 100
[output] array.integer
*/

/*
psuedocode
we want to double for loop through the maxtrix. have a res arr to store nums
we want to track startRow, endRow, startCol, endCol
as we loop through through the first row, we need to startRow++.
once we finish looping to the endRow, endCol--
once we finish looping through to the startCol, endRow--
left side - once we finish, startCol ++
*/

function spiralCopy(matrix) {
  let res = [], startRow = 0, startCol = 0, endRow = matrix.length-1, endCol = matrix[0].length-1;

  while (startRow <= endRow && startCol <= endCol) {
     //top
     for (let i = startCol; i <= endCol; i++) {
       res.push(matrix[startRow][i])
     }
    startRow++

    //right
    for (let j = startRow; j <= endRow; j++) {
      res.push(matrix[j][endCol])
    }
    endCol--

    if (startRow <= endRow) {
       //bottom
      for (let k = endCol; k >= startCol; k--) {
        res.push(matrix[endRow][k])
      }
      endRow--
    }

    if (startCol <= endCol) {
      //left
      for (let l = endRow; l >= startRow; l--) {
        res.push(matrix[l][startCol])
      }
      startCol++
    }
  }

  return res;
}
//n - matrix.length. m - matrix[0].length
//Time - O(n*m)
//Space - O(n*m)

/*
============== HINTS =================
Most of the work on this question is manipulating indices. Make sure that your peer is not using negative or out of bounds indices at any point.
Make sure that all values are copied and that no value is copied more than once.
If your peer is stuck, ask the to look at the illustration provided above and try to discern any patterns from the shape of the spiral.
Any solution that involves changing the matrix is definitely not advised. There is no need to do that. If you peer gets there, try to ask them why.
If there is time left, ask your peer to modify the solution to rely only on two indices instead of four. This can be achieved by counting the number of copied rows and the number of copied columns from each side. The counter will increment after each two rows (top & bottom) or two columns (right & left) are copied.

============= ANSWER =================
Matrix Spiral Copy
Let inputMatrix be a matrix of numRows rows and numCols columns.

The general idea of the solution is to copy the 4 edges of the spiral rim we currently at and then move on to copy the next (inner) rim. We keep doing that until we reached to the end of the spiral. We copy edges in the following order:

Copy the uppermost row from left to right.
Copy the rightmost column from top to bottom.
Copy the lowermost row from right to left.
Copy the leftmost column from bottom to top.
In order to figure what is the next row/column to copy in the spiral order we maintain 4 indices:

topRow - index of the the uppermost row to be copied, starting from 0 and incrementing.
btmRow - index of the the lowermost row to be copied, starting from numRows-1 and decrementing.
leftCol - index of the leftmost column to be copied, starting from 0 and incrementing.
rightCol - index of the the rightmost column to be copied, starting from numCols-1 and decrementing.

Pseudocode:

function spiralCopy(inputMatrix):
    numRows = inputMatrix.length
    numCols = inputMatrix[0].length

    topRow = 0
    btmRow = numRows - 1
    leftCol = 0
    rightCol = numCols - 1
    result = []

    while (topRow <= btmRow AND leftCol <= rightCol):
        # copy the next top row
        for i from leftCol to rightCol:
            result.push(inputMatrix[topRow][i])
        topRow++

        # copy the next right hand side column
        for i from topRow to btmRow:
            result.push(inputMatrix[i][rightCol])
        rightCol--

        # copy the next bottom row
        if (topRow <= btmRow):
            for i from rightCol to leftCol:
                result.push(inputMatri[btmRow][i])
            btmRow--

        # copy the next left hand side column
        if (leftCol <= rightCol):
            for i from btmRow to topRow:
                result.push(inputMatrix[i][leftCol])
            leftCol++

    return result

Time Complexity: iterating over N∙M cells, where N is the number of rows and M the number of columns, and copying them into any array takes O(N∙M). Note that this is a linear time complexity since the size of the input is O(N∙M).
Space Complexity: we used an auxiliary array of size N∙M as a return value, hence the space complexity is O(N∙M). This is a linear space complexity since the size of the input is O(N∙M) as well.
*/
