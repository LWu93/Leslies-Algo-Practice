/**
 * @param {string} s
 * @return {number}
 */

/* psuedocode

split the string by spaces. return the length of the last ele of the new var.
edgecases - empty string. if theres just one word. if theres a space in the str itself.
*/

// var lengthOfLastWord = function (s) {
// 	if (!s.length) return 0;

// 	let newStr = s.split(' ');

// 	for (let i = newStr.length - 1; i >= 0; i--) {
// 		if (newStr[i]) {
// 			if (newStr[i].length >= 1) return newStr[i].length;
// 		}
// 	}
// 	return 0;
// };
/*complexity. n - s.length
Time - O(2n). .split method and another for loop
Space - O(n). storing newStr
*/

//Optimized approach - loop from back of s. Look for first place where theres a empty space.
var lengthOfLastWord = function (s) {
	if (!s.length) return 0;

	let trackLength = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] !== ' ') {
			trackLength++;
		} else if (trackLength > 0 && s[i] === ' ') {
			return trackLength;
		}
	}

	return trackLength;
};

/*complexity. n - s.length
Time - O(n). 1 loop
Space - O(1).
*/
