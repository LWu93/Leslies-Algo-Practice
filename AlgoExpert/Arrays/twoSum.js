/* psuedocode

1) double for loop and look through each pair in the array to see if it matches sum. Time - n^2.

2) classic 2 pointer approach, if array is not sorted, sort it. additional Time - n log n
Since its sorted, if the sums of both pts starting from end to start is less than or greaterthan, we can move the corresponding pointer.

3) loop through the array and store the diff of sum - currNum. If you ever hit the diff in the array, you can return both nums.

*/

function twoNumberSum(array, targetSum) {
	array = array.sort((a, b) => a - b)
	let start = 0
	let end = array.length - 1

	while (start !== end) {
		let currSum = array[start] + array[end];
		if (currSum === targetSum) return [array[start], array[end]]
		if (array[start] + array[end] > targetSum) {
			end--
		} else {
			start++
		}
	}

	return []
}
//n - array.length
//Time - O(n)
//Space - O(1)
