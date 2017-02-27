'use strict';

const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    port = +process.argv[2],
    fileToServe = process.argv[3];

var server = http.createServer((request, response) => {
    const rs = fs.createReadStream(fileToServe, 'utf-8');
    rs.pipe(response);
}).listen(port);