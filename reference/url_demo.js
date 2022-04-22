const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100$status=active');

// SERIALIZED URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (Root Domain)
console.log(myUrl.host);

// Host Name (Will get he port while Host does not.)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add Params
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))