/**
 * @param {string} S
 * @return {number[]}
 */

/* psuedocode
Create a dp array to keep track of the ongoing changes as we loop through the string
have a partitions array to track length of strings we need to return
*/
var partitionLabels = function(S) {
  let lastOccurences = new Array(26).fill(-1), partitions = [];
  let partitionStart = 0, partitionEnd = -1;

  //Store the last idx of the char in S. Update as we go along.
  for (let i = 0; i < S.length; i++) {
    lastOccurences[S.charCodeAt(i) - 97] = i
  }

  console.log(lastOccurences, 'j'.charCodeAt(0),'a'.charCodeAt(0))

  for (let i = 0; i < S.length; i++) {
    const idx = S.charCodeAt(i) - 97;
    const lastSeen = lastOccurences[idx];
    partitionEnd = Math.max(partitionEnd, lastSeen)

    //if we are currently at the end of a partition, add to the partitions arr.
    if (i === partitionEnd) {
      const currLength = partitionEnd - partitionStart + 1 //acc for idx
      partitions.push(currLength)
      partitionStart = i + 1; //Update partitionStart
    }
  }

  return partitions
};

/*Complexity. n - S.length
Time - O(n). 2 for loops ~~ O(n.)
Space - O(1). We are storing data in a char Bucket which is capped at 26.
*/
