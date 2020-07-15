/*
Dynamic Programming or DP - A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems and storing their solutions.

Main uses of DP to approach a problem is
Overlapping Subproblems - which is a problem that can be broken down into subproblems which are reused again. Ex: Fibonacci. Finding and using fib(2), fib(3), etc more than once.
Optimal Substructure - If an optimal solution can be constructed from optimal solutions of its subproblems. Ex: Finding the shortest path from A -> D. You can find that by the shortest path from A -> B, B -> C, and eventually C -> D.

Memoization - To memo or store our overlapping subproblems solutions so we can reuse them again and access them with instant time.

Tabulation - Top down approach. Storing the result of a previous result in a "table" (usually an array). Generally done using iteration and optimal space wise.

*/
