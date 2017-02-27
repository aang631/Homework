'use strict';

const net = require('net'),
    server = net.createServer(function (socket) {
        const now = new Date();
        socket.write(now.getFullYear() + '-' + twoIntegers(now.getMonth() + 1) + '-' + twoIntegers(now.getDate()) + ' ' + twoIntegers(now.getHours()) + ':' + twoIntegers(now.getMinutes()));
        socket.end('\n');
    }).listen(+process.argv[2]);

function twoIntegers(number) {
    if (number < 10) {
        return '0' + number.toString();
    }
    return number;
}