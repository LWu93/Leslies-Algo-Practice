/*
A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.

Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.

Example 1:
Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.

Example 2:
Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]

Example 3:
Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"]

Constraints:
transactions.length <= 1000
Each transactions[i] takes the form "{name},{time},{amount},{city}"
Each {name} and {city} consist of lowercase English letters, and have lengths between 1 and 10.
Each {time} consist of digits, and represent an integer between 0 and 1000.
Each {amount} consist of digits, and represent an integer between 0 and 2000.

*/

/**
 * @param {string[]} transactions
 * @return {string[]}
 */

/* psuedocode
have invalid be a set that stores all unique invalid transactions.
Split each trans.split(",") and destructure as [name,time,amount,city].
Store each transaction in a map, trackTransactions with the key/val as name/ {name,city,transaction}.
As we loop through each trans, we store in trackTransactions so that we can loop through each prev trans and check if they're valid, assuming they're sorted.

IF it goes over $1,000, invalid.push(transaction)
loop through (for ele in map) {
    if Math.abs(diff between cities) && currCity !== ele.city
        invalid.add
}
*/

var invalidTransactions = function(transactions) {
  let invalid = new Set(), trackTransactions = new Map();

  for (let i = 0; i < transactions.length; i++) {
    let [name,time,amount,city] = transactions[i].split(",")

    //check if amount exceeds $1,000
    if (amount > 1000) {
      invalid.add(transactions[i]);
    }

    if (!trackTransactions.has(name)) trackTransactions.set(name, [])
    trackTransactions.get(name).push({name: name, time: time, city:city, transaction: transactions[i]})
  }

  for (let [name, transactions] of trackTransactions) { //O(m)
    //sort through transactions!
    transactions.sort((a,b) => Number(a.time) - Number(b.time));

    for (let i = 0; i < transactions.length; i++) { //O(k)
      //you have to compare each transaction to cover cases where you can have multiple transactions be good and have a bad transaction in the < 60 time constraint
      for (let j = i + 1; j < transactions.length; j++) {
        if (transactions[j].time-transactions[i].time <= 60 && transactions[i].city !== transactions[j].city) {
        invalid.add(transactions[i].transaction)
        invalid.add(transactions[j].transaction)
        }
      }
    }
  }

  return [...invalid.values()];
};

/* n - transactions.length. m - # of names. k - # of transactions per name
Time - O(m * k^2)
Space - O(m * k). map key is m # of names. map val is array of # of transactions.
*/
