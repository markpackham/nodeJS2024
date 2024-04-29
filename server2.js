import { createServer } from "http";

const PORT = process.env.PORT;

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Bobby Doe" },
];

// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    if (req.url === "/api/users" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    }
    // Using regular expression
    else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
      const id = req.url.split("/")[3];
      console.log(id);
      const user = users.find((user) => user.id === parseInt(id));
      //res.setHeader("Content-Type", "application/json");
      if (user) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User not found!" }));
      }
      //res.end();
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
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
