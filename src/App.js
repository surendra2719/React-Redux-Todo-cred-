import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"
import { addInput, deleteInput, updateInput, setInput } from "../src/actions/index"
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: {
        key: "",
        text: ""
      }
    }
  }

  addItem = (e) => {
    e.preventDefault();
    if (this.props.currentItem.text !== "") {
      this.props.addInput([this.state.currentItem]);
      this.setState({
        currentItem: {
          text: "", key: ""
        }
      })
    }
  }
  handleInput = (e) => {
    this.props.setInput({ text: e.target.value, key: Date.now() })
    this.setState({
      currentItem: {
        text: e.target.value, key: Date.now()
      }
    })
  }
  deleteItem = (key) => {
    this.props.deleteInput(key)
  }
  setUpdate = (data) => {
    this.props.updateInput(data)
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
          <p>{this.props && this.props.items.text}</p>
          <ListItems items={this.props.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    items: state.items,
    // current item props not yet used
    currentItem: state.currentItem
  }
}

export default connect(mapStateToProps, { addInput, deleteInput, updateInput, setInput })(App);
