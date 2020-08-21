/* psuedocode

Similar to 2 sum, we want to have a sorted array and simply add an additional loop to account for 3 nums.
We will have our reg for loop from 0 - arr.length and inside, we will use a while loop to use the 2 ptr approach inside the for loop.

*/

function threeNumberSum(array, targetSum) {
  // Write your code here.
	array.sort((a,b) => a - b)
	let arr = []
	for (let i = 0; i < array.length; i++) {
		let r = array.length - 1
		let l = i + 1
		while (l < r) {
			let currSum = array[i] + array[l] + array[r]
			if (currSum === targetSum) {
				arr.push([array[i], array[l], array[r]])
				l++
				r--
			}
			if (currSum > targetSum) {
				r--
			}
			if (currSum < targetSum) {
				l++
			}
		}
	}
	return arr
}
//n - array.length
//Time - O(n^2).
//Space - O(n). Technically, it would be n/3 if nums are unique but simplifies to O(n)
