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
        listOfOptions.push(<TabMenuOption selectOption={this.props.selectOption} optionID={array[i].id} mainValue={array[i].mainValue} subValue={array[i].subValue} />)
      } else if (array[i].type === "Label") {
          // var labelAndLabelsOptions = <TabMenuLabel />
          // for(var j=0; j < array[i].children.length) {
          //   if (array[i].children[j].type === "option") {
          //   return <TabMenuOption />
          //   }
          // }
       listOfOptions.push(<TabMenuLabel mainValue={array[i].mainValue} children={array[i].children}  iterateThruOptions={this.iterateThruOptions} selectOption={this.selectOption} />)
        // for(var j=0; j < array[i][j].length) {
        //   if (array[i][j].type === "option") {
        //     return <TabMenuOption />
        //   }
        // }
      } else if (array[i].type === 'dropdown') {
        // return "found a dropdown"
        listOfOptions.push(<TabMenuDropdown mainValue={array[i].mainValue} children={array[i].children} />)
      }
    }
    return listOfOptions
  }

  render () {
    return (
        <div className="container-fluid">
          {this.iterateThruOptions(this.props.menuOptions).map(function(menuOption){
            return menuOption;
          })}
        </div>

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
        <div className='row'>
          <div className='col-lg-2' className="optionStandInColor">
              <span>{this.props.mainValue}</span>
              {this.displaySubValue(this.props.subValue)}
          </div>
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

  this.sayHi = this.sayHi.bind(this);
  this.displayChildren = this.displayChildren.bind(this);
  this.toggleHidden = this.toggleHidden.bind(this);
  }

  sayHi() {
    alert("Hi")
  }

  displayChildren(children) {
    var listOfChildren = [];
    for (var i = 0; i < children.length; i++) {
      listOfChildren.push(<TabMenuOption selectOption={this.props.children[i].selectOption} optionId={this.props.children[i].id} mainValue={this.props.children[i].mainValue} subValue={this.props.children[i].subValue} />)
    }
    console.log(listOfChildren)
    return listOfChildren;
  }

  // hideOrUnhideChildren() {
  //   this.displayChildren(this.props.children).map(function(dropdownOption){
  //     return dropdownOption;
  //   })
  // }

toggleHidden() {
  // console.log(this.state.hideChildren)
  this.setState({
    hideChildren : !this.state.hideChildren
  })
  console.log()
}

  render () {
    return (
    <div>
      <div className='row'>
        <div className='col-lg-2'>
          <div onClick={this.toggleHidden}>{this.props.mainValue}
          </div>
            <div>
            {!this.state.hideChildren && this.displayChildren(this.props.children).map(function(menuOption){
                return menuOption;
              })
            }
            </div>
        </div>
      </div>
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

    this.displayChildren = this.displayChildren.bind(this);
  }

  displayChildren(children) {
    var listOfChildren = [];
    for (var i = 0; i < children.length; i++) {
      listOfChildren.push(<TabMenuOption selectOption={this.props.children[i].selectOption} optionId={this.props.children[i].id} mainValue={this.props.children[i].mainValue} subValue={this.props.children[i].subValue} />)
    }
    console.log(listOfChildren)
    return listOfChildren;
  }

  render () {
    return (
      <div className='row'>
        <div className='col-lg-2'>
            <div onClick={this.props.selectOption}>{this.props.mainValue}</div>
        </div>
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