"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
  Calendar,
  Zap,
  Globe,
  Database,
  RefreshCcw,
  Copy,
  Check,
  Maximize2,
  Terminal,
  Activity,
  Cpu,
  Workflow,
  LayoutGrid
} from "lucide-react";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: Date;
}

const suggestedPrompts = [
  { text: "How does cohort orchestration work?", icon: Users, category: "Operations" },
  { text: "Explain analytics infrastructure", icon: BarChart3, category: "Data" },
  { text: "Show governance features", icon: Shield, category: "Security" },
  { text: "How does operational reporting work?", icon: Activity, category: "Insights" },
  { text: "Explain participant lifecycle management", icon: LayoutGrid, category: "Operations" },
  { text: "What security systems exist?", icon: Lock, category: "Security" },
  { text: "Show automation capabilities", icon: Workflow, category: "Automation" },
  { text: "Explain enterprise onboarding", icon: Building2, category: "Solutions" },
  { text: "Compare plans", icon: Sparkles, category: "Pricing" },
  { text: "Show platform architecture", icon: Network, category: "Infrastructure" }
];

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [greetingComplete, setGreetingComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
    await new Promise(r => setTimeout(r, 1000));
    const welcomeText = "Welcome to OYEN GRID Intelligence. I am your operational assistant for large-scale programme infrastructure. I can help you understand cohort orchestration, analytics velocity, governance logic, and global delivery systems. How can I assist your team today?";
    
    // Simple simulated streaming
    let currentText = "";
    const words = welcomeText.split(" ");
    for (const word of words) {
      currentText += word + " ";
      // We don't actually update state for every word to avoid jitter, but we simulate the time
      await new Promise(r => setTimeout(r, 40));
    }

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

    // Simulate AI Intelligence (Multi-step reasoning simulation)
    await new Promise(r => setTimeout(r, 1500));

    let response = "I understand your request for information regarding OYEN GRID's operational capabilities. Our infrastructure is designed for high-fidelity execution across global cohorts. Would you like a detailed breakdown of the structural logic or a live dashboard demonstration?";

    const query = content.toLowerCase();
    if (query.includes("cohort")) {
      response = "OYEN GRID enables structured multi-layer cohort orchestration. Our system manages participant progression, module sequencing, and real-time attendance tracking with absolute structural logic. This ensures governance even across distributed regional deployments.";
    } else if (query.includes("security") || query.includes("governance")) {
      response = "Governance is embedded at the infrastructure layer. We provide SOC2 Type II compliance, E2E encryption for all participant assets, and granular Role-Based Access Control (RBAC) with immutable audit trails for every structural change.";
    } else if (query.includes("analytics") || query.includes("reporting")) {
      response = "Our analytics infrastructure provides high-fidelity operational intelligence. This includes predictive health scoring for cohorts, engagement velocity metrics, and automated ROI reporting across your entire programme ecosystem.";
    } else if (query.includes("automation")) {
      response = "OYEN GRID's automation engine allows you to build complex operational triggers. You can automate certifications, performance-based progression, and multi-channel notifications to reduce administrative overhead by up to 60%.";
    } else if (query.includes("pricing") || query.includes("plans")) {
      response = "We offer tiered enterprise deployment options. From our 'Programme OS' for single high-fidelity bootcamps to our 'Infrastructure' tier for global university-scale orchestration. Our strategic consultants can provide a custom ROI breakdown for your specific volume.";
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
      
      {/* LAUNCHER BUTTON */}
      <AnimatePresence>
        {(!isOpen || isMinimized) && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => { setIsOpen(true); setIsMinimized(false); }}
            className="group relative w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,179,1,0.3)] hover:shadow-[0_0_40px_rgba(245,179,1,0.5)] transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Bot className="w-8 h-8 text-black relative z-10" />
            
            {/* Intelligent Pulse */}
            <div className="absolute inset-0 rounded-full border border-accent/40 animate-ping opacity-30" />
            
            {/* Notification Badge (Simulated) */}
            <div className="absolute top-0 right-0 w-5 h-5 bg-white border-2 border-accent rounded-full flex items-center justify-center">
               <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* MAIN CHAT INTERFACE */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-[380px] md:w-[420px] h-[75vh] max-h-[800px] flex flex-col glass-card bg-[#050A19]/98 border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8),0_0_30px_rgba(245,179,1,0.05)] backdrop-blur-[32px] rounded-[28px] overflow-hidden"
          >
            {/* HEADER */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center relative">
                   <Bot className="w-6.5 h-6.5 text-accent" />
                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#050A19] rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                   </div>
                </div>
                <div>
                   <div className="font-bold text-white tracking-tight flex items-center gap-2">
                     OYEN AI Assistant
                     <Sparkles className="w-3 h-3 text-accent" />
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Active Intelligence</span>
                   </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                 <button onClick={() => setIsMinimized(true)} className="p-2 text-white/20 hover:text-white transition-colors">
                    <Minus className="w-5 h-5" />
                 </button>
                 <button onClick={() => setIsOpen(false)} className="p-2 text-white/20 hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                 </button>
              </div>
            </div>

            {/* BODY: MESSAGES */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
              {messages.length === 0 && isTyping && (
                <div className="flex items-center gap-3 text-white/20 font-black text-[10px] uppercase tracking-widest animate-pulse">
                   <Terminal className="w-4 h-4" /> Initializing Core Logic...
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div className={`max-w-[85%] p-5 rounded-2xl text-[14.5px] leading-relaxed tracking-tight group relative ${
                    msg.role === "user" 
                    ? "bg-accent/10 text-white border border-accent/20 rounded-tr-none shadow-[0_0_20px_rgba(245,179,1,0.05)]" 
                    : "bg-white/[0.03] text-white/80 border border-white/5 rounded-tl-none"
                  }`}>
                    {msg.content}
                    
                    {/* Message Actions */}
                    {msg.role === "assistant" && (
                       <div className="absolute top-[-25px] right-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => copyToClipboard(msg.content, msg.id)}
                            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all"
                          >
                             {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                          <button 
                            onClick={() => handleSend(messages[messages.indexOf(msg) - 1]?.content)}
                            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all"
                          >
                             <RefreshCcw className="w-3.5 h-3.5" />
                          </button>
                       </div>
                    )}
                  </div>
                  <span className="text-[9px] font-black text-white/10 uppercase tracking-widest mt-2 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </motion.div>
              ))}

              {isTyping && messages.length > 0 && (
                <div className="flex items-start gap-3">
                   <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-bounce" />
                   </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />

              {/* SMART SUGGESTIONS */}
              {greetingComplete && messages.length === 1 && (
                <div className="pt-4 grid grid-cols-1 gap-3">
                   <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-3 px-1">Intelligent Actions</div>
                   <div className="flex flex-wrap gap-2">
                     {suggestedPrompts.map((prompt, i) => (
                       <button
                         key={i}
                         onClick={() => handleSend(prompt.text)}
                         className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.02] border border-white/5 hover:border-accent/40 hover:bg-white/[0.05] transition-all group"
                       >
                          <prompt.icon className="w-3.5 h-3.5 text-accent/40 group-hover:text-accent transition-colors" />
                          <span className="text-[12.5px] text-white/60 group-hover:text-white transition-colors">{prompt.text}</span>
                       </button>
                     ))}
                   </div>
                </div>
              )}
            </div>

            {/* INPUT AREA */}
            <div className="p-6 border-t border-white/5 bg-white/[0.01]">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity" />
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
                    placeholder="Ask about operations, analytics, governance..."
                    className="w-full h-14 bg-[#050A19] border border-white/10 rounded-2xl pl-5 pr-14 text-[14.5px] text-white placeholder:text-white/20 focus:outline-none focus:border-accent/40 transition-all shadow-inner"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={!inputValue.trim() || isTyping}
                    className="absolute right-2.5 w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-black hover:scale-105 active:scale-95 disabled:opacity-30 disabled:scale-100 transition-all shadow-[0_0_15px_rgba(245,179,1,0.3)]"
                  >
                    <Send className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between px-2">
                 <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                       <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-white/20 font-bold">↵</kbd>
                       <span className="text-[9px] text-white/10 font-bold uppercase tracking-widest">SEND</span>
                    </div>
                    <div className="flex items-center gap-1">
                       <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-white/20 font-bold">⇧</kbd>
                       <span className="text-[9px] text-white/10 font-bold uppercase tracking-widest">NEW LINE</span>
                    </div>
                 </div>
                 <span className="text-[9px] font-black text-white/10 uppercase tracking-widest">v4.2.0-STABLE</span>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

function Lock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function Building2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function Network(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}
