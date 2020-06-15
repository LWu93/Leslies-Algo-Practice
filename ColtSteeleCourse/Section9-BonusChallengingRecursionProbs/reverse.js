function reverse(string){
  if (!string.length) return string;
  return reverse(string.slice(1)) + string[0]
}
