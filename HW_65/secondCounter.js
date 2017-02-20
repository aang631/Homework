const events = require('events'),
      eventEmitter = new events.EventEmitter();

eventEmitter.on('second', () => {
    console.log(new Date().toLocaleTimeString());
});

function aSecond() {
    eventEmitter.emit('second');
}

setInterval(function () {
    aSecond();
}, 1000);