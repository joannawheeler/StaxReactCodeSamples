import React from 'react';
import ReactDOM from 'react-dom';
import HangarsTab from './HangarsTab';

describe("HangarsTab", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HangarsTab />, div);
  });

  /* More Tests Coming*/
});


