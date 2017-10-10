import React from 'react';
import ReactDOM from 'react-dom';
import FleetTab from './FleetTab';

describe("FleetTab", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FleetTab />, div);
  });

  /* More Tests Coming*/
});


