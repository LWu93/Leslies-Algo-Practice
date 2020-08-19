/*  Number of Paths
You’re testing a new driverless car that is located at the Southwest (bottom-left) corner of an n×n grid. The car is supposed to get to the opposite, Northeast (top-right), corner of the grid. Given n, the size of the grid’s axes, write a function numOfPathsToDest that returns the number of the possible paths the driverless car can take.

For convenience, let’s represent every square in the grid as a pair (i,j). The first coordinate in the pair denotes the east-to-west axis, and the second coordinate denotes the south-to-north axis. The initial state of the car is (0,0), and the destination is (n-1,n-1).

The car must abide by the following two rules: it cannot cross the diagonal border. In other words, in every step the position (i,j) needs to maintain i >= j. See the illustration above for n = 5. In every step, it may go one square North (up), or one square East (right), but not both. E.g. if the car is at (3,1), it may go to (3,2) or (4,1).

Explain the correctness of your function, and analyze its time and space complexities.

Example:

input:  n = 4

output: 5 # since there are five possibilities:
          # “EEENNN”, “EENENN”, “ENEENN”, “ENENEN”, “EENNEN”,
          # where the 'E' character stands for moving one step
          # East, and the 'N' character stands for moving one step
          # North (so, for instance, the path sequence “EEENNN”
          # stands for the following steps that the car took:
          # East, East, East, North, North, North)

Constraints:
[time limit] 5000ms
[input] integer n
1 ≤ n ≤ 100
[output] integer
*/

//Recursive Approach - first approach. Optimize by using memo
function numOfPathsToDest(n) {
  return numPathsToSquare(n-1,n-1)
}

const numPathsToSquare = (i, j, memo) => {
  //Edge cases
  if (i < j) return 0;
  else if (i < 0 || j < 0) return 0;
  //Base case
  else if (i == 0 && j == 0) return 1;

  return numPathsToSquare(i-1,j) + numPathsToSquare(i, j-1)
}
//Time - O(n^2).
//Space - O(n^2).

//DP approach
function numOfPathsToDest(n) {
  let dp = [];

  for (let i = 0; i < n; i++) {
    dp[i] = [1];  //make index 0 of all arrays 1
  }

  //start at index 1 to account for row above
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      //looping through and filling in the matrix, calculating top and left
      let top = dp[i-1][j] || 0; //bounds - if there is no top val, it returns 0
      let left = dp[i][j-1] || 0; //bounds - if there is no left val, it returns 0
       dp[i][j] = left + top;
     }
   }

   return dp[n-1][n-1] || 1;
}
//Time - O(n^2).
//Space - O(n^2).

