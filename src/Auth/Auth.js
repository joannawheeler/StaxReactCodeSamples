import React, { Component } from 'react';
import './Auth.css';

class Auth extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (<div className="Auth">
      <div id="apple-sign-in-button"></div>
    </div>);
  }
}

export default Auth;