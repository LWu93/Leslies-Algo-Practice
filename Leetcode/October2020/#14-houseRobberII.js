/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Example 2:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 3:
Input: nums = [0]
Output: 0

Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 1000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (!nums.length) return 0;
	if (nums.length === 1) return nums[0];

	//rob first house - we can only take the first or second val
	let dp1 = [nums[0], Math.max(nums[0], nums[1])];

	//rob last house - starts first house at 0 and second val at the first house
	let dp2 = [0, nums[1]];

	for (let i = 2; i < nums.length; i++) {
		//if we are at the last house, then we can just calc the prev house and skip the first house
		//otherwise, we need to find the max between the prev or the 2nd prev plus the curr amount
		dp1[i] =
			i === nums.length - 1
				? dp1[i - 1]
				: Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);

		//It is either the max of the prev or the max of the 2nd prev plus the curr
		dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);
	}

	//return the last idx of the 2 diff DP options
	return Math.max(dp1[nums.length - 1], dp2[nums.length - 1]);
};

/* complexity. N - nums.length

Time - O(N). 1 loop
Space - O(2N) ~~ O(N). Two DP arrays
*/
