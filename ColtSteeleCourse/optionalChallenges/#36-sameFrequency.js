const sameFrequency = (num1,num2) => {

  num1 = num1.toString()
  num2 = num2.toString()
  const longestString = Math.max(num1.length, num2.length)
  let hash = {}

  for (let i = 0; i < longestString; i++) {
      if (hash.hasOwnProperty(num1[i])) {
          hash[num1[i]] += 1
      } else {
          hash[num1[i]] = 1
      }

      if (hash.hasOwnProperty(num2[i])) {
          hash[num2[i]] -= 1
      } else {
          hash[num2[i]] = -1
      }
  }

  for (let key in hash) {
      if (hash[key] !== 0) return false
  }

  return true;
}

sameFrequency(22, 222)
