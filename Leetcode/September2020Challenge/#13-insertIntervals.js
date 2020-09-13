/*
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]

Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

/* psuedocode

loop until you hit the first interval's endTime that is greater than the newIntervalsStartTime.
keep track of that interval and loop from the interval until you hit a intervalsEndTime that is less than the newIntervalEndTime. You have to take out the intervals in between and unshift out the rest.
*/

var insert = function (intervals, newInterval) {
	let start = 0,
		res = [];

	//while we didnt hit the end AND the currIntervalStartTime is < newIntervalStartTime
	//we dont need to merge the intervals, just push in the results
	while (start < intervals.length && intervals[start][1] < newInterval[0]) {
		res.push(intervals[start]);
		start++;
	}

	//we've hit the point where we either merge intervals or the end of intervals and we dont merge
	//reset newIntervals start to EITHER its currStartTime or Infinity if we've hit the end
	let prevStart = start < intervals.length ? intervals[start][0] : Infinity;
	newInterval[0] = Math.min(newInterval[0], prevStart);

	//start merging intervals
	while (start < intervals.length && newInterval[1] >= intervals[start][0]) {
		//new max end time
		newInterval[1] = Math.max(newInterval[1], intervals[start][1]);
		start++;
	}

	//we hit the point where we've merged all the middle ints and updated the newInterval.push in.
	res.push(newInterval);
	return res.concat(intervals.slice(start));
};

/* complexity. N - intervals.length
Time - O(N). We are looping up to the merge intervals point. Then we merge intervals accordingly. then we add the rest of the intervals to the result we've made.
Space - O(N). Creating a new res array and returning. Worst case we push in an entire copy of intervals.
*/
