import React, {Component} from "react"
import Graph from "./graph"
import faker from "faker"
import {options, graph} from "./fixtures"
import {Provider} from "react-redux"
import store from "./store"
import Form from "./Form"
import set from "lodash/set"
import { Container } from 'semantic-ui-react'

function toKeyValue(listOfObjects) {
  let obj = {}
  listOfObjects.forEach(e => (obj[e.id] = e))
  return obj
}

function toPlainList(object) {
  return Object.values(object)
}

class App extends Component {
  constructor(props) {
    super(props)
    const convertedNodes = toKeyValue(graph.nodes)
    this.state = {
      nodes: convertedNodes,
      edges: graph.edges,
      currentNode: {},
    }
  }


  handleSubmit = values => {
    this.setState(({nodes}) => ({nodes: set(nodes, values.id, values)}))
  }

  addField = () => {
    this.setState(({currentNode}) => ({currentNode: Object.assign(currentNode, { gender: 'male' })}))
  }

  handleCreate = event => {
    const uuid = faker.random.uuid()
    this.setState(({nodes}) => ({nodes: set(nodes, uuid, { id: uuid, label: '' })}))
    this.forceUpdate()
  }

  render() {
    const graphe = {
      nodes: toPlainList(this.state.nodes),
      edges: this.state.edges
    }

    const selectNode = selectedNode => this.setState(({nodes}) => ({currentNode: nodes[selectedNode]}))

    let events = {
      select: event => {
        const {nodes} = event
        selectNode(nodes[0])
      }
    }

    const { currentNode } = this.state;

    return (
      <Provider store={store}>
        <Container>
          <div style={{ margin: 24 }}>
            <Graph graph={graphe} options={options} events={events} />
            <Form
              onSubmit={this.handleSubmit}
              initialValues={currentNode}
              handleCreate={this.handleCreate}
              addField={this.addField}
            />
          </div>
        </Container>
      </Provider>
    )
  }
}

export default App
