/*
sort both arrays. Binary search.
we want to get to the closest val inside of both arrays so we can have 2 pointers at each arr
as we loop through, we calculate the distance and increment the num that makes the pairSum > 0
track our res array with the 2 pointers.
Also track the smallestDiff outside of the while loop
*/

function smallestDifference(arrayOne, arrayTwo) {
  //sort the arrays so we can use 2 pointers approach
	arrayOne.sort((a,b) => a - b )
	arrayTwo.sort((a,b) => a - b )

	let p1 = 0, p2 = 0;
	let smallestDiff = Infinity;
	let res = [];

	while (p1 < arrayOne.length && p2 < arrayTwo.length) {

		if (arrayOne[p1] === arrayTwo[p2]) return [arrayOne[p1],arrayTwo[p2]]
		else if (arrayOne[p1] < arrayTwo[p2]) {
			p1++;
		} else {
			p2++;
		}

		let newDiff = Math.abs(arrayOne[p1] - arrayTwo[p2])
		if (newDiff < smallestDiff) {
			smallestDiff = newDiff; //update smallestDiff
			res = [arrayOne[p1],arrayTwo[p2]]
		}

	}

	return res
}
//n - arrayOne.length. m - arrayTwo.length
//Time - O(nlogn + mlogm). 2 sorts on both arrays.
//Space - O(1). constant space.
