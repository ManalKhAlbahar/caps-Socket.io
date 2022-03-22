'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000';
const hubConnection = io.connect(host);


hubConnection.on('pickup', (vendorClient) => {
    console.log('DRIVER : pickup',vendorClient.orderID)
    setTimeout(() => {
        hubConnection.emit('in-transit',vendorClient);
        console.log('DRIVER : in-transit');
    },1000);
    setTimeout(() => {
        hubConnection.emit('delivered',vendorClient);
        console.log('DRIVER : delivered up',vendorClient.orderID);
    },3000);

})