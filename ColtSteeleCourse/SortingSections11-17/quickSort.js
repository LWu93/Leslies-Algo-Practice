//pivot helper function takes in 3 args (arr, start, end)
//grab a comparison or startVal from the start of the arr
//store the pivotIdx in a variable to keep track of where it ends
//loop through the arr. If the startVal is > curr ele, increment the pivotIdx and swap them
//when you finish looping, you need to swap the startVal with where you ended your pivotIdx
//return pivotIdx

const pivot = (arr, start = 0, end = arr.length - 1) => {
	const swap = (arr, a, b) => {
		[arr[a], arr[b]] = [arr[b], arr[a]];
	};
	let startVal = arr[start];
	let pivotIdx = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (startVal > arr[i]) {
			pivotIdx++;
			swap(arr, pivotIdx, i);
		}
	}
	//dont forget to swap the last value with where you stopped last
	swap(arr, start, pivotIdx);
	//this will be used for the recursive calls to know where to start/stop
	return pivotIdx;
};
// pivot([4, 8, 2, 1, 5, 7, 6, 3]); //returns [3, 2, 1, 4, 5, 7, 6, 8]

//PSUDOCODE quickSort
//call the pivot helper on the arr and use the returned pivotIdx to recursively call pivothelper
//you will recursively call from the left of the pivotIdx and then the right
//your base case will end when the arr has less than 2 elements

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)
    //left - we dont need to include pivotIdx since we've done it already
    quickSort(arr, left, pivotIdx - 1)
    //right - same as above
    quickSort(arr, pivotIdx + 1, right)
  }
  return arr
}

quickSort([4,8,2,1,5,7,6,3]) // return [1,2,3,4,5,6,7,8]

//Time Complexity - Worst case O(n^2) is when the pivot is the min or max val every single recursive call
// Avg time complexity is still O(n log n)
//Space Complexity - O(log n) swapping in place but call Stack will have left and right recursive calls.
