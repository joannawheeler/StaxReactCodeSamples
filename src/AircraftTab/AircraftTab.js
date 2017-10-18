import React, { Component } from 'react';
import './AircraftTab.css';

import {Tab} from '../Tab/Tab.js';

class AircraftTab extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return <Tab name="Aircraft"/>
  }
}

export default AircraftTab;
