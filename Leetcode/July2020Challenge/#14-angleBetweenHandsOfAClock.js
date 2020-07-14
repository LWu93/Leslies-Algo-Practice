Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.



/*
Example 1:
Input: hour = 12, minutes = 30
Output: 165

Example 2:
Input: hour = 3, minutes = 30
Output: 75

Example 3:
Input: hour = 3, minutes = 15
Output: 7.5

Example 4:
Input: hour = 4, minutes = 50
Output: 155

Example 5:
Input: hour = 12, minutes = 0
Output: 0
*/

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */

//Psudocode
//find the hourAngle - Every hour is 30degrees. angle is dependent on the minutes in an hour. minutes + hour / 60 === percentage of an hour the hour hand will move.
//find the minuteAngle - 360 degrees / 60 * minutes.
//find the difference of both degrees. Its either 180 or less. find Min diff of angle or 360-diff
//return Math.min(Math.abs(360-diff), diff)
var angleClock = function(hour, minutes) {
  const hourAngle = hour + minutes / 60;
  const minuteAngle = 360/60 * minutes;
  const diff = Math.abs(hourAngle - minuteAngle);

  return Math.min(diff, 360-diff)
};
