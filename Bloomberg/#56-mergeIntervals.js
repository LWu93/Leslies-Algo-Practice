/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

Constraints:
intervals[i][0] <= intervals[i][1]
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals.length) return [];

  intervals.sort((a,b) => a[0] - b[0])
  let res = [], prev = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];
    const [prevStart, prevEnd] = prev;

    //if they dont overlap, push in previous interval, set prev to curr
    if (prevEnd < currStart) {
      res.push(prev);
      prev = intervals[i];
    } else {
      //they do overlap. take min interval from starts and max interval from ends
      prev = [Math.min(prevStart, currStart), Math.max(prevEnd, currEnd)]
    }
  }

  res.push(prev)//dont forget to push in the last interval
  return res;
};
//n - intervals.length
//Time - O(n log n). sorting
//Space - O(n). worst case, res array is returning the entire intervals arr.
