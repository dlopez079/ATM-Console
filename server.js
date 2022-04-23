const http = require("http");
const path = require("path");
const fs = require("fs");

// Request the server and get a response
const server = http.createServer((req, res) => {

  // Builid File Path for the public folder that you created on the root directory(__dirname)
  let filePath = path.join(
    __dirname,
    "public",
    // If the URL equals '/' then you are going to load the index.html or request the HMTL file that has the same name of the route. Example (localhost:5000/index.html will pull the index.html/localhost:5000/about will fetch the about.html).
    req.url === "/" ? "index.html" : req.url  
  );

  // Save the Extension of the files that is within the public folder and save it to variable.
  let extname = path.extname(filePath);

  // We have to tell the server what the content type of the file is.  (If it's an html file, then the content type is 'text/html'; if it's css, then the content type is 'text/css', etc.)
  let contentType = "text/html";

  // Use a switch to determine the content type for the files that live in your public folder using the Extension of the file which is saved to a variable already.
  switch (extname) {
    case ".js":
      contentType = "application/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Read the file that is located in the public folder.
  fs.readFile(filePath, (err, content) => {

    // If there is an err, we will check for the 'ENOENT = Error NO ENTity/ENTry'
    if (err) {
      if (err.code == "ENOENT") {

        // Display a 'Page not found' html which is located inthe public folder.
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        )
      } else {
        // Or the Default Server Error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // If there is no error, then mark 200 code (success) and display html file.
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

// Listen to the port and console.log that the site is running on the current port.
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
