import React from 'react';
import ReactDOM from 'react-dom';
import ReportsTab from './ReportsTab';

describe("ReportsTab", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReportsTab />, div);
  });

  /* More Tests Coming*/
});


