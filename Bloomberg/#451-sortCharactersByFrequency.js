/**
 * @param {string} s
 * @return {string}
 */

/* psuedocode - second attempt
return a str that's sorted in decreasing order of the freq of chars

we need to store freq and chars in a bucket and then return those from highestFreq
loop through str
    add each char into its own bucket and keep track of its idx by storing its char/key in a obj/map

after we finish looping, we can sort it by freq and store it in an array. loop through array and rebuild str from the chars we're given.
*/

//we want letters to keep track of our idx in our arr
var frequencySort = function(str) {
  let letters = {}, freq = [], charIdx = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (letters[char] === undefined) {
      freq.push([char,1])
      letters[char] = charIdx
      charIdx++
    } else {
      //increment its freq in its tuple
      freq[letters[char]][1] += 1
    }
  }

  //sort the freq arr
  freq.sort((a,b) => b[1]-a[1])

  let strBldr = [] //build str using array for faster time
  for (const [char, charFreq] of freq) {
    strBldr.push(char.repeat(charFreq))
  }

  return strBldr.join("")
};
/* Complexity. n - str.length;

Time - O(n). we loop through str to get its char, freq to store in a bucket. our sort is constant since its fixed at 26 via charBucket. Similarly, our str builder loop is also capped at 26.
Space - O(1). storing a tuple of buckets with [char,freq] also caps us at 26 or constant. Sort recursive calls also round down to constant. Similarly, our letters obj is capped at 26.

*/

//First Attempt using an obj to store key/vals and sorting its length.
// var frequencySort = function(s) {
//   let arr = [];
//   let hash = {};
//   let str = '';
//   // let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     hash[char] ? hash[char]++ : hash[char] = 1;
//   }

//   for (key in hash) {
//     arr.push([key, hash[key]])
//   }
//   arr.sort((a,b) => b[1] - a[1])
//   // console.log(arr)

//   arr.forEach(pair => {
//     str += pair[0].repeat(pair[1])
//   })

//   return str;

// };
