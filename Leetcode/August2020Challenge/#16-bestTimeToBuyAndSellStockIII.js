/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:
Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

Example 2:
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

Example 3:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */

//psuedocode - DP approach
//calculate the price of every stock as it changes from day to day(or indices) with a dp array.
//we can keep track of a max price as we loop through each price.
//also need the min for if you hold the stock or do nothing with it.
//update your dp array to reflect the new MAX val that you come upon at every iteration.
//return last val of your dp arr.

var maxProfit = function(prices) {
  if(prices.length == 0) return 0;
  let dp = new Array(prices.length).fill(0);

  for (let t = 1; t <= 2; t++) {
    let min = prices[0];
    let max = 0;

    for(let i = 1; i < prices.length; i++){
      min = Math.min(min, prices[i] - dp[i]); //min value if we do nothing/hold the stock.
      max = Math.max(max, prices[i] - min); //max value if we sell at the most minimum stock price we've seen so far
      dp[i] = max;
    }
  }

  return dp[dp.length-1];
};
//n - prices.length
//Time - O(n). t is our transations which is capped at 2. looping through prices.length
//Space - O(n). storing an array that is n long.
