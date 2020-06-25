var numTrees = function(n) {
    let result = [1];
    for (let i = 1; i <= n; i++) {
        result[i] = 0;
        for (let j = 0; j < i; j++) {
            result[i] += (result[j] * result[i-j-1]);
        }
    }
    return result[n];
};
