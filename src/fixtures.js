
let graph = {
  nodes: [
      {id: 1, label: 'Node 1', color: '#e04141'},
      {id: 2, label: 'Node 2', color: '#e09c41'},
      {id: 3, label: 'Node 3', color: '#e0df41'},
      {id: 4, label: 'Node 4', color: '#7be041'},
      {id: 5, label: 'Node 5', color: '#41e0c9'},
      {id: 7, label: 'etienne', color: 'yellow', poids: 45}
    ],
  edges: [
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]
};

let options = {
    layout: {
        hierarchical: false
    },
    edges: {
        color: "#000000"
    },
  width: '1000px',
  manipulation: {
    enabled: true,
    initiallyActive: true,
  }
};

export {
  options,
  graph
}
