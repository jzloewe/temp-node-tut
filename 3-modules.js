// Modules (execute one file that links other files)
// want to divide modules up so not all code in one module (file)
/* want to divide this up
const john = "john"
const peter = "peter"

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

sayHi("jeffrey")
sayHi(john)
sayHi(peter) 
*/

// modules - encapsulated code
// every file is a module by default

// require = import from path
const names = require("./4-names") // start with .  to refer to same dir (another . for parent)
const sayHi = require("./5-utils")
const data = require("./6-alternative-flavor")
require("./7-mind-grenade") // function will run even without export (import = invoke)
//console.log(data)
//sayHi("jeffrey")
//sayHi(names.john)
//sayHi(names.peter) 