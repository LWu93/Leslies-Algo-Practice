/*
An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

Example 1:
Input: low = 100, high = 300
Output: [123,234]

Example 2:
Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]

Constraints:
10 <= low <= high <= 10^9

*/

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */

/* psueodocode - backtracking/nested for loops

Nested for loops - Generate each possible number from low -> high
    do string manipulation and see if the number itself is sequential.
    If not, we can multiply our iteration by its base to get the next sequence
        Ex: 124, no match we want to go to 200s. 124 * 100.
    Create HF to convert/check curr num if it satisfies
    loop until end

Backtracking - create a new potential match for sequential numbers
    start with the low num and begin creating sequential numbers.
    basecase 1 - if nums are sequential, add nums to our res arr
    basecase 2 - if nums is greater than high, return false
    we can loop from the base power of the first num in low to cover those bases until we get to high
    once we hit the point where our num doesn't have sequential numbers, we can multiply by its base
    it prunes out base * x amount of nums we dont need to check.

*/

// var sequentialDigits = function(low, high) {
//     let res = [], orderOfNums = '123456789'
//     let startArr = low.toString().split(""), endStr = high.toString()

//     //HF - check if nums are sequential
//     const isSequential = nums => {
//         let start = orderOfNums.indexOf(nums[0]);
//         if (start >= 9) return false;
//         for (let i = 0; i < nums.length; i++) {
//             if (nums[i] !== orderOfNums[start]) return false
//             start++
//         }
//         return true;
//     }

//     while (true) {
//         let ptr = 0
//         while (ptr < startArr.length) {
//             //basecase 1 - if nums are sequential
//             if (isSequential(startArr)) {
//                 res.push(startArr.join("") * 1) //convert back to a num
//                 startArr[ptr]
//             }
//             //basecase 2 - if startArr > endArr we can stop the entire loop
//             if (startArr.join("") > endStr) {
//                 return res;
//             }

//             //loop through to get each case

//         }
//     }

//     return res;
// };

//Sliding window Approach via solution
const sequentialDigits = (low, high) => {
	let res = [],
		sampleStr = '123456789';

	let lowLen = low.toString().length,
		highLen = high.toString().length;

	for (let len = lowLen; len <= highLen; len++) {
		//it's up to 10-len bec we only need to get the nums in between the window.
		for (let start = 0; start < 10 - len; start++) {
			let currNum = sampleStr.slice(start, start + len) * 1;
			// console.log("currNum:", currNum)
			if (currNum >= low && currNum <= high) res.push(currNum);
		}
	}

	return res;
};
/* complexity

Time - O(1). Worstcase, the length is 2 and we need to go through the entire sample string twice with nested loops ==> 8x8 loops ==> no more than 64 times which avgs down to constant.
Space - O(1). Storing sampleStr and res are all constant. at most, we can have 36 nums in res.
*/

//Clever solution
var sequentialDigits = function(low, high) {
  //generate all possible sequential numbers
  let allSeqNumsArr = [
    12,23,34,45,56,67,78,89,
    123,234,345,456,567,678,789,
    1234,2345,3456,4567,5678,6789,
    12345,23456,34567,45678,56789,
    123456,234567,345678,456789,
    1234567,2345678,3456789,
    12345678,23456789,
    123456789
  ];
  //filter for same results above
  return allSeqNumsArr.filter(num => num >= low && num <= high);
};
//Same time and space complexity as above.
