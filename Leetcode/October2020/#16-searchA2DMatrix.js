/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
Output: false

Example 3:
Input: matrix = [], target = 0
Output: false


Constraints:
m == matrix.length
n == matrix[i].length
0 <= m, n <= 100
-104 <= matrix[i][j], target <= 104

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/* psuedocode

Search through each row in the matrix to see if we can find if the range is in the col.
We can then search through the col using binary search and log M time to see if the range is there
*/

const binarySearch = (arr, target) => {
	let start = 0,
		end = arr.length - 1,
		mid;

	while (start <= end) {
		mid = start + Math.floor((end - start) / 2);

		if (arr[mid] === target) return true;
		else if (arr[mid] < target) start = mid + 1;
		else end = mid - 1;
	}

	return false;
};

var searchMatrix = function (matrix, target) {
	if (!matrix.length || !matrix[0].length) return false;

	for (let row = 0; row < matrix.length; row++) {
		let currRow = matrix[row];
		let first = currRow[0],
			last = currRow[currRow.length - 1];

		//if target is in range, binary search through the row
		if (target >= first && target <= last) {
			//checks first and last before entering BS
			if (target === first) return true;
			if (target === last) return true;
			if (binarySearch(currRow, target)) {
				return true;
			}
		}
	}

	return false;
};

/* complexity. N - matrix.length, M - Math.max of each matrix[0].length

Time - O(N * log M). We have to iterate through each row. We can then use BS to find the specific target in the row.
Space - O(1). Constant time using pointers.

OPTIMIZE - we can also incorporate BS to the rows as well with a bit more logic. If the target is not within the range of the first and last row's points, we can simply return false at that step. Similarly,
*/
