
import { useState } from "react";
import { api } from "../lib/api";

export default function Aichat() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([
    {
      role: "ai",
      text: "Hello! I am your AI HR Assistant. How can I help you?"
    }
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    setChats(prev => [
      ...prev,
      { role: "user", text: userMessage }
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await api.post("/api/ai/chat", {
        message: userMessage
      });

      setChats(prev => [
        ...prev,
        {
          role: "ai",
          text: res.data.reply
        }
      ]);

    } catch (error) {
      setChats(prev => [
        ...prev,
        {
          role: "ai",
          text: error.response?.data?.message ||
            "Something went wrong!"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-5">

      <h1 className="text-3xl font-bold text-center mb-5">
        🤖 AI HR Chatbot
      </h1>

      <div className="border rounded-xl shadow-lg bg-white">

        <div className="h-96 overflow-y-auto p-4 space-y-3">

          {chats.map((chat, index) => (
            <div
              key={index}
              className={
                chat.role === "user"
                  ? "text-right"
                  : "text-left"
              }
            >
              <p
                className={
                  "inline-block p-3 rounded-xl " +
                  "max-w-[85%] whitespace-pre-wrap break-words " +
                  (chat.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black")
                }
              >
                {chat.text}
              </p>
            </div>
          ))}

          {loading && (
            <p className="text-gray-500">
              AI is typing...
            </p>
          )}

        </div>

        <form
          onSubmit={sendMessage}
          className="flex gap-2 p-3 border-t"
        >
          <input
            type="text"
            value={message}
            maxLength={1000}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 min-w-0 border p-2 rounded-lg text-black"
          />

          <button
            type="submit"
            disabled={loading || !message.trim()}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg disabled:opacity-50"
          >
            Send
          </button>
        </form>

      </div>
    </div>
  );
}
