"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
}

export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const feedEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of the feed when new messages are added
  useEffect(() => {
    feedEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text: string, sender: "user" | "bot" = "user") => {
    if (!text.trim()) return;
    
    const newMsg: ChatMessage = {
      id: Math.random().toString(36).substring(7),
      sender,
      text,
    };
    
    setMessages((prev) => [...prev, newMsg]);

    if (sender === "user") {
      setInputValue("");
      // Simple automated response
      setTimeout(() => {
        handleBotResponse(text);
      }, 600);
    }
  };

  const handleQuickAction = (action: string) => {
    handleSend(action, "user");
  };

  const handleBotResponse = (userText: string) => {
    const query = userText.toLowerCase();
    let reply = "Thanks for your message. An OYEN GRID representative will get back to you shortly.";

    if (query.includes("demo")) {
      reply = "To book a live demo, please visit our solutions catalog or share your email address here so we can coordinate a calendar invite.";
    } else if (query.includes("pricing")) {
      reply = "Our plans start at ₦15,000/month. We offer Basic, Standard, and Premium tiers tailored to your delivery scale. How many participants do you manage?";
    } else if (query.includes("features")) {
      reply = "OYEN GRID features include cohort tracking, automated attendance intelligence, certificates, and live sync session delivery. Let us know what you want to build.";
    } else if (query.includes("training programs") || query.includes("bootcamp")) {
      reply = "Our Bootcamps & Training solution is optimized for cohorts, training agencies, and fellowships. Check out /solutions/bootcamps-training.";
    } else if (query.includes("corporate") || query.includes("enterprise")) {
      reply = "For corporate and custom training setups, we offer dedicated infrastructure and White-label portals. Would you like to connect with Enterprise Sales?";
    } else if (query.includes("sales")) {
      reply = "Please leave your email address and business requirement. Our accounts representative will reach out within 2 hours.";
    }

    handleSend(reply, "bot");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans antialiased text-white selection:bg-[#F5D76E]/30">
      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[340px] h-[500px] flex flex-col bg-[#111111] border border-[#1F1F1F] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-[#161616] border-b border-[#1F1F1F] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F5D76E]" />
                <span className="font-semibold text-sm text-[#F5D76E] tracking-wide">OYEN GRID Support</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-[#1F1F1F] text-zinc-400 hover:text-white transition-colors"
                aria-label="Close support widget"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Feed */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
              {/* Static Welcome Messages */}
              <div className="space-y-1 max-w-[85%]">
                <div className="bg-[#1A1A1A] border border-[#1F1F1F] text-zinc-100 rounded-2xl rounded-tl-none px-3.5 py-2.5 text-xs leading-relaxed">
                  Hi there 👋
                </div>
                <div className="bg-[#1A1A1A] border border-[#1F1F1F] text-zinc-100 rounded-2xl rounded-tl-none px-3.5 py-2.5 text-xs leading-relaxed">
                  Looking for information about OYEN GRID?
                </div>
              </div>

              {/* Quick Action Buttons */}
              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Book a Demo",
                    "Pricing",
                    "Features",
                    "Training Programs",
                    "Corporate Training",
                    "Contact Sales",
                  ].map((action) => (
                    <button
                      key={action}
                      onClick={() => handleQuickAction(action)}
                      className="px-3 py-1.5 rounded-full border border-[#1F1F1F] bg-[#161616] hover:bg-[#1A1A1A] hover:border-[#F5D76E]/50 text-zinc-300 hover:text-white text-xs font-medium transition-all"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}

              {/* Dynamic Conversation History */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-[#F5D76E] text-black font-medium rounded-tr-none"
                        : "bg-[#1A1A1A] border border-[#1F1F1F] text-zinc-100 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={feedEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue, "user");
              }}
              className="p-3 bg-[#161616] border-t border-[#1F1F1F] flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#F5D76E]/60 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 rounded-lg bg-[#1F1F1F] text-zinc-400 hover:text-white disabled:opacity-40 disabled:hover:text-zinc-400 transition-colors"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Footer */}
            <div className="bg-[#111111] py-1.5 border-t border-[#1F1F1F] text-center select-none shrink-0">
              <span className="text-[9px] font-semibold tracking-wider text-zinc-600 uppercase">
                Powered by OYEN GRID
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-[#111111] hover:bg-[#161616] border border-[#1F1F1F] hover:border-[#F5D76E]/40 text-[#F5D76E] flex items-center justify-center relative shadow-lg transition-all duration-200 group active:scale-95"
        aria-label="Toggle Support Widget"
      >
        <MessageSquare className="w-6 h-6 group-hover:scale-105 transition-transform" />
        {/* Online Indicator */}
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#111111] rounded-full" />
      </button>
    </div>
  );
}
