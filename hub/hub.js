'use strict';

const port = process.env.PORT || 3008;

const io = require('socket.io')(port);

io.on('connection', (socket) => {
    console.log('CONNECTED', socket.id);

    socket.on('pickup', (vendorClient) => {
        console.log('Event :', {
            event: 'pickup',
            time: new Date().toString(),
            payload: vendorClient
        });
        io.emit('pickup', vendorClient)
    })

    socket.on('in-transit', (vendorClient) => {
        console.log('Event :', {
            event: 'in-transit',
            time: new Date().toString(),
            payload: vendorClient
        });
        io.emit('in-transit', vendorClient)
    })

    socket.on('delivered', (vendorClient) => {
        console.log('Event :', {
            event: 'delivered',
            time: new Date().toString(),
            payload: vendorClient
        });
        io.emit('delivered', vendorClient)
    })
});



