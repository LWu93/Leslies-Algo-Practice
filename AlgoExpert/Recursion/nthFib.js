
//Recursive solution
function getNthFib(n) {
	if (n === 1) return 0;
	if (n === 2) return 1;

	return getNthFib(n - 1) + getNthFib(n - 2);
}

//DP solution
function getNthFib(n) {
	if (n=== 1 || n === 0) return 0;

	let firstTwo = [0, 1];
	let counter = 3;

	while (counter <= n) {
		const fib = firstTwo[0] + firstTwo[1];
		firstTwo[0] = firstTwo[1]
		firstTwo[1] = fib;
		counter++
	}

	return firstTwo[1];
}
