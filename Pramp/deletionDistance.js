/*
Deletion Distance
The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:

By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
We cannot get the same string from both strings by deleting 2 letters or fewer.
Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.

Examples:

input:  str1 = "dog", str2 = "frog"
output: 3

input:  str1 = "some", str2 = "some"
output: 0

input:  str1 = "some", str2 = "thing"
output: 9

input:  str1 = "", str2 = ""
output: 0

Constraints:
[input] string str1
[input] string str2
[output] integer
*/

//Psuedocode
//we can use DP to solve the problem. We will store str1.length+1 and str2.length+1 as idx points in a matrix.
//Each idx will account for the MINIMUM # of deletions we need to do in order to satisfy the prompt
//Ex:
//     a b
//  [0,1,2] //if word is "" and you're comparing it to a, you need to delete 1 a in order to get "" == "". for ab, you need to delete ab.
// b[1,2,1] //if word is "a" and "b", you need to delete 2 or both of the chars. if its "ab" -> "a", you only need to delete 1
// a[2,1,2] //ans is 2, return last idx's of the matrix
//You can begin to see a pattern in the DP approach above.
//When the letters match, you don't need to delete anything, so you can take the top left corner's val which is when you're not accounting that you need to delete anything.
//When the letters don't match, you take the min(previous 2 options of the str), and + 1 to account for the additional letter that DOESN'T match.
//when you hit the end, the matrix should've built itself and you'll have a min # of deletions needed for the 2 words.

//[    f r o g
//  [0,1,2,3,4]
// d[1,2,3,4,5]
// o[2,3,4,3,4]
// g[3,4,5,4,3]
//]

function deletionDistance(str1, str2) {
  let grid = new Array(str1.length + 1).fill([]).map(() => new Array(str2.length+1))

  for (let i = 0; i < str1.length + 1; i++) {
    for (let j = 0; j < str2.length + 1; j++) {
      //if you're on the 0th row, you're counting the str idx going across
      if (i === 0) {
        grid[i][j] = j;
      }
      //if you're on the 0th column, you're counting the str idx going down
      else if (j === 0) {
        grid[i][j] = i;
      }
      //if they're equal then take the diagonal
      else if (str1[i-1] === str2[j-1]) {
        grid[i][j] = grid[i-1][j-1]
      } else {
        //they're not equal so you want to take the top and left vals inside the grid + 1 for the additional char that doesn't match
        grid[i][j] = 1 + Math.min(grid[i-1][j], grid[i][j-1])
      }
    }
  }
  return grid[str1.length][str2.length] //return last indices of the grid
}
//n - str1.length, m - str2.length
//Time - O(n*m). Double for loop through matrix.
//Space - O(n*m). Storing maxtrix





