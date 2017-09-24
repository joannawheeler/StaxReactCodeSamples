import React from 'react';
import ReactDOM from 'react-dom';
import RampsTab from './RampsTab';

describe("RampsTab", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RampsTab />, div);
  });

  /* More Tests Coming*/
});


