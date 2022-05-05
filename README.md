### How to start:

Confirm that you have node installed using a terminal.
```
node --version
```

If there is not node js, run the following: 
```
sudo apt install node.js
```

Within the project main directory, run server.js
```
node server.js
```

When you see Server running on port 5000, open a web brower and navigate to http://localhost:5000

Install all the packages that you are going to use in your project.

* npm install uuid (To generate random IDs)
* npm install -D nodemon (So you don't have to restart the node server.)

Node comess with core Modules (path, fs, https, etc) that you do not have to install. 

3rd party modules/pakcages installed via NPM
Custom modules

### If you would like to use a module:
Create a variable and required the path of the module that you would like to use.
```
const path = require('path');
```