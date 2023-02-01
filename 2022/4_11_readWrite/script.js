const fs = require('fs');
const readline = require('readline');

//read text
const text = readline.createInterface({
	input: fs.createReadStream('text.txt')
});

function readLine(line) {
	console.log(line);
}

// text.on('line', readLine);

//write text

const text2 = fs.createWriteStream('./writtentext.txt');

function writeLine(line) {
	text2.write(`ShoppingList Item: ${line} \n`);
}

text.on('line', writeLine)
