
const functionX = function(userInput) {
    let input = userInput.toString()
    console.log(input)
}

process.stdin.on('data', functionX);
