/**
 * @param {string} s
 * @return {string}
 */

//psuedocode
//use a stack to keep track of the decoding you need to do which depends on the chars inside brackets and the preceding number
//we wont need to check if its brackets are valid. When we see a closing, we know theres an open.
//for above check, we also need to keep in mind if the brackets are nested. our code must also cover that case.
//Ex 2: nested brackets. check for if there is a bracket, and when it closes, use the most recent 1
//In the case above, you want to combine it back into a str and push it into the stack until we hit the second bracket
//we know a number will come right before the opening bracket as well so we can store that as well as the word in variables.
//If we match both parens, then we can push the new result into our newStr
//loop through the end result of our stack and add to our newStr. return newstr

var decodeString = function(s) {
  let stack = [], newStr = "", nums = '1234567890';

  for (const char of s) {
    //if its not a closing bracket, we can store everything else in our stack
    if (char !== ']') {
        stack.push(char)
    } else {
      //found an open bracket and store the new number/word
      let curr = stack.pop(), number = '', word = '';

      //ONLY chars can come before the open bracket
      while (curr !== '[') {
        word = curr + word
        curr = stack.pop()
      }

      //once we hit the open bracket, we KNOW its a number afterwards.
      //gotta pop off the next number to set to curr
      curr = stack.pop();

      while (nums.includes(curr)) {
        number = curr + number
        curr = stack.pop()
      }

      //if we exit this while loop, that means we've popped off a char,'[' or undefined. we wanna push it back
      if (curr) stack.push(curr)
      stack.push(word.repeat(number*1)) //push in new repeated word
      }
  }

  //loop thru stack to join the chars

  // stack.forEach(ele => newStr += ele)
  // return newStr;
  return stack.join("") //subtle optimization
};

//n - s.length, k - longest char or number combo inside of a encoded string
//Time - O(n*k). One loop through s. A while loop to go through k. n time for stack.join simplifies down.
//Space - O(n). Worstcase, stack is (almost) completely filled with n.
