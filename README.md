### How to start:

Confirm that you have node installed using a terminal.
```
node --version
```

Confirm that you have npm installed using a terminal.
```
npm --version
```

Create a project folder using your terminal:
```
mkdir ProjectName
```

Navigate inside the project:
```
cd ProjectName
```

Create a package.json file using Node Package Manager initialization (npm init) and hit return on everything unless you would like to provide details:
```
npm init
```

Install all the packages that you are going to use in your project.  When you install them, they will be listed in the package.json file.  I listed the packages that I will use in this project.

* npm install uuid (To generate random IDs)
* npm install -D nodemon (So you don't have to restart the node server.)
* 

Node comess with core Modules (path, fs, https, etc) that you do not have to install. 

3rd party modules/pakcages installed via NPM
Custom modules

### If you would like to use a module:
Create a variable and required the path of the module that you would like to use.
```
const path = require('path');
```
### If you would like to use a file:
```
const myFile = require('./myfile');
```