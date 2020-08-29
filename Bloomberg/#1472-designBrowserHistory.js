/**
 * @param {string} homepage
 */

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

/* psuedocode

initiate BrowserHistory with homepage and keep track of steps you can move both forward and backwards.

When we visit a url, we delete all forward history but we still have to keep track of the back history.
    we can slice the array if the current step !== array.length
When we call back,
        // return the url you are moving to
    check if steps is > than this.steps. If it is, set curr to 0th idx and return homepage
    else, we need to -= how many steps backwards we need to go and return the url at currIdx

When we call foward,
    check if steps >= this.forwardSteps. If it is, return the first url in our DS
    else, we += how many steps forward and return the url at currIdx


Potential Optimization ?
in order to make it more optimal, I believe we can simply track all possibleSteps and then if we ever visit a url, we can ignore any of the earlier urls we've been to. They will technically still be in the array but our possibleSteps will keep a pointer at it in our array so we never go past where we've visited.
*/

//["LC", google", "Fb", "Youtube" "LinkedIn"]
//  0      1       2        3          4
//                 ^
class BrowserHistory {
  constructor(homepage) {
    this.history = [homepage],
    this.currentUrl = 0;
  }

  visit(url) {
    //Clear browser history
    if (this.currentUrl !== this.history.length-1) {
      this.history = this.history.slice(0, this.currentUrl+1) //acc for lastIdx
    }

    this.history.push(url)
    this.currentUrl++
    //doesn't return anything
  }

  back(steps) {
    if (steps >= this.currentUrl) {
      this.currentUrl = 0;
    } else {
      this.currentUrl -= steps
    }

    return this.history[this.currentUrl]
  }

  forward(steps) {
    if (steps >= this.history.length - this.currentUrl) {
      this.currentUrl = this.history.length-1; //-1 to acc for lastIdx
    } else {
        this.currentUrl += steps
    }

    return this.history[this.currentUrl]
  }
}
/* n - this.history.length
Time - Most methods are O(1). visit is O(n) because we have to slice. We can optimize by checking from the front or back and return accordingly or see potential optimization above.
Space - O(n).
*/
