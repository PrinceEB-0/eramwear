import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;
const synth = window.speechSynthesis;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi, I’m your assistant. I can talk about Eram Wear, tech programs, and more! Type 'quit' to end the chat.", sender: 'bot' }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const dragRef = useRef(null);
  const pos = useRef({ x: 0, y: 0, offsetX: 0, offsetY: 0 });

  const chatbotPatterns = [
    { pattern: /hi|hello|hey/, responses: ["Hey there! 👋 What can I do for you today?", "Hello! 😊 Need a hand with something?", "Hi! Ready to dive into tech or fashion talk?"] },
    { pattern: /how are you\??/, responses: ["I'm doing awesome, thanks for asking! How about you?", "All systems go! 💻 How are *you* doing today?", "I’m great! Always ready help. What’s up?"] },
    { pattern: /.*your name.*/, responses: ["I'm your friendly assistant bot—call me whatever you like! 🤖", "They call me The Chatinator... but you can call me friend 😎"] },
    { pattern: /.*eram wear.*/, responses: ["Eram Wear is where fashion meets bold creativity. 👗 Want to explore our latest collections?", "At Eram Wear, we dress confidence. Ask about styles, prices, or what’s trending right now!"] },
    { pattern: /.*clothes.*|outfits|styles/, responses: ["We’ve got stylish outfits for all vibes—casual, streetwear, and chic. What’s your style?", "From trendy street fits to elegant designs, Eram Wear brings the heat 🔥. Looking for something specific?"] },
    { pattern: /.*price.*|cost|how much/, responses: ["Our prices vary—affordable yet premium. Want to know the cost of something in particular?", "You’d be surprised! Eram Wear offers great fashion without breaking the bank 💸"] },
    { pattern: /.*thank you|thanks.*/, responses: ["You're most welcome! 😊", "Anytime! Happy to help.", "Glad I could assist you!"] },
    { pattern: /.*/, responses: ["Oops, I didn’t quite get that. Can you try rephrasing? 🤔", "Hmm... I’m not sure I understand. Mind saying that another way?"] }
  ];

  const getBotResponse = (userMessage) => {
    for (let pattern of chatbotPatterns) {
      if (pattern.pattern.test(userMessage.toLowerCase())) {
        return pattern.responses[Math.floor(Math.random() * pattern.responses.length)];
      }
    }
    return "I didn't quite understand that. Could you say it differently? 🤔";
  };

  const speak = (text) => {
    if (!synth) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    synth.speak(utterance);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    if (userInput.toLowerCase() === 'quit') {
      const goodbye = "Goodbye! Stay stylish and sharp! 🌟";
      setMessages([...messages, { text: goodbye, sender: 'bot' }]);
      speak(goodbye);
      setUserInput("");
      return;
    }

    const botResponse = getBotResponse(userInput);  // Fixed botResponse here
    setMessages([...messages, { text: userInput, sender: 'user' }, { text: botResponse, sender: 'bot' }]);
    speak(botResponse);
    setUserInput("");
  };

  const handleVoiceInput = () => {
    if (!recognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setUserInput(""); // Clear input
      setIsListening(false);
      const botResponse = getBotResponse(transcript);
      setMessages(prev => [...prev, { text: transcript, sender: 'user' }, { text: botResponse, sender: 'bot' }]);
      speak(botResponse);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };
  };

  const handleInputChange = (e) => setUserInput(e.target.value);  // <-- Added this function

  useEffect(() => {
    const drag = dragRef.current;
    const onMouseDown = (e) => {
      pos.current.offsetX = e.clientX - drag.offsetLeft;
      pos.current.offsetY = e.clientY - drag.offsetTop;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      drag.style.left = `${e.clientX - pos.current.offsetX}px`;
      drag.style.top = `${e.clientY - pos.current.offsetY}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    drag.addEventListener('mousedown', onMouseDown);
    return () => drag.removeEventListener('mousedown', onMouseDown);
  }, []);

  return (
    <div className="chatbot-container draggable" ref={dragRef}>
      <div className="chatbot-header">
        <h4>Chatbot</h4>
      </div>
      <div className="chatbot-body">
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>{msg.text}</div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}  // <-- Use the function here
          placeholder="Type your message..."
          className="chatbot-input"
        />
        <button type="submit" className="chatbot-send-btn">Send</button>
        <button type="button" className="chatbot-voice-btn" onClick={handleVoiceInput}>
          {isListening ? "🎙️ Stop" : "🎤 Talk"}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
