"use strict";
var fs = require('fs');
const fileName = process.argv[2];
const fileContents = fs.readFileSync(fileName);
var fileArrayLines= fileContents.toString().split("\n");
console.log(fileArrayLines.length-1);
