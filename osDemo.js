import os from "os";

// userInfo()
console.log(os.userInfo());
console.log(os.userInfo().username);

// totalmem() in bytes
console.log(os.totalmem());

// freemem()
console.log(os.freemem());

// cpus() gives an object for every core on the system
console.log(os.cpus());