/*
================= HINTS ============

Recommend your peer to identify the base cases first. That is, cases where one of the strings is the empty string. In this case, the deletion distance is simply the length of the other string. After that, encourage them to try cases that are somewhat similar, such as one string containing 1 or 2 characters.

If your peer needs additional assistance, help them by hinting toward a recursive relation between the deletionDistance(str1, str2), and the deletionDistance for some prefixes of str1 and str2. After they find the relation, you may suggest using Dynamic Programming.

If your peer is still stuck finding the recursive relation guide them to look at two cases:

Case 1: The last character in str1 is equal to the last character in str2. In that case, one may assume that these two characters aren’t deleted, and look at the prefixes that don’t include the last character.

Case 2: The last character in str1 is different from the last character in str2. In that case, at least one of the characters must be deleted, thus we get the following equation: d(str1,str2) = 1 + min( d(str1.substring(0, n-1), str2), d(str1, str2.substring(0, m-1)) ) where n is the length of str1, m is the length of str2, and d(x,y) is the deletion distance between x and y.

================= ANSWER ==============

Let str1Len and str2Len be the lengths of str1 and str2, respectively. Consider the function: opt(i,j) which returns the deletion distance for the i'th prefix of str1, and the j'th prefix of str2. What we want to do in this solution, is to use dynamic programming in order to build a function that calculates opt(str1Len, str2Len). Notice the following:

opt(0,j) = j and opt(i,0) = i

This is true because if one string is the empty string, we have no choice but to delete all letters in the other string.

If i,j > 0 and str1[i] ≠ str2[j] then opt(i,j) = 1 + min(opt(i-1, j), opt(i, j-1))

This holds since we need to delete at least one of the letters str1[i] or str2[j] and the deletion of one of the letters is counted as 1 deletion (hence the 1 in the formula). Then, since we’re left with either the (i-1)'th prefix of str1, or the (j-1)'th prefix of str2, need to take the minimum between opt(i-1,j) and opt(i,j-1). We, therefore, get the equation opt(i,j) = 1 + min(opt(i-1,j), opt(i,j-1)).

If i,j > 0 and str1[i] = str2[j], then opt(i,j) = opt(i-1, j-1)

This holds since we don’t need to delete the last letters in order to get the same string, we simply use the same deletions we would to the (i-1)'th and (j-1)'th prefixes.

Solution 1

After finding the relations above for opt(i,j), we use dynamic programming methods to calculate opt(str1Len, str2Len), i.e. the deletion distance for the two strings, by calculating opt(i,j) for all 0 ≤ i ≤ str1Len, 0 ≤ j ≤ str2Len, and saving previous values for later use:

Pseudocode:

function deletionDistance(str1, str2):
    str1Len = str1.length
    str2Len = str2.length

    # allocate a 2D array with str1Len + 1 rows and str2Len + 1 columns
    memo = new Array(str1Len + 1, str2Len + 1)

    for i from 0 to str1Len:
        for j from 0 to str2Len:
            if (i == 0):
                memo[i][j] = j
            else if (j == 0):
                memo[i][j] = i
            else if (str1[i-1] == str2[j-1]):
                memo[i][j] = memo[i-1][j-1]
            else:
                memo[i][j] = 1 + min(memo[i-1][j], memo[i][j-1])

    return memo[str1Len][str2Len]
Time Complexity: we have a nested loop that executes O(1) steps at every iteration, thus we the time complexity is O(N⋅M) where N and M are the lengths of str1 and str2, respectively.

Space Complexity: we save every value of opt(i,j) in our memo 2D array, which takes O(N⋅M) space, where N and M are the lengths of str1 and str2, respectively.

Solution 2

The solution above takes O(N⋅M) space since we save all previous values, but notice that opt(i,j) requires only opt(i-1,j), opt(i,j-1) and opt(i-1,j-1). Thus, by iterating first through 0 ≤ i ≤ str1Len, and then for every i calculating 0 ≤ j ≤ str2Len, we need only to save the values for the current i and the last i. This will reduce the space needed for the function.

Pseudocode:

function deletionDistance(str1, str2):
    # make sure the length of str2 isn't
    # longer than the length of str1
    if (str1.length < str2.length)
        tmpStr = str1
        str1 = str2
        str2 = tmpStr

    str1Len = str1.length
    str2Len = str2.length
    prevMemo = new Array(str2Len  + 1)
    currMemo = new Array(str2Len  + 1)

    for i from 0 to str1Len:
        for j from 0 to str2Len:
            if (i == 0):
                currMemo[j] = j
            else if (j == 0):
                currMemo[j] = i
            else if (str1[i-1] == str2[j-1]):
                currMemo[j] = prevMemo[j-1]
            else:
                currMemo[j] = 1 + min(prevMemo[j], currMemo[j-1])

        prevMemo = currMemo
        currMemo = new Array(str2Len + 1);

    return prevMemo[str2Len]

Time Complexity: the time complexity stays the same, i.e. O(N⋅M), since we still run a nested loop with N⋅M iterations.
Space Complexity: O(min(N,M)), as we only need to hold two rows of the double array.
*/
