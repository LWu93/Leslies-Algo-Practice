/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation:
Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
//psuedocode
//we want to find the min val where we should buy stock
//we also want to calculate where we can find the maximumProfit when we sell it
//have 2 vars, maxProfit and minVal which will keep track of both
//IF - currPrice is less than our minVal, update minVal
//ELSE - find Max of maxProfit we would get if we sell now vs our previous selling points
var maxProfit = function(prices) {
  let minVal = Infinity, max = 0; //assuming all nums are positive

  for (const price of prices) {
    if (price < minVal) {
      minVal = price
    } else {
      max = Math.max(max, price - minVal)
    }
  }

  return max
};
//n - prices.length
//Time - O(n).
//Space - O(1)
