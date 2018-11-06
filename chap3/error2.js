const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcvd.js', (err) => {
        if(err){
            console.log(err);
        }
    });
}, 1000);