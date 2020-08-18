function levenshteinDistance(str1, str2) {
  let dp = new Array(str1.length + 1).fill([]).map(ele => new Array(str2.length + 1).fill(0)) //create our 2d matrix

	for (let i = 0; i < dp.length; i++) {
		for (let j = 0; j < dp[i].length; j++) {
			if (i === 0) { //if we are at the first row, val == length of str1
				dp[i][j] = j
			} else if (j === 0) { // if we are at the first col, val == length of str2
				dp[i][j] = i
			} else if (str1[i-1] === str2[j-1]) { //if the letters match, we can take the diagonal val since it counts as us doing nothing
				dp[i][j] = dp[i-1][j-1]
			} else { //else we take the min of all the possible combinations and add 1 to account for the additional letter
				dp[i][j] = 1 + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])
			}
		}
	}

	return dp[str1.length][str2.length] //return last val in our dp matrix
}
//n - str1.length. m - str2.length
//Time - O(n*m).
//Space - O(n*m).
