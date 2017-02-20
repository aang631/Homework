"use strict";

var dm = require('./directoryModule'),
    pathname = process.argv[2],
    extension = process.argv[3];

var callback = (err, filteredList) => {
    if (err) {
        console.error(err);
    }
    filteredList.forEach(function (i) {
        console.log(i);
    });
};

dm(pathname, extension, callback);