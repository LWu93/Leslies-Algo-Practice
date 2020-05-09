const helper = (result, currStr, open, close, n) => {
    if (currStr.length === n*2) {
        result.push(currStr)
        return
    }
    // console.log(currStr)
    if (open < n) {
        console.log('in the open', currStr)
        helper(result, currStr + '(', open + 1, close, n)
        console.log('intheOPEN', open)
    }
    if (close < open) {
        console.log('in the close', currStr)

        helper(result, currStr + ')', open, close + 1, n)
        console.log('intheCLOSE', close)
    }
}
var generateParenthesis = function(n) {
    let result = []
    helper(result, "", 0, 0, n)
    return result
};

generateParenthesis(3)
//Output:
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
