import React from 'react'

import Graph from 'react-graph-vis'


class GraphContainer extends React.Component {
    constructor(props) {
        super(props);
        const { initialGraph } = this.props
        this.state = {
            graph: initialGraph
        };
    }

  render() {
    const { graph, options, events } = this.props;

    return (
      <div> 
        <Graph 
          graph={graph}
          options={options}
          events={events}
        />
      </div>
    );
  }
}

export default GraphContainer
