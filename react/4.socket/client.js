// Client-side code (React)
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const App = () => {
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
    // Receive event from server
    socket.on('chatMessage', message => {
      setReceivedMessage(message);
    });

    return () => {
      // Clean up on component unmount
      socket.off('chatMessage');
    };
  }, []);

  const sendMessage = () => {
    // Emit event to server
    socket.emit('chatMessage', message);
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
      <p>Received Message: {receivedMessage}</p>
    </div>
  );
};

export default App;
