var removeDuplicates = function(s, k) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length && s[i] === stack[stack.length-1][0]) {
      stack[stack.length-1][1] += 1
       if (stack[stack.length -1][1] === k) {
      stack.pop();
       }
    } else {
      stack.push([s[i], 1])
    }
  }
    let ans = ''
    for (let i = 0; i < stack.length; i++) {
      ans += stack[i][0].repeat(stack[i][1])
    }
  // for (let [char, count] of stack) {
  //   ans += char.repeat(count);
  // }
    return ans;
  }
