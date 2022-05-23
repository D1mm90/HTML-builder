const { fstat } = require("fs");

const { stdin, stdout, stderr } = process;
const path = require('path');
const fs = require('fs');
const { config } = require("process");
stdout.write('Hello, write text:\n');

fs.writeFile(

    path.join(__dirname, 'text.txt'),
    '',
    (err) => {
        if (err) throw err;
    }
     );

     stdin.on('data', config => {
let str = config.toString();
fs.appendFile(
    path.join(__dirname, 'text.txt'),
    ' ' + str,
    err => {
        if (err) throw err;
    }
);
     });