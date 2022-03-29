const os = require("os") // means built-in

// info about current user
const user = os.userInfo()

// uptime = how long os running in secs
console.log(`The System uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
