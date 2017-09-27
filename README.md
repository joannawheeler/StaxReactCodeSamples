# Desktop_Stax
Browser based Stax app
More info in the Wiki
---

## Setup

_Download Node, then install Yarn with_ `npm install yarn`

```bash
git clone https://github.com/b1ueskyz/Desktop_Stax`
cd Desktop_Stax
yarn install
yarn start
```

Open your browser and navigate to `localhost:3000`.

---

## git Workflow

### Setup

1. Fork this Repo

2. Clone your fork to your local machine

3. Set your fork as the `origin` remote (if it is not already)
`git remote add origin http://github.com/YOUR-USERNAME/Desktop_Stax.git`

4. Set this repo as the `upstream` remote
`git remote add upstream https://github.com/b1ueskyz/Desktop_Stax.git`

### Making Changes

1. Pull the latest changes from upstream
`git pull upstream master`

2. Create a branch on your local repo
`git checkout -b FEATURE-NAME`

3. Make changes and commits.

4. **Before doing a pull request**, cleanup your commit history, and check for any new changes by rebasing with the master branch `git pull --rebase upstream master`

5. Push your changes from your local machine to your fork `git push origin FEATURE-NAME`

6. From Github Make a pull request from `YOUR-FORK/FEATURE-BRANCH` to `b1ueskyz/staging` (not `master`)

7. Your're done! A PM will review the changes and merge the `staging` branch into the `master` branch when ready.

---

## React Components

Detailed Component Descriptions can be found in their individual folders. Here is a summary:

**`App` -** This is the root of the application.

#### Page Components

**`Main` -** This is the page authenticated useres will see. It will either display the active tab, or a background image with `TabMarkers` on the sides.

**`Auth` -** This page is presented if the user needs to log in.

#### Tab Components

**`AircraftTab` -** This tab is for users to create a new Aircraft and add it to their fleet or hangar.

**`FacilitiesTab` -** This tab is the core feature of the application. Users can view their hangars/ramps and position aircrafts within them.

**`FleetTab` -** This tab is for users to look at their aircrafts outside the context of a hangar.

**`ObstaclesTab` -** This tab is for users to look at their obstacles outside the context of a hangar.

**`OptionsTab` -** This tab is for users to adjust their organizational settings and personal preferences.

**`ReportsTab` -** This tab is for users to view table-structured data about their inventory and facilities.

**`UtilitiesTab` -** This tab is used for creating hangars, ramps, and obstacles.

##### Tab Helpers

These components are used to create standardized interfaces across all tabs.

###### Core Components

**`Tab` -** The top level container for a tab.

**`TabMarker` -** The button that opens/closes a tab. These components are also used in `Main`.

**`TabMain` -** The large part of the tab where the main feature of the tab is displayed.

###### Menu

**`TabMenu` -** A container for the side menu of a tab.

**`TabMenuOption` -** A clickable option on a tab menu.

**`TabMenuDropdown` -** A dropdown list of `TabMenuOptions`.

**`TabMenuLabel` -** A label for a section of options on a menu.

**`TabMenuSearch` -** A search box to filter out options in larger `TabMenu`s.

###### Header/Footer

**`TabHeader` -** The area above `TabMain`.

**`TabHeaderButton` -** A button style for `TabHeader`.

**`TabFooter` -** The Area below `TabMain`.

**`TabFooterButton` -** A button style for `TabFooter`.

###### Forms

**`TabForm` -** A style for forms inside of tabs.

**`TabFormField` -** A style for form fields inside of tabs.

#### Entities

**`Entity` -** Entities are components that represent aircraft and obstacles in a hangar/ramp. They can be positioned and rotated.

**`Aircraft` -** This entity represents an aircraft. It can launch an `AircraftInfo` component.

**`AircraftInfo` -** Not an entity but tightly coupled with `Aircraft`s. This is a detailed display of an aircraft's information.

**`Obstacle` -** This entity represents a non-aircraft (such as car/boat) that has to be accounted for while positioning aircrafts in a hangar.

#### Facilities

**`Facility` -** These components display the physical structures that aircraft are placed on/in. Including scaled gridlines.

**`Hangar` -** This component displays a hangar, including its doors, walls.

**`Ramp` -** This component displays an outdoor ramp, which are typically larger than hangars, so a zoom feature is needed.

#### Notifications

**`Alert` -** This component is used for creating pop-up notifications to the user.

---

## API Methods

Coming Soon.
