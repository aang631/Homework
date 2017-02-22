"use strict";

const http = require('http');
var allData = "";

var server = http.get(process.argv[2], function (response) {
    response.setEncoding("utf8");
    response.on("error", (error) => {
        console.error(error);
    });
    response.on("data", (data) => {
        allData += data;
    });
    response.on("end", () => {
        console.log(allData.length);
        console.log(allData);
    });
});