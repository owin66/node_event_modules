const EventEmitter = require('events')

/*const emitter = new EventEmitter()*/
const util = require('util')

class Logger {

    log = (msg) => {
        console.log(msg)
        this.emit('some_event', {id: 1, text: "event text"})
    }
}

util.inherits(Logger, EventEmitter)

module.exports = Logger