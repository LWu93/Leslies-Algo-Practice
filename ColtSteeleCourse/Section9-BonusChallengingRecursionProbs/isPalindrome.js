function isPalindrome(string){
  if (!string.length || string.length === 1) return true
  if (string[0] === string.slice(-1)) return isPalindrome(string.slice(1, string.length - 1))
  else return false
}
