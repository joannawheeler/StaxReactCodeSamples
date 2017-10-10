import React from 'react';
import ReactDOM from 'react-dom';
import {Entity, Aircraft, AircraftInfo, Obstacle} from './Entity';

describe("Entity Components", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Entity />, div);
  });

  /* More Tests Coming*/

  describe("Aircraft", () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Aircraft />, div);
    });

    /* More Tests Coming*/

    describe("AircraftInfo", () => {
      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AircraftInfo />, div);
      });

      /* More Tests Coming*/
    });
  });

  describe("Obstacle", () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Obstacle />, div);
    });

    /* More Tests Coming*/
  });
});