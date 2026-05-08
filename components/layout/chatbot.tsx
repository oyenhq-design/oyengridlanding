"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  X, Send, Sparkles, Activity, ShieldCheck, Cpu, 
  ArrowRight, Minus, Paperclip, Mic, Copy, Trash2 
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: string;
}

export function Chatbot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content: "System infrastructure is nominal. I am your designated operational assistant. How can I facilitate your institutional coordination today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate Operational Response
    setTimeout(() => {
      setIsTyping(false);
      const response: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: `Acknowledged. Initializing ${content.toLowerCase()} protocol. System integrity confirmed. Current status: Operational.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, response]);
    }, 1500);
  };

  const quickActions = [
    { label: "Build Programme", icon: Cpu },
    { label: "View Governance", icon: ShieldCheck },
    { label: "Open Analytics", icon: Activity }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <AnimatePresence>
        {isVisible && (
          <div className="relative flex flex-col items-end">
            
            {/* CHAT PANEL */}
            {isOpen && !isMinimized && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: "bottom right" }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="w-[380px] h-[620px] bg-[#07101F]/95 backdrop-blur-[40px] border border-white/10 rounded-[28px] shadow-[0_80px_160px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden mb-6"
              >
                {/* Gold Top Border Accent */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D4A62A] to-transparent opacity-40" />

                {/* Header */}
                <div className="p-6 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-[#050816]">
                      <Image src="/exec-avatar-new.png" alt="Assistant" fill className="object-cover grayscale" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-white tracking-tight">OYEN GRID Assistant</div>
                      <div className="text-[10px] text-[#D4A62A] font-black uppercase tracking-[0.2em] mt-1 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A62A] animate-pulse shadow-[0_0_8px_#D4A62A]" />
                        Operational
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setIsMinimized(true)} className="w-8 h-8 rounded-full flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all">
                      <Minus className="w-4 h-4" />
                    </button>
                    <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Chat Feed */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className="max-w-[85%] space-y-2">
                        <div className={`p-4 rounded-2xl text-[14px] leading-relaxed ${
                          msg.type === 'user' 
                          ? 'bg-[#D4A62A] text-[#050816] font-medium rounded-tr-none' 
                          : 'bg-white/[0.03] border border-white/5 text-white/80 rounded-tl-none font-light'
                        }`}>
                          {msg.content}
                        </div>
                        <div className={`text-[9px] font-black uppercase tracking-widest ${msg.type === 'user' ? 'text-right opacity-30' : 'opacity-20'}`}>
                          {msg.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="p-4 rounded-2xl rounded-tl-none bg-white/[0.03] border border-white/5 flex gap-1 items-center">
                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1.5 h-1.5 rounded-full bg-[#D4A62A]" />
                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-[#D4A62A]" />
                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-[#D4A62A]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Suggested Quick Actions */}
                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action, i) => (
                      <button 
                        key={i}
                        onClick={() => handleSendMessage(action.label)}
                        className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[11px] text-white/40 hover:text-[#D4A62A] hover:border-[#D4A62A]/30 hover:bg-[#D4A62A]/5 transition-all flex items-center gap-2 group"
                      >
                        <action.icon className="w-3 h-3" />
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-6 pt-0">
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
                      placeholder="Input systemic query..."
                      className="w-full bg-[#050816]/60 border border-white/10 rounded-2xl py-4 pl-5 pr-24 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4A62A]/40 transition-all shadow-inner"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                      <button className="p-2 text-white/20 hover:text-white transition-colors">
                        <Paperclip className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleSendMessage(input)} className="w-10 h-10 rounded-xl bg-[#D4A62A] text-[#050816] flex items-center justify-center hover:scale-105 transition-all shadow-lg">
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-4">
                       <button onClick={() => setMessages(messages.slice(0, 1))} className="text-[10px] text-white/10 hover:text-white/30 transition-colors uppercase font-black tracking-widest flex items-center gap-2">
                         <Trash2 className="w-3 h-3" /> Clear Chat
                       </button>
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/10">L-04 Analyst Feed</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TRIGGER BUTTON */}
            <motion.button
              onClick={() => {
                setIsOpen(true);
                setIsMinimized(false);
              }}
              whileHover={{ y: -2 }}
              animate={{ 
                scale: isOpen && !isMinimized ? 0 : 1,
                boxShadow: ["0 0 0 0 rgba(212, 166, 42, 0)", "0 0 0 10px rgba(212, 166, 42, 0.1)", "0 0 0 0 rgba(212, 166, 42, 0)"]
              }}
              transition={{
                boxShadow: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative group w-[58px] h-[58px] rounded-full bg-[#07101F]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-visible"
            >
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border border-[#D4A62A]/20 group-hover:border-[#D4A62A] transition-colors duration-500">
                <Image src="/exec-avatar-new.png" alt="Assistant" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#050816] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              
              {/* Gold Ring Hover Effect */}
              <div className="absolute -inset-[2px] rounded-full border border-[#D4A62A] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
