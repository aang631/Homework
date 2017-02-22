"use strict";

const http = require('http');

var server = http.get(process.argv[2], function (response) {
    response.setEncoding("utf8");
    response.on("error", (error) => {
        console.error(error);
    });
    response.on("data", (data) => {
        console.log(data);
    });
});