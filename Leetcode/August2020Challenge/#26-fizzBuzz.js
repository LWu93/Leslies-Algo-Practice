/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:
n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]

FOLLOW UP BELOW
*/

/**
 * @param {number} n
 * @return {string[]}
 */

//psuedocode
//have a while loop that goes from 1 to n.
//check, 1 - if its a multiple of 3 && 5. 2 - if its a multiple of 3. 3 - multiple of 5. 4 - just the letter itself
//at every iteration, push the str into a return array

var fizzBuzz = function(n) {
  let res = [];
  if (n < 1) return res;

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) res.push("FizzBuzz")
    else if (i % 5 === 0) res.push("Buzz")
    else if (i % 3 === 0) res.push("Fizz")
    else res.push(i.toString())
  }

  return res;
};
//Time - O(n). loop from 1 to n.
//Space - O(n). Constant length of n # of words added to our res array.

/*
the followup if you get fizzbuzz in an interview is: what if you do the same for 3- fizz 5-buzz 7-jazz with the same rules. lot of combos to consider. there are 2 better ways than brute forcing every combo. One way is better code and 2nd way is about maintainability ie if interviewer says what if instead of fizz buzz jazz, there's 10 mappings and you want to be able to adjust the code every day to something else. I dont think they'd ask you to code that way but maybe talk about it. - Alex

psuedocode - keep track of the conditionals inside of a map to store order and the val/result that we want to achieve. Map will be O(1) space so long that as we have a fixed amount of conditionals. We do steps similar to how to code out fizzbuzz except we make the code more dynamic in the sense that we will be replacing the conditional checks to satisfy each key/val pair in our Map. In order to do that, we would loop through the map consistently through our initial loop and then check the conditionals inside the second loop. This should still result in O(n) time if our keys are fixed.
*/

//we can have conditionals come in dynamically or be given the type of conditionals to modify
const fizzBuzzFollowUp = (n, conditionals) => {
  let res = [];
  let map = new Map();

  //assuming conditionals will be an array and the insides will be a tuple that stores changing conditions we want to check for. Ex: conditionals = [[3, "Fizz"], [5, "Buzz"], [8, "Mazz"]]
  for (let i = 0; i < conditionals.length; i++) {
    let [multiple, word] = conditionals[i];
    map.set(multiple, word)
  }
  /*You can also do this manually if we are given a prompt without conditionals such as "check multiples of 2, 5, and 8"
  map.set(2, "Fizz")
  map.set(5, "Buzz")
  map.set(8, "Mazz")
  */

  for (let i = 1; i <= n; i++) {
    let resultingWord = "";

    //loop through map to hit each conditional. Map stores in-order so the word will print in-order
    for (const [multiple, word] of map) {
      if (i % multiple === 0) resultingWord += word;
    }
    //case when no conditionals are hit and we want to stringify the num
    if (resultingWord === "") resultingWord += i;

    res.push(resultingWord)
  }

  return res;
}

fizzBuzzFollowUp(55, [[3, "Fizz"], [5, "Buzz"], [8, "Mazz"]])

//Time - O(n). loop from 1 to n. Second loop is constant so it averges to o(n)
//Space - O(n+k). Constant length of n # of words added to our res array. k - # of conditionals we have to check for, so we might be adding n amount of word that may be k length long. ex: "FizzBuzzBazzMazzJazz"
