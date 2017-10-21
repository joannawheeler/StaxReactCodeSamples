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
      loaded: false,
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

  componentDidMount () {
    CK.load().then(() => {
      this.setState({loaded: true});
      //remove the spinner
      if (document && document.getElementById("spinner")) {document.getElementById("spinner").classList.remove("spinning");}
      document.getElementById("")
      CK.authenticate().then((userInfo) => {
        if (userInfo !== null) {
          this.sign_in(userInfo);
        }
      });
      CK.onLogin().then((userInfo) => {
        this.sign_in(userInfo);
      });
      CK.onLogout().then((_) => {
        this.sign_out(_);
      });
    }).catch((e) => {console.error("Could Not Load Cloudkit\n", e)});
  }

  render () {
    if (!this.state.loaded) {
      //TODO: Make this a spinner.
      return null; 
    }
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
