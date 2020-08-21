/* psuedocode

Loop through the arr and use a 2 ptr approach to swap inplace.
You want to have your i and a movePtr to track the idx where you're swapping.
You want to swap when you hit a ele that is NOT the moveNumber
*/
function moveElementToEnd(array, toMove) {
  let movePtr = 0;

	const swap = (arr, i, j) => {
		let temp = arr[i];
		arr[i] = arr[j]
		arr[j] = temp
	}

	for (let i = 0; i < array.length; i++) {
		if (array[i] !== toMove) {
			swap(array, i, movePtr)
			movePtr++
		}
	}

	return array;
}
//n - array.length
//Time - O(n).
//Space - O(1).
