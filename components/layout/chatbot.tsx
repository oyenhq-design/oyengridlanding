"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, BarChart3, UserCheck, Workflow, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "assistant",
      content: "Good evening. I'm OYEN AI, your institutional copilot. How can I assist with your delivery infrastructure today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    { label: "Generate operational report", icon: BarChart3, query: "Generate operational report" },
    { label: "Track participant progress", icon: UserCheck, query: "Track participant progress" },
    { label: "Create programme workflow", icon: Workflow, query: "Create programme workflow" },
    { label: "Analyze delivery metrics", icon: Database, query: "Analyze delivery metrics" }
  ];

  // Auto-scroll to bottom of message feed
  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getAIResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes("price") || q.includes("pricing") || q.includes("cost")) {
      return "OYEN GRID offers customized enterprise licensing and tier-based structures tailored to your institutional cohort size. Reach out to our solutions desk for a detailed agreement proposal.";
    }
    if (q.includes("solution") || q.includes("bootcamp") || q.includes("training") || q.includes("cohort")) {
      return "Our core solutions span Bootcamp & Training delivery, Cohort Management, Certifications & Learning Resources, and Live Sync/Cohort Telemetry. Head to our Solutions page for details.";
    }
    if (q.includes("company") || q.includes("about") || q.includes("team")) {
      return "OYEN GRID develops infrastructure for modern institutional execution. We specialize in high-scale cohort operations, live sync engines, and automated program workflows.";
    }
    if (q.includes("report") || q.includes("track") || q.includes("progress") || q.includes("workflow") || q.includes("metrics") || q.includes("create")) {
      return `Operational action triggered: "${query}". I will aggregate real-time telemetry from your cohorts and compile the results. Let me know if you want to export this dataset.`;
    }
    return "Understood. I can help you query details on pricing, company profiles, solutions, or simulate operational commands. Try typing 'solutions' or clicking one of the suggested actions.";
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Math.random().toString(36).substring(7),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Math.random().toString(36).substring(7),
        role: "assistant",
        content: getAIResponse(text),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-6 w-[360px] bg-[#0A0A0B]/95 backdrop-blur-[60px] border border-brand-gold/10 rounded-[32px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden border border-brand-gold/20 shadow-[0_0_20px_rgba(245,185,66,0.1)]">
                    <Image src="/oyen-ai-avatar.png" alt="OYEN AI" width={48} height={48} className="object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0A0A0B]" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-white tracking-tight">OYEN AI</div>
                  <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.15em]">Institutional Copilot</div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/10 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Feed */}
            <div 
              ref={feedRef}
              className="p-6 h-[380px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex flex-col gap-1 max-w-[85%] rounded-2xl p-4 text-[13px] leading-relaxed font-light border transition-all",
                    msg.role === "assistant"
                      ? "bg-white/[0.03] border-white/5 text-white/70 self-start"
                      : "bg-brand-gold/5 border-brand-gold/20 text-brand-gold self-end ml-auto"
                  )}
                >
                  <p>{msg.content}</p>
                </div>
              ))}

              {isTyping && (
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 max-w-[85%] text-[13px] text-white/40 self-start flex items-center gap-1.5 font-light">
                  <span className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              )}

              {/* Quick Actions - Only show initially or when conversational context is clear */}
              {messages.length === 1 && !isTyping && (
                <div className="pt-4">
                  <div className="text-[9px] font-black text-white/10 uppercase tracking-[0.2em] mb-4">Suggested Actions</div>
                  <div className="grid grid-cols-1 gap-2">
                     {quickActions.map((action, i) => (
                       <button 
                         key={i} 
                         onClick={() => handleSend(action.query)}
                         className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all text-left group"
                       >
                         <action.icon className="w-3.5 h-3.5 text-white/20 group-hover:text-brand-gold transition-colors" />
                         <span className="text-[11px] font-bold text-white/40 group-hover:text-white transition-colors">{action.label}</span>
                       </button>
                     ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-6 bg-white/[0.01] border-t border-white/5"
            >
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Send operational command..."
                  className="w-full h-12 bg-white/[0.03] border border-white/5 rounded-xl px-5 pr-12 text-[13px] text-white placeholder:text-white/10 focus:outline-none focus:border-brand-gold/40 transition-all font-light"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className={cn(
                    "absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center text-black shadow-lg transition-all",
                    input.trim()
                      ? "bg-brand-gold hover:scale-105 opacity-100"
                      : "bg-white/5 text-white/20 opacity-50 cursor-not-allowed"
                  )}
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ 
          boxShadow: [
            "0 10px 30px rgba(0,0,0,0.5), 0 0 0px rgba(245,185,66,0)",
            "0 15px 35px rgba(0,0,0,0.6), 0 0 15px rgba(245,185,66,0.1)",
            "0 10px 30px rgba(0,0,0,0.5), 0 0 0px rgba(245,185,66,0)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group relative overflow-hidden",
          isOpen 
            ? "bg-white/[0.03] border border-white/10 text-white" 
            : "bg-[#0A0A0B] border border-brand-gold/30 text-white shadow-[0_0_20px_rgba(245,185,66,0.05)]"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-gold/20">
              <Image src="/oyen-ai-avatar.png" alt="OYEN AI" width={40} height={40} className="object-cover" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0A0A0B]" />
          </div>
        )}
      </motion.button>
    </div>
  );
}
