// this is the prompt StringifyNumbers.
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and convert them to strings.

let obj = {
    num: 1,
    test: [22, {"a": "b"}],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

//can't manipulate original obj
//cannot JSON.stringify --> makes deep copy for you.
const stringifyNumbers = obj => {
  //make a copy of obj or Array
  let newObj = {};

  if (Array.isArray(obj)) {
    newObj = []
  }

  //Loop through keys
  for (key in obj) {
  //Check values to see if they are a data structure or not
    if (typeof obj[key] === "number") {
    //if values are nums, convert to string
      newObj[key] = obj[key].toString()
    } else if (typeof obj[key] === "object") {
    //make a deep copy of the value if it is nested
      newObj[key] = stringifyNumbers(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }

  //return a copied version
  return newObj;
}

stringifyNumbers(obj)
// ==> returns below
// {
//     num: "1",
//     test: ["22", {"a": "b"}],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
