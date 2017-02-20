'use strict';

var fs = require('fs');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err);
        } else {
            var filteredList = list.filter(function (fileName) {
                return "." + ext === fileName.substr(fileName.lastIndexOf('.'));
            });
            callback(null, filteredList);
        }
    });
};