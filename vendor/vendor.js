'use strict';

const io = require('socket.io-client');
const { faker } = require('@faker-js/faker');
const host = 'http://localhost:3000';
const hubConnection = io.connect(host);

setInterval(()=>{
    let vendorClient = {
        store: "My store",
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    }
    hubConnection.emit('pickup',vendorClient);
    },5000);
    hubConnection.on('delivered',(vendorClient)=>{
        console.log('VENDOR : Thank you for delivering', vendorClient.orderID)
    })