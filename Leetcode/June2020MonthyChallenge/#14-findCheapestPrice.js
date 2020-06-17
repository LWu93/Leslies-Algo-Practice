var findCheapestPrice = function(n, flights, src, dst, K) {
    let graph = {} //{from: {to: price, to2: price2, ...}}

    for (let [source, destination, price] of flights) {
        if (!graph.hasOwnProperty(source)) {
            graph[source] = {}
        }
        graph[source][destination] = price
    }

    let queue = [[src, 0, 0]]

    while (queue.length) {
        let [city, price, stops] = queue.shift()
        if (city == dst) return price
        if (stops > K) continue

        //check to see if your adjList has the city. Then you can traverse neighbors
        if (graph[city]) {
            for (let neighbor in graph[city]) {
                let currPrice = graph[city][neighbor] //weighted edge aka price
                queue.push([neighbor, currPrice + price, stops+1])
            }
        }
        queue.sort((a,b) => a[1] - b[1])
    }
    return -1
};
