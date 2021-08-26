require("regenerator-runtime/runtime");
const builtFunctions = require("./build");

Object.keys(builtFunctions).forEach((functionName) => {
  exports[functionName] = builtFunctions[functionName];
});
