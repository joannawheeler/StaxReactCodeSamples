let container, publicDB, privateDB, sharedDB; 
//LOAD MUST BE CALLED BEFORE ANY OTHER METHODS
//SHOULD BE CALLED DURING INSTATIATEION OF APP COMPONENT
function load () {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

//AUTHENTICATE MUST BE CALLED NEXT, TO CREATE THE PROPER SIGNIN/OUT BUTTONS
//ALSO CALL FROM APP COMPONENT, THE REST SHOULD BE CALLED FROM CHILD COMPONENTS 
function authenticate () {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function onLogin () {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function onLogout () {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function getFacilityList () {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function getFacility (facilityID) {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function createFacility (facility) {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function updateFacility (facility) {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function removeFacility (facilityID) {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function getFleet () {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function createItem (item) {
   return new Promise ((resolve, reject) => {
    resolve();
  });
}

function updateItem (item) {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function removeItem (itemID) {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function updatePlaceable (placeable) {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function updateUserPreferences (updateUserPreferences) {
   return new Promise ((resolve, reject) => {
    resolve();
  });
}

function updateOrganizationSettings (organizationPreferences) {
  return new Promise ((resolve, reject) => {
    resolve();
  }); 
}

function watchFacility (facilityID, callback) {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function watchOrganizationSettings (_, callback) {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}

function clearWatch (watchID) {
  return new Promise ((resolve, reject) => {
    resolve();
  });
}


export default {
  load, authenticate, onLogin, onLogout,
  getFacilityList, getFacility, createFacility, updateFacility, removeFacility,
  getFleet, createItem, updateItem, removeItem, updatePlaceable,
  updateUserPreferences, updateOrganizationSettings,
  watchFacility, watchOrganizationSettings, clearWatch,
}