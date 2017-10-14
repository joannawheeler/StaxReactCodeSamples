# Summary
The components in the `Tab` folder are used as helpers in each of the tabs to create uniform styling.

# Core Components

## `Tab`

#### Summary
The top level container for a tab.

#### Functionality
* It holds its children elements.
* Because its useful state relies on ajax requests, it should render with a 'loading' indicator by default.

#### Styling
* It has a specific background color for the feature it belongs to.
* It should take up about 90% of the page width (from whatever side its marker originated).
* It should take up 100% of the page height (including a small vertial margin).

## `TabMarker`

#### Summary
The button that opens/closes a tab. These components are used in `Main`.

#### Functionality
* When clicked, it opens a specific tab, or closes that tab.
* It has a specific background color for the tab it belongs to.

## `TabMain`

#### Summary
The large part of the tab where the main feature of the tab is displayed.

#### Functionality
* (Specific to each tab)

#### Styling
* It takes up about 3/4 of the entire tab width (including margin/padding), on the righthand side.
* Combined with a `TabHeader` and `TabFooter` it should  fill out 100% of the tab height (including margin/padding).

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
  }, {
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
  }, {
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

## `TabMenuSearch`

#### Summary
A search box to filter out options in larger `TabMenu`s.

#### Functionality
* As the user types, the displayed `TabMenuOptions` are filtered.

#### Styling
* Input element, with light background and dark text.
* Distiguished from of elements by:
  * Not quite flush with other tab menu child components.
  * Slight border radius.

# Header/Footer

## `TabHeader`

#### Summary
The area above `TabMain`.

#### Functionality
* It holds `TabHeaderButton`s as children.

## `TabHeaderButton`

#### Summary
A button style for `TabHeader`.

#### Functionality
* It does something...

## `TabFooter`

#### Summary
The Area below `TabMain`.

#### Functionality
* It does something...

## `TabFooterButton`

#### Summary
A button style for `TabFooter`.

#### Functionality
* It does something...

# Forms

## `TabForm`

#### Summary
A style for forms inside of tabs.

#### Functionality
* It does something...

## `TabFormField`

#### Summary
A style for form fields inside of tabs.

#### Functionality
* It does something...