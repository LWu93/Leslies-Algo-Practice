var isSubsequence = function(s, t) {
    //set up a pointer and track everytime you hit the first letter of s.
    //continue looping to check if the next letter is ever hit.
    //if its not hit, then there are no subsequences and you can return false.
    //if hit, check the next letter until s.length is === to pointer to return true.

    if (!s.length) return true;

    let count = 0;
    let start = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[start] === t[i]) {
            count++;
            start++;
        }
        if (count === s.length) return true;
    }

    return false;
};
