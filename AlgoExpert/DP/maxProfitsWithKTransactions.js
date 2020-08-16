function maxProfitWithKTransactions(prices, k) {
  if (prices.length <= 1) return 0;

	let evenProfits = new Array(prices.length).fill(0)
	let oddProfits = new Array(prices.length).fill(0)

	//t for transactions, d for days
	for (let t = 1; t < k+1; t++) {
		let maxSoFar = -Infinity; //storing the curr max for second for loop
		let currProfits, prevProfits;

		//tracking only even/odd profitsArray so we can store less space.
		if (t % 2 == 1) {
			currProfits = oddProfits
			prevProfits = evenProfits
		} else {
			currProfits = evenProfits
			prevProfits = oddProfits
		}

		for (let d = 1; d < prices.length; d++) {
			//max we've seen so far is either currMax OR the price of the prevProfits(1 transaction less) minus the prevPrice.
			maxSoFar = Math.max(maxSoFar, prevProfits[d-1] - prices[d-1]);

			//currProfit is EITHER the previous profit OR the maxProfit we've seen + currPrice
			currProfits[d] = Math.max(currProfits[d-1], maxSoFar + prices[d]);
		}
	}

	return k % 2 == 0 ? evenProfits[prices.length-1] : oddProfits[prices.length-1]
}
/*

n - prices.length, k - # of transactions
Time - O(n*k). looping through the number of transactions and going through each ele in prices.
Space - O(2n) ==> O(n). Only storing 2 arrays to track the transactions

*/
