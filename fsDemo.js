// Old version if you don't want to use promises
// import fs from "fs";

// readFile() - callback - default version
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync() - Synchronous version
// Easy to write but blocking so a nightmare if you have a giant file
// use Async for large files which uses Promises
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);

import fs from "fs/promises";

// readFile() - Promise version (we can use .then() or cooler async / await version)

fs.readFile("./test.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
