import React, { Component } from 'react';
import './Auth.css';

//CloudKit
import CK from '../cloudkit/ck-connect.js';

class Auth extends Component {
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
    return (<div className="Auth">
      <div id="apple-sign-in-button"></div>
      <div id="apple-sign-out-button"></div>
    </div>);
  }
}

export default Auth;