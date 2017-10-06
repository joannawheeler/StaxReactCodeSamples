## `ck-connect`

#### Summary
This module handles the interface between the web-browser and our Cloudkit container.

#### Functionality

* Authentication
  * It verifies whether a user is logged into iCloud
  * It listens for when a user logs in or out

* Facilities
  * It fetches a list of exisiting facilities
  * It listens for changes to exisiting facilities
  * It creates new facilities
  * It removes exisiting facilities
  * It updates existing facilities

* Items and Placeables
  * It fetches a list of all exisiting items
  * It fetches a list of exisiting items and placeables for a facility
  * It creates new items and placeables
  * It changes the hangar of an exisiting item
  * It updates the details of an exisiting item
  * It updates the position and rotation of an exisiting placeable
  * It deletes items and placeables

* User Preferences
  * It updates user preferences

* Organizational Settings
  * It updates organizational settings
  * It watches for changes in organization settings
