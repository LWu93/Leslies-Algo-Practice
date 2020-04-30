const preOrder = function (root) {
	const result = [];
	if (root === null) return result;
	const stack = [root];
	while (stack.length) {
		let current = stack.pop();
		if (current === null) continue;
		result.push(current.val);
		stack.push(...current.children.reverse());
	}
	return result;
};

// root = [1,null,3,2,4,null,5,6]
preOrder([1, null, 3, 2, 4, null, 5, 6]); // ==> [1,3,5,6,2,4]

// root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
preOrder([1, null, 3, 2, 4, null, 5, 6]); // ==> [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
