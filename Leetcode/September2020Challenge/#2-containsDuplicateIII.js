/*
Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true
Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

/* psuedocode
brute force
2 nested for loops. outside loop with var i regularly goes through nums. inside loop with var j will start at 0 OR abs val of i - k. Conditional for loop will be if j < i.

Cases - The diff between the two eles at both points must be <= t. Indices <= k

while (end - start <= k)
    check if the abs diff <= t. if it is,
    check if the abs diff of indices <= k
    IF both are true, return true

return false at the end.

Sorting the arr will allow us to use a 2 pointers approach from the front and the back.

*/

//approach - using buckets
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  //edgecase - dont need to loop through the entire nums.arr
  if (t < 0) return false;

  let buckets = new Map()
  let widthOfIndices = t + 1;//gives us how far nums can be bet its buckets. Account for 0.

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    let key =  Math.floor(curr / widthOfIndices);

    //3 checks.If the specific bucket has a num, it satisfies the condition.
    //If the previous adj bucket has a num && satisfies diff of nums < widthOfIndices
    //If the next adj bucket has a num && satisfies diff of nums < widthOfIndices
    if (buckets.has(key)) return true;
    if (buckets.has(key-1) && Math.abs(curr - buckets.get(key-1)) < widthOfIndices) return true;
    if (buckets.has(key+1) && Math.abs(curr - buckets.get(key+1)) < widthOfIndices) return true;

    //set curr key/num into map. Check if i >= k, if it is, it can't satisfy the diff of i+j < k.
    buckets.set(key, curr)
    if (i >= k) buckets.delete(Math.floor(nums[i-k]/widthOfIndices)) //sliding window.
  }

  return false;
};
/* complexity. n - nums.length.
Time - O(n). One loop through the nums arr. We create buckets at every iteration and check them against the map.
Space - O(min(n,k)). Bounded by the keys in map. Worst case, we go through the entire nums arr and have a unique key for every one OR we will delete the previous keys that no longer satisfy the case as i increments - bounded by k.
*/
