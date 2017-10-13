## `App`

#### Summary
This is the root of the application.

#### General Functionality
* It renders a loading screen until the cloudkit container is configured.
* If a user is authenticated it will render a `Main` component.
* Otherwise it will render an `Auth` Component.

#### Styling
* One large background image (preferably of a plane).
* The STAX logo, centered.
* No UI. (Any actual UI will fall into a child component).
* Ensure the `#root` div is 100% of the window's available height and width.

#### Implementation
* Upon mounting, the component will wait for the cloudkit module to load.
* After the cloudkit module has load, it will ask the cloudkit module for a user (or wait for one).
* After recieving user info it will set state with the new user info.
* It will use the CK library to listen for a user logging out.

#### State and Props
* Its state has a property called `user` which will be null by default.
