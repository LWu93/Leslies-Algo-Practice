/*
You are driving a vehicle that has capacity empty seats initially available for passengers.  The vehicle only drives east (ie. it cannot turn around and drive west.)

Given a list of trips, trip[i] = [num_passengers, start_location, end_location] contains information about the i-th trip: the number of passengers that must be picked up, and the locations to pick them up and drop them off.  The locations are given as the number of kilometers due east from your vehicle's initial location.

Return true if and only if it is possible to pick up and drop off all passengers for all the given trips.

Example 1:
Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false

Example 2:
Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true

Example 3:
Input: trips = [[2,1,5],[3,5,7]], capacity = 3
Output: true

Example 4:
Input: trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11
Output: true

Constraints:
trips.length <= 1000
trips[i].length == 3
1 <= trips[i][0] <= 100
0 <= trips[i][1] < trips[i][2] <= 1000
1 <= capacity <= 100000

*/

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */

/* psuedocode

sort the start -> end time so we can calc # of passengers at each time interval
As we loop through the sorted trips, we need to keep track of how many passengers are getting on/off
If we hit the same time interval overlap, passengers can get off/on and not go over capacity
Check if the times merge or overlap so that we can +/- passengers accordingly
    forgot - potential cases where there are multiple time intervals where we drop off passengers
    forgot - don't assume that sorted intervals === endTimes. Like merge intervals
If we ever hit a point in our interval where it goes over, we can return false.
If we hit the end, we can return true
*/

var carPooling = function (trips, capacity) {
	//these edge cases doesn't exist via constraints but good to talk about.
	if (capacity <= 0 || trips.length <= 0) return false;

	trips.sort((a, b) => a[1] - b[1]);
	// console.log("sorted", trips)

	let currCap = trips[0][0],
		visited = new Set(); //last time we dropped off passengers

	for (let i = 1; i < trips.length; i++) {
		const [currP, currS, currE] = trips[i];

		for (let j = 0; j < i; j++) {
			if (trips[j][2] <= currS && !visited.has(j)) {
				currCap -= trips[j][0];
				visited.add(j);
			}
		}

		currCap += currP;
		if (currCap > capacity) return false;
	}

	return true;
};

/* complexity. N - number of trips or trips.length

Time - O(N^2). We are sorting for N log N time but then we have nested loops to go through each trip.
Space - O(N). Storing N amount as keys in visited

*/
