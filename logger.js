const EventEmitter = require('events');
const uuid = require('uuid');  // Creates a random ID

// Create a class logger that emits and event msg 
// Everytime you call Logger it should show a new ID with the message sent now.
class Logger extends EventEmitter {
    log(msg) {
        // Call Event
        this.emit('message', {id: uuid.v4(), msg });
    }
}

module.exports = Logger;