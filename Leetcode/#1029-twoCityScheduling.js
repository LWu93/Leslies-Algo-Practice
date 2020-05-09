var twoCitySchedCost = function(costs) {
    const half = costs.length / 2;
    let sum = 0;

let sorted = costs.sort((a,b) => (b[1]-b[0])-(a[1]-a[0]))

 for (let i = 0; i < half; i++) {
    sum += costs[i][0] + costs[i + half][1]
  }

  return sum;
};

// Input: [[10,20],[30,200],[400,50],[30,20]]
twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]])
// Output: 110
