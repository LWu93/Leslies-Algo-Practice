/* psuedocode

loop through array with a ptr at sequence.
if we ever find the ele of where the ptr is in the arr, we can ptr++
if we get to the end and the ptr is === sequence.length, we know we found all of them
else return false

we can for loop and have a check the true conditional
We can also while loop with 2 && conditionals - if we hit array end or if we hit sequence end. return sPtr === sequence.length

*/
function isValidSubsequence(array, sequence) {
	let sPtr = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] === sequence[sPtr]) {
			sPtr++
		}
		if (sPtr === sequence.length) return true;
	}

	return false
}
//n - array.length
//Time - O(n). One loop through array
//Space - O(1).
