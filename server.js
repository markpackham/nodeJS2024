// Express uses this module
import http from "http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 404;
  // res.write("Hello World");

  res.writeHead(200, { "Content-Type": "text/html" });

  // If I used Express it'd do the end() part automatically for me
  res.end("<h1>Hello World</h1>");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
