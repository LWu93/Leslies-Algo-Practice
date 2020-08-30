//DID NOT TEST ON LC YET. APPROACH WORKS WITH GIVEN EXAMPLES

/*
Write a function to crush candy in one dimensional board. In candy crushing games, groups of like items are removed from the board. In this problem, any sequence of 3 or more like items should be removed and any items adjacent to that sequence should now be considered adjacent to each other. This process should be repeated as many time as possible. You should greedily remove characters from left to right.

Example 1:
Input: "aaabbbc"
Output: "c"

Explanation:
1. Remove 3 'a': "aaabbbc" => "bbbc"
2. Remove 3 'b': "bbbc" => "c"

Example 2:
Input: "aabbbacd"
Output: "cd"

Explanation:
1. Remove 3 'b': "aabbbacd" => "aaacd"
2. Remove 3 'a': "aaacd" => "cd"

Example 3:
Input: "aabbccddeeedcba"
Output: ""

Explanation:
1. Remove 3 'e': "aabbccddeeedcba" => "aabbccdddcba"
2. Remove 3 'd': "aabbccdddcba" => "aabbcccba"
3. Remove 3 'c': "aabbcccba" => "aabbba"
4. Remove 3 'b': "aabbba" => "aaa"
5. Remove 3 'a': "aaa" => ""

Example 4:
Input: "aaabbbacd"
Output: "acd"

Explanation:
1. Remove 3 'a': "aaabbbacd" => "bbbacd"
2. Remove 3 'b': "bbbacd" => "acd"
*/

//Psuedocode - using a stack
//Your stack will track each ele you push in.
//if stack.length > 2 and check if the last 2 eles in stack are == currChar
//IF - it is, then while loop and pop() until !== currChar from stack
//After doing that, you want to check if the last ele in stack is also crushable
//create a helper func to help check if the stack is crushable
//while loop will check if stack[lastIdx] === curr and the next char !== curr
//Else - continue looping

//HF
const check = (stack) => {
  if (stack.length < 2) return false
  let lastEle = stack[stack.length-1]

  for (let i = stack.length-2; i > stack.length-4; i--) {
    if (stack[i] !== lastEle) return false
  }
  return true
}

const candyCrush = (str) => {
  let stack = [], ptr = 0, newStr = "";

  while (ptr < str.length) {
    let curr = str[ptr];

    stack.push(curr)
    let lastIdx = stack.length-1
    let crushable = check(stack)

    //if the last 3 in the stack are the same and the next letter is NOT the same
    if (crushable && stack.length > 2) {
      //the additional check is to cover the "greedily" part of the question.
      while (stack[lastIdx] == curr && str[ptr+1] !== curr) {
        stack.pop();
        lastIdx--
      }
    }

    ptr++
  }

  //loop through stack and create our newStr
  for (const char of stack) {
    newStr += char
  }

  return newStr;
}
//n - str.length, k - longest adjacent chars
//Time - O(n*k). While we do have 2 while loops, our avg time prob comes to O(n) but worst case is if the entire string was the same char. It would loop through 2x.
//Space - O(n).  Stack will at most hold n # of chars

//Optimize - instead of holding each individual char in the stack, we can set them as a pair -> [char, freq] in the stack so we can pop 1 item off our stack instead of having an additional for loop. To satisfy the "greedily" approach, you still need to check if the next char is !== currChar

const candyCrush2 = (str) => {
  let stack = [], newStr = "";

  for (let i = 0; i < str.length; i++) {
    let curr = str[i], lastIdx = stack.length-1
    //check if stack.length exists and is equal to the top ele
    if (stack.length && stack[lastIdx][0] === curr) {
      stack[lastIdx][1]++;
    } else {
      stack.push([curr, 1])
    }

    //if next ele is the same, you want to add it as part of your adjacent chars
    if (i !== str.length && str[i+1] === curr) continue;
    if (stack[stack.length-1][1] >= 3) stack.pop()
  }

  // build newStr from stack
  for (const [char,freq] of stack) {
    newStr += char.repeat(freq)
  }

  return newStr;
}
//n - str.length
//Time - O(n). One loop through.
//Space - O(n).  Stack will at most hold n # of chars.

candyCrush("aaabbbc") // "c"
candyCrush("aabbbacd")// "cd"
candyCrush("aabbccddeeedcba")// ""
candyCrush("aaabbbacd") //"acd"
candyCrush("aaaaawefbbbffaasbtrcd") //"weaasbtrcd". checks for greedy approach
removeDups("aaaaawefbbbffaasbtrcdddddddd") //"weaasbtrcd". checks last adj chars
removeDups("aaaaawefbbbffaasbtrcddddddddccrr") //"weaasbt".
