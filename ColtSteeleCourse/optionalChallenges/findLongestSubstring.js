//My Solution
function findLongestSubstring(str){
  if (!str.length) return 0

  let longest = 0
  let set = new Set()
  let start = 0

  for (let end = 0; end < str.length; end++) {
      let curr = str[end]

      while (set.has(curr)) {
          set.delete(str[start])
          start++
      }

      set.add(curr)
      longest = Math.max(longest, end - start + 1)
  }

  return longest
}

//Colts Solution
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
