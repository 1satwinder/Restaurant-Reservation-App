require("regenerator-runtime/runtime");
const builtFunctions = require("./build").default;
const admin = require('firebase-admin');
admin.initializeApp();

Object.keys(builtFunctions).forEach((functionName) => {
  exports[functionName] = builtFunctions[functionName];
});
