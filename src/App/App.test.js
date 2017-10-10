//testing dependencies
import React from 'react';
import { mount, shallow } from "enzyme";

//component being tested
import App from './App';

//chiled dependencies
import Auth from '../Auth/Auth.js';
import Main from '../Main/Main.js';

describe("App", () => {
  let wrapper;

  it('mounts without crashing', () => {
    wrapper = mount(<App />);
  });

  it('should by default render and Auth component', () => {
    console.log('length', wrapper.find(Auth));
    console.log('length', wrapper.find(Auth).length)
    expect(wrapper.find(Auth).length).toBe(1);
  });

  it('should rener a main component if there is a user', () => {
    wrapper.setState({user: {/*not null*/}});
    expect(wrapper.find(Main).length).toBe(1);
  });
});


