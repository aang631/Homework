'use strict';

const http = require('http'),
    url = require('url'),
    port = +process.argv[2];

let pages = {
    '/api/parsetime': function (time) {
        return JSON.stringify({
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        });

    },
    '/api/unixtime': function (time) {
        return JSON.stringify({
            unixtime: time.getTime()
        });
    },
};

let server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
        response.end("Not a get request");
    }
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    const theUrl = url.parse(request.url, true),
        page = pages[theUrl.pathname];
    if (page) {
        let time = new Date(theUrl.query.iso);
        response.write(page(time));
    } else {
        response.statusCode = 404;
        response.write('<h1>404</h1>Page Not Found');
    }
    response.end();
}).listen(port);