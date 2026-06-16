function create_adj_list(nodes, links){
    let adj_list = {}
    
    // Initialize adjacency list for each node
    for (const node of nodes) {
        adj_list[node.id] = []
    }
    
    // Build adjacency list from links (undirected graph)
    for (const link of links) {
        const source = link.source
        const target = link.target
        
        // Add edge in both directions for undirected graph
        if (adj_list[source]) {
            adj_list[source].push(target)
        }
        if (adj_list[target]) {
            adj_list[target].push(source)
        }
    }
    
    return adj_list
}