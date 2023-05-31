// Server-side code (Node.js)
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Socket connection event
io.on('connection', socket => {
  console.log('A new client connected');

  // Receive event from client
  socket.on('chatMessage', message => {
    console.log('Received chat message:', message);

    // Emit event to all clients
    io.emit('chatMessage', message);
  });

  // Disconnect event
  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

server.listen(3001, () => {
  console.log('Socket.IO server running on port 3001');
});
