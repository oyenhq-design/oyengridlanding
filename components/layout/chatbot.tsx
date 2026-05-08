"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  X, Send, Activity, ShieldCheck, Cpu, 
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
      content: "System infrastructure is nominal. I am the L-04 Assistant, designated for institutional operational oversight. How may I assist with your current coordination protocols?",
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

    // Contextual Logic
    setTimeout(() => {
      setIsTyping(false);
      let responseContent = `Acknowledged. Initializing ${content.toLowerCase()} protocol. System integrity confirmed.`;
      
      if (content.toLowerCase().includes("governance")) {
        responseContent = "Accessing Governance Architecture. I have identified the institutional compliance layers for your current programme structure. Navigating to Governance protocols.";
      } else if (content.toLowerCase().includes("infrastructure")) {
        responseContent = "Infrastructure layer protocols are active. 142 nodes are currently operational with 99.999% throughput.";
      }

      const response: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: responseContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, response]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] font-sans">
      <AnimatePresence>
        {isVisible && (
          <div className="relative flex flex-col items-end">
            
            {/* CHAT PANEL: Mission Control Style */}
            {isOpen && !isMinimized && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.98, transformOrigin: "bottom right" }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.98 }}
                className="w-[420px] h-[660px] bg-[#07101F]/98 backdrop-blur-[40px] border border-white/10 rounded-[32px] shadow-[0_80px_160px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden mb-8"
              >
                {/* Header: Institutional Context */}
                <div className="p-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 bg-[#030712]">
                      <Image src="/exec-avatar-new.png" alt="Assistant" fill className="object-cover grayscale" />
                    </div>
                    <div>
                      <div className="text-[16px] font-bold text-white tracking-tight">Executive Assistant</div>
                      <div className="text-[10px] text-[#d6a63c] font-black uppercase tracking-[0.3em] mt-1.5 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d6a63c] animate-pulse" />
                        Node L-04 Active
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setIsMinimized(true)} className="w-10 h-10 rounded-full flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all">
                      <Minus className="w-5 h-5" />
                    </button>
                    <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Intelligence Feed */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className="max-w-[85%] space-y-3">
                        <div className={`p-6 rounded-[24px] text-[15px] leading-relaxed ${
                          msg.type === 'user' 
                          ? 'bg-[#d6a63c] text-[#030712] font-bold rounded-tr-none' 
                          : 'bg-white/[0.03] border border-white/5 text-white/70 rounded-tl-none font-light'
                        }`}>
                          {msg.content}
                        </div>
                        <div className={`text-[10px] font-bold uppercase tracking-widest ${msg.type === 'user' ? 'text-right opacity-30' : 'opacity-20'}`}>
                          {msg.timestamp} // {msg.type === 'assistant' ? 'SECURE_NODE' : 'AUTH_USER'}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="p-6 rounded-[24px] rounded-tl-none bg-white/[0.03] border border-white/5 flex gap-1.5 items-center">
                        {[0, 1, 2].map((i) => (
                          <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }} className="w-1.5 h-1.5 rounded-full bg-[#d6a63c]" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Suggested Coordination Protocols */}
                <div className="px-8 pb-6 flex flex-wrap gap-3">
                  {["Show Governance", "Infrastructure Status", "Audit Logs"].map((action, i) => (
                    <button 
                      key={i}
                      onClick={() => handleSendMessage(action)}
                      className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-white/30 hover:text-[#d6a63c] hover:border-[#d6a63c]/30 hover:bg-[#d6a63c]/5 transition-all uppercase tracking-widest font-bold"
                    >
                      {action}
                    </button>
                  ))}
                </div>

                {/* System Input Area */}
                <div className="p-8 pt-0">
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
                      placeholder="Input coordinating protocol..."
                      className="w-full bg-[#030712]/60 border border-white/10 rounded-[20px] py-5 pl-6 pr-24 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:border-[#d6a63c]/40 transition-all shadow-inner"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      <button className="p-2 text-white/20 hover:text-white transition-colors">
                        <Paperclip className="w-5 h-5" />
                      </button>
                      <button onClick={() => handleSendMessage(input)} className="w-11 h-11 rounded-[14px] bg-[#d6a63c] text-[#030712] flex items-center justify-center hover:scale-105 transition-all shadow-lg">
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-5">
                    <button onClick={() => setMessages(messages.slice(0, 1))} className="text-[10px] text-white/10 hover:text-white/30 transition-colors uppercase font-black tracking-[0.3em] flex items-center gap-3">
                      <Trash2 className="w-3.5 h-3.5" /> Clear Feed
                    </button>
                    <div className="flex items-center gap-3">
                       <Command className="w-3 h-3 text-white/10" />
                       <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/10">L-04 Institutional Access</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* OPERATIONAL PRESENCE DOCK */}
            <motion.button
              onClick={() => {
                setIsOpen(true);
                setIsMinimized(false);
              }}
              whileHover={{ x: -10 }}
              animate={{ 
                x: isOpen && !isMinimized ? 100 : 0,
                opacity: isOpen && !isMinimized ? 0 : 1
              }}
              className="group flex items-center gap-6 pl-6 pr-4 py-4 bg-[#0E1728]/80 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#d6a63c]/40"
            >
              <div className="text-right">
                 <div className="text-[12px] font-bold text-white tracking-tight">Executive Assistant</div>
                 <div className="text-[9px] text-[#d6a63c] font-bold uppercase tracking-[0.3em] mt-0.5">Operational</div>
              </div>
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#d6a63c]/30 group-hover:border-[#d6a63c] transition-all duration-500">
                <Image src="/exec-avatar-new.png" alt="Assistant" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#0E1728] rounded-full" />
              </div>
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
