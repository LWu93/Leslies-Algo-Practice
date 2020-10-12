/*
Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".


Example 1:
Input: A = "ab", B = "ba"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.

Example 2:
Input: A = "ab", B = "ab"
Output: false
Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.

Example 3:
Input: A = "aa", B = "aa"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.

Example 4:
Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true

Example 5:
Input: A = "", B = "aa"
Output: false


Constraints:
0 <= A.length <= 20000
0 <= B.length <= 20000
A and B consist of lowercase letters.

*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

/* psuedocode

basecases
- if they are not the same length, they'll never be equal.
- if they are the same length, you need to see how many letters match up to each str.
- if they are the same length, you also need to check how many differential letters there are between them. See ex: 2. If there were more than 2 diff letters at 1 spot, you can swap them but in this case you cannot swap any. However, in Ex 1, the letter diff was exactly 2, and so you can swap at just those 2 positions

*/

var buddyStrings = function (A, B) {
	if (A.length !== B.length) return false;

	//checks for if there are an equal amount of letters in both A and B. ex: 'aba' == 'aba'
	if (A == B) {
		let set = new Set(A);
		return set.size < B.length;
	}

	let diff = [];

	for (let i = 0; i < A.length; i++) {
		//if there is a difference at that idx, we can swap with another idx but only 2 MAX
		if (A.charAt(i) !== B.charAt(i)) {
			diff.push(i);
		}
		//exit forloop earlier if we hit the failing condition
		if (diff.length > 2) return false;
	}
	//Check if both chars in diff are the same and can be swapped
	return (
		A.charAt(diff[0]) == B.charAt(diff[1]) &&
		A.charAt(diff[1]) == B.charAt(diff[0])
	);
};

/* complexity. N - Max(A.length, B.length)

Time - O(N). Worst case, it will either loop through N time in the set/loop.
Space - O(1). Worst case, Set will be filled and maxed at 26 or constant. diff will be maxed at 3.

*/
