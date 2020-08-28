/*
rand7 is predefined.
Each testcase has one argument: n, the number of times that rand10 is called.

Follow up:
What is the expected value for the number of calls to rand7() function?
Could you minimize the number of calls to rand7()?
*/

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */

/* psuedocode - Rejection Sampling
The idea of how this works is that you reject all numbers that don't satisfy the rand10 from the rand7 numbers we can generate. Ex: calling random 7 will give us random numbers in between 1 - 49. Picking any number in the 1 - 40 group would satisfy the random 10. But we have 41-49 that we have to account for that will give 1-9 a greater possibility to hit. So if you hit 41-49, run rand7 again until you hit a # that is in the range of 7s but also a multiple of 10.
*/

var rand10 = function() {
  let row, col, idx;
  //imagine this generates a 2d matrix of nums. row is 1-7 across. col is 1-7 down.

  do {
    row = rand7();
    col = rand7();
    idx = col + (row-1) * 7; //accounting for idx point
    console.log("nums", row, col, idx)
  } while (idx > 40); //base case

  return 1 + (idx-1) % 10;
};
//Time complexity - O(1) average but can possibly loop forever since we can never hit a num that satisfies our while loop
