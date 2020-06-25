const validParentheses = (str) => {

	const matchingBrackets = {
		'(': ')',
		'{': '}',
		'[': ']',
	};

	const stack = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] in matchingBrackets) {
			stack.push(str[i]);
		} else if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
			// if our stack is empty, then we have closing bracket first, just return false
			if (stack.length === 0) return false;
			let lastElem = stack.pop();
			if (str[i] !== matchingBrackets[lastElem]) return false;
		}
	}

	return stack.length === 0;
};
