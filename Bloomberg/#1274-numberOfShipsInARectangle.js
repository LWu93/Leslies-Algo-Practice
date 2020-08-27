/*
(This problem is an interactive problem.)

On the sea represented by a cartesian plane, each ship is located at an integer point, and each integer point may contain at most 1 ship.

You have a function Sea.hasShips(topRight, bottomLeft) which takes two points as arguments and returns true if and only if there is at least one ship in the rectangle represented by the two points, including on the boundary.

Given two points, which are the top right and bottom left corners of a rectangle, return the number of ships present in that rectangle.  It is guaranteed that there are at most 10 ships in that rectangle.

Submissions making more than 400 calls to hasShips will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

Example :

Input:
ships = [[1,1],[2,2],[3,3],[5,5]], topRight = [4,4], bottomLeft = [0,0]
Output: 3
Explanation: From [0,0] to [4,4] we can count 3 ships within the range.

Constraints:

On the input ships is only given to initialize the map internally. You must solve this problem "blindfolded". In other words, you must find the answer using the given hasShips API, without knowing the ships position.
0 <= bottomLeft[0] <= topRight[0] <= 1000
0 <= bottomLeft[1] <= topRight[1] <= 1000

*/

/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */

/*psuedocode - divide and conquer
We need to use Sea.hasShips(p1,p2) to check if that square has a ship
In order to D&Q, we need to separate the square we're given into 4 points. At each point, we will recursively call .hasShips in order to check if each square has ships or not. If it doesn't have a ship, we can essentially ignore the entire square. If it does have ships, we continue to divide into 4 squares (or 2 if we've hit the point where there's only 1 row/col)

We are breaking down each square so that when we get to a single dot, we've found a ship and we can add to our count. recursive solution's base case is if p1 === p2.

return count
*/

var countShips = function(sea, topRight, bottomLeft) {
  let count = 0;

  function checkIfShipsExist (bottomLeft, topRight) {
    //basecase - if the rec has a ship.. do logic
    if (sea.hasShips(topRight, bottomLeft)) {
      let [topX, topY] = topRight;
      let [botX, botY] = bottomLeft;

      //basecase 2 - there's only 1 point and that point has a ship, count++
      if (topX === botX && topY === botY) {
        count++;
        return;
      }

      let halfOfY = Math.floor((botY + topY) / 2);
      let halfOfX = Math.floor((botX + topX) / 2);

      //Recursively call checkIfShipsExist. the basecase should cover bounds
      //Only need to do the 4 squares. TL, TR, BL, BR
      checkIfShipsExist([botX, halfOfY+1], [halfOfX,topY])
      checkIfShipsExist([halfOfX+1, halfOfY+1], topRight)
      checkIfShipsExist(bottomLeft, [halfOfX, halfOfY])
      checkIfShipsExist([halfOfX+1, botY], [topX, halfOfY])
    }
  }

  //invoke recursive call once and it will run through all the coords
  checkIfShipsExist(bottomLeft, topRight)
  return count;
};
//n - # of points in graph
//Time - O(n). We are hitting every point in our graph
//Space - O(log n). log n or binary search through a recursive call. Worst case is if you hit the midpoint from your first recursive call.
