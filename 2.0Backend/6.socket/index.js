const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
  console.log('A new client connected');

  // Emit event to the client
  socket.emit('welcome', 'Welcome to the Socket.IO server');

  // Receive event from the client
  socket.on('chatMessage', message => {
    console.log('Received chat message:', message);
    // Broadcast the message to all connected clients
    io.emit('chatMessage', message);
  });

  // Receive event from the client and acknowledge
  socket.on('typing', () => {
    console.log('Someone is typing');
    // Acknowledge the event
    socket.emit('acknowledge', 'Server received typing event');
  });

  // Receive event from the client and acknowledge with data
  socket.on('getData', (param1, param2, callback) => {
    console.log('Received getData event with parameters:', param1, param2);
    // Process the data and send a response
    const result = param1 + param2;
    callback(result);
  });

  // Disconnect event
  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

server.listen(3001, () => {
  console.log('Socket.IO server running on port 3001');
});
