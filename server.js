const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {

  // Route to index.html
  if (req.url === "/") {

    // Read the index.html
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err; // If there is an error, this function will let you know.

        res.writeHead(200, { "Content-Type": "text/html" }); // Set tht type of the file that will display.
        res.end(content);
      }
    );
  }

  // ROUTE FOR ABOUT
  if (req.url === "/about") {

    // Read the ABOUT.html
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err; // If there is an error, this function will let you know.

        res.writeHead(200, { "Content-Type": "text/html" }); // Set tht type of the file that will display.
        res.end(content);
      }
    );
  }
});

const PORT = process.env.PORT || 5000;

// Listen to the port and console.log that the site is running on the current port.
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
