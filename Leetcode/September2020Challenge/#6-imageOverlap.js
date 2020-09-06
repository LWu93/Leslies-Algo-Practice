/*
Two images A and B are given, represented as binary, square matrices of the same size.  (A binary matrix has only 0s and 1s as values.)

We translate one image however we choose (sliding it left, right, up, or down any number of units), and place it on top of the other image.  After, the overlap of this translation is the number of positions that have a 1 in both images.

(Note also that a translation does not include any kind of rotation.)

What is the largest possible overlap?

Example 1:

Input: A = [[1,1,0],
            [0,1,0],
            [0,1,0]]
       B = [[0,0,0],
            [0,1,1],
            [0,0,1]]
Output: 3
Explanation: We slide A to right by 1 unit and down by 1 unit.
Notes:

1 <= A.length = A[0].length = B.length = B[0].length <= 30
0 <= A[i][j], B[i][j] <= 1

*/

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */

//solution brute force approach
var largestOverlap = function (A, B) {
	//HF to shift and check how many cells match from the orig and shifted matrix's.
	function shiftAndCount(x, y, shiftArr, origArr) {
		let count = 0;

		//loop through shifted but also account for shifted spaces we're moving through via && condit
		for (let row = 0; row < A.length - y; row++) {
			for (let col = 0; col < A.length - x; col++) {
				//if shifted cell is a 1 AND it also matches the original array's cell,, count++
				if (
					shiftArr[row + y][col + x] == 1 &&
					shiftArr[row + y][col + x] === origArr[row][col]
				) {
					count++;
				}
			}
		}

		return count;
	}

	let overlapping = 0;
	//loop through and shift BOTH matrix's at each iteration. get max from both
	for (let row = 0; row < A.length; row++) {
		for (let col = 0; col < A.length; col++) {
			//Shift and check for both arrays
			overlapping = Math.max(overlapping, shiftAndCount(row, col, A, B));
			overlapping = Math.max(overlapping, shiftAndCount(row, col, B, A));
		}
	}

	return overlapping;
};
/* Complexity N - A.length
Time - O(N^4). 2 nested for loops inside of looping through the matrix's
Space - O(1)
*/
