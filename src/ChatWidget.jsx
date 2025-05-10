import React, { useState, useRef, useEffect } from 'react';
import './main.css';

const ChatWidget = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about using SoftSell.' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => setChatVisible(!chatVisible);

  const getMockedResponse = (userInput) => {
    const msg = userInput.toLowerCase();

    if (msg.includes('hello') || msg.includes('hi')) {
      return 'Hello! How can I assist you today?';
    } else if (msg.includes('how') && msg.includes('sell')) {
      return 'You can sell your unused software license by filling out the form on our Sell page. We’ll take care of the rest!';
    } else if (msg.includes('app') && msg.includes('work')) {
      return 'SoftSell connects sellers of unused licenses with buyers. It ensures secure transactions and license transfers.';
    } else if (msg.includes('download') || msg.includes('install')) {
      return 'SoftSell is a web-based platform, so no downloads are necessary. Just use your browser to access it.';
    } else if (msg.includes('how much') || msg.includes('do i get')) {
      return 'The amount you receive depends on the license value and market demand. We’ll give you an estimate after verifying your submission.';
    } else if ((msg.includes('how many days')) || msg.includes('refund')) {
      return 'Refunds are available within 7 days if the license transfer fails. Contact our support team for help.';
    } else if (msg.includes('support') || msg.includes('contact')) {
      return 'You can contact our support team at support@softsell.com or via the Contact page.';
    } else if (msg.includes('license') && msg.includes('valid')) {
      return 'All licenses listed on SoftSell are verified for validity before they are approved for resale.';
    } else if (msg.includes('payment') || msg.includes('money')) {
      return 'You’ll receive payment within 3–5 business days after your license is sold and verified.';
    } else if (msg.includes('thanks') || msg.includes('thank you')) {
      return 'Happy to help.';
    } else {
      return "I'm not sure about that. Try asking about selling, payment, app usage, or contact info.";
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    const botReply = { sender: 'bot', text: getMockedResponse(input) };

    setMessages(prev => [...prev, userMsg, botReply]);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
      <button className="button" onClick={toggleChat}>Chat</button>
      {chatVisible && (
        <div className="chat-box">
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <p key={idx}><strong>{msg.sender}:</strong> {msg.text}</p>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input-row">
            <input
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a question..."
            />
            <button className="button" onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
