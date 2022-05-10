const Logger = require('./log')
const logger = new Logger();

logger.on('event1', (args) => {
    const {id, text} = args;
    console.log(id, text)
})
logger.log('user logged')
