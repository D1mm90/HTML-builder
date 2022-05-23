const path = require('path');
const fs = require('fs');
let readableStream;
let data = '';

fs.readdir(path.join(__dirname,'styles'), (err, files) =>   {
    if (err) throw err;

    files.forEach(file => {
        if (file.substring(file.lastIndexOf('.')) == '.css') {
            readableStream = fs.createReadStream(path.join(__dirname, 'styles', file), 'utf-8');
            readableStream.on('data', chunk => {
        fs.appendFile(
            path.join(__dirname, 'project-dist','bundle.css'),
            chunk,
            err => {
                if (err) throw err;
            }
        )
        });
        }
    });
});
