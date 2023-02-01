// logs in computer
console.log('hello world');
// makes table
const list = ['dog', 'cat', 'bird', 'fish'];

console.table(list);
// defines truthy falsy
const two = 2;
const expression = two == 3;

console.assert(expression);

// os modules
const os = require('os');

const server =  {
    'type': os.type(),
    'architecture': os.arch(),
    'uptime': os.uptime()
}

console.log(server)
// util module
const util = require('util');

const today = new Date();
const earthDay = 'April 22, 2022';

console.log(today);
console.log(earthDay);

console.log(util.types.isDate(today));
console.log(util.types.isDate(earthDay));