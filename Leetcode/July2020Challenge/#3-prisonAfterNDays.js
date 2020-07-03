/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */

/*
There are 8 prison cells in a row, and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the following rules:

If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
Otherwise, it becomes vacant.
(Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)

We describe the current state of the prison in the following way: cells[i] == 1 if the i-th cell is occupied, else cells[i] == 0.

Given the initial state of the prison, return the state of the prison after N days (and N such changes described above.)

Example 1:

Input: cells = [0,1,0,1,1,0,0,1], N = 7
Output: [0,0,1,1,0,0,0,0]
Explanation:
The following table summarizes the state of the prison on each day:
Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]

Example 2:

Input: cells = [1,0,0,1,0,0,1,0], N = 1000000000
Output: [0,0,1,1,1,1,1,0]

*/

//PSUDOCODE
//You need to store patterns of cell openings/closings in a hash - calling it "patterns". prob have to store as strings?
//create a helper func to change cells from 1 day to the next
//loop through the cells, use the HF to change cells until you hit N or find a pattern and set its val to patternBegins.
//if that cell pattern already exists, you can exit the loop and use patternBegins to find its pattern in respect to N.
//let remainder = N % patternBegins, IF there is a remainder, look for that combo in the hash.
//ELSE, return the last change since there weren't enough loops in the cells to create a pattern.

const prisonAfterNDays = (cells, N) => {
  let patterns = {};
  let patternBegins;
  let remainder;
  let i = 0

  while (i < N) {
      let changedCells = changeCells(cells)
      cells = changedCells

      if (patterns[changedCells]) {
          patternBegins = i;
          break;
      }
      i++
      patterns[changedCells] = i
  }

  if (patternBegins) remainder = N % patternBegins

  if (remainder) {
      for (const key in patterns) {
          if (patterns[key] === remainder) {
              return key.split(",")
          }
      }
  } else {
      for (const key in patterns) {
          if (patterns[key] === i) {
              return key.split(",")
          }
      }
  }

};

const changeCells = (arr) => {
  let newArr = new Array(arr.length)
  for (let i = 1; i < arr.length - 1; i++) {
      let prev = arr[i-1];
      let next = arr[i+1];

      if (prev === next) {
          newArr[i] = 1
      } else {
          newArr[i] = 0
      }
  }
  //edge case - if the first and last cells are initially occupied, you need to change to 0s.
  //Can't put in beginning because it could potentially have adjacent 1s in its cells.
  newArr[0] = 0;
  newArr[newArr.length-1] = 0;

  return newArr;
}
