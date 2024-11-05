const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', function (line) {
    input = Number(line);
}).on('close', function () {
    const result =  input % 2 === 0 ? `${input} is even` : `${input} is odd`;
    console.log(result);
});