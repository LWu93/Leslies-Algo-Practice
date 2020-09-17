/*
On an infinite plane, a robot initially stands at (0, 0) and faces north.  The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degress to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

Example 1:
Input: "GGLLGG"
Output: true
Explanation:
The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

Example 2:
Input: "GG"
Output: false
Explanation:
The robot moves north indefinitely.

Example 3:
Input: "GL"
Output: true
Explanation:
The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

Note:

1 <= instructions.length <= 100
instructions[i] is in {'G', 'L', 'R'}

*/

/**
 * @param {string} instructions
 * @return {boolean}
 */

/* psuedocode

keep track of where the robot is at every position.
You need to account for the direction the robot is facing at the end of the instructions - north or not
You also need to acc for if he ended back up in a circle or not, see Ex 3.

potential stop case? - if you're still facing north or in the same direction you started AFTER finishing the instructions, that means it is not bounded in a circle.
One thing to the above is that if it ends up in the same position again, aka we've seen this spot at some point in our travel so we know we are still in the circle.

set directions and facing to be "N" or North.
loop through instructions
    if 'G', we want to move our robot 1 from the direction we're facing.
    else if 'R', we want to change our left to the right
    else, it is 'L', we want to change our facing to the left

after loop, if we are NOT facing north, we are in a circular loop
also, if we have ended up in the same position, we also are in a circular loop.
*/

//create a class robot
class Robot {
	constructor(x, y, facing) {
		(this.location = { x: x, y: y }),
			(this.facing = facing),
			(this.compass = 'NESW');
	}

	go() {
		//4 dirs - NESW
		if (this.facing === 'N') {
			this.location.y += 1;
		} else if (this.facing === 'E') {
			this.location.x += 1;
		} else if (this.facing === 'S') {
			this.location.y -= 1;
		} else {
			this.location.x -= 1;
		}
	}

	changeDir(dir) {
		let currDir = this.compass.indexOf(this.facing);

		if (dir === 'L') {
			//if we are facing N, we wanna face W
			if (currDir === 0) this.facing = this.compass[3];
			else this.facing = this.compass[currDir - 1];
		} else {
			//if we are facing W, we wanna face S
			if (currDir === 3) this.facing = this.compass[0];
			else this.facing = this.compass[currDir + 1];
		}
	}

	getLocation() {
		//make new obj so there's no reference to the this.location obj
		let x = this.location.x,
			y = this.location.y;
		return { x, y };
	}

	getFacing() {
		return this.facing;
	}
}

var isRobotBounded = function (instructions) {
	let robot = new Robot(0, 0, 'N'); //given starting points

	for (let i of instructions) {
		//if its 'G', we can invoke our go method. Else its a changeOfDir, we can invoke changeDir
		if (i === 'G') robot.go();
		else robot.changeDir(i);
	}

	let location = robot.getLocation(),
		facing = robot.getFacing();
	// console.log(location, facing)

	if (facing !== 'N' || (location.x === 0 && location.y === 0)) return true;

	return false;
};
/* complexity. N - # of instructions

Time - O(N).
Space - O(1). Debatable how you want to calculate the space of the robot but for the most part, it is negligible since we're only storing basic calculations.

*/
