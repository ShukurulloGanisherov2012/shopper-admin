import React, { useState } from 'react';
import '../App.css';

export default function Inbox() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', message: 'Hey there! How are you?' },
    { id: 2, sender: 'Jane Smith', message: 'Hi! Can we meet tomorrow?' },
    { id: 3, sender: 'Alice Johnson', message: 'Hello! Did you receive the documents?' },
    { id: 4, sender: 'Tania Andrew', message: 'Hello, Can you make one big website in 1 week?' },
    { id: 5, sender: 'Cristiano Ronaldo', message: 'Hi! Can you advertise my sneakers for $10,000?'},
    { id: 6, sender: 'Lionel Messi', message: 'Hi can you make me more famous than ronaldo with your website for 100000$'}
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSelectMessage = (id) => {
    setSelectedMessage(id);
  };

  return (
    <>
      <div className="Inbox">
        <div className="inbox-container  overflow-y-auto">
          <div className="inbox-sidebar">
            <h2 className="inbox-heading">Inbox</h2>
            <div className="inbox-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`inbox-message ${selectedMessage === message.id ? 'selected' : ''}`}
                  onClick={() => handleSelectMessage(message.id)}
                >
                  <div className="inbox-message-sender">{message.sender}</div>
                  <div className="inbox-message-preview">{message.message}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="inbox-content">
            {selectedMessage ? (
              <div className="selected-message">
                <div className="selected-message-sender">
                  {messages.find((msg) => msg.id === selectedMessage)?.sender}
                </div>
                <div className="selected-message-text">
                  {messages.find((msg) => msg.id === selectedMessage)?.message}
                </div>
              </div>
            ) : (
              <div className="no-message">No message selected</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
