import React, { useState } from 'react';
import './Chatbot.css'; // Add some styling if needed

const chatbotPatterns = [
  { pattern: /hi|hello|hey/, responses: ["Hey there! 👋 What can I do for you today?", "Hello! 😊 Need a hand with something?", "Hi! Ready to dive into tech or fashion talk?"] },
  { pattern: /how are you\??/, responses: ["I'm doing awesome, thanks for asking! How about you?", "All systems go! 💻 How are *you* doing today?", "I’m great! Always ready to help. What’s up?"] },
  { pattern: /.*your name.*/, responses: ["I'm your friendly assistant bot—call me whatever you like! 🤖", "They call me The Chatinator... but you can call me friend 😎"] },
  { pattern: /.*eram wear.*/, responses: ["Eram Wear is where fashion meets bold creativity. 👗 Want to explore our latest collections?", "At Eram Wear, we dress confidence. Ask about styles, prices, or what’s trending right now!"] },
  { pattern: /.*clothes.*|outfits|styles/, responses: ["We’ve got stylish outfits for all vibes—casual, streetwear, and chic. What’s your style?", "From trendy street fits to elegant designs, Eram Wear brings the heat 🔥. Looking for something specific?"] },
  { pattern: /.*price.*|cost|how much/, responses: ["Our prices vary—affordable yet premium. Want to know the cost of something in particular?", "You’d be surprised! Eram Wear offers great fashion without breaking the bank 💸"] },
  { pattern: /.*thank you|thanks.*/, responses: ["You're most welcome! 😊", "Anytime! Happy to help.", "Glad I could assist you!"] },
  { pattern: /.*/, responses: ["Oops, I didn’t quite get that. Can you try rephrasing? 🤔", "Hmm... I’m not sure I understand. Mind saying that another way?"] }
];

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi, I’m your assistant. I can talk about Eram Wear, tech programs, and more! Type 'quit' to end the chat.", sender: 'bot' }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(true); // State to manage visibility

  const handleInputChange = (e) => setUserInput(e.target.value);

  const getBotResponse = (userMessage) => {
    for (let pattern of chatbotPatterns) {
      if (pattern.pattern.test(userMessage)) {
        const response = pattern.responses[Math.floor(Math.random() * pattern.responses.length)];
        return response;
      }
    }
    return "I didn't quite understand that. Could you say it differently? 🤔";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.toLowerCase() === 'quit') {
      setMessages([...messages, { text: "Goodbye! Stay stylish and sharp! 🌟", sender: 'bot' }]);
      return;
    }

    const botResponse = getBotResponse(userInput);
    setMessages([...messages, { text: userInput, sender: 'user' }, { text: botResponse, sender: 'bot' }]);
    setUserInput("");
  };

  const toggleChatbot = () => setIsOpen(!isOpen); // Function to toggle visibility

  return (
    <div className="chatbot-container">
      {/* Button to toggle chatbox visibility */}
      <button
        onClick={toggleChatbot}
        className="chatbot-toggle-btn"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'transparent',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
        }}
      >
        {isOpen ? 'X' : '+'} {/* "X" when open, "+" when closed */}
      </button>

      {/* Chatbot panel */}
      <div
        className={`chatbot-panel ${isOpen ? 'open' : 'closed'}`}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '300px',
          height: '400px',
          backgroundColor: '#f8f9fa',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '10px',
          display: isOpen ? 'block' : 'none', // Toggle visibility based on state
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <div className="chatbot-header">
          <h4>Chatbot</h4>
        </div>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="chatbot-input"
          />
          <button type="submit" className="chatbot-send-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
