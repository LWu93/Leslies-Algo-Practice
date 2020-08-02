/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let left = 0, right = nums.length-1;

  while (left < right) {
    let sum = nums[left] + nums[right]
    if (sum === target) {
      return [left, right]
    } else if (sum < target) {
      left++
    } else {
      right++
    }
  }

  //There is a solution that will hit the target return above
};

//using a hashmap
var twoSum = function(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let diff = target - curr;

    if (map.has(diff)) {
      return [map.get(diff), i]
    } else {
      map.set(curr, i);
    }
  }
  //There is a solution that will hit the return above
};
//Time - O(n). n - nums.length
//Space - O(n). worst case is you can have a map storing almost n elements.
