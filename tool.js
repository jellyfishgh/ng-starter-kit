const fs = require('fs');
const path = require('path');

fs.readDir(path.join(__dirname, 'public/html'), (err, files) => {
    if(err) throw err;
    files.map((file) => {
        
    });
});