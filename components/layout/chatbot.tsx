"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  X, Send, Cpu, ShieldCheck, Activity, 
  Minus, Paperclip, Trash2, Command 
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
      content: "Institutional infrastructure is nominal. I am standing by for operational queries or system orchestration tasks.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setTimeout(() => {
      setIsTyping(false);
      const response: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: `Protocol acknowledged. Accessing requested infrastructure layer. Current system state: Optimal.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, response]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isVisible && (
          <div className="flex flex-col items-end">
            
            {/* OPERATIONAL ASSISTANT PANEL */}
            {isOpen && !isMinimized && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95, transformOrigin: "bottom right" }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                className="w-[400px] h-[640px] bg-[#07101F]/98 backdrop-blur-[40px] border border-white/10 rounded-[28px] shadow-[0_80px_160px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden mb-6"
              >
                {/* Mission Control Header */}
                <div className="p-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-white/10 grayscale">
                      <Image src="/exec-avatar-new.png" alt="Assistant" fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-white tracking-tight uppercase">Operational Assistant</div>
                      <div className="text-[9px] text-accent-gold font-black uppercase tracking-[0.2em] mt-1.5 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
                        Institutional Sync: L-04
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setIsMinimized(true)} className="w-9 h-9 rounded-full flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all">
                      <Minus className="w-4 h-4" />
                    </button>
                    <button onClick={() => setIsOpen(false)} className="w-9 h-9 rounded-full flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Intelligence Feed */}
                <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className="max-w-[85%] space-y-3">
                        <div className={`p-5 rounded-2xl text-[14.5px] leading-relaxed ${
                          msg.type === 'user' 
                          ? 'bg-accent-gold text-[#020617] font-bold rounded-tr-none' 
                          : 'bg-white/[0.03] border border-white/5 text-white/70 rounded-tl-none font-light'
                        }`}>
                          {msg.content}
                        </div>
                        <div className="text-[9px] font-black uppercase tracking-[0.3em] opacity-20">
                          {msg.timestamp} // SECURE NODE
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="p-4 rounded-2xl rounded-tl-none bg-white/[0.03] border border-white/5 flex gap-1.5 items-center">
                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Action Protocols */}
                <div className="px-8 pb-4 flex flex-wrap gap-2.5">
                  {[
                    { label: "Show Governance", icon: ShieldCheck },
                    { label: "Infrastructure Layer", icon: Cpu },
                    { label: "Live Telemetry", icon: Activity }
                  ].map((p, i) => (
                    <button key={i} onClick={() => handleSendMessage(p.label)} className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-white/30 hover:text-accent-gold hover:border-accent-gold/40 transition-all flex items-center gap-2.5 uppercase font-bold tracking-widest">
                      <p.icon className="w-3 h-3" /> {p.label}
                    </button>
                  ))}
                </div>

                {/* System Input */}
                <div className="p-8 pt-0">
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
                      placeholder="Input operational command..."
                      className="w-full bg-[#020617]/80 border border-white/5 rounded-2xl py-5 pl-6 pr-24 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-accent-gold/40 transition-all"
                    />
                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                       <button className="p-2.5 text-white/20 hover:text-white transition-colors">
                          <Paperclip className="w-4 h-4" />
                       </button>
                       <button onClick={() => handleSendMessage(input)} className="w-12 h-12 rounded-xl bg-accent-gold text-[#020617] flex items-center justify-center hover:scale-105 transition-all">
                          <Send className="w-4.5 h-4.5" />
                       </button>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between opacity-20">
                     <button onClick={() => setMessages(messages.slice(0, 1))} className="text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2 hover:text-white transition-colors">
                        <Trash2 className="w-3 h-3" /> Clear History
                     </button>
                     <div className="text-[9px] font-black uppercase tracking-[0.5em]">Institutional Intelligence v.04</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* OPERATIONAL DOCK BUTTON */}
            <motion.button
              onClick={() => {
                setIsOpen(true);
                setIsMinimized(false);
              }}
              whileHover={{ y: -3 }}
              className="bg-[#07101F]/90 backdrop-blur-2xl border border-white/10 rounded-full pl-3 pr-8 py-3 flex items-center gap-5 shadow-[0_40px_80px_rgba(0,0,0,0.5)] group hover:border-accent-gold/40 transition-all duration-500"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image src="/exec-avatar-new.png" alt="Assistant" fill className="object-cover" />
                <div className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#07101F] rounded-full" />
              </div>
              <div className="text-left">
                 <div className="text-[12px] font-bold text-white tracking-tight leading-none">Operational Assistant</div>
                 <div className="text-[9px] text-accent-gold font-black uppercase tracking-[0.2em] mt-1.5">System Ready</div>
              </div>
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
