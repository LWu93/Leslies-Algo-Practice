var isAnagram = function(word1, word2) {
    if ((!word1.length && word2.length) || (!word2.length && word1.length) || word2.length !== word1.length) return false

    let hash = {}

    for (let i = 0 ; i < word1.length; i++) {
        hash.hasOwnProperty(word1[i]) ? hash[word1[i]]++ : hash[word1[i]] = 1
        hash.hasOwnProperty(word2[i]) ? hash[word2[i]]-- : hash[word2[i]] = -1
    }

    for (key in hash) {
        if (hash[key] !== 0) return false
    }

    return true;
};
