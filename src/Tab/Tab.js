import React, { Component } from 'react';
import './Tab.css';

import PropTypes from 'prop-types';

export class Tab extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return null;
  }
}
Tab.propTypes = {
  name: PropTypes.string.isRequired,
  children: proptypes.arrayOf(PropTypes.element),
};

export class TabMarker extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return null;
  }
}
TabMarker.propTypes = {
  name: PropTypes.string.isRequired,
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
  id: PropTypes.string.PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.string.isRequired,
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