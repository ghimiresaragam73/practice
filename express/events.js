var events = require('events');
var event1 = new events.EventEmitter();

//trigger part (emit method is used to trigger)
//listen part (on method is used to listen the event)
//listening part
event1.on('ram', function (data) {
    console.log('I am ram event listening>>',data);
})

setTimeout(() => {
    event1.emit('ram', 'hello');
}, 3000);