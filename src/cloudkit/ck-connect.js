let CloudKit, container, publicDB, privateDB, sharedDB; 

//LOAD MUST BE CALLED BEFORE ANY OTHER METHODS
//SHOULD BE CALLED DURING INSTATIATEION OF APP COMPONENT
function load () {
  console.log("trying to load");
  return new Promise ((resolve, reject) => {
    window.addEventListener('cloudkitloaded', function() {
      console.log("loaded");
      CloudKit.configure({
        containers: [{
          containerIdentifier: 'iCloud.com.coherent.staX',
          
          apiTokenAuth: {
            // And generate a web token through CloudKit Dashboard.
            apiToken: '',//API TOKEN HERE,
            persist: true, // Sets a cookie.
            signInButton: {
              id: 'apple-sign-in-button',
              theme: 'black' // Other options: 'white', 'white-with-outline'.
            },
            signOutButton: {
              id: 'apple-sign-out-button',
              theme: 'black'
            }
          },

          environment: "development",

          zone: "default"

        }]
      });
    });

    container = CloudKit.getDefaultContainer();
    publicDB = container.publicCloudDatabase;
    //privateDB TBD
    //sharedDB TBD

    resolve();
  });
}

//AUTHENTICATE MUST BE CALLED NEXT, TO CREATE THE PROPER SIGNIN/OUT BUTTONS
//ALSO CALL FROM APP COMPONENT, THE REST SHOULD BE CALLED FROM CHILD COMPONENTS 
function authenticate () {
  return new Promise ((resolve, reject) => {
    container.setUpAuth().then((userInfo) => {
      //resolve userInfo
      //reject null
      if (userInfo) {
        resolve(userInfo);
      } else {
        reject(userInfo);
      }
    }).catch((err) => {reject(err);});
  });
}

//BELONGS IN AUTH COMPONENT
function onLogin () {
  return new Promise ((resolve, reject) => {
    container.whenUserSignsIn().then((userInfo) => {
      resolve(userInfo);
    }).catch((err) => {reject(err);});
  });
}

//BELONGS IN MAIN COMPONENT
function onLogout () {
  return new Promise ((resolve, reject) => {
    container.whenUserSignsOut().then((_) => {
      resolve(_);
    }).catch((err) => {reject(err);});
  });
}

function getFacilityList () {
  return new Promise ((resolve, reject) => {

  });
}

function getFacility (facilityID) {
  return new Promise ((resolve, reject) => {

  });
}

function createFacility (facility) {
  return new Promise ((resolve, reject) => {

  });
}

function updateFacility (facility) {
  return new Promise ((resolve, reject) => {

  });
}

function removeFacility (facilityID) {
  return new Promise ((resolve, reject) => {

  });
}

function getFleet () {
  return new Promise ((resolve, reject) => {

  });
}

function createItem (item) {
  return new Promise ((resolve, reject) => {

  });
}

function updateItem (item) {
  return new Promise ((resolve, reject) => {

  });
}

function removeItem (itemID) {
  return new Promise ((resolve, reject) => {

  });
}

function updatePlaceable (placeable) {
  return new Promise ((resolve, reject) => {

  });
}

function updateUserPreferences (updateUserPreferences) {
  return new Promise ((resolve, reject) => {

  });
}

function updateOrganizationSettings (organizationPreferences) {
  return new Promise ((resolve, reject) => {

  });  
}

function watchFacility (facilityID, callback) {
  return new Promise ((resolve, reject) => {

  });
}

function watchOrganizationSettings (_, callback) {
  return new Promise ((resolve, reject) => {

  });
}

function clearWatch (watchID) {
  return new Promise ((resolve, reject) => {

  });
}

export default {
  load, authenticate, onLogin, onLogout,
  getFacilityList, getFacility, createFacility, updateFacility, removeFacility,
  getFleet, createItem, updateItem, removeItem, updatePlaceable,
  updateUserPreferences, updateOrganizationSettings,
  watchFacility, watchOrganizationSettings, clearWatch,
}