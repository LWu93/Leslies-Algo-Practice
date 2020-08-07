/*
Say you have an array prices for which the ith element is the price of a given stock on day i.
Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:
Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4. Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

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

//psuedocode
//as we loop through prices, there will be a max profit at the height of a slope and a min profit at the bottom. That means as our slope grows upwards, we're adding to the profit from the bottom.
//we can use this info to continue adding to profit as we iterate through each step.
//since there is nothing hindering us from buying/selling, we add every time the next price is greater than the prev price
//ex:[1,2,3,7,5,6,3]
//starting at 1st idx, since 2 > 1 we can add 1 to our total, which is currPrice - prevPrice
//this pattern continues until we hit 7. our total is now 6. since 5 is !> 7, we've "sold" at 7. We dont do anything at this step which means we're either holding for a better price or buying now.
//since the next time this case is satisfied, 6 > 5, we add 1 and consider it that we bought at 5 and then sold at 6 since the next case 3 !> 6

var maxProfit = function(prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) {
      profit += prices[i] - prices[i-1]
    }
  }

  return profit;
};
//Time - O(n)
//Space - O(1)
