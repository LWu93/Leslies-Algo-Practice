function capitalizeFirst (arrOfStrings) {
  let newArr = [];

  const upperCaseFirstLetter = (word) => {
      if (word.length === 0) return word;
      if (word[0] === word[0].toUpperCase()) return word;
      else {
          return word[0].toUpperCase() + word.slice(1)
      }
  }

  for (let i = 0; i < arrOfStrings.length; i++) {
      newArr.push(upperCaseFirstLetter(arrOfStrings[i]))
  }

  return newArr
}
