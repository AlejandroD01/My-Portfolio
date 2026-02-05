"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function sendMessage(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: String(Date.now()) + "-u",
      role: "user",
      text: input.trim(),
    };

    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text }),
      });

      const data = await res.json();
      const botText = data?.text ?? "No se recibió respuesta.";

      const botMsg: Message = {
        id: String(Date.now()) + "-b",
        role: "assistant",
        text: botText,
      };

      setMessages((m) => [...m, botMsg]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          id: String(Date.now()) + "-err",
          role: "assistant",
          text: "Error al conectar con el servidor.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div
      className="
      w-full
      max-w-2xl
      h-[550px]
      mx-auto
      mt-32
      md:mt-24
      flex flex-col
      rounded-2xl
      shadow-2xl
      border border-cyan-400/20
      backdrop-blur-xl
      p-6
    "
      style={{ backgroundColor: "rgba(19, 20, 36, 0.75)" }}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-cyan-400/10">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold shadow-md"
            style={{ backgroundColor: "#00BFFF" }}
          >
            AI
          </div>
          <h2 className="text-lg font-semibold text-white">Asistente IA</h2>
        </div>

        <button
          onClick={() => setMessages([])}
          className="
      text-xs sm:text-sm px-3 py-1
      rounded-lg bg-cyan-400/10 text-cyan-300
      hover:bg-cyan-400/20 hover:text-cyan-200
      transition duration-200 font-medium
    "
        >
          Limpiar
        </button>
      </div>

    
      {/* MESSAGES */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-4 py-4 pr-3"
      >
        {messages.length === 0 && !loading && (
          <div className="flex flex-col items-center text-gray-300 mt-10">
            <svg
              className="w-14 h-14 text-[#00BFFF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
              />
            </svg>
            <p className="text-sm mt-3">
              Escribe un mensaje para comenzar a conocer sobre Alejandro D.
            </p>
          </div>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex w-full ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`
                w-full px-4 py-3 rounded-2xl shadow-sm text-base
                ${
                  m.role === "user"
                    ? "text-white rounded-br-none"
                    : "bg-white/10 text-gray-100 rounded-bl-none"
                }
              `}
              style={m.role === "user" ? { backgroundColor: "rgba(0, 191, 255, 0.6)" } : {}}
            >
              {m.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-2xl bg-white/10 text-gray-200 flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm">Escribiendo...</span>
            </div>
          </div>
        )}
      </div>

      {/* INPUT */}
      <form
        onSubmit={sendMessage}
        className="flex items-center justify-between gap-3 pt-4 mt-4 border-t border-cyan-400/10"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Escribe un mensaje..."
          className="
      flex-1 min-w-0 px-2 py-2 rounded-lg 
      bg-white/10 text-white
      placeholder-gray-400
      border border-cyan-400/20
      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
      transition duration-200
    "
        />

        <button
          type="submit"
          disabled={loading}
          className="
      shrink-0
      px-4 sm:px-5 py-2
      rounded-lg text-white font-semibold
      bg-cyan-500 hover:bg-cyan-600
      disabled:bg-gray-500 disabled:cursor-not-allowed
      transition duration-200 shadow-lg hover:shadow-cyan-500/50
    "
        >
          {loading ? "..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
