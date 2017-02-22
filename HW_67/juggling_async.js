"use strict";

const http = require('http');

var allUrlData = [],
    counter = 0;


function server(url) {
    http.get(process.argv[url], function (response) {
        var allData = "";
        response.setEncoding("utf8");
        response.on("error", (error) => {
            console.error(error);
        });
        response.on("data", (data) => {
            allData += data;
        });
        response.on("end", () => {
            allUrlData[url - 2] = allData;
            counter++;
            /*if (allUrlData.length === process.argv.length-2) {    ///////Not sure why this doesnt work.
                allUrlData.forEach(e => console.log(e));
            }*/
            if (counter === process.argv.length - 2) {
                allUrlData.forEach(e => console.log(e));
            }
        });
    });
}

for (let i = 2; i < process.argv.length; i++) {
    server(i);
}