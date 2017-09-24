import React from 'react';
import ReactDOM from 'react-dom';
import FacilitiesTab from './FacilitiesTab';

describe("FacilitiesTab", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FacilitiesTab />, div);
  });

  /* More Tests Coming*/
});


