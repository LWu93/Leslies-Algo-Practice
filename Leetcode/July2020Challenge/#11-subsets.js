/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//Psudocode
//Backtracking - Subsets and permutations!
//create a res array that will hold each potential subset. (maybe start with empty array?)
//create a backtrack/DFS recursive call that will go through each individual number's subsets
//backtrack will take a (arr) and loop through each ele in nums.
//you want to have your for loop go through i < nums.length and you want to push in its first val.
//with backtrack, you want to then call it recursively with its next subset, in this case, i+1
//Have to do something to replace the subsets copy after it comes back from its recursive call.
//In this case, you want to pop off the last ele.
//return res

var subsets = function(nums) {
  let res = [[]];

  const backtrack = (idx, arr) => {
    for(let i = idx; i < nums.length; i++){
      arr.push(nums[i]);
      res.push([...arr]);
      backtrack(i+1, arr)
      arr.pop();
    }
  }

  backtrack(0, []);
  return res;
};
