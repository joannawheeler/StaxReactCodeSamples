import React, { Component } from 'react';
import './Main.css';

//CloudKit
import CK from '../cloudkit/ck-connect.js';

//Helper Components
import {TabMarker} from '../Tab/Tab.js';

import TABS from './tabConfig.js';


class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: null,
    };
  }

  componentDidMount () {
    CK.authenticate();
  }

  componentDidUpdate () {
    CK.authenticate();   
  }

  allMarkers () {
    let markers = [];
    for (let name in TABS) {
      markers.push(<TabMarker
        key={name}
        name={name}
        alignment={TABS[name].alignment}
        sequence={TABS[name].sequence}
        onclick={()=>this.setState({activeTab: name})}
      />);
    }
    return markers;
  }

  render () {
    let content;
    if (this.state.activeTab) {
      content = [
        TABS[this.state.activeTab],
        <TabMarker
          name={this.state.activeTab}
          open={true}
        />
      ];
    } else {
      content = this.allMarkers();
    }
    return (<div className="Main">
      <div className="apple-buttons main">
        <div id="apple-sign-in-button"></div>
        <div id="apple-sign-out-button"></div>
      </div>
      {content}
    </div>);
  }
}

export default Main;