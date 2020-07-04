/**
 * @param {number} n
 * @return {number}
*/

/*
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example:

Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
Note:

1 is typically treated as an ugly number.
n does not exceed 1690.

*/

const nthUglyNumber = (n) => {
  //keep track of your prime factors
  let f2 = 0, f3 = 0, f5 = 0, dp = [1]

  for(let i = 1; i < n; i++){
    let min = Math.min(dp[f2]*2,dp[f3]*3,dp[f5]*5)
    if(min == dp[f2]*2) f2++
    if(min == dp[f3]*3) f3++
    if(min == dp[f5]*5) f5++
    dp[i] = min
  }

  return dp[n-1]
};

//Time Complexity - O(n). n - size of n.
//Space Complexity - O(u). u - how many ugly nums are produced from the size of n.
