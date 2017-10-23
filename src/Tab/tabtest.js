import React from 'react';
import { mount, shallow } from "enzyme";
import sinon from 'sinon';

import {
  //core
  Tab, TabMarker, TabMain,
  //menu
  TabMenu, TabMenuOption, TabMenuDropdown, TabMenuLabel, TabMenuSearch,
  //header/footer
  TabHeader, TabHeaderButton, TabFooter, TabFooterButton,
  //forms
  TabForm, TabFormField
} from './Tab';

describe("Tab Components", () => {

  describe("Tab", () => {
    it('renders without crashing.', () => {
      mount(<Tab />);
    });

    /* More Tests Coming*/
  });

  describe("TabMarker", () => {
    it('renders without crashing.', () => {
      mount(<TabMarker />);
    });

    /* More Tests Coming*/
  });

  describe("TabMain", () => {
    it('renders without crashing.', () => {
      mount(<TabMain />);
    });

    /* More Tests Coming*/
  });

  describe("TabMenu", () => {
    let testOptions = [
      {type: "option",mainValue: "Create New",id: "123",},
      {type: "Label",mainValue: "Favorites",children: [
        {type: "option",mainValue: "Click Me!",subValue: "Airbus-100",id: "456",},
        {type: "option",mainValue: "Shiny New Plane",subValue: "Boeing-747",tags: ["first out"], id: "789",}
      ]},
      {type: "dropdown",mainValue: "Hangar1",children: [
        {type: "option",mainValue: "ABCDEF123",subValue: "Cessna-150",tags: ["short-term", "Jeff"],id: "ABC",},
        {type: "option",mainValue: "ZXYW321",subValue: "Boeing-747",tags: ["huge", "maintenance"],id: "ZXY",}
      ]}
    ];
    let clickHandler = sinon.spy();

    let wrapper;
    it('renders without crashing', () => {
      wrapper = mount(<TabMenu
        menuOptions={testOptions}
        selectOption={clickHandler}
      />);
    });

    it('takes a tree of options and creates react components.', () => {
      expect(wrapper.find(TabMenuOption).length).toBe(5);
      expect(wrapper.find(TabMenuDropdown).length).toBe(1);
      expect(wrapper.find(TabMenuLabel).length).toBe(1);
    });

    it('takes a tree of options and creates react components.', () => {
      expect(wrapper.find(TabMenuOption).length).toBe(5);
      expect(wrapper.find(TabMenuDropdown).length).toBe(1);
      expect(wrapper.find(TabMenuLabel).length).toBe(1);
    });

    it('passes a clickHandler to each of its TabMenuOption components.', () => {
      wrapper.find(TabMenuOption)[0].simulate("click");
      expect(clickHandler.callCount).toBe(1);
    });

    it('renders a TabMenuSearch (by default).', () => {
      expect(wrapper.find(TabMenuSearch).length).toBe(1);
      wrapper.setProps({includeSearch: false});
      expect(wrapper.find(TabMenuSearch).length).toBe(0);
    });
  });

  describe("TabMenuOption", () => {
    let testOption = {type: "option", mainValue: "Shiny New Plane", subValue: "Boeing-747", tags: ["first out"], id: "789",}
    let clickHandler = sinon.spy();
    let testID = testOption.id;

    let wrapper;
    it('renders without crashing', () => {
      wrapper = mount(<TabMenuOption
        selectOption={clickHandler}
        optionID={testID}
        mainValue={testOption.mainValue}
      />);
    });

    it('invokes a passed in function with its unique ID as an argument.', () => {
      wrapper.simulate("click");
      expect(clickHandler.calledWith(testID)).toBe(true);
    });

    it('creates 1 span for its main value, and a second span for its sub value, if needed.', () => {
      expect(wrapper.find('span').length).toBe(1);
      wrapper.setProps({subValue: testOption.subValue});
      expect(wrapper.find('span').length).toBe(2);
    });
  });

  describe("TabMenuDropdown", () => {

    let wrapper;
    it('renders without crashing.', () => {
      wrapper = mount(<TabMenuDropdown>
        <TabMenuOption
          selectOption={()=>{}}
          optionID={1}
          mainValue={"A"}
        />
        <TabMenuOption
          selectOption={()=>{}}
          optionID={2}
          mainValue={"B"}
        />
        <TabMenuOption
          selectOption={()=>{}}
          optionID={3}
          mainValue={"C"}
        />
      </TabMenuDropdown>);
    });

    it('is folded up by default.', () => {
      expect(wrapper.find(TabMenuOption).length).toBe(0);
    });

    it('shows its children after being clicked.', () => {
      wrapper.simulate("click");
      expect(wrapper.find(TabMenuOption).length).toBe(3);
    });

    it('hides its children after being clicked again.', () => {
      wrapper.simulate("click");
      expect(wrapper.find(TabMenuOption).length).toBe(0);
    });

  });

  describe("TabMenuLabel", () => {

    let wrapper;
    it('renders without crashing.', () => {
      wrapper = mount(<TabMenuLabel>
        <TabMenuOption
          selectOption={()=>{}}
          optionID={1}
          mainValue={"A"}
        />
        <TabMenuOption
          selectOption={()=>{}}
          optionID={2}
          mainValue={"B"}
        />
        <TabMenuOption
          selectOption={()=>{}}
          optionID={3}
          mainValue={"C"}
        />
      </TabMenuLabel>);
    });

    it('always shows its children.', () => {
      expect(wrapper.find(TabMenuOption).length).toBe(3);
    });

  });

  describe("TabMenuSearch", () => {
    it('renders without crashing.', () => {
      mount(<TabMenuSearch />);
    });

    /* More Tests Coming*/
  });

  describe("TabHeader", () => {
    it('renders without crashing.', () => {
      mount(<TabHeader />);
    });

    /* More Tests Coming*/
  });

  describe("TabHeaderButton", () => {
    it('renders without crashing.', () => {
      mount(<TabHeaderButton />);
    });

    /* More Tests Coming*/
  });

  describe("TabFooter", () => {
    it('renders without crashing.', () => {
      mount(<TabFooter />);
    });

    /* More Tests Coming*/
  });

  describe("TabFooterButton", () => {
    it('renders without crashing.', () => {
      mount(<TabFooterButton />);
    });

    /* More Tests Coming*/
  });

  describe("TabForm", () => {
    it('renders without crashing.', () => {
      mount(<TabForm />);
    });

    /* More Tests Coming*/
  });

  describe("TabFormField", () => {
    it('renders without crashing.', () => {
      mount(<TabFormField />);
    });

    /* More Tests Coming*/
  });
});