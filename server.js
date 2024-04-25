// Express uses this module
import http from "http";

import fs from "fs/promises";

import url from "url";

import path from "path";

// Get current path in CommonJS these are inbuilt
// __filename;
// __dirname;
// these are NOT available in the modern ES Modules,
// instead you have to write your own like so using "path" & "url"

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// E:\Sites\nodeJS2024\server.js
console.log(__filename);
// E:\Sites\nodeJS2024
console.log(__dirname);

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 404;
  // res.write("Hello World");
  // console.log(req.url);
  // console.log(req.method);

  try {
    // Check if GET request
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });

        // If I used Express it'd do the end() part automatically for me
        res.end("<h1>Homepage</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About</h1>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Not Found</h1>");
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("<h1>Server Error</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
