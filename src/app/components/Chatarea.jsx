"use client";

import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from "react";
import { Send } from "lucide-react";

const ChatArea = () => {
  const [input, setinput] = useState("");
  const [loading, setloading] = useState(false);
  const [history, sethistory] = useState([
    {
      role: "model",
      parts: "Great to meet you. What would you like to know?",
    },
  ]);
  const [text, settext] = useState("");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCRE7nLlAa49i-3UfEOVcMbnZLCI2xdTE0"
  );

  async function run() {
    setloading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const chat = model.startChat({
        history: [
          {
            role: "model",
            parts: "Great to meet you. What would you like to know?",
          },
        ],
        generationConfig: {
          maxOutputTokens: 800,
        },
      });

      const result = await chat.sendMessage(input);

      setloading(false);
      const response = await result.response;
      console.log(response.candidates[0].content.role);
      const text = response.text();
      settext(text);
      console.log(text);
    } catch (error) {
      console.log(error);
      setloading(false);
      settext("Oops, Error occured.");
    }
  }

  return (
    <div className="relative flex items-center justify-center max-w-3xl border min-h-dvh  overflow-y-scroll w-full pt-5 bg-slate-800 rounded-t-3xl">
      <div className="absolute bottom-2 w-full flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          placeholder="Start Chatting..."
          className="input input-bordered w-full mx-auto bg-opacity-70 backdrop-blur shadow"
        />
        <button
          className="btn btn-primary rounded-3xl"
          title="send"
          onClick={run}
        >
          <Send />
        </button>
      </div>
    </div>
  );
};

export default ChatArea;