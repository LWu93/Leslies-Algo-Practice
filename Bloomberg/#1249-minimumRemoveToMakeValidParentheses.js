/*
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.

Example 1:
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Example 2:
Input: s = "a)b(c)d"
Output: "ab(c)d"

Example 3:
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.

Example 4:
Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"

Constraints:

1 <= s.length <= 10^5
s[i] is one of  '(' , ')' and lowercase English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */

//psuedocode
//initiate a stack to keep track of valid parens and chars we will use to rebuild the str.
//var parens = 0, stack = [], newStr = "". open close will track parens
//loop through s, and keep track of open parens. we increment the count if we see and add to stack
//IF, its a close parens, check if there are open parens - parens === 0, if not, don't push
//recreate the str backwards via the stack. Need to check for open parens
//if parens > 0, don't add the open parens and subtract, parens--
//If its a close, next one has to be an open or we don't add it

var minRemoveToMakeValid = function(s) {
  let stack = [], parens = 0, newStr = "";

  //look for any ')' that are extra and don't satisfy a '(' we've accounted for
  for (const char of s) {
    if (char === '(') {
      parens++
    } else if (char === ')') {
      //IF - we don't have an open to cover the close, continue. ELSE - we've covered it
      if (parens === 0) continue;
      else parens--;
    }

    stack.push(char)
  }

  // reconstruct the string backwards and account for '(' that are extra
  while (stack.length) {
    let curr = stack.pop();

    //if we have more open parens, we don't want to add any until close is less than 0
    if (curr == '(' && parens > 0) {
      parens--
      continue
    }

    newStr = curr + newStr
  }

  return newStr;
}
//n - s.length
//Time - O(2n) ==> O(n). Loop through s. Then go through stack. Worst case, stack is n - all of s.
//Space - O(n). Stack can fill up with the entire string. As we pop(), we fill newStr equally.
