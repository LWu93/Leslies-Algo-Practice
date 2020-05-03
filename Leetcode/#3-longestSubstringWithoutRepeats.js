const lengthOfLongestSubstring = (s) => {
    let left = 0;
    let right = 0;
    let hash = {};
    let max = 0;

    while (right < s.length) {
        if (!hash.hasOwnProperty(s[right])) {
            hash[s[right]] = true;
            right++;
            max = Math.max(max, Object.keys(hash).length);
        } else {
            delete hash[s[left]];
            left++;
        }
    }

    return max;

//     if (!s.length) return 0;
//     let left = 0;
//     let right = 0;
//     let sum = 0;
//     let uniqueChars = [];
//     let maxUnique = {};

//     while (right < s.length) {
//         if (!uniqueChars.includes(s[right])) {
//             uniqueChars.push(s[right])
//             right++
//             maxUnique.push(uniqueChars.length)
//         } else {
//             uniqueChars = [];
//             left++;
//             right = left;
//         }
//     }

//     let maxUniqueArray = Object.values(maxUnique)

//     return sum;
};

lengthOfLongestSubstring("abcabccc") // ==> should return "abc" and the length of 3
lengthOfLongestSubstring("pwwkew") // ==> should return "wke" and the length of 3
