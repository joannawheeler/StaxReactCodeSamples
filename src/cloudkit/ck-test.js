   import Cloudkit from "./ck-connect.js";

    let testCount = 0;
    let testPassed = 0;
    let tests = [];

    function test (text, func) {
      testCount++;
      tests.push(text);

      let resolver = (condition) => {
        if (condition === true || condition === false)
          
          if (condition)  { //passed
            console.log(text, "PASSED", testPassed, "of", testCount);
            testPassed++;
            tests.splice(tests.indexOf(text), 1);
          } else { //failed
            console.warn(text, "FAILED");
          }

        else {console.error(text, "INVALID CONDITION TYPE"); }
      };

      let rejecter = (err) => {
        console.error(text, "ERROR IN TEST");
        console.error(error);
      };

      func(resolver, rejecter);
    }

    Cloudkit.onLoad(() => {
      console.log("CLOUDKIT HAS LOADED");
    });
