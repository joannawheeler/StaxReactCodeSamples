
//Skeleton of components was written by John Knox

//Component content written by Joanna Wheeler

import React, { Component } from 'react';

import './Tab.css';

import PropTypes from 'prop-types';

export class Tab extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let id = this.props.name+"Tab";
    let className = "Tab "+
      this.props.name+" "+
      this.props.alignment+" ";
    return (<div
      id={id}
      className={className}
      >{this.props.children}</div>
    );
  }
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export class TabMenu extends Component {
  constructor (props) {
    super(props);

    this.iterateThruOptions = this.iterateThruOptions.bind(this);

  }

  iterateThruOptions(array) {
    var listOfOptions = [];
    for (var i=0; i < array.length; i++) {
      if (array[i].type === "option") {
        listOfOptions.push(<TabMenuOption selectOption={this.props.selectOption} optionID={array[i].id} mainValue={array[i].mainValue} subValue={array[i].subValue} key={i} />)
      } else if (array[i].type === "Label") {
        var labelChildren =[];
        for (var j=0; j < array[i].children.length; j++) {
          labelChildren.push(<TabMenuOption selectOption={this.props.selectOption} optionID={array[i].children[j].id} mainValue={array[i].children[j].mainValue} subValue={array[i].children[j].subValue} key={j} />)
        }

       listOfOptions.push(<TabMenuLabel mainValue={array[i].mainValue} selectOption={this.props.selectOption} key={i} >{labelChildren}</TabMenuLabel>)
      } else if (array[i].type === 'dropdown') {
        var dropdownChildren =[];
        for (var j=0; j < array[i].children.length; j++) {
          dropdownChildren.push(<TabMenuOption selectOption={this.props.selectOption} optionID={array[i].children[j].id} mainValue={array[i].children[j].mainValue} subValue={array[i].children[j].subValue} key={j} />)
        }
        listOfOptions.push(<TabMenuDropdown mainValue={array[i].mainValue} selectOption={this.props.selectOption} iterateThruOptions={this.iterateThruOptions} key={i}>{dropdownChildren}</TabMenuDropdown>)
      }
    }
    return listOfOptions;
  }

  render () {
    return (
        <div>
          {this.iterateThruOptions(this.props.menuOptions)}
        </div>
    )
  }
}

TabMenu.propTypes = {
  menuOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectOption: PropTypes.func.isRequired,
  includeSearch: PropTypes.bool,  //default to true
};

export class TabMenuOption extends Component {
  constructor (props) {
    super(props);

    this.displaySubValue = this.displaySubValue.bind(this);

  }

  displaySubValue(subValue) {
    if (this.props.subValue) {
      return <span>{subValue}</span>
    }
  }

  render () {
    return (
      <div onClick={this.props.selectOption}>
        <div>
            <span>{this.props.mainValue}</span>
            {this.displaySubValue(this.props.subValue)}
        </div>
      </div>
    )
  }
}

TabMenuOption.propTypes = {
  selectOption: PropTypes.func.isRequired,
  optionID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  mainValue: PropTypes.string.isRequired,
  subValue: PropTypes.string,
};

export class TabMenuDropdown extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hideChildren : true
    }

  this.toggleHidden = this.toggleHidden.bind(this);
  this.showChildren = this.showChildren.bind(this);
  }

  toggleHidden() {
    this.setState({
      hideChildren : !this.state.hideChildren
    })
  }

  showChildren() {
    if (!this.state.hideChildren && this.props.children) {
      return this.props.children
    }
  }

  render () {
    return (
      <div>
          <div onClick={this.toggleHidden}>{this.props.mainValue}</div>
          <div>{this.showChildren()}</div>
      </div>
    )
  }
}

TabMenuDropdown.propTypes = {
  mainValue: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  selectOption: PropTypes.func.isRequired,
};


export class TabMenuLabel extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div>{this.props.mainValue}</div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

TabMenuLabel.propTypes = {
  mainValue: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  selectOption: PropTypes.func.isRequired,
};