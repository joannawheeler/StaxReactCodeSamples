//Component
import React, { Component } from 'react';
import './App.css';

//children
import Auth from '../Auth/Auth.js';
import Main from '../Main/Main.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  render () {
    if (this.state.user === null) {
      return (<Auth />);
    } else {
      return (<Main />);
    }
  }
}

export default App;
