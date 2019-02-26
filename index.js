const sfdxCore = require("@salesforce/core");

return sfdxCore.Aliases.fetch("v44.16.0").then(username =>
  console.log(`Username is: ${username}`)
);
