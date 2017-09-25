import React from 'react';
import ReactDOM from 'react-dom';
import UtilitiesTab from './UtilitiesTab';

describe("UtilitiesTab", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UtilitiesTab />, div);
  });

  /* More Tests Coming*/
});


