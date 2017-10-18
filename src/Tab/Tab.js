import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'; 

import './Tab.css';

import PropTypes from 'prop-types';

export class Tab extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (<Modal>
      <Modal.Body>This is a Tab</Modal.Body>
    </Modal>);
  }
}
Tab.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
  alignment: PropTypes.string,
};

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
      className={className}>
      {this.props.name}
    </div>);
  }
}
TabMarker.propTypes = {
  name: PropTypes.string.isRequired,
  alignment: PropTypes.string, //default "left"
  sequence: PropTypes.number, //default 0
  open: PropTypes.bool, //default false
};

export class TabMenu extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return null;
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

  }

  render () {
    return null;
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

  }

  render () {
    return null;
  }
}
TabMenuDropdown.propTypes = {
  mainValue: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

export class TabMenuLabel extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return null;
  }
}
TabMenuLabel.propTypes = {
  mainValue: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
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