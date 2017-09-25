import React from 'react';
import ReactDOM from 'react-dom';
import OptionsTab from './OptionsTab';

describe("OptionsTab", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OptionsTab />, div);
  });

  /* More Tests Coming*/
});


