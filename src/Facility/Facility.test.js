import React from 'react';
import ReactDOM from 'react-dom';
import {Facility, Hangar, Ramp} from './Facility';

describe("Facility Components", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Facility />, div);
  });

  /* More Tests Coming*/

  describe("Hangar", () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Hangar />, div);
    });

    /* More Tests Coming*/

  });

  describe("Ramp", () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Ramp />, div);
    });

    /* More Tests Coming*/
  });
});