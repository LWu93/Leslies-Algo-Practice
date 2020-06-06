var twoCitySchedCost = function(costs) {
    const half = costs.length / 2;
    let sum = 0;

let sorted = costs.sort((a,b) => (b[1]-b[0])-(a[1]-a[0]))

 for (let i = 0; i < half; i++) {
    sum += costs[i][0] + costs[i + half][1]
  }

  return sum;
};
