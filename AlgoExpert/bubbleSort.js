function bubbleSort(array) {
  // Write your code here.
	let counter = false;
	while (!counter) {
		counter = true
		for (let i = 0; i < array.length;i++) {
			if (array[i] > array[i + 1]) {
				swap(array, i, i + 1)
				counter = false
			}
		}
	}
	return array;
}

// [8, 5, 2, 9, 5, 6, 3]

function swap(arr, idx1, idx2) {
	const temp = arr[idx1]
	arr[idx1] = arr[idx2]
	arr[idx2] = temp
}

bubbleSort([3, 1, 2]) // ==> [1, 2, 3]
bubbleSort([8, 5, 2, 9, 5, 6, 3]) //==> [2, 3, 5, 5, 6, 8, 9]

