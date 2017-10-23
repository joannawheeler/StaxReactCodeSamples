import React, { Component } from 'react';
import './Main.css';

//CloudKit
import CK from '../cloudkit/ck-connect.js';
import {Tab} from '../Tab/Tab.js'

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
    return (
      <div className="Main">
        <div id="apple-sign-in-button"></div>
        <div id="apple-sign-out-button"></div>
        main
        <Tab name="some name" children={[ <div>element1</div>, <div>element2</div>, <div>element3</div> ]} />
      </div>);

    //<TabMarker name="Facilities" />
    //<TabMarker name="Fleet" />
    // ...etc
  }
}

export default Main;