"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  RefreshCw,
  HelpCircle,
  ChevronRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { matchIntent } from "@/lib/chatbot-knowledge";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  options?: string[];
  bullets?: string[];
  followUpText?: string;
  followUpTopics?: string[];
  showLeadForm?: boolean;
}

interface LeadData {
  name: string;
  email: string;
  org: string;
  phone: string;
  message: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const MAIN_MENU_ACTIONS = [
  "Book a Demo",
  "See Pricing",
  "Explore Features",
  "How It Works",
  "Talk to Sales",
  "Ask a Question",
];

const SUGGESTED_QUESTIONS = [
  "Can I track attendance?",
  "How many learners can I manage?",
  "Does OYEN GRID support cohorts?",
  "Can I generate reports?",
  "Can multiple trainers collaborate?",
  "How do AI Session Notes work?",
];

const EMPTY_LEAD: LeadData = {
  name: "",
  email: "",
  org: "",
  phone: "",
  message: "",
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isQuestionMode, setIsQuestionMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [leadData, setLeadData] = useState<LeadData>(EMPTY_LEAD);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const feedEndRef = useRef<HTMLDivElement>(null);

  // ── Auto-scroll ─────────────────────────────────────────────────────────
  useEffect(() => {
    feedEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // ── Init on open ────────────────────────────────────────────────────────
  useEffect(() => {
    if (isOpen && messages.length === 0) resetChat();
  }, [isOpen]);

  // ─────────────────────────────────────────────────────────────────────────
  // Helpers
  // ─────────────────────────────────────────────────────────────────────────

  const uid = () => Math.random().toString(36).substring(7);

  const resetChat = () => {
    setIsQuestionMode(false);
    setLeadData(EMPTY_LEAD);
    setLeadSubmitted(false);
    setIsTyping(false);
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: "Hi there 👋 Looking for information about OYEN GRID? Choose an option below to get started:",
      },
    ]);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: uid(), sender: "user", text },
    ]);
  };

  const addBotMessage = (msg: Omit<ChatMessage, "id" | "sender">) => {
    setMessages((prev) => [
      ...prev,
      { id: uid(), sender: "bot", ...msg },
    ]);
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Natural language engine (KB lookup)
  // ─────────────────────────────────────────────────────────────────────────

  const processNaturalLanguage = (query: string) => {
    const result = matchIntent(query);

    // Out-of-scope
    if (result.outOfScope) {
      addBotMessage({
        text: "I'm designed to help with OYEN GRID and training operations.",
        options: ["Explore Features", "Book a Demo", "Contact Support"],
      });
      return;
    }

    // No KB match → low-confidence fallback with lead form
    if (result.confidence === 0 || !result.intent) {
      addBotMessage({
        text: "I may not have the right information for that yet.\n\nOur team can help with more specific questions.\n\nWould you like us to get back to you?",
        options: ["Yes, contact me", "Back to Menu"],
        showLeadForm: false,
      });
      return;
    }

    const { intent } = result;
    addBotMessage({
      text: intent.response,
      bullets: intent.bullets,
      followUpText: intent.followUpText,
      options: intent.ctaButtons,
      followUpTopics: intent.followUpTopics,
    });
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Button / quick-action handler
  // ─────────────────────────────────────────────────────────────────────────

  const handleQuickAction = (action: string) => {
    addUserMessage(action);

    setTimeout(() => {
      let botMsg: Omit<ChatMessage, "id" | "sender">;

      switch (action) {
        // ── Main menu flows ──────────────────────────────────────────────
        case "Book a Demo":
          botMsg = {
            text: "Great.\n\nWould you like a personalized walkthrough of OYEN GRID?\n\nOur team can show you:",
            bullets: [
              "Program Management",
              "Learner Tracking",
              "Attendance Monitoring",
              "Reporting & Analytics",
              "AI Coordination Tools",
            ],
            options: ["Schedule Demo", "See Pricing"],
          };
          break;

        case "See Pricing":
          botMsg = {
            text: "OYEN GRID offers flexible pricing for organizations of different sizes.\n\nChoose an option below:",
            options: ["View Pricing Plans", "Contact Sales"],
          };
          break;

        case "Explore Features":
          botMsg = {
            text: "OYEN GRID helps organizations manage training programs from start to finish.\n\nKey features include:",
            bullets: [
              "Program Management",
              "Learner Tracking",
              "Attendance Tracking",
              "Team Collaboration",
              "Reports & Analytics",
              "AI Session Notes",
              "Automated Alerts",
              "Cohort Management",
            ],
            options: ["View All Features"],
          };
          break;

        case "How It Works":
          botMsg = {
            text: "Running a training program with OYEN GRID is simple.\n\n1. Create a training program.\n2. Add learners and facilitators.\n3. Track attendance and engagement.\n4. Generate reports automatically.\n5. Use AI tools to save administrative time.",
            options: ["Platform Overview"],
          };
          break;

        case "Talk to Sales":
          botMsg = {
            text: "Our team can help you find the right setup for your organization.\n\nWhat best describes you?",
            options: [
              "Corporate Training",
              "NGO Program",
              "School / Education",
              "Government Program",
              "Other",
            ],
          };
          break;

        case "Ask a Question":
          setIsQuestionMode(true);
          botMsg = {
            text: "Go ahead — type your question below, or pick one of the suggested topics.",
          };
          break;

        // ── Sales org-type selection ─────────────────────────────────────
        case "Corporate Training":
        case "NGO Program":
        case "School / Education":
        case "Government Program":
        case "Other":
          botMsg = {
            text: `Thank you! A representative specializing in ${action} setups will follow up shortly. You can also schedule a call directly by clicking below.`,
            options: ["Schedule Demo", "Back to Menu"],
          };
          break;

        // ── Yes, contact me → show lead form ────────────────────────────
        case "Yes, contact me":
          botMsg = {
            text: "Please share your details and we'll get back to you promptly.",
            showLeadForm: true,
          };
          break;

        // ── Navigation / redirect actions ────────────────────────────────
        case "Schedule Demo":
          window.open("/company/enterprise-sales", "_blank");
          botMsg = {
            text: "We've opened the scheduling calendar in a new tab. Select a time that works for you.",
            options: ["Back to Menu"],
          };
          break;

        case "View Pricing Plans":
          window.open("/pricing", "_blank");
          botMsg = {
            text: "Pricing page opened. Feel free to ask if you have questions about any plan.",
            options: ["Contact Sales", "Back to Menu"],
          };
          break;

        case "View All Features":
          window.open("/features/programme-management", "_blank");
          botMsg = {
            text: "Features page opened. Which feature are you most interested in?",
            followUpTopics: [
              "AI Session Notes",
              "Attendance Tracking",
              "Cohort Management",
              "Reporting & Analytics",
            ],
            options: ["Back to Menu"],
          };
          break;

        case "Platform Overview":
          window.open("/company/about", "_blank");
          botMsg = {
            text: "Platform details page opened. Let us know if you'd like a live walkthrough.",
            options: ["Book a Demo", "Back to Menu"],
          };
          break;

        case "Contact Sales":
          botMsg = {
            text: "Our sales team is ready to assist. What type of organization are you?",
            options: [
              "Corporate Training",
              "NGO Program",
              "School / Education",
              "Government Program",
              "Other",
            ],
          };
          break;

        case "Contact Support":
          window.open("/resources/help", "_blank");
          botMsg = {
            text: "Help Center opened. You can search documentation or raise a support ticket there.",
            options: ["Back to Menu"],
          };
          break;

        case "Back to Menu":
          setIsQuestionMode(false);
          botMsg = {
            text: "How else can OYEN GRID help you today?",
          };
          break;

        default:
          // Unknown action → treat as natural-language input via KB
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            processNaturalLanguage(action);
          }, 500);
          return;
      }

      addBotMessage(botMsg);
    }, 450);
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Follow-up topic chip handler
  // ─────────────────────────────────────────────────────────────────────────

  const handleFollowUpTopic = (topic: string) => {
    setIsQuestionMode(true);
    addUserMessage(topic);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      processNaturalLanguage(topic);
    }, 600);
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Free-text send handler
  // ─────────────────────────────────────────────────────────────────────────

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text || !isQuestionMode) return;
    addUserMessage(text);
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      processNaturalLanguage(text);
    }, 650);
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Lead form submit
  // ─────────────────────────────────────────────────────────────────────────

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: POST to CRM / contact pipeline
    console.log("[OYEN GRID Lead]", leadData);
    setLeadSubmitted(true);
    setTimeout(() => {
      addBotMessage({
        text: "Thank you. A member of our team will reach out shortly.",
        options: ["Back to Menu"],
      });
    }, 400);
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Render helpers
  // ─────────────────────────────────────────────────────────────────────────

  const isLastBotMsg = (id: string) =>
    messages.filter((m) => m.sender === "bot").slice(-1)[0]?.id === id;

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans antialiased text-white selection:bg-[#FFC72C]/30">
      {/* ── Chat Panel ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[370px] h-[580px] flex flex-col bg-[#0B0B0B] border border-[#222222] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-[#111111] border-b border-[#222222] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#FFC72C]/10 border border-[#FFC72C]/20 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFC72C]" />
                </div>
                <div>
                  <p className="font-bold text-[11px] text-[#FFC72C] tracking-widest uppercase leading-none">
                    OYEN GRID
                  </p>
                  <p className="text-[9px] text-zinc-500 mt-0.5 leading-none">
                    Sales & Support Assistant
                  </p>
                </div>
                <span className="ml-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] text-emerald-400 font-medium">
                    Online
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 1 && (
                  <button
                    onClick={resetChat}
                    className="p-1.5 rounded-lg hover:bg-[#222222] text-zinc-500 hover:text-zinc-300 transition-colors"
                    title="Start over"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-[#222222] text-zinc-500 hover:text-zinc-300 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  {/* Bubble */}
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[12px] leading-relaxed shadow whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-[#FFC72C] text-black font-semibold rounded-tr-sm"
                        : "bg-[#161616] border border-[#252525] text-zinc-200 rounded-tl-sm"
                    }`}
                  >
                    {msg.text}

                    {/* Bullets */}
                    {msg.bullets && (
                      <ul className="mt-2.5 space-y-1.5 list-none pl-0">
                        {msg.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-1.5 text-zinc-300"
                          >
                            <span className="text-[#FFC72C] mt-px shrink-0">
                              •
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Follow-up text inside bubble */}
                    {msg.followUpText && (
                      <p className="mt-2.5 text-[11px] text-zinc-400 italic border-t border-white/5 pt-2">
                        {msg.followUpText}
                      </p>
                    )}
                  </div>

                  {/* CTA Buttons — only on last bot message */}
                  {msg.options && isLastBotMsg(msg.id) && (
                    <div className="flex flex-wrap gap-2 mt-2.5 max-w-[92%]">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleQuickAction(opt)}
                          className="px-3 py-2 rounded-xl border border-[#2a2a2a] bg-[#161616] hover:bg-[#FFC72C] hover:text-black hover:border-[#FFC72C] text-zinc-300 text-[10px] font-bold tracking-wide uppercase transition-all duration-200 shadow active:scale-95"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Follow-up Topic Chips — only on last bot message */}
                  {msg.followUpTopics &&
                    msg.followUpTopics.length > 0 &&
                    isLastBotMsg(msg.id) && (
                      <div className="mt-2.5 max-w-[94%]">
                        <p className="text-[9px] text-zinc-600 uppercase tracking-wider mb-1.5 font-semibold">
                          Related Topics
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {msg.followUpTopics.map((topic) => (
                            <button
                              key={topic}
                              onClick={() => handleFollowUpTopic(topic)}
                              className="flex items-center gap-1 text-[10px] bg-transparent border border-[#2a2a2a] text-zinc-400 hover:text-[#FFC72C] hover:border-[#FFC72C]/40 px-2.5 py-1 rounded-full transition-all duration-150"
                            >
                              {topic}
                              <ChevronRight className="w-2.5 h-2.5" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Inline Lead Form */}
                  {msg.showLeadForm && (
                    <div className="mt-3 w-full max-w-[96%]">
                      {!leadSubmitted ? (
                        <form
                          onSubmit={handleLeadSubmit}
                          className="bg-[#111111] border border-[#252525] rounded-xl p-4 space-y-2.5"
                        >
                          <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold mb-1">
                            Your Details
                          </p>
                          {/* Name */}
                          <input
                            required
                            type="text"
                            placeholder="Full Name *"
                            value={leadData.name}
                            onChange={(e) =>
                              setLeadData((p) => ({
                                ...p,
                                name: e.target.value,
                              }))
                            }
                            className="w-full bg-[#0B0B0B] border border-[#2a2a2a] focus:border-[#FFC72C]/50 rounded-lg px-3 py-2 text-[11px] text-white placeholder-zinc-600 focus:outline-none transition-colors"
                          />
                          {/* Email */}
                          <input
                            required
                            type="email"
                            placeholder="Email Address *"
                            value={leadData.email}
                            onChange={(e) =>
                              setLeadData((p) => ({
                                ...p,
                                email: e.target.value,
                              }))
                            }
                            className="w-full bg-[#0B0B0B] border border-[#2a2a2a] focus:border-[#FFC72C]/50 rounded-lg px-3 py-2 text-[11px] text-white placeholder-zinc-600 focus:outline-none transition-colors"
                          />
                          {/* Organization */}
                          <input
                            required
                            type="text"
                            placeholder="Organization *"
                            value={leadData.org}
                            onChange={(e) =>
                              setLeadData((p) => ({
                                ...p,
                                org: e.target.value,
                              }))
                            }
                            className="w-full bg-[#0B0B0B] border border-[#2a2a2a] focus:border-[#FFC72C]/50 rounded-lg px-3 py-2 text-[11px] text-white placeholder-zinc-600 focus:outline-none transition-colors"
                          />
                          {/* Phone */}
                          <input
                            type="tel"
                            placeholder="Phone Number (optional)"
                            value={leadData.phone}
                            onChange={(e) =>
                              setLeadData((p) => ({
                                ...p,
                                phone: e.target.value,
                              }))
                            }
                            className="w-full bg-[#0B0B0B] border border-[#2a2a2a] focus:border-[#FFC72C]/50 rounded-lg px-3 py-2 text-[11px] text-white placeholder-zinc-600 focus:outline-none transition-colors"
                          />
                          {/* Message */}
                          <textarea
                            required
                            rows={3}
                            placeholder="Your message / question *"
                            value={leadData.message}
                            onChange={(e) =>
                              setLeadData((p) => ({
                                ...p,
                                message: e.target.value,
                              }))
                            }
                            className="w-full bg-[#0B0B0B] border border-[#2a2a2a] focus:border-[#FFC72C]/50 rounded-lg px-3 py-2 text-[11px] text-white placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                          />
                          <button
                            type="submit"
                            className="w-full py-2.5 rounded-lg bg-[#FFC72C] hover:bg-[#FFD84D] text-black text-[11px] font-bold tracking-wide uppercase transition-all active:scale-[0.98]"
                          >
                            Send Message
                          </button>
                        </form>
                      ) : (
                        <div className="flex items-center gap-2.5 bg-emerald-900/20 border border-emerald-800/50 rounded-xl p-3.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <p className="text-[11px] text-emerald-300">
                            Thank you. A member of our team will reach out shortly.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Main Menu Choices (welcome screen only) */}
              {messages.length === 1 && (
                <div className="flex flex-col gap-2 pt-1 max-w-[88%]">
                  {MAIN_MENU_ACTIONS.map((action) => (
                    <button
                      key={action}
                      onClick={() => handleQuickAction(action)}
                      className="w-full text-left px-4 py-3 rounded-xl border border-[#222222] bg-[#141414] hover:border-[#FFC72C]/50 hover:bg-[#FFC72C]/5 text-zinc-200 hover:text-white text-[11px] font-semibold transition-all duration-200 flex items-center justify-between group"
                    >
                      <span>{action}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#FFC72C] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start">
                  <div className="bg-[#161616] border border-[#252525] rounded-2xl rounded-tl-sm px-4 py-3 shadow">
                    <div className="flex gap-1.5 items-center">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={feedEndRef} />
            </div>

            {/* Suggested Questions — shown in question mode */}
            {isQuestionMode && (
              <div className="px-4 pt-2.5 pb-1.5 border-t border-[#1a1a1a] bg-[#0E0E0E] shrink-0">
                <div className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                  <HelpCircle className="w-2.5 h-2.5 text-[#FFC72C]" />
                  Suggested Questions
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-[72px] overflow-y-auto scrollbar-none">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleFollowUpTopic(q)}
                      className="text-[10px] bg-[#141414] hover:bg-[#1e1e1e] border border-[#222222] text-zinc-400 hover:text-white px-2.5 py-1 rounded-lg transition-colors text-left leading-snug"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message Input */}
            <div className="p-3 bg-[#111111] border-t border-[#1a1a1a] shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative flex items-center bg-[#0B0B0B] border border-[#222222] focus-within:border-[#FFC72C]/40 rounded-2xl px-3.5 py-2.5 transition-all"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  disabled={!isQuestionMode}
                  placeholder={
                    isQuestionMode
                      ? "Type your message..."
                      : "Select 'Ask a Question' to type..."
                  }
                  className="flex-1 bg-transparent text-[12px] text-white placeholder-zinc-600 focus:outline-none disabled:cursor-not-allowed pr-8"
                />
                <button
                  type="submit"
                  disabled={!isQuestionMode || !inputValue.trim()}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-xl bg-[#1e1e1e] text-zinc-500 enabled:hover:bg-[#FFC72C] enabled:hover:text-black disabled:opacity-25 transition-all duration-150 active:scale-90"
                  aria-label="Send message"
                >
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>

            {/* Footer */}
            <div className="bg-[#0B0B0B] py-2 border-t border-[#1a1a1a] text-center select-none shrink-0 flex flex-col gap-0.5">
              <span className="text-[9px] font-semibold tracking-wider text-zinc-600 uppercase">
                Need help? Contact our team.
              </span>
              <span className="text-[8px] text-zinc-700">
                Typical response time: under 1 business day.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Launcher Button ─────────────────────────────────────────────── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-[#0B0B0B] hover:bg-[#141414] border border-[#272727] hover:border-[#FFC72C]/40 text-[#FFC72C] flex items-center justify-center relative shadow-2xl transition-all duration-200 group active:scale-95"
        aria-label="Toggle Support Widget"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare className="w-5 h-5 group-hover:scale-105 transition-transform" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Online dot */}
        <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 border-2 border-[#0B0B0B] rounded-full" />
      </button>
    </div>
  );
}
