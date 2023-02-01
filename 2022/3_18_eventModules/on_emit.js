let event = require('events');

const randomFunc = function(data) {
    console.log(`hello, the data is ${data}`);
}

let myEmitter = new event.EventEmitter();

myEmitter.on('variable1', randomFunc);

myEmitter.emit('variable1', 'passedData');