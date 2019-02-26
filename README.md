Repro steps

1. `sfdx force:auth:web:login -a v44.16.0`
1. When the salesforce login page pops up, log in with username: `aleong@0205dev.org` and pw: `test1234`
1. `sfdx force:org:list`
1. See that an entry in the orgs list appears with Alias=v44.16.0, Username=aleong@0205dev.org OrgId=00D... ConnectedStatus=Connected
1. Clone this repo
1. `npm install`
1. `node index.js`

Expected: The index.js file is hardcoded to fetch the username for `v44.16.0`, and I would expect it to return `aleong@0205dev.org`.

Actual: `undefined` is returned instead.

If I change index.js to fetch the username for an alias that does not contain the period ('.') character, then I get back the username I expect. 
