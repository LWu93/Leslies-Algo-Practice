//Intro to backtracking - General template and psudocode to an approach

/*
Main function{
  1 - Initialize solution requirement. result = (array, integer, string, etc)
  2 - Create backtrack func, takes in (a DS and "a way to keep track of a partial/potential solution")
  3 - Invoke - Backtrack(DS, "tracking") with its "initial state" - usually 0 or empty DS.
  4 - Return result
}

Backtrack(args){
  Base Case AKA completion/validity check
  IF (valid solution) do something - usually pushing/adding to/mutating(?) your result data. return.

  for (loop through the subset/combos you have or info you're given) {
    each choice or next potential/partial solution you can make.
    (You may have to check to see if this subset satisfies the questions requirements)
    Console.log here to see each choice you make
    IF - it does satisfy, you want to backtrack() again with this choice
    ELSE - continue/move on.
  }
  **it might also be possible if it doesn't satisfy the above case and you continue on,,, you backtrack(with the partial solution) here
  Unchoose/unselect/remove this option from future backtracks.
}

some optimizations include:
Preemptive stops that would automatically exclude current backtrack AKA Pruning
1 - If looking for a number/sum, and if you already exceed sum, exit.
2 - When excluding/including duplicates
3- Knowing the difference between permutatons/combos/subsets and how they apply to your type of backtracking problem
Examples
In sudoku, you can immediately tell if the solution wont work when you repeat a number
In N-Queens, you check if there are already any queens in your row/col or diagonals

*/
