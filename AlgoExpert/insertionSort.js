const insertionSort = array => {
  // Write your code here.
	for (let i = 1; i < array.length; i++) {
		let prevIdx = i;
		while (prevIdx > 0 && array[prevIdx] < array[prevIdx - 1]) {
			swap(array, prevIdx - 1, prevIdx)
			prevIdx--
		}
	}
	return array;
}

const swap  = (array, idx1, idx2) => {
	let temp = array[idx2];
	array[idx2] = array[idx1];
	array[idx1] = temp;
}

insertionSort([8, 5, 2, 9, 5, 6, 3]) // ==> [2, 3, 5, 5, 6, 8, 9]