/*
================= HINTS =================

While this question may seem hard to comprehend at first sight, it is easily solved in the “divide and conquer” recursive method.
Encourage your peer to implement first any solution, even if it is not optimal. Once done, ask them to optimize it.
If your peer doesn’t have any intuition to the question, guide them towards answering a more general question - given (i,j), calculate all possible ways to travel from (0,0) to (i,j). Also, suggest your peer to draw a grid and try to calculate it manually for a few squares.
Another good hint is to direct to first think about the obvious base cases, e.g. if the square (i,j) is on the other side of the border or if it is out of the grid (0 ways).
If your peer still doesn’t have a clue, explain the recursive relation provided in the solution.
Your peer should get a full score only if the function achieves O(n^2) time complexity, and O(n) space complexity (or better), and doing so without any hints.
Obviously, we do not expect your peer to be familiar with the combinatorial solution, or discover it by themselves. Moreover, it’s OK if your peer discovers the combinatorial approach for this question, but since this is a coding interview, if your peer is familiar with it beforehand, encourage them to find another recursive solution to the question.

================= ANSWER =================

The recursive approach
The simplest way to create this function is to write a recursive function, that calculates the possible paths to each square on the grid, using the squares already calculated. Our output is the paths from (0,0) to (n-1,n-1). Notice the following recursive relation: for every path from (0,0) to (i,j), either: The last step is N, in which case it is generated by a legitimate path to (i,j-1), and then one step north. The last step is E, in which case it is generated by a legitimate path to (i-1,j), and then one step east. For example, take all paths to (4,3). The paths that end with an N, such as “EEENN”, induce paths to (4,2) by removing the last N (“EEEN”). On the other hand, the paths that end with an E, such as “ENENE”, induce paths to (3,3) by removing the last E (“ENEN”).

This indicates the number of ways to square (i,j) is equal to the number of ways to square (i-1,j) plus the number of ways to (i,j-1). We build the function that uses this recursive relation, to calculate the number of paths. Notice that the function may call the same square multiple times, so we use the memoization technique to reduce the number of calls significantly:

Pseudocode:

# input: n - a positive integer representing the grid size.
# output: number of valid paths from (0,0) to (n-1,n-1).

function numOfPathsToDest(n):
    # allocate a 2D array for memoization
    memo = [][]

    # the memoization array is initialized with -1
    # to indicate uncalculated squares.
    for i from 0 to n-1:
        for j from 0 to n-1:
            memo[i][j] = -1

    return numOfPathsToSquare(n-1, n-1, memo)


# input:
#    i, j - a pair of non-negative integer coordinates
#    memo - a 2D memoization array.
# output:
#    number of paths from (0,0) to the square represented in (i,j),

function numOfPathsToSquare(i, j, memo):
    if (i < 0 OR j < 0):
        return 0
    else if (i < j):
        memo[i][j] = 0
    else if (memo[i][j] != -1):
        return memo[i][j]
    else if (i == 0 AND j == 0):
        memo[i][j] = 1
    else:
        memo[i][j] = numOfPathsToSquare(i, j -1, memo) +
        numOfPathsToSquare(i - 1, j, memo)

    return memo[i][j]
Time Complexity: first, notice that in order to calculate the number of paths to a specific square, we need all the square south and west to it. This implies that all squares beneath the diagonal are calculated. In addition, almost every square value is used twice - for the square north to it and east to it (except for the border squares, which are used once). This means that our time complexity is O(n^2), since the recursive function is called once or twice for about half of the squares, and each call takes O(1) time.

Space Complexity: the memoization requires the space complexity to be also O(n^2), since we save values for all squares.

The iterative approach
The space complexity can be improved to O(n) if we choose an iterative solution, which uses the same recursive relation. Notice that for calculating the paths for square (i,j) we only need squares (i-1,j) and (i,j-1). Thus, by calculating the number of paths row by row from south to north, and west to east in the rows, the function needs to save only the last two rows. This may be implemented as follows:

Pseudocode:

# input: n - a positive integer representing the grid size.
# output: number of valid paths from (0,0) to (n-1,n-1).

function numOfPathsToDest(n):
    if (n == 1):
        return 1

    lastRow = []
    for i from 1 to n-1:
        lastRow[i] = 1 # base case - the first row is all ones

    currentRow = []

    for j from 1 to n-1:
        for i from j to n-1:
            if (i == j):
                currentRow[i] = lastRow[i]
            else:
                currentRow[i] = currentRow[i-1] + lastRow[i]
        lastRow = currentRow

    return currentRow[n-1]
Time Complexity: as we see, the function still calculates every square south-east to the diagonal, leaving the time complexity to be O(n^2),

Space Complexity: the space complexity is reduced to O(n) since we are memoizing only the last two rows.

Combinatorial Remark (optional read): There is a closed formula that answers this question, called the Catalan Number Formula. This formula is based on the fact that every path from (0,0) to (n-1,n-1) is parallel to a sequence of n-1 pairs of parentheses which are correctly matched: Take a path sequence of N’s and E’s. since the car begins at (0,0) and ends at (n-1,n-1), it needs to go exactly n-1 times East, and n-1 times North. Put differently, all sequences consist of n-1 E’s and n-1 N’s. Just like every balanced parenthesis string has the same number of “(“ and “)” signs. Furthermore, in every pair (i,j), the first coordinate is the number of times the car went east so far, and the second coordinate is the number of times the car went north. This indicates that the diagonal restriction means the number of E’s, in every prefix of the string is equal or greater than the number of N’s. Just as in every balanced parenthesis string, the number of “(“ is is equal or greater than the number of “)”. The number of the balanced parenthesis strings of n-1 pairs, is given by the Catalan Number Formula: . The proof for its correctness is beyond our scope, but is located in the Catalan Number Wikipedia page.

Note that although this formula is mathematically closed, calculating the Binomial Coefficient , is done in O(n) runtime complexity, so calculating the number directly doesn’t improve the asymptotic runtime complexity. But direct calculation spares the need for saving previous values, so the space complexity may be reduced to O(1) this way.

*/
