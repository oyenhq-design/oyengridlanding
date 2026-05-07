"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Minus, 
  Send, 
  Sparkles, 
  ArrowRight,
  Shield,
  BarChart3,
  Users,
  Activity,
  Cpu,
  Workflow,
  LayoutGrid,
  Copy,
  Check,
  Building2,
  Lock,
  Network
} from "lucide-react";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: Date;
}

const suggestedPrompts = [
  { text: "Analyze cohort orchestration architecture", icon: Users, category: "Operations" },
  { text: "Review data governance protocols", icon: Shield, category: "Security" },
  { text: "Examine operational intelligence layers", icon: Activity, category: "Insights" },
  { text: "Discuss global infrastructure scaling", icon: Network, category: "Infrastructure" }
];

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [greetingComplete, setGreetingComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const avatarUrl = "/assistant-avatar.png";

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startGreeting();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const startGreeting = async () => {
    setIsTyping(true);
    await new Promise(r => setTimeout(r, 1200));
    const welcomeText = "Welcome to OYEN GRID. I am your Operational Intelligence Concierge. I specialize in the structural orchestration of complex enterprise programmes and global delivery logic. Whether you are auditing governance frameworks or scaling multi-region cohort infrastructure, I am here to provide strategic clarity. How shall we begin our consultation?";
    
    setMessages([{
      id: "greeting",
      role: "assistant",
      content: welcomeText,
      timestamp: new Date()
    }]);
    setIsTyping(false);
    setGreetingComplete(true);
  };

  const handleSend = async (text?: string) => {
    const content = text || inputValue;
    if (!content.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    await new Promise(r => setTimeout(r, 1800));

    let response = "I have cross-referenced your inquiry with our operational framework. OYEN GRID provides the foundational infrastructure required for this strategic requirement. Shall I elaborate on the governance protocols or the performance metrics associated with this configuration?";

    const query = content.toLowerCase();
    if (query.includes("cohort")) {
      response = "Our cohort orchestration engine is engineered for absolute structural integrity. It enforces rigid progression logic and multi-tier governance across your entire delivery network, ensuring a unified enterprise standard at every node.";
    } else if (query.includes("security") || query.includes("governance")) {
      response = "Security is integrated into the core architecture of OYEN GRID. We utilize immutable audit logging, institutional-grade encryption, and granular RBAC to ensure that your programme data remains structurally sound and secure.";
    } else if (query.includes("analytics") || query.includes("intelligence") || query.includes("insights")) {
      response = "The intelligence layer provides high-fidelity visibility into every operational node. We utilize predictive health scoring and engagement velocity tracking to identify risks and optimize programme outcomes in real-time.";
    } else if (query.includes("automation") || query.includes("scaling")) {
      response = "Automation in OYEN GRID is designed to eliminate administrative fatigue. From automated session sequencing to intelligent outcome validation, our infrastructure handles the logistics while you focus on strategic delivery.";
    }

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-inter">
      
      {/* LAUNCHER: PREMIUM AI CONCIERGE */}
      <AnimatePresence>
        {(!isOpen || isMinimized) && (
          <div className="relative flex flex-col items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={isHovered ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 10 }}
              className="mb-4 mr-2 py-3 px-5 rounded-2xl glass-card bg-[#050A19]/95 border-accent/30 backdrop-blur-2xl shadow-2xl pointer-events-none border border-white/5"
            >
              <div className="text-white font-bold text-[13px] tracking-tight mb-0.5">OYEN AI Assistant</div>
              <div className="text-accent text-[9px] font-black uppercase tracking-[0.2em] opacity-80">Operational Intelligence Online</div>
            </motion.div>

            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => { setIsOpen(true); setIsMinimized(false); }}
              className="group relative w-[68px] h-[68px] rounded-full flex items-center justify-center p-0.5 transition-all duration-700 ease-out hover:scale-110"
            >
              {/* Luxury Ambient Glow */}
              <div className="absolute inset-[-12px] rounded-full bg-accent/10 blur-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Soft Gold Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 via-transparent to-accent/20 animate-spin-slow opacity-40" />
              
              {/* Main Avatar Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#050A19] shadow-[0_12px_40px_rgba(0,0,0,0.8)] z-10 border border-white/10 group-hover:border-accent/40 transition-colors duration-500">
                <img 
                  src={avatarUrl} 
                  alt="AI Concierge" 
                  className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 group-hover:scale-115 transition-all duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A19]/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-1 right-1 w-5 h-5 bg-[#050A19] rounded-full flex items-center justify-center z-20 shadow-xl border border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-[0_0_12px_#22c55e] animate-pulse" />
              </div>

              {/* Breathing Interaction Pulse */}
              <div className="absolute inset-[-6px] rounded-full border border-accent/20 animate-[pulse_5s_infinite] opacity-40" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* PREMIUM CONCIERGE PANEL */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: -20, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(10px)" }}
            className="absolute bottom-16 right-0 w-[400px] md:w-[440px] h-[78vh] max-h-[850px] flex flex-col glass-card bg-[#050A19]/98 border-white/10 shadow-[0_50px_120px_rgba(0,0,0,0.9),0_0_40px_rgba(212,166,42,0.08)] backdrop-blur-[40px] rounded-[32px] overflow-hidden"
          >
            {/* CONCIERGE HEADER */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-gradient-to-b from-white/[0.04] to-transparent">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-accent/30 shadow-[0_0_20px_rgba(212,166,42,0.2)] bg-black">
                     <img src={avatarUrl} alt="OYEN AI" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#050A19] rounded-full flex items-center justify-center border border-white/5">
                     <div className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
                  </div>
                </div>
                <div>
                   <div className="font-bold text-white text-[17px] tracking-tight flex items-center gap-2">
                     AI Concierge
                     <div className="w-1 h-1 rounded-full bg-accent" />
                     <Sparkles className="w-3.5 h-3.5 text-accent opacity-80" />
                   </div>
                   <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mt-1">
                     Operational Strategy Advisor
                   </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                 <button onClick={() => setIsMinimized(true)} className="p-2.5 text-white/20 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                    <Minus className="w-5 h-5" />
                 </button>
                 <button onClick={() => setIsOpen(false)} className="p-2.5 text-white/20 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                    <X className="w-5 h-5" />
                 </button>
              </div>
            </div>

            {/* CONVERSATION STREAM */}
            <div className="flex-1 overflow-y-auto p-8 space-y-12 scrollbar-hide">
              {messages.length === 0 && isTyping && (
                <div className="flex items-center gap-4 text-white/20 font-black text-[10px] uppercase tracking-[0.5em] animate-pulse">
                   <Activity className="w-4 h-4 text-accent/40" /> Initializing Strategy Logic...
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div className={`max-w-[92%] p-7 rounded-[28px] text-[15px] leading-[1.6] tracking-tight group relative ${
                    msg.role === "user" 
                    ? "bg-accent/10 text-white border border-accent/20 rounded-tr-none shadow-[0_15px_30px_rgba(212,166,42,0.06)]" 
                    : "bg-white/[0.03] text-white/80 border border-white/5 rounded-tl-none font-light backdrop-blur-sm"
                  }`}>
                    {msg.content}
                    
                    {msg.role === "assistant" && (
                       <div className="absolute top-[-32px] right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <button 
                            onClick={() => copyToClipboard(msg.content, msg.id)}
                            className="p-2 rounded-xl bg-black/40 border border-white/10 text-white/40 hover:text-white hover:border-accent/40 transition-all"
                          >
                             {copiedId === msg.id ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
                          </button>
                       </div>
                    )}
                  </div>
                  <span className="text-[9px] font-black text-white/10 uppercase tracking-[0.4em] mt-4 px-2">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </motion.div>
              ))}

              {isTyping && messages.length > 0 && (
                <div className="flex items-start">
                   <div className="py-5 px-8 rounded-full bg-white/[0.03] border border-white/5 flex gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-bounce" />
                   </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />

              {/* STRATEGIC SUGGESTIONS */}
              {greetingComplete && messages.length === 1 && (
                <div className="pt-8 space-y-6">
                   <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] px-2 flex items-center gap-3">
                      <div className="w-10 h-px bg-white/5" />
                      Strategic Consultation
                      <div className="w-10 h-px bg-white/5" />
                   </div>
                   <div className="grid grid-cols-1 gap-3">
                     {suggestedPrompts.map((prompt, i) => (
                       <button
                         key={i}
                         onClick={() => handleSend(prompt.text)}
                         className="flex items-center justify-between px-6 py-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-accent/30 hover:bg-white/[0.03] transition-all group text-left"
                       >
                          <div className="flex items-center gap-5">
                             <prompt.icon className="w-4.5 h-4.5 text-accent/20 group-hover:text-accent transition-all duration-500" />
                             <span className="text-[14px] text-white/50 group-hover:text-white transition-colors">{prompt.text}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-accent group-hover:translate-x-1.5 transition-all" />
                       </button>
                     ))}
                   </div>
                </div>
              )}
            </div>

            {/* ADVISORY INPUT AREA */}
            <div className="p-10 border-t border-white/5 bg-gradient-to-t from-white/[0.02] to-transparent">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-transparent rounded-[20px] blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-700" />
                <div className="relative flex items-center">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder="Enter strategic inquiry..."
                    className="w-full h-16 bg-black/40 border border-white/10 rounded-2xl pl-7 pr-16 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:border-accent/30 transition-all duration-500"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={!inputValue.trim() || isTyping}
                    className="absolute right-3 w-11 h-11 rounded-xl bg-accent flex items-center justify-center text-black hover:scale-105 active:scale-95 disabled:opacity-20 disabled:scale-100 transition-all duration-300 shadow-[0_0_25px_rgba(212,166,42,0.4)]"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between px-2">
                 <div className="flex items-center gap-3">
                    <span className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em]">Institutional Intelligence Layer</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent/40" />
                    <span className="text-[9px] font-black text-white/10 uppercase tracking-widest">v4.8 STRATEGIST</span>
                 </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
