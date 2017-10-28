import React, { Component } from 'react';
import './Main.css';

//CloudKit
import CK from '../cloudkit/ck-connect.js';
// import {Tab} from '../Tab/Tab.js'

//Helper Components
import {Tab, TabMarker} from '../Tab/Tab.js';

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

  open (name) {
    return ()=>{this.setState({activeTab: name});}
  }

  close () {
    return ()=>{this.setState({activeTab: null})}
  }

  allMarkers () {
    let markers = [];
    for (let name in TABS) {
      markers.push(<TabMarker
        key={name}
        name={name}
        alignment={TABS[name].alignment}
        sequence={TABS[name].sequence}
        onClick={this.open(name)}
      />);
    }
    return markers;
  }

  render () {
    let content;
    if (this.state.activeTab) {
      let activeTab = TABS[this.state.activeTab];
      content = [
        <Tab
          key={"activeTab"}
          name={activeTab.name}
          alignment={activeTab.alignment}
          sequence={activeTab.sequence}
        >
        {React.createElement(activeTab.component)}
        </Tab>,
        <TabMarker
          key={this.state.activeTab}
          name={this.state.activeTab}
          alignment={activeTab.alignment}
          sequence={TABS[this.state.activeTab].sequence}
          open={true}
          onClick={this.close()}
        />
      ];
    } else {
      content = this.allMarkers();
    }
    return (
      <div className="Main">
        <div className="apple-buttons main">
          <div id="apple-sign-in-button"></div>
          <div id="apple-sign-out-button"></div>
        </div>
        {content}
      </div>
    )
  }
}

export default Main;