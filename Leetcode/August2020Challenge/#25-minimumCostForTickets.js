/*
In a country popular for train travel, you have planned some train travelling one year in advance.  The days of the year that you will travel is given as an array days.  Each day is an integer from 1 to 365.

Train tickets are sold in 3 different ways:

a 1-day pass is sold for costs[0] dollars;
a 7-day pass is sold for costs[1] dollars;
a 30-day pass is sold for costs[2] dollars.
The passes allow that many days of consecutive travel.  For example, if we get a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.

Return the minimum number of dollars you need to travel every day in the given list of days.

Example 1:
Input: days = [1,4,6,7,8,20], costs = [2,7,15]
Output: 11

Explanation:
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
In total you spent $11 and covered all the days of your travel.

Example 2:
Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
Output: 17

Explanation:
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
In total you spent $17 and covered all the days of your travel.


Note:
1 <= days.length <= 365
1 <= days[i] <= 365
days is in strictly increasing order.
costs.length == 3
1 <= costs[i] <= 1000
*/

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

//psuedocode - DP approach
//store the curr minimum needed to go through the days as an array
//we have to track each day, so that we are accounting for
//1 - paying for 1 day. 2 - if a 7day is cheaper than a bunch of 1 days. 3 - same for 30days vs 7 and 1
//We want the Math.min() of all 3 prices above
//Track each individual pass by adding costs[0] to DP array
//Track each weekly pass by checking between prev price in DP arr and its idx point - 7. add costs
//Do the same with monthly pass and check between yesterdays price, last weeks(if it exists) or 0, and last months or 0

var mincostTickets = function(days, costs) {
  const lastDay = days[days.length - 1];
  const set = new Set(days);

  const dp = new Array(lastDay + 1).fill(0);

  for (let i = 1; i <= lastDay; i++) {
    if (!set.has(i)) dp[i] = dp[i - 1]; //if this day doesn't exist, its just the last days price
    //** notes below
    else dp[i] = Math.min(
      dp[i - 1] + costs[0],
      dp[Math.max(0, i - 7)] + costs[1],
      dp[Math.max(0, i - 30)] + costs[2]
    );
  }

  return dp[lastDay];
};

/* Check first case - where we just pay for a daily ticket. Then check if we bought a weekly pass, if the price would be less than if we bought it a week ago (i-7). If we didnt travel, price would be the same and first day pass will be less than weekly pass. If we did travel and bought x amount of day passes, by the time we get to the day where we buy 1 more daily pass vs a weekly, we will take the MIN price of that day.
        Ex: days = [1,4,6,7,8,20], costs = [2,7,15]. day 1 - min(2, 7). day 4 - min((2+2 aka adding daily passes), 7). day 6 - min(4+2=6,7). day 7 - min(6+2=8,7).
        This would still work if we added an additional day, say for example, day 3 and stopped at day 4. day 1 - min(2, 7). day 3 - min(4, 7). day 4 - min(6, 7). day 6 - min(8,7+7=14). We add 7 here because we've accounted for day 7 - min(10,14)....
        All we have to do is also account for if we're adding a monthly pass, so 1 more min check. day 1 - min(2,7,15). day 3 - min(2+2,7,15)
        */

//N - days.length. D - # of days we have to account for in our days arr, capped at 365.
//Time - O(D). 1 loop through 1-365 but the days can be [1,365] and we still loop from 1-365.
//Space - O(2N) => O(N). DP array and Set.
