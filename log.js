const EventEmitter = require('events');

class Logger extends EventEmitter {
    log = (msg) => {
        console.log(msg);
        this.emit('event1', {id: 1, text: 'Dima provet mi tebya lubim'})
    }
}

module.exports = Logger
