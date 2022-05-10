const EventEmitter = require('events');

class Logger extends EventEmitter {
    log = (msg) => {
        console.log(msg);
        this.emit('some_text', {id:1, text:'Event test text'});
    }
}



module.exports = Logger;