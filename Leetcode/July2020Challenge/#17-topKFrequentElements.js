/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//Constraints - k is always valid. there will be unique nums in res arr.

//Psuedocode
//loop through nums arr and keep track of the freq of #s in a hash. Also need arr to store data.
//loop through hash and push in every num/frequencyOfNumbers into data arr.
//Sort the arr by frequency, a - b
//loop through data arr until you hit k. pop off the last val of the data arr (highest freqency). Push into res arr
//return res arr
var topKFrequent = function(nums, k) {
  let data = [];
  let res = [];
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];

    if (!hash.hasOwnProperty(curr)) {
      hash[curr] = 0
    }

    hash[curr]++;
  }

  for (const key in hash) {
    data.push([key, hash[key]])
  }

  data.sort((a,b) => a[1] - b[1]);

  for (let j = 0; j < k; j++) {
    let [val, freq] = data.pop();
    res.push(val)
  }

  return res;
};

//Time Complexity - O(n log n). n - nums.length, n log n for .sort.
//Space Complexity - O(n). n - nums.length.
