import React, { Component } from 'react';
import './Main.css';

//CloudKit
import CK from '../cloudkit/ck-connect.js';

class Main extends Component {
  constructor (props) {
    super(props);

  }

  componentDidMount () {
    CK.authenticate();
  }

  componentDidUpdate () {
    CK.authenticate();   
  }

  render () {
    return (<div className="Main">
      <div id="apple-sign-in-button"></div>
      <div id="apple-sign-out-button"></div>
    </div>);
  }
}

export default Main;