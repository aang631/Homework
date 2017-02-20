"use strict";
var fs = require('fs');
const pathname = process.argv[2];
var extension = process.argv[3];

function wantedExtension(fileName){
    return "."+extension===fileName.substr(fileName.lastIndexOf('.'));
}

fs.readdir(pathname, (err, list) => {
    if (err) {
        console.error(err);
    } else {
        var filteredList=list.filter(wantedExtension);
        filteredList.forEach(function(i){
            console.log(i);
        });
    }
});