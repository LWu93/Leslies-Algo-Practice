/*
There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

Example 1:
Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110

Explanation:
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

Note:
1 <= costs.length <= 100
It is guaranteed that costs.length is even.
1 <= costs[i][0], costs[i][1] <= 1000
*/

/**
 * @param {number[][]} costs
 * @return {number}
 */

//Psuedocode
//you want to order the costs array by its difference in profits saved
//lets say we want to sort in the order so that we attend city A's profits
//the first half of the arr will have the most optimal amount if you sent someone to city A.
//the second half will be less optimal to send to city A, therefore making it the more optimal choice to send them to city B.
//If the arr is sorted in that order, we want to loop through half of costs
//we add city A's prices to our total;
//Then we loop from the second half and add city B's prices
//since the first half is optimal for A, we get the max savings from A then we get the max savings from the other half by picking B.
var twoCitySchedCost = function(costs) {
  let maxProfits = [].concat(costs) //not mutating original arr.
  let half = costs.length/2, minCosts = 0;

  //should sort so that the diff in prices are in asc order for A!
  maxProfits.sort((a,b) => (a[0]-b[0]) - (a[1]-b[1]))

  for (let i = 0; i < half; i++) {
    minCosts += maxProfits[i][0] //adding price of A
  }
  //subtle Optimization - you can combine these 2 loops into 1
  for (let i = half; i < costs.length; i++) {
    minCosts += maxProfits[i][1] //adding price of B
  }

  return minCosts;
}
//n - costs.length
//Time - O(n log n). Sort and 1 for loop through n.
//Space - O(n). making a copy of costs. log n for recursive calls in .sort

//Optimize - We can use the same thought process as above but instead of sorting, we can store in a Max Binary Heap. We loop through costs arr and add properties .maxProfit -> Math.abs(costs[0] - costs[1]) and .index as nodes to the MBH. Then go through the MBH and pop out the first half of n/2 nodes and add city A's cost to our total. Then pop out the second half and add city B's cost to our total.
