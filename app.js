// npm - global command, comes with node
// npm --version

// local dependency - use only in this particular project (will use more often because few things need to be global)
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// ways to make:
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step automation, enter to skip)
// npm init -y (everything default)
// make name unique

// can modify package.json after creation
// adding local dependency modifies the package.json to account for this

// node_modules is where modules are located
// some dependencies have dependencies (subdependencies added automatically to node modules)

// must install first before require
const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)