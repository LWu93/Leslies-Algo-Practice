/*
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

Example 1:
Input: 2, [[1,0]]
Output: [0,1]

Explanation:
There are a total of 2 courses to take. To take course 1 you should have finished
course 0. So the correct course order is [0,1].

Example 2:
Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]

Explanation:
There are a total of 4 courses to take. To take course 3 you should have finished both
courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

Note:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.

*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

//Psudocode
//Set up an adjList that will keep track of prereqs for courses
//set up a queue for a BFS through each course that has no prereq or have been satisfied
//loop through your adjList and go through its courses that have prereqs.
//BFS through the adjList[courses] if you've already visited or have the prereqs satisfied.
//if you hit the course and have taken its prereq, you can push that course into your res arr
//return res
var findOrder = function(numCourses, prerequisites) {
  let res = [];
  if (!prerequisites) return res;

  const adjList = {};
  const q = [];
  let indegrees = new Array(numCourses).fill(0);

  //create an adjList
  for (const [course, prereq] of prerequisites) {
    if (!adjList[prereq]) {
      adjList[prereq] = []
    }
    adjList[prereq].push(course);

    //indegrees[course] will keep track of # of prereqs needed and if we're at 0, then we dont need or have hit our prereqs for the course
    indegrees[course]++;
  }

  //loop over indegrees to get the first set of courses that have no prereqs
  for (const i in indegrees) {
    if (indegrees[i] === 0) {
      q.push(i)
    }
  }

  while (q.length) {
    let currCourse = q.shift();
    const neighbors = adjList[currCourse];

    //find its neighbors --> indegrees[course]--. If its val === 0, push into queue.
    if (neighbors) {
      for (let i = 0; i < neighbors.length; i++) {
        const successor = neighbors[i];

        indegrees[successor]--;
        if (indegrees[successor] === 0) q.push(successor)
      }
    }
    //track the courses that are valid and we can take them
    res.push(currCourse)
  }

  //if the resulting arr doesn't contain all the courses, its not possible to take every course
  if (res.length !== numCourses) return [];
  return res;
};
