import React, { Component } from 'react';
import './AircraftTab.css';

import {Tab, TabMenu} from '../Tab/Tab.js';

class AircraftTab extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menuOptions:
      [
        {type: "option",mainValue: "Create New",id: "123",},
        {type: "Label",mainValue: "Favorites",children: [
          {type: "option",mainValue: "Click Me!",subValue: "Airbus-100",id: "456",},
          {type: "option",mainValue: "Shiny New Plane",subValue: "Boeing-747",tags: ["first out"], id: "789",}
        ]},
        {type: "dropdown",mainValue: "Hangar1",children: [
          {type: "option",mainValue: "ABCDEF123",subValue: "Cessna-150",tags: ["short-term", "Jeff"],id: "ABC",},
          {type: "option",mainValue: "ZXYW321",subValue: "Boeing-747",tags: ["huge", "maintenance"],id: "ZXY",}
        ]}
      ]
    }

  this.selectOption = this.selectOption.bind(this);

  }

  selectOption() {
    alert("hi")
  }

  render () {
    return  (
      <div className="row">
       <div className="col-4-sm">________</div>
        <TabMenu className="col-6-sm blue" menuOptions={this.state.menuOptions} selectOption={this.selectOption} includeSearch={true}  />
      </div>
    )
  }

}

export default AircraftTab;
