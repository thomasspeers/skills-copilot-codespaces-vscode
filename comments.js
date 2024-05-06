// Create web server
// 1. Create web server
// 2. Read the content of comments.json
// 3. Send the content of comments.json to the browser

// 1. Create web server
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // 2. Read the content of comments.json
  fs.readFile("./comments.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end("Server error");
      return;
    }
    // 3. Send the content of comments.json to the browser
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});