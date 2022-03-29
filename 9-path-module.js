const path = require("path")

console.log(path.sep) // my path separator /
const filePath = path.join("/content", "subfolder", "test.txt")
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt") // get absolute path
console.log(absolute)

