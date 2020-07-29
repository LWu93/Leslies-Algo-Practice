/*
There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?

Example 1:
Input: [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

Example 2:
Input: [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively. The third child gets 1 candy because it satisfies the above two conditions.

*/

/**
 * @param {number[]} ratings
 * @return {number}
 */
//psuedocode
//create a candies array - this will keep track of the amount of candies each child will get
//loop through the ratings arr from left -> right and check its neighbors to see if left > curr. set candies arr[idx]++
//loop from right -> left to check for the right > curr. set candies[idx] = candies[idx]++
//candies.reduce to add each num together to return min candies provided
var candy = function(ratings) {
  if (!ratings.length) return 0;

  let candies = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i-1]) {
      candies[i] = candies[i-1] + 1
    }
  }

  for (let j = ratings.length-2; j >= 0; j--) {
    if (ratings[j] > ratings[j+1]) {
    //case where the left -> right loop doesn't account for when each candies[j] only goes up
      candies[j] = Math.max(candies[j],candies[j+1] + 1)
    }
  }

  return candies.reduce((acc,curr) => acc + curr, 0)
};
//n - ratings.length.
//Time - O(3n) -> O(n).
//Space - O(n).
