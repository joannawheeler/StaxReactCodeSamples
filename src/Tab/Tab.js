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





////////////////////////////////////



export class TabMarker extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    let id = this.props.name+"TabMarker";
    let className = "TabMarker "+
      this.props.name+" "+
      this.props.alignment+" "+
      "sequence"+this.props.sequence+" "+
      (this.props.open ? "open":"");

    return (<div
      id={id}
      className={className}
      onClick={this.props.onClick}
      >{this.props.name}</div>
    );
  }
}
TabMarker.propTypes = {
  name: PropTypes.string.isRequired,
  alignment: PropTypes.string, //default "left"
  sequence: PropTypes.number, //default 0
  open: PropTypes.bool, //default false
  onClick: PropTypes.func.isRequired,
};


////////////////////////////////////





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
          // var labelAndLabelsOptions = <TabMenuLabel />
          // for(var j=0; j < array[i].children.length) {
          //   if (array[i].children[j].type === "option") {
          //   return <TabMenuOption />
          //   }
          // }
        var labelChildren =[];
        for (var j=0; j < array[i].children.length; j++) {
          labelChildren.push(<TabMenuOption selectOption={this.props.selectOption} optionID={array[i].children[j].id} mainValue={array[i].children[j].mainValue} subValue={array[i].children[j].subValue} key={j} />)
        }

       listOfOptions.push(<TabMenuLabel mainValue={array[i].mainValue} selectOption={this.props.selectOption} key={i} >{labelChildren}</TabMenuLabel>)
        // for(var j=0; j < array[i][j].length) {
        //   if (array[i][j].type === "option") {
        //     return <TabMenuOption />
        //   }
        // }
      } else if (array[i].type === 'dropdown') {
        // return "found a dropdown"
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
          // {this.iterateThruOptions(this.props.menuOptions).map(function(menuOption){
          //   return menuOption;
          // })}
        // </div>

      //iterate through the menuOptions array's objects
        //if the object.type = "option"
          //display a clickable option (rectangle) where object.mainValue is the option(rectangle)'s text
            //if the object.subValue exists
              //display object.subValue as text below the object.mainValue text, within the option(rectangle)

        //if the object.type = "label"
          //display a non-clickable option(rectangle) with the object.mainValue as it's text
          //then iterate through this object's children objects which we will call childObjects for now
            //if the object.childObject.type = "option"
              //then display a clickable option(rectangle)

        //if the object.type = "dropdown"
          //display a clickable option(rectangle) with the object.mainValue as it's text, and its state to be: unclicked (when unclick) when the state is "unclicked" display a right pointing little black arrow to the left of the text;
          //iterate through the object's children, creating a hidden but clickable childOption(rectangle) for each child
          //when the option(rectangle) is clicked, set the state of the object to "clicked", and remove the right pointing arrow and replace it with a down pointing arrow, and remove the 'hidden' feature of the object's children and create a clickable option(rectangle) for each childOption whose text will be the object.childObject.mainValue;

      //if
      )
    // for (var i=0; i < this.props.menuOptions.length; i++) {
    //   if (this.props.menuOptions[i].type === "option") {
    //     return (
    //       // <div className="container-fluid">
    //         <TabMenuOption selectOption={this.props.selectOption}optionID={this.props.menuOptions.id} mainValue={this.props.menuOptions.mainValue} subValue={this.props.menuOptions.subValue} />
    //       // </div>
    //       )
      // }
    }
  }
// }

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
      //<div className="row">
      // <div>
              // {this.props.mainValue}
              // </div>
        //<div className="col-lg-2 color">
        //{this.props.mainValue}
        // </div>
        //<div className="col-lg-10"></div>
      //</div>
    // );
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
  console.log()
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
          <div>{this.props.children}</div>
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





export class TabMenuSearch extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return null;
  }
}
TabMenuSearch.propTypes = {
  filterOptions: PropTypes.func.isRequired,
};

export class TabHeader extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return null;
  }
}

export class TabHeaderButton extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return null;
  }
}

export class TabFooter extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return null;
  }
}

export class TabFooterButton extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return null;
  }
}

export class TabMain extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return null;
  }
}

export class TabForm extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return null;
  }
}

export class TabFormField extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return null;
  }
}