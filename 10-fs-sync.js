const {readFileSync, writeFileSync} = require("fs"); // synchronous reads and writes
console.log("start");
const first = readFileSync("./content/first.txt","utf8")
const second = readFileSync("./content/second.txt","utf8")
//console.log(first, second)
writeFileSync( // destination, value, options (a is append)
    "./content/result-sync.txt", 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
) 
console.log("done with the task");
console.log("starting the next one");

// logs appear in order as a result of sync (slows down app, prevents serving multiple clients)