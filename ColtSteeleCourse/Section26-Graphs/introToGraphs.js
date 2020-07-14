/*
Graphs - A DS that consists of a collection of vertices/nodes/points with connections to each other.

Uses for graphs
Social Media - connections with friends. You can look at connections of one friend and how many mutual friends you may have with him.
Maps - Finding the fastest or most optimal path to get from point A to point B with a set of given data. The data will potentially be weighted.
Recommendations such as Netflix/Yelp - Your data is stored with connections to specific nodes which represent things such as genre/likes/reviews/clicks/age or anything you want to compare.

Terminology

Vertex/Vertices aka nodes.
Edges aka connections.
Undirected Graph - there are no direction or associations to the edges. A is to B what B is to A and both can flow freely.
Directed Graph - often directed with arrows determining the path or direction of a edge.

Ex: if you are friends with Max on FB, it would be a undirected graph. You can see each others content and "follow" each other. On Instagram, you can follow someone and see their content, but if they don't follow back, they can't see yours.

Unweighted Graph - No values associated to a graphs given vertices.
Weighted Graph - values assigned to vertices Edges that can be used to calculate determine X or Y with the data provided.

Storing Graphs - Adjacency Matrix (nested arrays) or Adjacency List (object with the key - the vertex and its value - the connections)
AdjList - Can take up less space. Faster to iterate over every edge. Can be slow to lookup a specific edge.
AdjMatrix - Takes up more space and its slower to iterate through every edge. Very fast to look up specific edges.

Time Complexity of both
|V| - # of vertices
|E| - # of edges

AdjList
add vertex - O(1)
add edge - O(1)
remove vertex - O(|V| + |E|)
remove edge - O(|E|)
query - O(|V| + |E|)
storage - O(|V| + |E|)

AdjMatrix
add vertex - O(|V^2|). Nested for loops
add edge - O(1)
remove vertex - O(|V^2|)
remove edge - O(1)
query - O(1).
storage - O(|V^2|)

*/
