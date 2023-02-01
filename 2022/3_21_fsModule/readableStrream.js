//readable stream
const readline = require("readline")
const fs = require("fs")

const myInterface = readline.createInterface({
	input: fs.createReadStream("./file.txt")
});

function printData(fileLine) {
	console.log(`The line read: ${fileLine}`);
}

myInterface.on("line", printData);

//writable stream
const fileStream = fs.createWriteStream('./file.txt');

fileStream.write('I have been written!');
fileStream.write('i am a second line');
fileStream.end();
