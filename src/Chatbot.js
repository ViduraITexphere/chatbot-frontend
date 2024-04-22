import React, { useState, useEffect } from "react";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/chat-history/662294d5c335a44bf03b3cdb",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userInput }),
        }
      );

      const data = await response.json();
      setChatHistory([
        ...chatHistory,
        { role: "user", parts: [{ text: userInput }] },
      ]);
      setChatHistory([
        ...chatHistory,
        { role: "model", parts: [{ text: data.response }] },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
    setUserInput("");
  };

  useEffect(() => {
    const chatContainer = document.getElementById("chat-history");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [chatHistory]);

  return (
    <div className="App">
      <div id="chat-container">
        <h1>Onebusiness Club Chatbot</h1>
        <div id="chat-history" className="chat-history">
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={
                message.role === "user" ? "user-message" : "bot-message"
              }
            >
              {message.parts[0].text}
            </div>
          ))}
        </div>
        <form id="chat-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your message"
          />
          <button type="submit">Send</button>
          <a href="/add-models">Add Models</a>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
