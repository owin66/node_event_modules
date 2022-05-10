const EventEmitter = require('events');

const emitter = new EventEmitter();

/*
emitter.on('some_event', (text) => {
    console.log(text)
})

emitter.emit('some_event', 'Event test text');*/
emitter.on('some_text', (args) => {
    const {id, text} = args;
    console.log(id, text);
});
emitter.emit('some_text', {id:1, text:'Event test text'});
