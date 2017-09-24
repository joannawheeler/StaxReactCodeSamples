import React from 'react';
import ReactDOM from 'react-dom';
import ObstaclesTab from './ObstaclesTab';

describe("ObstaclesTab", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ObstaclesTab />, div);
  });

  /* More Tests Coming*/
});


