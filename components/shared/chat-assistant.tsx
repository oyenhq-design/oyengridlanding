"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  X, 
  Minus, 
  Send, 
  Bot, 
  Sparkles, 
  ArrowRight,
  Shield,
  BarChart3,
  Users,
  Calendar
} from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const suggestedPrompts = [
  { text: "How does cohort orchestration work?", icon: Users },
  { text: "Explain analytics infrastructure", icon: BarChart3 },
  { text: "Show security features", icon: Shield },
  { text: "Compare pricing plans", icon: Sparkles },
  { text: "Book enterprise demo", icon: Calendar }
];

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Greetings. I am the OYEN AI Assistant. How can I assist you with your programme infrastructure and operational strategy today?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text?: string) => {
    const content = text || inputValue;
    if (!content.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content }];
    setMessages(newMessages);
    setInputValue("");

    // Simulate AI Response (Enterprise Tone)
    setTimeout(() => {
      let response = "I understand your inquiry. OYEN GRID provides a high-fidelity environment for exactly that. Would you like to see the documentation or speak with a strategic consultant?";
      
      if (content.toLowerCase().includes("cohort")) {
        response = "OYEN GRID enables structured multi-layer cohort orchestration with centralized analytics and progression tracking. Our infrastructure ensures absolute structural logic across global deployments.";
      } else if (content.toLowerCase().includes("security")) {
        response = "Security is our foundation. OYEN GRID is SOC2 Type II compliant and features E2E encryption, RBAC governance, and continuous global monitoring nodes.";
      } else if (content.toLowerCase().includes("analytics")) {
        response = "Our analytics infrastructure provides real-time operational intelligence, predictive health scoring, and high-fidelity performance velocity reporting.";
      }

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      
      {/* FLOATING BUTTON */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(245,179,1,0.3)] overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X className="w-6 h-6 text-black" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
            >
              <Bot className="w-6 h-6 text-black" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full border border-accent/50 animate-ping opacity-20 pointer-events-none" />
      </motion.button>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="absolute bottom-16 right-0 w-[360px] md:w-[400px] h-[600px] flex flex-col glass-card bg-[#050814]/98 border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl rounded-[24px] overflow-hidden"
          >
            {/* HEADER */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-b from-white/[0.03] to-transparent">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                   <Bot className="w-6 h-6 text-accent" />
                </div>
                <div>
                   <div className="font-bold text-white tracking-tight">OYEN AI Assistant</div>
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Active Intelligence</span>
                   </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                 <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors p-2">
                    <Minus className="w-5 h-5" />
                 </button>
              </div>
            </div>

            {/* BODY: MESSAGES */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[14px] leading-relaxed tracking-tight ${
                    msg.role === "user" 
                    ? "bg-accent/10 text-white border border-accent/20 rounded-tr-none" 
                    : "bg-white/[0.03] text-white/80 border border-white/5 rounded-tl-none"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />

              {/* SUGGESTED PROMPTS */}
              {messages.length === 1 && (
                <div className="pt-4 space-y-3">
                   <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-4">Suggested Actions</div>
                   {suggestedPrompts.map((prompt, i) => (
                     <button
                       key={i}
                       onClick={() => handleSend(prompt.text)}
                       className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent/30 hover:bg-white/[0.04] transition-all group text-left"
                     >
                       <div className="flex items-center gap-3">
                          <prompt.icon className="w-4 h-4 text-accent/40 group-hover:text-accent" />
                          <span className="text-[13px] text-white/60 group-hover:text-white transition-colors">{prompt.text}</span>
                       </div>
                       <ArrowRight className="w-3.5 h-3.5 text-white/0 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                     </button>
                   ))}
                </div>
              )}
            </div>

            {/* INPUT AREA */}
            <div className="p-6 border-t border-white/5 bg-white/[0.01]">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about operations, analytics, security..."
                  className="w-full h-12 bg-white/[0.03] border border-white/5 rounded-xl px-4 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-accent/40 transition-all"
                />
                <button
                  onClick={() => handleSend()}
                  className="absolute right-2 top-2 w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4 text-center">
                 <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Enterprise Intelligence Powered by OYEN</span>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
