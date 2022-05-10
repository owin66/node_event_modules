
const Logger = require('./log')

const logger = new Logger()
/*
emitter.on('some_event', (text) => {
    console.log(text)
})

emitter.emit('some_event', 'Event test text');*/
logger.on('some_text', (args) => {
    const {id, text} = args;
    console.log(id, text);
});

logger.log('User logged')

