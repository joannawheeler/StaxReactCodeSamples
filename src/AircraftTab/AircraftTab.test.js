import React from 'react';
import ReactDOM from 'react-dom';
import AircraftTab from './AircraftTab';

describe("AircraftTab", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AircraftTab />, div);
  });

  /* More Tests Coming*/
});