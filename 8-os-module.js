const os = require('os')

const userInfo = os.userInfo()
console.log(userInfo)
//system uptime

console.log('the system uptime is',os.uptime(),'seconds')

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)