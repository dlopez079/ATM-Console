const fs = require('fs');
const path = require('path');

// CREATE FOLDER
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

// CREATE AND WRITE TO FILE
// fs = file server
// writeFile will write to file selected with the text you created.
// Joint he path with the dirname, folder and name of the file.
// When you run this javascript file, you will create a specified file within a specified folder and add text to it.
fs.writeFile(path.join(__dirname, 'test', "sample.txt"), 'Sample - Hello World!', err => {
    if(err) throw err; // If there is an error, this function will let you know.
    console.log('Sample Created inside of Folder...'); // This will verify that the folder is created in the console.log.
});

// Using writeFile again will overwrite what you already have.  
// Joint he path with the dirname, folder and name of the file.
// In the example below, you will replace 'Sample - Hello World' with 'Sample - I love Node.js!'.
fs.writeFile(path.join(__dirname, 'test', "sample.txt"), 'Sample - I love Node.JS!', err => {
    if(err) throw err; // If there is an error, this function will let you know.
    console.log('Sample Created inside of Folder...'); // This will verify that the folder is created in the console.log.
});

// Use AppendFile to add to the content of the file.  
// In the example below, you will replace 'Sample - Hello World' with 'Sample - I love Node.js!'.
fs.appendFile(path.join(__dirname, 'test', "sample.txt"), 'Sample - I Really love Node.JS!', err => {
    if(err) throw err; // If there is an error, this function will let you know.
    console.log('Sample Created inside of Folder...'); // This will verify that the folder is created in the console.log.
});

// To read a file
// fs = file server
// readFile will read the file you select.
// Joint he path with the dirname, folder and name of the file.
// utf8 must always be used.
// run the err function to display any errors.
fs.readFile(path.join(__dirname, 'test', 'sample.txt'), 'utf8', (err,data) => {
    if(err) throw err; // If there is an error, this function will let you know.
    console.log(data); // Verify that I can pull the data.
});

// RENAME A FILE
fs.rename(path.join(__dirname, 'test', 'sample.txt'), path.join(__dirname, 'test', 'sample2.txt'), err => {
    if(err) throw err; // If there is an error, this function will let you know.
    console.log("File Renamed"); // Verify that I can pull the data.
});