/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

*/

/**
 * @param {number} n
 * @return {number}
 */

//Psuedocode
//DP approach - we know that at each step, there will be a # of diff ways to get to n stairs.
//considering steps start at 1(including idx), we can build out the steps to see the pattern
//[0,1,2,3,5,8]
//we can see the pattern that builds.. every unique way to get to n steps is the addition of its previous 2 steps
var climbStairs = function(n) {
  if (n <= 0) return 0
  let dp = [1,1]

  for (let i = 2; i <= n; i++) {
      dp[i] = dp[i-2] + dp[i-1]
  }
  return dp[n]
};

//Time - O(n)
//Space - O(n)
