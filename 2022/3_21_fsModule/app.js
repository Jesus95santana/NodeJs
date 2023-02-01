const fs = require('fs');

let readDataCallback = function (err, data) {
  err ? console.log('Something went wrong: ' + err) : console.log('Provided file contained: ' + data);
};

fs.readFile('./file.txt', 'utf-8', readDataCallback);
