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
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [greetingComplete, setGreetingComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const avatarUrl = "/oyen_ai_assistant_avatar_female.png";

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
    const welcomeText = "Good day. I am your OYEN Intelligence concierge. I specialize in programme infrastructure and operational logic at global scale. Whether you are orchestrating complex cohorts or auditing delivery data, I am here to ensure absolute structural clarity. How may I assist your strategy today?";
    
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

    await new Promise(r => setTimeout(r, 1500));

    let response = "I have analyzed your request against our operational framework. OYEN GRID provides the foundational infrastructure for such requirements. Would you like me to detail the specific governance protocols or the analytics velocity associated with this?";

    const query = content.toLowerCase();
    if (query.includes("cohort")) {
      response = "Our cohort orchestration engine is designed for absolute structural integrity. It enforces prerequisite logic and progression rules across every regional node, ensuring a unified delivery standard regardless of scale.";
    } else if (query.includes("security") || query.includes("governance")) {
      response = "Security is the bedrock of OYEN GRID. We implement immutable audit trails, multi-layer encryption, and SOC2-compliant governance to protect high-stakes programme data and intellectual property.";
    } else if (query.includes("analytics") || query.includes("reporting")) {
      response = "The analytics layer provides high-fidelity operational intelligence. We track engagement velocity and predictive health scoring, allowing your team to identify and mitigate risks before they impact programme outcomes.";
    } else if (query.includes("automation")) {
      response = "Automation in OYEN GRID is about eliminating administrative friction. From automated grading to intelligent session sequencing, our engine handles the logistics so your strategists can focus on delivery.";
    } else if (query.includes("pricing") || query.includes("plans")) {
      response = "We tailor our infrastructure to your delivery volume. From dedicated 'Programme OS' environments to global 'Enterprise Grid' deployments, our solutions are optimized for high-fidelity ROI at scale.";
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
      
      {/* LAUNCHER BUTTON: CINEMATIC AVATAR */}
      <AnimatePresence>
        {(!isOpen || isMinimized) && (
          <div className="relative flex flex-col items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={isHovered ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 20 }}
              className="mb-4 mr-2 py-3 px-5 rounded-2xl glass-card bg-[#050A19]/90 border-accent/20 backdrop-blur-xl shadow-2xl pointer-events-none"
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
              className="group relative w-16 h-16 rounded-full flex items-center justify-center p-0.5 transition-all duration-500"
            >
              {/* Outer Luxury Glow */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Gold Ring */}
              <div className="absolute inset-0 rounded-full border border-accent/30 group-hover:border-accent group-hover:scale-105 transition-all duration-500" />
              
              {/* Avatar Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#050A19] shadow-2xl z-10">
                <img 
                  src={avatarUrl} 
                  alt="AI Assistant" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-40 group-hover:opacity-0 transition-opacity" />
              </div>

              {/* Online Indicator */}
              <div className="absolute bottom-0 right-0 w-4.5 h-4.5 bg-[#050A19] rounded-full flex items-center justify-center z-20 shadow-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
              </div>

              {/* Breathing Glow Pulse */}
              <div className="absolute inset-[-4px] rounded-full border border-accent/10 animate-[pulse_4s_infinite] opacity-30" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* MAIN CHAT INTERFACE */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-[380px] md:w-[420px] h-[75vh] max-h-[800px] flex flex-col glass-card bg-[#050A19]/98 border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8),0_0_30px_rgba(212,166,42,0.05)] backdrop-blur-[32px] rounded-[28px] overflow-hidden"
          >
            {/* HEADER */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border border-accent/30 relative shadow-[0_0_15px_rgba(212,166,42,0.15)] bg-black">
                   <img src={avatarUrl} alt="OYEN AI" className="w-full h-full object-cover" />
                   <div className="absolute top-0 right-0 p-0.5 bg-[#050A19] rounded-bl-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
                   </div>
                </div>
                <div>
                   <div className="font-bold text-white tracking-tight flex items-center gap-2">
                     OYEN AI Assistant
                     <Sparkles className="w-3 h-3 text-accent" />
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Operational Intelligence</span>
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
            <div className="flex-1 overflow-y-auto p-6 space-y-10 scrollbar-hide">
              {messages.length === 0 && isTyping && (
                <div className="flex items-center gap-3 text-white/20 font-black text-[10px] uppercase tracking-[0.4em] animate-pulse">
                   <Activity className="w-4 h-4" /> Initializing Strategy Logic...
                </div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div className={`max-w-[88%] p-6 rounded-[24px] text-[14px] leading-relaxed tracking-tight group relative ${
                    msg.role === "user" 
                    ? "bg-accent/10 text-white border border-accent/20 rounded-tr-none shadow-[0_0_20px_rgba(212,166,42,0.05)]" 
                    : "bg-white/[0.03] text-white/80 border border-white/5 rounded-tl-none font-light"
                  }`}>
                    {msg.content}
                    
                    {msg.role === "assistant" && (
                       <div className="absolute top-[-28px] right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => copyToClipboard(msg.content, msg.id)}
                            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all"
                          >
                             {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                       </div>
                    )}
                  </div>
                  <span className="text-[8px] font-black text-white/10 uppercase tracking-[0.4em] mt-3 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </motion.div>
              ))}

              {isTyping && messages.length > 0 && (
                <div className="flex items-start gap-3">
                   <div className="py-4 px-6 rounded-2xl bg-white/[0.03] border border-white/5 flex gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent/60 animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1 h-1 rounded-full bg-accent/60 animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1 h-1 rounded-full bg-accent/60 animate-bounce" />
                   </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />

              {/* SMART SUGGESTIONS */}
              {greetingComplete && messages.length === 1 && (
                <div className="pt-6 space-y-4">
                   <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] px-1">Strategic Discovery</div>
                   <div className="grid grid-cols-1 gap-2.5">
                     {suggestedPrompts.slice(0, 4).map((prompt, i) => (
                       <button
                         key={i}
                         onClick={() => handleSend(prompt.text)}
                         className="flex items-center justify-between px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/40 hover:bg-white/[0.04] transition-all group text-left"
                       >
                          <div className="flex items-center gap-4">
                             <prompt.icon className="w-4 h-4 text-accent/30 group-hover:text-accent transition-colors" />
                             <span className="text-[13.5px] text-white/60 group-hover:text-white transition-colors">{prompt.text}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                       </button>
                     ))}
                   </div>
                </div>
              )}
            </div>

            {/* INPUT AREA */}
            <div className="p-8 border-t border-white/5 bg-white/[0.01]">
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
                    placeholder="Inquire about operational strategy..."
                    className="w-full h-14 bg-[#050A19] border border-white/10 rounded-2xl pl-6 pr-14 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-accent/40 transition-all"
                  />
                  <button
                    onClick={() => handleSend()}
                    disabled={!inputValue.trim() || isTyping}
                    className="absolute right-2.5 w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-black hover:scale-105 active:scale-95 disabled:opacity-30 disabled:scale-100 transition-all shadow-[0_0_15px_rgba(212,166,42,0.4)]"
                  >
                    <Send className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between px-1">
                 <div className="flex items-center gap-3">
                    <span className="text-[9px] text-white/10 font-bold uppercase tracking-[0.3em]">Operational Intelligence Advisory</span>
                 </div>
                 <span className="text-[8px] font-black text-white/10 uppercase tracking-widest opacity-40">OYEN v4.5</span>
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
