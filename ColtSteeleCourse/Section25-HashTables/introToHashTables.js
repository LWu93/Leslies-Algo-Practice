/*
Hash Tables - A abstract DS to store key-value pairs. They are like arrays but the keys are not ordered.
Unlike arrays, hash tables are very fast when it comes to accessing and storing data. Because of their speed, hash tables/maps are very commonly used.
Able to incorporate "human readability" on keys to make it easier to use.
To implement a hash table, we will use an array. In order to look up values by key with instant access, we need a way to convert keys into valid array indices.
Hashing Function - implements the hashing/changing from a unique string to a unique index. Conceptually, if i passed in "pink" to a hashing func, it should always return the same # or idx.

What makes a good hash?
- Fast. Constant time look up, setting but also fetching the data you're storying.
- Doesn't cluster outputs at specific indices but distributes uniformly. Should evenly spread out, including any potential collisions.
- Deterministic. It will always return the same output if you provide the same input.

- Almost all hashing functions will use prime numbers to avoiding collisions and spreading data out as much as possible. #Maths
*/

//Example Hashing function

function hash (key, arrayLen) {
  let total = 0;

  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96; //the letter "a" starts at charCode 97 so we get a num from 1-26 or 27-52 (Capitalized)
    total = (total + value) % arrayLen;
  }

  return total; //In this case there are many potential combinations of charCodes that can return the same total.
}

//Hash Function using prime numbers to avoid cases there you can get multiple totals from diff strings
function hash (key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;

  //we are simplifying it so that it either goes from str.length of 0 up to 100. There aren't many cases where 100+ will be relevant
  for (let i = 0; i < math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }

  return total;
}

//Dealing with Collisions - There are many strategies to deal with it but 2 main ones are
//1 - Separate Chaining. Store the pieces of data in the same spot. Storing multiple key-value pairs in that spot.
//2 - Linear Probing. If the spot in the array is already taken or collided, you look at the next empty space and place it there instead. A problem would be if you eventually run out of space.

/*
//Psudocode for .set() and .get() methods

Set
- Takes in a key and value as params
- Hashes the key
- Stores the key-value pair in the hash table array via separate chaining.

Get
- Accepts a key
- Hashes the key
- Retrieves the key-value pair stored at the returned idx value/
- If there is no key, return undefined.

Keys
- Loop through the hash table array and return an array of keys

Values
- Loop through the hash table array and return an array of values
*/

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    const idx = this.hash(key); //retrieve the idx

    //if its not occupied, we want to initialize an array inside
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    //regardless if there are already key-val pairs inside, we still want to push it in via separate chaining.
    this.keyMap[idx].push([key, val])
  }

  get(key) {
    const idx = this.hash(key);

    //if the idx has data inside, we need to loop through to find the specific key
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (this.keyMap[idx][i][0] === key) {
          return this.keyMap[idx][i][1]; //return only the val
        }
      }
    }

    return undefined;
  }

  values() {
    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }

    return valuesArr;
  }

  keys() {
    let keysArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }

    return keysArr;
  }

}
/*
Time Complexity
insert - O(1)
delete - O(1)
access - O(1)

*/
