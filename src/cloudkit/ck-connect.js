window.addEventListener('cloudkitloaded', function() {
  console.log("cloudkitloaded");
  
  CloudKit.configure({
    containers: [{
      containerIdentifier: 'iCloud.com.coherent.staX',
      
      apiTokenAuth: {
        // And generate a web token through CloudKit Dashboard.
        apiToken: 'cabcc1115c6b118f192e08e7b1ca3dee05976f4b164f8047f59a1a53974ca46b',
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

let CloudKit, container, publicDB, privateDB, sharedDB; 

function onLoad (callback) {
  return new Promise ((resolve, reject) => {
    window.addEventListener('cloudkitloaded', function() {
      CloudKit.configure({
        containers: [{
          containerIdentifier: 'iCloud.com.coherent.staX',
          
          apiTokenAuth: {
            // And generate a web token through CloudKit Dashboard.
            apiToken: 'cabcc1115c6b118f192e08e7b1ca3dee05976f4b164f8047f59a1a53974ca46b',
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
    //privateDB
    //sharedDB

    resolve(callback());
  });
}

function isAuthenticated () {
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

function onLogin (callback) {
  return new Promise ((resolve, reject) => {
    container.whenUserSignsIn().then((userInfo) => {
      resolve(callback(userInfo));
    }).catch((err) => {reject(err);});
  });
}

function onLogout (callback) {
  return new Promise ((resolve, reject) => {
    container.whenUserSignsOut().then((_) => {
      resolve(callback(_));
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
  onLoad, isAuthenticated, onLogin, onLogout,
  getFacilityList, getFacility, createFacility, updateFacility, removeFacility,
  createItem, updateItem, updateItem, updatePlaceable,
  updateUserPreferences, updateOrganizationPreferences
  watchFacility, clearWatch,
}