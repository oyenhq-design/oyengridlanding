"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ArrowLeft, RefreshCw, Sparkles, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  options?: string[]; // Buttons displayed below the message
  bullets?: string[]; // Bullet points in the message
}

export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isQuestionMode, setIsQuestionMode] = useState(false);
  const feedEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of the feed when new messages are added
  useEffect(() => {
    feedEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Set initial welcome state when widget is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      resetChat();
    }
  }, [isOpen]);

  const resetChat = () => {
    setIsQuestionMode(false);
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: "Hi there 👋 Looking for information about OYEN GRID? Choose an option below to get started:",
      }
    ]);
  };

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
      setTimeout(() => {
        handleBotResponse(text);
      }, 500);
    }
  };

  const handleQuickAction = (action: string) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: Math.random().toString(36).substring(7),
      sender: "user",
      text: action,
    };
    setMessages((prev) => [...prev, userMsg]);

    // Handle bot response based on chosen option
    setTimeout(() => {
      let botMsg: ChatMessage;

      switch (action) {
        case "Book a Demo":
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "Great.\n\nWould you like a personalized walkthrough of OYEN GRID?\n\nOur team can show you:",
            bullets: [
              "Program Management",
              "Learner Tracking",
              "Attendance Monitoring",
              "Reporting & Analytics",
              "AI Coordination Tools"
            ],
            options: ["Schedule Demo", "See Pricing"]
          };
          break;

        case "See Pricing":
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "OYEN GRID offers flexible pricing for organizations of different sizes.\n\nChoose an option below:",
            options: ["View Pricing Plans", "Contact Sales"]
          };
          break;

        case "Explore Features":
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "OYEN GRID helps organizations manage training programs from start to finish.\n\nKey features include:",
            bullets: [
              "Program Management",
              "Learner Tracking",
              "Attendance Tracking",
              "Team Collaboration",
              "Reports & Analytics",
              "AI Session Notes",
              "Automated Alerts",
              "Cohort Management"
            ],
            options: ["View All Features"]
          };
          break;

        case "How It Works":
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "Running a training program with OYEN GRID is simple.\n\n1. Create a training program.\n2. Add learners and facilitators.\n3. Track attendance and engagement.\n4. Generate reports automatically.\n5. Use AI tools to save administrative time.",
            options: ["Platform Overview"]
          };
          break;

        case "Talk to Sales":
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "Our team can help you find the right setup for your organization.\n\nWhat best describes you?",
            options: ["Corporate Training", "NGO Program", "School / Education", "Government Program", "Other"]
          };
          break;

        case "Ask a Question":
          setIsQuestionMode(true);
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "Go ahead — type your question below, or pick one of the suggested topics."
          };
          break;

        // Sales Selection responses
        case "Corporate Training":
        case "NGO Program":
        case "School / Education":
        case "Government Program":
        case "Other":
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: `Thank you! An accounts representative specializing in ${action} setups will contact you shortly. Please schedule a call via "Schedule Demo" if you wish to book a calendar slot directly.`,
            options: ["Schedule Demo", "Back to Menu"]
          };
          break;

        // Redirect / Navigation confirmations
        case "Schedule Demo":
          window.open("/company/enterprise-sales", "_blank");
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "We have opened the sales consultation calendar in a new tab. Please select a time slot that works best for you.",
            options: ["Back to Menu"]
          };
          break;

        case "View Pricing Plans":
          window.open("/pricing", "_blank");
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "Pricing catalog opened! Feel free to ask if you have custom billing questions.",
            options: ["Contact Sales", "Back to Menu"]
          };
          break;

        case "View All Features":
          window.open("/features/programme-management", "_blank");
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "Features catalog opened! What feature interests you most?",
            options: ["Back to Menu"]
          };
          break;

        case "Platform Overview":
          window.open("/company/about", "_blank");
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "Platform details page opened. Let me know if you would like to test the features with a demo.",
            options: ["Book a Demo", "Back to Menu"]
          };
          break;

        case "Contact Sales":
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "Our sales team is ready to assist. Please pick your organization type:",
            options: ["Corporate Training", "NGO Program", "School / Education", "Government Program", "Other"]
          };
          break;

        case "Contact Support":
          window.open("/resources/help", "_blank");
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "Help Center opened in a new window. You can search documentation or create a ticket there.",
            options: ["Back to Menu"]
          };
          break;

        case "Back to Menu":
          setIsQuestionMode(false);
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "How else can OYEN GRID help you today?",
          };
          break;

        default:
          botMsg = {
            id: Math.random().toString(36).substring(7),
            sender: "bot",
            text: "I didn't recognize that action. Would you like to go back to the main menu?",
            options: ["Back to Menu"]
          };
      }

      setMessages((prev) => [...prev, botMsg]);
    }, 450);
  };

  const handleBotResponse = (userText: string) => {
    const query = userText.toLowerCase().trim();
    let reply = "";
    let options: string[] = [];

    // Question answering logic matching specified fields
    if (query.includes("attendance") || query.includes("track")) {
      reply = "Yes! OYEN GRID provides automatic attendance tracking, intelligent session monitoring, and real-time learner engagement analytics.";
    } else if (query.includes("how many learners") || query.includes("limit") || query.includes("number of learners") || query.includes("scale")) {
      reply = "OYEN GRID is designed to scale with your organization. You can manage anywhere from small cohorts of 10 to large-scale programs with thousands of learners.";
    } else if (query.includes("cohort") || query.includes("cohorts")) {
      reply = "Absolutely. OYEN GRID has native support for cohort-based courses, enabling separate progress tracking, specific schedules, and designated facilitators for each cohort.";
    } else if (query.includes("report") || query.includes("reports") || query.includes("analytics")) {
      reply = "Yes, you can generate automated progress reports, attendance sheets, and facilitated feedback graphs. Reports are exportable in CSV and PDF formats.";
    } else if (query.includes("trainers") || query.includes("collaborate") || query.includes("facilitators") || query.includes("multiple trainers")) {
      reply = "Yes! Multiple trainers, facilitators, and coordinators can access the platform to collaborate, manage their designated cohorts, and input evaluations.";
    } else if (query.includes("ai session notes") || query.includes("ai session") || query.includes("notes") || query.includes("ai assistant")) {
      reply = "OYEN GRID features AI-driven session analytics that automatically summarize chat dialogues, highlight action points, and extract attendance logs from live calls.";
    } else if (query.includes("pricing") || query.includes("cost") || query.includes("plans") || query.includes("how much")) {
      reply = "OYEN GRID offers tiered subscription plans starting from ₦15,000/month. Standard and Custom Enterprise tiers are available for bigger teams.";
      options = ["View Pricing Plans", "Contact Sales"];
    } else if (query.includes("features") || query.includes("what can it do")) {
      reply = "Key features include program management, learner tracking, attendance tracking, team collaboration, reports & analytics, AI session notes, automated alerts, and cohort management.";
      options = ["View All Features"];
    } else if (query.includes("platform") || query.includes("what is oyen grid") || query.includes("about")) {
      reply = "OYEN GRID is the operating system for training delivery. It allows organizations to program, coordinate, and review training programs in a single control center.";
      options = ["Platform Overview"];
    } else if (query.includes("administration") || query.includes("admin")) {
      reply = "Our admin dashboard provides high visibility over session scheduling, roster management, trainer assignments, and program compliance logs.";
    } else {
      reply = "I’m not sure about that.\n\nWould you like to speak with our team?";
      options = ["Contact Support"];
    }

    const botMsg: ChatMessage = {
      id: Math.random().toString(36).substring(7),
      sender: "bot",
      text: reply,
      options: options.length > 0 ? options : undefined
    };

    setMessages((prev) => [...prev, botMsg]);
  };

  const suggestedQuestions = [
    "Can I track attendance?",
    "How many learners can I manage?",
    "Does OYEN GRID support cohorts?",
    "Can I generate reports?",
    "Can multiple trainers collaborate?",
    "How do AI Session Notes work?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans antialiased text-white selection:bg-[#FFC72C]/30">
      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[360px] h-[550px] flex flex-col bg-[#0B0B0B] border border-[#222222] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-[#161616] border-b border-[#222222] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFC72C] animate-pulse" />
                <span className="font-bold text-sm text-[#FFC72C] tracking-wide uppercase">OYEN GRID Agent</span>
              </div>
              <div className="flex items-center gap-1.5">
                {(messages.length > 1 || isQuestionMode) && (
                  <button
                    onClick={resetChat}
                    className="p-1.5 rounded hover:bg-[#222222] text-zinc-400 hover:text-white transition-colors"
                    title="Reset conversation"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded hover:bg-[#222222] text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close support widget"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Feed */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  {/* Message bubble */}
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-md whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-[#FFC72C] text-black font-semibold rounded-tr-none"
                        : "bg-[#161616] border border-[#222222] text-zinc-100 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                    {msg.bullets && (
                      <ul className="mt-2.5 space-y-1.5 list-none pl-0">
                        {msg.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-zinc-300">
                            <span className="text-[#FFC72C]">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Inline options buttons (only show for the latest bot message options) */}
                  {msg.options && messages[messages.length - 1].id === msg.id && (
                    <div className="flex flex-wrap gap-2 mt-3 max-w-[90%]">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleQuickAction(opt)}
                          className="px-3.5 py-2 rounded-xl border border-[#222222] bg-[#161616] hover:bg-[#FFC72C] hover:text-black hover:border-[#FFC72C] text-zinc-300 text-[11px] font-bold tracking-wide uppercase transition-all duration-200 shadow-md active:scale-95"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Main Menu Choices (only display when at welcome screen) */}
              {messages.length === 1 && (
                <div className="flex flex-col gap-2 pt-2 max-w-[85%]">
                  {[
                    "Book a Demo",
                    "See Pricing",
                    "Explore Features",
                    "How It Works",
                    "Talk to Sales",
                    "Ask a Question"
                  ].map((action) => (
                    <button
                      key={action}
                      onClick={() => handleQuickAction(action)}
                      className="w-full text-left px-4 py-3 rounded-xl border border-[#222222] bg-[#161616] hover:border-[#FFC72C] hover:bg-[#FFC72C]/5 text-zinc-200 hover:text-white text-xs font-semibold transition-all duration-200 flex items-center justify-between group active:scale-98"
                    >
                      <span>{action}</span>
                      <span className="text-[#FFC72C] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </button>
                  ))}
                </div>
              )}
              <div ref={feedEndRef} />
            </div>

            {/* Suggested Questions Section (shows above message input when in question mode) */}
            {isQuestionMode && (
              <div className="px-4 py-2 border-t border-[#222222] bg-[#0E0E0E]">
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <HelpCircle className="w-3 h-3 text-[#FFC72C]" /> Suggested Questions
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-[85px] overflow-y-auto scrollbar-none pb-1">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q, "user")}
                      className="text-[10px] bg-[#161616] hover:bg-[#222222] border border-[#222222] text-zinc-300 hover:text-white px-2.5 py-1 rounded-lg transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message Input Area */}
            <div className="p-3 bg-[#161616] border-t border-[#222222]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (isQuestionMode && inputValue.trim()) {
                    handleSend(inputValue, "user");
                  }
                }}
                className="relative flex items-center bg-[#0B0B0B] border border-[#222222] focus-within:border-[#FFC72C]/50 rounded-2xl px-3 py-2.5 transition-all"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={!isQuestionMode}
                  placeholder={isQuestionMode ? "Type your message..." : "Select 'Ask a Question' to type..."}
                  className="flex-1 bg-transparent text-xs text-white placeholder-zinc-600 focus:outline-none disabled:cursor-not-allowed pr-8"
                />
                <button
                  type="submit"
                  disabled={!isQuestionMode || !inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-xl bg-[#222222] text-zinc-400 enabled:hover:bg-[#FFC72C] enabled:hover:text-black disabled:opacity-30 transition-all active:scale-90"
                  aria-label="Send message"
                >
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>

            {/* Footer Text */}
            <div className="bg-[#0B0B0B] py-2.5 border-t border-[#222222] text-center select-none shrink-0 flex flex-col gap-0.5">
              <span className="text-[9px] font-bold tracking-wider text-zinc-500 uppercase">
                Need help? Contact our team.
              </span>
              <span className="text-[8px] text-zinc-600">
                Typical response time: under 1 business day.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-[#0B0B0B] hover:bg-[#161616] border border-[#222222] hover:border-[#FFC72C]/40 text-[#FFC72C] flex items-center justify-center relative shadow-2xl transition-all duration-200 group active:scale-95"
        aria-label="Toggle Support Widget"
      >
        <MessageSquare className="w-6 h-6 group-hover:scale-105 transition-transform" />
        {/* Online Indicator */}
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0B0B0B] rounded-full" />
      </button>
    </div>
  );
}

