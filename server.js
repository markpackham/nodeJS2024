// Express uses this module
import http from "http";

const PORT = 8888;

const server = http.createServer((req, res) => {
  res.write("Hello World");
  // If I used Express it'd do the end() part automatically for me
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
