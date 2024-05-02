// process is Global so you won't need to import it
// console.log(process) should work fine
//console.log(process);

// argv
// When happens when i do this
// node processDemo.js import -s
//
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'E:\\Sites\\nodeJS2024\\processDemo.js',
//     'import',
//     '-s'
//   ]
console.log(process.argv);

// If I do this
// node processDemo.js import -s
// I get "-s" since it is the 3rd item in the array which would be the flag
console.log(process.argv[3]);

// process.env
// console.log(process.env);
console.log(process.env.HOSTNAME);

// pid (process id)
console.log(process.pid);

// cwd (current working directory)
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// update()
console.log(process.uptime());

// We can use exit to trigger a callback
process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

// // exit()
process.exit(0);
// // Won't get logged since process already exited
// console.log("Hello from after exit");
