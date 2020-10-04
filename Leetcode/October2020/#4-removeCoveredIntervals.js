/*
Given a list of intervals, remove all intervals that are covered by another interval in the list.

Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

After doing so, return the number of remaining intervals.

Example 1:
Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

Example 2:
Input: intervals = [[1,4],[2,3]]
Output: 1

Example 3:
Input: intervals = [[0,10],[5,12]]
Output: 2

Example 4:
Input: intervals = [[3,10],[4,10],[5,11]]
Output: 2

Example 5:
Input: intervals = [[1,2],[1,4],[3,4]]
Output: 1

Constraints:

1 <= intervals.length <= 1000
intervals[i].length == 2
0 <= intervals[i][0] < intervals[i][1] <= 10^5
All the intervals are unique.

*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */

/* psuedocode - standard merge Interval approach except we're returning # of remaining intervals

sort intervals and find out if the initial interval startTime is <= to the next interval startTime.
If they are we can either - keep track of the curr initial start or end times or mutate the interval.
    if we do mutate, we need to count how many intervals we're removing
    if we don't mutate, we need to store our intervals in an array or stack

return intervals.length-removeCount OR stack.length
*/
var removeCoveredIntervals = function (intervals) {
	//sort in asc order
	intervals.sort((a, b) => {
		if (a[0] === b[0]) return b[1] - a[1];
		//intervals are unique
		else return a[0] - b[0];
	});

	let removeCount = 0;
	for (let i = 0; i < intervals.length - 1; i++) {
		let [currStart, currEnd] = intervals[i];
		let [nextStart, nextEnd] = intervals[i + 1];

		//Start doesn't matter bec they are in asc order. we will just be updating endTimes.
		if (currEnd >= nextEnd) {
			removeCount++;
			intervals[i + 1] = intervals[i];
		}
	}

	return intervals.length - removeCount;
};

/* complexity. N - intervals.length

Time - O(N log N). Sorting takes precedence over the second for loop which is O(N).
Space - O(log N). Sorting, if mergeSort/quickSort takes up log N time recursively.
*/
