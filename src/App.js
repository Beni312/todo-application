import './App.css';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import TodoContainer from "./containers/todo/TodoContainer";


class App extends Component {
  render () {
    return (
      <div>
        <TodoContainer/>
      </div>
    );
  }
}

export default connect(null, null)(App);
