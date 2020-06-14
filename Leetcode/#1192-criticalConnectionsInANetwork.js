// O(|V|+|E|) time complexity. look at each V and E at least twice
// O(|V|+|E|)
var criticalConnections = function(n, connections) {
    let adList = new Map();
    for(let node = 0; node < n; node++){
        adList.set(node, []);
    }
    for(const connection of connections){
        let node0 = connection[0];
        let node1 = connection[1];
        adList.get(node0).push(node1);
        adList.get(node1).push(node0);
    }

    let discovery = new Array(n);

    // the earliest disovered node it connects to
    // not through parent.
    let lowLink = new Array(n);

    let timeStamp = 0;
    let bridges = [];

    let DFS = function(node, parent){
        discovery[node] = timeStamp;
        lowLink[node] = timeStamp;
        timeStamp ++;

        // checking each node and visiting all nodes
        for (const neighbor of adList.get(node)) {
            if (discovery[neighbor] === undefined){
                DFS(neighbor,node)
            }
        }
        // backtracking here, after you've gone through and visited, you can update each lowLink value and find the smallest lowLink values per node
        // have to do these two for loops sequentially and NOT simultaneously.
        for (const neighbor of adList.get(node)){
            if (neighbor !== parent){
                lowLink[node] = Math.min(lowLink[node], lowLink[neighbor])
            }
        }
        if (parent !== undefined && lowLink[node] > lowLink[parent]) {
            // you have a criticial connection here
            bridges.push([node, parent])
        }
    }

    for (let node = 0; node < n; node++){
        if (discovery[node] === undefined){
            DFS(node, undefined)
        }
    }
    // console.log(adList);
    // console.log(discovery);
    // console.log(lowLink);
    // console.log(parent);

    return bridges;
};
