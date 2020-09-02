/*
Design a Leaderboard class, which has 3 functions:

addScore(playerId, score): Update the leaderboard by adding score to the given player's score. If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.
top(K): Return the score sum of the top K players.
reset(playerId): Reset the score of the player with the given id to 0 (in other words erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard before calling this function.
Initially, the leaderboard is empty.

Example 1:

Input:
["Leaderboard","addScore","addScore","addScore","addScore","addScore","top","reset","reset","addScore","top"]
[[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]
Output:
[null,null,null,null,null,null,73,null,null,null,141]

Explanation:
Leaderboard leaderboard = new Leaderboard ();
leaderboard.addScore(1,73);   // leaderboard = [[1,73]];
leaderboard.addScore(2,56);   // leaderboard = [[1,73],[2,56]];
leaderboard.addScore(3,39);   // leaderboard = [[1,73],[2,56],[3,39]];
leaderboard.addScore(4,51);   // leaderboard = [[1,73],[2,56],[3,39],[4,51]];
leaderboard.addScore(5,4);    // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];
leaderboard.top(1);           // returns 73;
leaderboard.reset(1);         // leaderboard = [[2,56],[3,39],[4,51],[5,4]];
leaderboard.reset(2);         // leaderboard = [[3,39],[4,51],[5,4]];
leaderboard.addScore(2,51);   // leaderboard = [[2,51],[3,39],[4,51],[5,4]];
leaderboard.top(3);           // returns 141 = 51 + 51 + 39;

*/

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */

/* psuedocode

store data in a map so we can delete with ease.

addScore - simply finds the players score if it exists and adds to it. if it doesn't exist, set it to the new score
reset - since its guaranteed the player has been added, we can simply delete the score from our map so we have less to account for.
top - we can sort the scores and then loop from the top val until the end. return the sum.
*/

//Solution with Sort
class Leaderboard {
  constructor() {
    this.scores = new Map();
  }

  addScore(playerId, score) {
    //updates players score and adds to its existing score. If the player doesn't exist, set player -> score. no return
    this.scores.set(playerId, (this.scores.get(playerId) || 0) + score)
  }

  top(k) {
    //k is the num of players from the top we want to add to a cumulative sum. return int sum.
    let sum = 0, scores = [...this.scores.values()].sort((a,b) => b-a);

    //HF to add to sum
    function addScoresToSum(arr, k) {
      for (let i = 0; i < k; i++) {
        sum += scores[i]
      }
    }
    addScoresToSum(scores, k)

    return sum
  }

  reset(playerId) {
    //sets players score to 0. No return
    this.scores.delete(playerId)
  }
}
