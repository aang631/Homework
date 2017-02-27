'use strict';

const http = require('http'),
    map = require('through2-map'),  //////Needs 'npm install through2-map' installed (in command prompt) to work
    port = +process.argv[2];

var server = http.createServer((request, response) => {
    if(request.method!=='POST'){
        response.end("Not a post");
    }
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
}).listen(port);