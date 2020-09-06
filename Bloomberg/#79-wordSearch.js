/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

Constraints:

board and word consists only of lowercase and uppercase English letters.
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3

*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/* psuedocode
we want to find if the given word exists in our board and we can only use the letters once. DFS would be a great approach to the problem since we can search TBLR. We start with the letter of the word and can DFS until we don't match the word - return FALSE OR if we hit the end - return TRUE.

nested for loop through the board
    IF the letter matches first letter in the word we're looking for, DFS
        check if DFS returns true or false
        IF DFS returns true, we can simply return true here.
if we get here, we've traversed the entire board and didn't find the word, return false.

Constraints - board has at least 1 letter. Word also has 1 letter. No particular edge cases I can think of there.
*/
var exist = function (board, word) {
	//DFS function
	const DFS = (board, i, j, idx) => {
		//check bounds. 0 will represent the letter's we've already visited
		if (
			i < 0 ||
			i >= board.length ||
			j < 0 ||
			j > board.length ||
			board[i][j] === 0
		) {
			return false;
		}
		//basecase 1 - if the board @ idx doesn't match the cell, we can simply exit this DFS path
		if (word[idx] !== board[i][j]) {
			return false;
		}

		//basecase 2 - we've found the word
		if (idx === word.length - 1) return true;

		//Set curr cell to visited or 0. Don't forget to reset back
		let currLetter = board[i][j];
		board[i][j] = 0;

		//Traverse each side to find the entire word. return true if any one of them hit true
		if (
			DFS(board, i - 1, j, idx + 1) ||
			DFS(board, i + 1, j, idx + 1) ||
			DFS(board, i, j - 1, idx + 1) ||
			DFS(board, i, j + 1, idx + 1)
		) {
			board[i][j] = currLetter;
			return true;
		}

		//reset back for next potential DFS paths if none of the above hit.
		board[i][j] = currLetter;
	};

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === word[0]) {
				//if we find the word, return true
				if (DFS(board, i, j, 0)) {
					return true;
				}
			}
		}
	}

	return false;
};

/* Complexity. N - # of cells in the board (i*j). L - length of word

Time - O(N * 3^L). We could at worst be backtracking through all 3 directions(since we wont go back to where we came from) and recursively enter each of the 3 branches. L because we will potentially go as far as the length of the word since we will hit one of the basecases/bounds and return true/false. We are also traversing the matrix before backtracking.

Space - O(L). Worstcase, we will have L amount of calls in our callstack as per above calculation. We won't have 3^L because one branch will finish before the second is called.
*/

/* edge cases -

[
["A","B","C","E"],
["S","F","C","S"],
["A","D","E","E"]
]
"ABCB"

[["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a...
"baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

*/
