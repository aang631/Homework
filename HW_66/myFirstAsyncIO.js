"use strict";
var fs = require('fs');
const fileName = process.argv[2];

fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err);
    } else {
        var fileArrayLines = data.toString().split("\n");
        console.log(fileArrayLines.length - 1);
    }
});