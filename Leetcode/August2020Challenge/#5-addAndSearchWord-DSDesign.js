/*
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:
addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true

Note:
You may assume that all words are consist of lowercase letters a-z.
*/

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.words = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  //Set up a trie like DS that will insert every word and finish with .isWord = true property
  let curr = this.words;

  for (const char of word) {
    if (!curr[char]) curr[char] = {};
    curr = curr[char]
  }

  curr.isWord = true
};
//Time - O(n). n - word.length

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  //HF to traverse
  let traverse = function(word, idx, trie) {
    //basecase is when we hit the last char in our word and .isWord == true,
    //NOT when .isWord == true or edgecase when its one letter and isWord == undefined
    if (idx == word.length) return trie.isWord == true;

    let currChar = word[idx]
    if (currChar == '.') {
      for (const key in trie) {
        if (traverse(word, idx+1, trie[key])) return true;
      }
    } else {
      //if its a letter that exists in our trie, traverse the next letter
      if (trie[currChar]) return traverse(word, idx+1, trie[currChar])
    }
    //if we hit this, that means the char wasn't a . or a valid letter in our trie
    return false;
  }

  return traverse(word, 0, this.words)
};
//Time - O(n). n - word.length
//Space - O(n). n recursive calls in callstack as it traverses.
