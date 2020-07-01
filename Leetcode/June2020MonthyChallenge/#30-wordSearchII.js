//My psudocode

// Loop through words array and store words in trie's.
// {word1, word2, word3} && {word1Letter1: {word1Letter2: {word1Letter3: true, word2Letter3: ...},}
// now that you have the words, you want to loop through your board
// your DFS will take (board, i, j,currChar, trie) where trie is the adjList of individual words
// if currChar exists, loop through its neighbors which consists in its trie.
// you want to DFS each neighbor and mark them as visited. Then mark as unvisited after if you dont hit any matches
// you pass in dfs the trie of its values and the next values of i, j if satisfied
// continue dfs until you hit trie.isWord === true
// if true, you want to push that word into your results array and set it as .isWord = false

//Solution
class TrieNode {
  constructor() {
    this.word = null;
    this.key = '';
  }
}

const makeTrie = (words) => {
  let root = new TrieNode();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let node = root;
    for (let j = 0; j < word.length; j++) {
      let char = word[j];
      if (!node[char]) {
        node[char] = new TrieNode();
      }
      node = node[char];
    }
    node.word = word;
  }
  return root;
};

var findWords = function (board, words) {
  let root = makeTrie(words);
  let result = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(result, root, board, i, j);
    }
  }
  return result;
};

const dfs = (result, root, board, i, j) => {
  if (!root) {
    return;
  }
  if (root.word) {
    result.push(root.word);
    root.word = null;
  }
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[0].length ||
    board[i][j] === '#'
  ) {
    return;
  }
  let current = board[i][j];
  board[i][j] = '#';
  root = root[current];
  dfs(result, root, board, i + 1, j);
  dfs(result, root, board, i - 1, j);
  dfs(result, root, board, i, j + 1);
  dfs(result, root, board, i, j - 1);
  board[i][j] = current;
};

//Mob code approach # 2 with hash/root to resemble a trie
var findWords = function(board, words) {
    //create a DS -  trie to keep track of our words
    //nested for loop to go through entire board
    //if the letter exists on our DS, we want to DFS
    //if word.isWord is true, we hit the word and we push the word into our result array

    let result = [];
    let root = {} //hash is the root
    // {o: {a: {t: {h: {isWord: true}}}}
    for (const word of words) {
        let wordNode = root
        for (const char of word) {
            if (!wordNode[char]) {
                wordNode[char] = {}
            }
            wordNode = wordNode[char]
        }
        wordNode.isWord = word
        // console.log("root", root)
    }

    //loop through board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length;j++) {
            let curr = board[i][j]
            if (root[curr]) {
                dfs(board,i,j,root,result)
            }
        }
    }

    return result
}

const dfs = (board,i,j,root, result) => {
    //if we've hit the end of the word, push in the word
    if (root.isWord) {
        result.push(root.isWord)
        root.isWord = false
    }

    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] === '#') {
        return
    }

    let letter = board[i][j]
    if (!root[letter]) {
        return
    }

    //set curr to visited
    board[i][j] = '#'

    if (root[letter]) {
        dfs(board,i-1,j,root[letter],result)
        dfs(board,i+1,j,root[letter],result)
        dfs(board,i,j-1,root[letter],result)
        dfs(board,i,j+1,root[letter],result)
    }

    board[i][j] = letter
}

//Time Complexity - O(n * m * l). ~~ avg time complexity
//n = board.length, m = board's row.length, l = longest length of word.
//Space Complexity - O(n). n = words.length - if every word exists, you push into results.
