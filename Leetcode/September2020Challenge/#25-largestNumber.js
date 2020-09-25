/*
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:
Input: [10,2]
Output: "210"

Example 2:
Input: [3,30,34,5,9]
Output: "9534330"

Note: The result may be very large, so you need to return a string instead of an integer.

*/

/**
 * @param {number[]} nums
 * @return {string}
 */

/* psuedocode
take every number and pull out their stringified values
sort it accordingly by amount. dec --> asc
since all the nums are sorted in place, we can simply join all the nums together

edgecase - if the num has a 0, we return 0
*/

var largestNumber = function (nums) {
	const strNums = nums.map((ele) => ele.toString());

	const compareFunc = (a, b) => `${b}${a}` - `${a}${b}`;

	strNums.sort(compareFunc);

	if (strNums[0] === '0') return '0';

	return strNums.join('');
};
/* complexity - N - nums.length

Time - O(N Log N). sorting.
Space - O(N). creating a new arr of int's stringified
*/
