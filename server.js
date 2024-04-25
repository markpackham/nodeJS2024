// Express uses this module
import http from "http";

const PORT = 8888;

const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 404;
  // res.write("Hello World");

  res.writeHead(500, { "Content-Type": "application/json" });

  // If I used Express it'd do the end() part automatically for me
  res.end(JSON.stringify({ message: "Server Error" }));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
