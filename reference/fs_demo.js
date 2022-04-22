const fs = require('fs');
const path = require('path');

// Create folder
// When you run this javascript file, you will create a folder in the current directory.
// fs stands for file server
// mkdir will make directory (folder).
// Inside of the mkdir method, you will pass in the path or lcation > directory name(dirname).
// The second parameter is the name of the folder which is test.
// {} is empty for now. 
fs.mkdir(path.join(__dirname, 'test'), {}, err => {
    if(err) throw err; // If there is an error, this function will let you know.
    console.log('Folder Created...'); // This will verify that the folder is created in the console.log.
});