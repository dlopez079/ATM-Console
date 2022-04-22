const EventEmitter = require('events');

// Create Class
class MyEmitter extends EventEmitter { }

// Init Object
const myEmitter = new MyEmitter();

// Event Listener will turn on event and console.log the event fired.
myEmitter.on('event', ()=> console.log('Event Fired!'));

// Init Event
myEmitter.emit('event');