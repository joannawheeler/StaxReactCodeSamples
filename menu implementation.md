# Menu

## `TabMenu`

#### Summary
A container for the side menu of a tab.

#### Functionality
* It holds its child compnents.
* It adds a search bar above its child elements.

#### Styling
* It takes up about 1/4 of the entire tab width (including margin/padding), on the lefthand side.
* It should have a fixed height and fill out 100% of the tab height (including margin/padding).
* Its children should appear in one column, out the same width.
* Its overflow should be scrollable, and not extend the height of the `Tab`.
* `TabMenuOptions`s, `TabMenuDropDown`s, and `TabMenuDropLabels`s should be flush.
* `TabMenuSearch`, should still be close close to the, but with a small gap.

#### Implementation
* Take an input like this:

```json

[


  {
    type: "option",
    mainValue: "Create New",
    id: "123",
  },


  {
    type: "Label",
    mainValue: "Favorites",
    children: [
      {
        type: "option",
        mainValue: "Click Me!",
        subValue: "Airbus-100",
        id: "456",
      },{
        type: "option",
        mainValue: "Shiny New Plane",
        subValue: "Boeing-747",
        tags: ["first out"]
        id: "789",
      }
    ]
  },


  {
    type: "dropdown",
    mainValue: "Hangar1",
    children: [
      {
        type: "option",
        mainValue: "ABCDEF123",
        subValue: "Cessna-150",
        tags: ["short-term", "Jeff"]
        id: "ABC",
      },{
        type: "option",
        mainValue: "ZXYW321",
        subValue: "Boeing-747",
        tags: ["huge", "maintenance"]
        id: "ZXY",
      }
    ]
  }


]
```

* Create components with it.
* When filtering out children to render (ie: from searching), it does not display `TabLabel`s or `TabDropdown`s without children.
* Note that options can also have "tags" which will not be displayed but are factored in while searching.
* The `TabMenu` takes 'onclick' propertery that expects an option's 'id' passed in as an argument.

## `TabMenuOption`

#### Summary
A clickable option on a tab menu.

#### Functionality
* It has a accepts a clickhandler (passed down from the `Tab`) that expects the options unique 'id' as an argument.
* It has a 'value' property that will be diplayed.
* It can also have a 'subValue' property that will be diplayed, but in a smaller font.

#### Styling
* Light background, dark text-color.
* Slightly darker color on hover.

## `TabMenuDropdown`

#### Summary
A dropdown list of `TabMenuOption`s.

#### Functionality
* It holds its child compnents.
* It has a 'value' property that will be diplayed.
* When clicked, its children are displayed

#### Styling
* Dark Background, light text color.
* Small arrow icon that changes from sideways (closed) to vertical (open).
* Slightly lighter color on hover.

## `TabMenuLabel`

#### Summary
A label for a section of options on a menu.

#### Functionality
* It holds its child compnents.
* It has a 'value' property that will be diplayed.
* Unlike a dropdown, its children are always displayed.

#### Styling
* Dark Background, light text color.
* Slightly lighter color on hover.