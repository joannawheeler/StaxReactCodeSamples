//Component
import React, { Component } from 'react';
import './App.css';

//CloudKit
import CK from '../cloudkit/ck-connect.js';

//Children
import Auth from '../Auth/Auth.js';
import Main from '../Main/Main.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null,
    }

    this.sign_in = this.sign_in.bind(this);
    this.sign_out = this.sign_out.bind(this);
  }

  sign_in (userInfo) {
    this.setState({user: userInfo});
  }

  sign_out (_) {
    this.setState({user: null});
  }

  compnentDidMount () {
    CK.load().then(() => {
      CK.authenticate().then((userInfo) => {
        if (userInfo !== null) {
          this.sign_in(userInfo);
        }
      }).catch(() => {console.warn("Please Log into iCloud.")});
    })
  }

  render () {
    if (this.state.user === null) {
      return (<Auth
        sign_in={this.sign_in}
      />);
    } else {
      return (<Main
        sign_out={this.sign_out}
        user={this.state.user}
      />);
    }
  }
}

export default App;
