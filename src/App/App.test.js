//testing dependencies
import React from 'react';
import { mount, shallow } from "enzyme";

//component being tested
import App from './App';

//child component dependencies
import Auth from '../Auth/Auth.js';
import Main from '../Main/Main.js';

describe("App", () => {
  let wrapper;

  it('mounts without crashing', () => {
    wrapper = mount(<App />);
  });

  it('should by default render null', () => {
    expect(wrapper.get(0) == null);
  });

  it('after loading, it should by default render an "Auth" component', () => {
    wrapper.setState({loaded: true});
    expect(wrapper.find(Auth).length).toBe(1);
  });

  it('should rener a "Main" component if there is a user', () => {
    wrapper.setState({user: {/*not null*/}});
    expect(wrapper.find(Main).length).toBe(1);
  });
});


