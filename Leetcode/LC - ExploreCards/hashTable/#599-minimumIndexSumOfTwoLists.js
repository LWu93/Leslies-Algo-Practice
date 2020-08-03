/*
Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

Example 1:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".

Example 2:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

Note:
The length of both lists will be in the range of [1, 1000].
The length of strings in both lists will be in the range of [1, 30].
The index is starting from 0 to the list length minus 1.
No duplicates in both lists.
*/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
//loop through list1 and store all matches in a map
//loop through list2 and see which ones match. Add name and sumOfIdxs into another map to track matches
//if the matches idx is less than the curr match, set that as the new restaurant
//else, just push that restaurant into the matches -> new Set().
var findRestaurant = function(list1, list2) {
  let map = new Map(), matches = new Set(), currMin = Infinity, res = [];

  for (const idx in list1) {
    map.set(list1[idx], idx)
  }

  for (const idx in list2) {
    const currRstr = list2[idx]
    if (map.has(currRstr)) {
      const currSum = Number(idx) + Number(map.get(currRstr))
      if (currSum < currMin) {
        matches.clear()
        matches.add(currRstr)
        currMin = currSum;
      } else if (currSum === currMin) {
        matches.add(currRstr)
      }
    }
  }

  matches.forEach(ele => res.push(ele))
  return res;
};
//n - list1.length. m - list2.length
//Time - O(n+m). 2 for loops ~~> O(whichever list is longer)
//Space - O(n). Whichever list is longer.
