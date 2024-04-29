import { createServer } from "http";

const PORT = process.env.PORT;

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Bobby Doe" },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    // Older way
    // res.setHeader("Content-Type", "application/json");
    // res.statusCode = 404;
    // res.write(JSON.stringify({ message: "Route Not Found!" }));
    // res.end();
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found!" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
