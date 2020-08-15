/*
Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Example 1:
Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

Example 2:
Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.

Example 3:
Input: [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

Note:

You may assume the interval's end point is always bigger than its start point.
Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */

//psuedocode
//This seems very familiar as merge intervals. we need to find out if the intervals overlap
//We can sort the intervals array by asc end -> end and then loop through to check each starting time
//IF the previous end time is <= the currIntervals starttime, we dont have a overlap. set the next ptr of our previous overlap to currInterval
//ELSE we do have a overlap++,

var eraseOverlapIntervals = function(intervals) {
  if (intervals.length <= 1) return 0;

  intervals.sort((a,b) => a[1] - b[1])
  let overlap = 0, prevInterval = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    let [lastStart, lastEnd] = prevInterval

    if (lastEnd <= intervals[i][0]) prevInterval = intervals[i]
    else overlap++
  }

  return overlap;
};
//n - intervals.length
//Time - O(n log n). sorting
//Space - O(1).
