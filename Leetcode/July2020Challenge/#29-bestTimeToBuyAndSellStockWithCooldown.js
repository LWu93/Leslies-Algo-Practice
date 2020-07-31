/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)

Example:
Input: [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]

Additional Examples:

Input: [1,2,3,4,2]
Output: 3
Explanation: transactions = [buy, hold, hold, sell, cooldown]. You have the option to hold or do nothing.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */

//psuedocode
//DP approach to find the maximum potential profit.
//DP will check at every point, if we buy, what is the next best potential sell date. have to acc for cooldown period
//We have 3 options
// Buy - either buy stock today or do nothing with prev stock we bought. Math.max(buy, prev-curr price)
// Sell - sell a stock today and calc profits. buy + currPrice
// Rest - we previously sold stock and have to wait before buying. OR continue holding stock and do nothing. Math.max(rest, sell)
//Have 3 vars to keep track of the options
var maxProfit = function(prices) {
  let buy = -Infinity, sell = 0, rest = 0; //assuming all nums are positive

  for (let i = 0; i < prices.length; i++) {
    //calculate the maximum potential of future prices and set them to the vars
    let nextBuy = Math.max(buy, rest - prices[i]);
    let nextSell = buy + prices[i]
    let nextRest = Math.max(rest, sell)
    // console.log(nextBuy,nextSell,nextRest)
    buy = nextBuy
    sell = nextSell
    rest = nextRest
  }
  //return the max from either selling at each point or holding stocks to sell at a better time
  return Math.max(sell, rest);
};

//n - prices.length
//Time - O(n).
//Space - O(1).
