var reverseString = function(s) {
    // s.reverse();

    if (s.length === 1) return s;

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left++], s[right--]] = [s[right], s[left]]
    };

    return s;
};

//Input: ["h","e","l","l","o"]
reverseString(["h","e","l","l","o"])
//==> ["o","l","l","e","h"]
