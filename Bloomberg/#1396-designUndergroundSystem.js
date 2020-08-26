/* psuedocode

keep track of each checkIn and checkOut time of a customer. Store as a map where the key/val is id/time. Since each customer is unique and checked into one place at a time, we can assume that there will only be 1 record of the customer in our map. One someone checks out, we can pull the start time from this.checkIn to find the difference in time. Then, we can add that time to a running total where the map will reflect start -> end station.

we can have that as another map where we have key/val key -> stringified start end stations and the val is a tuple that stores [currentSumOfTimes, numOfTrips. so when we call .getAvgTime, we can get the val and simply return currentSumOfTimes/numOfTrips for constant time.
*/

class UndergroundSystem {
  constructor() {
    this.checkInTime = new Map();
    this.travelTime = new Map();
  }

  //customer can only be checked into one place at a time.
  checkIn(id, stationName, time) {
    //set id to a time where the customer went in
    this.checkInTime.set(id, {time: time, stationName: stationName});
  }

  checkOut(id, stationName, time) {
    let startingStation = this.checkInTime.get(id);
    //Can delete the id now since we've used it
    this.checkInTime.delete(id)

    let timeTravelled = time - startingStation.time;
    let stationsTravelled = `${startingStation.stationName} ${stationName}`

    if (!this.travelTime.has(stationsTravelled)) {
      this.travelTime.set(stationsTravelled, [0,0]) //starting tuple
    }

    let adjustedTrips = this.travelTime.get(stationsTravelled);
    //Add time and trips
    adjustedTrips[0] += timeTravelled;
    adjustedTrips[1] += 1;
    this.travelTime.set(stationsTravelled, adjustedTrips)
  }

  //returns avg time to travel between startS and endS. The avg time == only direct traveling
  getAverageTime(startStation, endStation) {
    let stationTimes = this.travelTime.get(`${startStation} ${endStation}`)

    return stationTimes[0] / stationTimes[1]
  }
}

//n - # of max transactions or checkIn/checkOuts at one time. m - # of stations
//Time - O(1). All method calls should be instant access via the 2 maps.
//Space - O(n + m^2). checkInTime will store every unique id that hasn't been checked out yet for O(n) space. Worse case is nobody has checked out and we have n amount of keys. However, once someone does check out, we are deleting that id from the checkIn so we can also have no transactions in our map if no one is riding (should also ask a clarifying question if we should delete). travelTime will hold all the # combinations of stations we can have as our key. That should give us m^2 number of stations. Constant space for vals since we're only storing [totalAmountOfTime, numOfTrips].
