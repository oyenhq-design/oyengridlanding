"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, RotateCcw, Home, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  widget?: "demo" | "sales" | "waitlist" | "pricing-select" | "recommendation" | "success";
  widgetData?: any;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);

  // States for interactive recommendation wizard
  const [recStep, setRecStep] = useState(0);
  const [recAnswers, setRecAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    // Reset chat on mount or custom trigger
    resetChat();
  }, []);

  // Auto-scroll to bottom of message feed
  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [messages, isTyping, recStep]);

  const resetChat = () => {
    setMessages([
      {
        id: "init",
        role: "assistant",
        content: "👋 Welcome to OYEN GRID\n\nI'm your OYEN AI Assistant. I can help you explore solutions, understand pricing, discover platform features, and find the right setup for your organization.\n\nHow can we help today?",
        timestamp: new Date(),
      },
    ]);
    setRecStep(0);
    setRecAnswers({});
    setInput("");
  };

  const getKnowledgeResponse = (query: string): { content: string; widget?: Message["widget"] } => {
    const q = query.toLowerCase();

    // Direct Flow triggers
    if (q.includes("pricing") || q.includes("plan") || q.includes("cost") || q.includes("fee")) {
      return {
        content: "I'd be glad to walk you through our pricing. Which solution are you interested in?",
        widget: "pricing-select"
      };
    }
    if (q.includes("demo") || q.includes("schedule") || q.includes("book")) {
      return {
        content: "I'd be happy to help you schedule a demo. Please fill in the details below to request a live session with our solutions engineer:",
        widget: "demo"
      };
    }
    if (q.includes("sales") || q.includes("custom") || q.includes("white label") || q.includes("api") || q.includes("integration") || q.includes("enterprise")) {
      return {
        content: "For enterprise capabilities, custom API architectures, and white-labeled deployments, let's connect you with our Enterprise Sales team. Please share your coordinates:",
        widget: "sales"
      };
    }
    if (q.includes("waitlist") || q.includes("early access")) {
      return {
        content: "Enterprise Operations is currently in development. Would you like to join the waitlist and receive updates when early access becomes available?",
        widget: "waitlist"
      };
    }
    if (q.includes("recommend") || q.includes("choose") || q.includes("find") || q.includes("which plan") || q.includes("what is the best")) {
      return {
        content: "Let's run through our quick solutions diagnostic to recommend the perfect setup for your organization.",
        widget: "recommendation"
      };
    }

    // Knowledge Base responses
    if (q.includes("platform") || q.includes("feature") || q.includes("capabilities") || q.includes("what does")) {
      return {
        content: "OYEN GRID is a Programme Operating System replacing fragmented tools (WhatsApp, Zoom, Drive, Sheets, Email) with unified modules:\n\n• **Programme Management**: Dashboards, Analytics, Health Tracking.\n• **Participant Management**: Registration, Profiles, Engagement Tracking.\n• **OYEN Live**: Video/audio rooms, Screen sharing, Session recordings.\n• **Attendance Intelligence**: Automatic tracking & participation reports.\n• **Assessments & Certificates**: Dynamic quizzes, assignment grading, and automated certified credentials distribution."
      };
    }

    if (q.includes("live") || q.includes("video") || q.includes("audio")) {
      return {
        content: "Our **OYEN Live** engine facilitates secure video & audio conferences, active screen sharing, and live text chats. It automatically captures attendance and engagement metrics directly, feeding reports straight to your program dashboard."
      };
    }

    if (q.includes("attendance") || q.includes("track")) {
      return {
        content: "With **Attendance Intelligence**, the platform automatically captures participant presence, time spent, and engagement during sessions. No manual sheets required."
      };
    }

    if (q.includes("cert") || q.includes("certificate") || q.includes("credential")) {
      return {
        content: "OYEN GRID streamlines certification. Design templates, automatically issue verification links upon course/attendance completion, and distribute secure certificates to participants."
      };
    }

    if (q.includes("bootcamp") || q.includes("training") || q.includes("fellowship")) {
      return {
        content: "**Bootcamps & Training Solution**:\nOptimized for intensive cohorts, vocational training, and fellowships. Pricing plans:\n\n• **Basic**: ₦25,000/month\n• **Standard**: ₦50,000/month\n• **Premium**: ₦100,000/month\n• **Premium+**: Custom Enterprise Sales\n\nWould you like to book a demo or select this plan?"
      };
    }

    if (q.includes("webinar") || q.includes("event")) {
      return {
        content: "**Webinars & Events Solution**:\nOptimized for one-off workshops, massive online conferences, and virtual events. Pricing plans:\n\n• **Basic**: ₦15,000/month\n• **Standard**: ₦35,000/month\n• **Premium**: ₦75,000/month\n• **Premium+**: Contact Sales\n\nWould you like to speak to our sales representative?"
      };
    }

    if (q.includes("education") || q.includes("university") || q.includes("school") || q.includes("college")) {
      return {
        content: "**Education & Institutions Solution**:\nCustomized for academies, high schools, universities, and technical learning centers. Pricing plans:\n\n• **Basic**: ₦35,000/month\n• **Standard**: ₦75,000/month\n• **Premium**: ₦150,000/month\n• **Premium+**: Contact Sales"
      };
    }

    // Default Fallback
    return {
      content: "I couldn't find a precise answer for that. How would you like to proceed?",
      widget: "success" // This acts as our fallback menu helper
    };
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
      const result = getKnowledgeResponse(text);
      const botMsg: Message = {
        id: Math.random().toString(36).substring(7),
        role: "assistant",
        content: result.content,
        timestamp: new Date(),
        widget: result.widget,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  const selectPricingOption = (option: string) => {
    const userMsg: Message = {
      id: Math.random().toString(36).substring(7),
      role: "user",
      content: `I'm interested in ${option}`,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let content = "";
      let widget: Message["widget"] = undefined;
      if (option.includes("Bootcamp")) {
        content = "Here is the pricing structure for **Bootcamps & Training**:\n\n• **Basic**: ₦25,000/month\n• **Standard**: ₦50,000/month\n• **Premium**: ₦100,000/month\n• **Premium+**: Talk to Sales";
      } else if (option.includes("Webinar")) {
        content = "Here is the pricing structure for **Webinars & Events**:\n\n• **Basic**: ₦15,000/month\n• **Standard**: ₦35,000/month\n• **Premium**: ₦75,000/month\n• **Premium+**: Talk to Sales";
      } else if (option.includes("Education")) {
        content = "Here is the pricing structure for **Education & Institutions**:\n\n• **Basic**: ₦35,000/month\n• **Standard**: ₦75,000/month\n• **Premium**: ₦150,000/month\n• **Premium+**: Talk to Sales";
      } else {
        content = "Enterprise Operations is currently in development. Would you like to join the waitlist for updates?";
        widget = "waitlist";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(7),
          role: "assistant",
          content,
          timestamp: new Date(),
          widget
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleRecommendationAnswer = (answer: string) => {
    const steps = [
      "What type of organization are you?",
      "How many participants do you manage?",
      "Do you require attendance tracking?",
      "Do you issue certificates?"
    ];

    const currentStepName = steps[recStep];
    const updatedAnswers = { ...recAnswers, [currentStepName]: answer };
    setRecAnswers(updatedAnswers);

    // Display selection as user message
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        role: "user",
        content: `${currentStepName}: ${answer}`,
        timestamp: new Date(),
      }
    ]);

    setIsTyping(true);

    setTimeout(() => {
      if (recStep < 3) {
        setRecStep((prev) => prev + 1);
        let nextQuestion = "";
        if (recStep === 0) nextQuestion = "How many participants do you manage?";
        else if (recStep === 1) nextQuestion = "Do you require automated attendance tracking?";
        else if (recStep === 2) nextQuestion = "Do you need to issue completion certificates?";

        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(36).substring(7),
            role: "assistant",
            content: nextQuestion,
            timestamp: new Date(),
            widget: "recommendation"
          }
        ]);
      } else {
        // Run recommendation logic
        let recommendation = "";
        const org = updatedAnswers[steps[0]];
        const size = updatedAnswers[steps[1]];
        const cert = answer; // final answer

        if (org.includes("Event") || org.includes("Webinar")) {
          recommendation = "Based on your focus on events, we recommend the **Webinars & Events** solution (starting at ₦15,000/month). It provides highly efficient live session support and broadcast metrics.";
        } else if (org.includes("Institution") || org.includes("University")) {
          recommendation = "For academic workflows, we recommend the **Education & Institutions** solution (starting at ₦35,000/month). It integrates resource directories, assessments, and multi-department dashboards.";
        } else if (size.includes("2000+") || org.includes("NGO")) {
          recommendation = "Given your operational scale, we recommend looking into **Enterprise Operations** (Custom setup with SLA). Please speak with our Enterprise Sales team to configure early access.";
        } else {
          recommendation = "For structured program formats, we highly recommend the **Bootcamps & Training** solution (starting at ₦25,000/month) with full participant tracking and completion credentials.";
        }

        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(36).substring(7),
            role: "assistant",
            content: `Thank you for completing the diagnostic.\n\n🏆 **Recommendation**:\n${recommendation}\n\nWhat would you like to do next?`,
            timestamp: new Date(),
            widget: "success"
          }
        ]);
        setRecStep(0);
        setRecAnswers({});
      }
      setIsTyping(false);
    }, 600);
  };

  const handleFormSubmit = (type: "demo" | "sales" | "waitlist", data: any) => {
    setIsTyping(true);
    setTimeout(() => {
      let confirmationMessage = "";
      if (type === "demo") {
        confirmationMessage = `Thank you, ${data.name}! Your request to book a demo for **${data.organization}** has been recorded. We have sent details to **${data.email}** and will reach out shortly.`;
      } else if (type === "sales") {
        confirmationMessage = `Got it, ${data.name}! We've registered your interest in Enterprise Operations for **${data.organization}**. A senior account executive will contact you at **${data.email}** or **${data.phone}** within 24 hours.`;
      } else {
        confirmationMessage = `Awesome! You have been successfully added to the early access waitlist for Enterprise Operations under **${data.organization}**. We will keep you updated at **${data.email}**.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(7),
          role: "assistant",
          content: confirmationMessage,
          timestamp: new Date(),
          widget: "success"
        }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-6 w-[380px] h-[550px] flex flex-col bg-[#0A0A0B]/95 backdrop-blur-[60px] border border-brand-gold/10 rounded-[32px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl overflow-hidden border border-brand-gold/20 shadow-[0_0_20px_rgba(245,185,66,0.1)]">
                    <Image src="/oyen-ai-avatar.png" alt="OYEN AI" width={40} height={40} className="object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0A0A0B]" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-white tracking-tight">OYEN AI</div>
                  <div className="text-[8px] font-black text-white/20 uppercase tracking-[0.15em]">Institutional Copilot</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button 
                  onClick={resetChat}
                  title="Reset Chat"
                  className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/30 hover:text-white transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/30 hover:text-white transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Feed */}
            <div 
              ref={feedRef}
              className="flex-1 p-5 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent"
            >
              {messages.map((msg, i) => (
                <div key={msg.id || i} className="flex flex-col gap-2">
                  {/* Text bubble */}
                  {msg.content && (
                    <div
                      className={cn(
                        "flex flex-col gap-1 max-w-[85%] rounded-2xl p-4 text-[13px] leading-relaxed font-light border transition-all whitespace-pre-line",
                        msg.role === "assistant"
                          ? "bg-white/[0.03] border-white/5 text-white/80 self-start"
                          : "bg-brand-gold/5 border-brand-gold/20 text-brand-gold self-end ml-auto"
                      )}
                    >
                      <p>{msg.content}</p>
                    </div>
                  )}

                  {/* Inline Widgets */}
                  {msg.role === "assistant" && msg.widget && (
                    <div className="w-full max-w-[90%] self-start mt-1">
                      {msg.widget === "pricing-select" && (
                        <div className="grid grid-cols-2 gap-2 bg-white/[0.02] border border-white/5 rounded-2xl p-3">
                          {["🎓 Bootcamps & Training", "🎤 Webinars & Events", "🏫 Education & Institutions", "🏢 Enterprise Operations"].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => selectPricingOption(opt)}
                              className="text-[11px] text-left p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-brand-gold/40 text-white/70 hover:text-white transition-all font-medium"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}

                      {msg.widget === "demo" && (
                        <InteractiveForm 
                          fields={[
                            { name: "name", label: "Full Name", placeholder: "e.g. Jane Doe", type: "text" },
                            { name: "organization", label: "Organization", placeholder: "e.g. Tech Academy", type: "text" },
                            { name: "email", label: "Email Address", placeholder: "e.g. jane@academy.com", type: "email" },
                            { name: "participants", label: "Estimated Participants", placeholder: "e.g. 250", type: "number" },
                            { name: "useCase", label: "Primary Use Case", placeholder: "e.g. Launch a fellowship", type: "text" },
                          ]}
                          submitLabel="Book Demo"
                          onSubmit={(data) => handleFormSubmit("demo", data)}
                        />
                      )}

                      {msg.widget === "sales" && (
                        <InteractiveForm 
                          fields={[
                            { name: "name", label: "Full Name", placeholder: "e.g. Robert Smith", type: "text" },
                            { name: "organization", label: "Organization", placeholder: "e.g. Global NGOs", type: "text" },
                            { name: "email", label: "Email Address", placeholder: "e.g. robert@ngoglobal.org", type: "email" },
                            { name: "phone", label: "Phone Number", placeholder: "e.g. +234 80...", type: "tel" },
                          ]}
                          submitLabel="Connect With Sales"
                          onSubmit={(data) => handleFormSubmit("sales", data)}
                        />
                      )}

                      {msg.widget === "waitlist" && (
                        <InteractiveForm 
                          fields={[
                            { name: "name", label: "Full Name", placeholder: "e.g. Alex Carter", type: "text" },
                            { name: "organization", label: "Organization Name", placeholder: "e.g. Gov Training Institute", type: "text" },
                            { name: "email", label: "Email Address", placeholder: "e.g. alex@gov.org", type: "email" },
                          ]}
                          submitLabel="Join Waitlist"
                          onSubmit={(data) => handleFormSubmit("waitlist", data)}
                        />
                      )}

                      {msg.widget === "recommendation" && (
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-3 flex flex-col gap-2">
                          {recStep === 0 && (
                            <div className="flex flex-col gap-1.5">
                              {["Bootcamps & Training Org", "University / Institution", "NGO / Government Agency", "Corporate Academy", "Event Organizer"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="text-[11px] text-left px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 hover:border-brand-gold/40 text-white/70 hover:text-white transition-all"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}

                          {recStep === 1 && (
                            <div className="flex flex-col gap-1.5">
                              {["Less than 100", "100 - 500", "500 - 2,000", "More than 2,000"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="text-[11px] text-left px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 hover:border-brand-gold/40 text-white/70 hover:text-white transition-all"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}

                          {recStep === 2 && (
                            <div className="flex gap-2">
                              {["Yes, strictly needed", "No, not required"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="flex-1 text-[11px] text-center py-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-brand-gold/40 text-white/70 hover:text-white transition-all"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}

                          {recStep === 3 && (
                            <div className="flex gap-2">
                              {["Yes, we issue certificates", "No certificates needed"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="flex-1 text-[11px] text-center py-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-brand-gold/40 text-white/70 hover:text-white transition-all"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {msg.widget === "success" && (
                        <div className="flex flex-col gap-1.5">
                          <button
                            onClick={() => handleSend("Explore Features")}
                            className="text-[11px] text-left px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all text-white/60 hover:text-white"
                          >
                            ⚡ Explore Platform Features
                          </button>
                          <button
                            onClick={() => handleSend("Compare Pricing")}
                            className="text-[11px] text-left px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all text-white/60 hover:text-white"
                          >
                            💳 Compare Pricing Plans
                          </button>
                          <button
                            onClick={() => handleSend("Book a Demo")}
                            className="text-[11px] text-left px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all text-white/60 hover:text-white"
                          >
                            📅 Book a Demo
                          </button>
                          <button
                            onClick={() => handleSend("Speak with sales")}
                            className="text-[11px] text-left px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all text-white/60 hover:text-white"
                          >
                            🏢 Contact Sales Desk
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* First Screen Options layout */}
              {messages.length === 1 && (
                <div className="pt-2 pb-6 space-y-6">
                  {/* Explore Solutions */}
                  <div>
                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.15em] mb-2.5">Explore Solutions</div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: "🎓 Bootcamps & Training", q: "Tell me about bootcamps & training" },
                        { label: "🎤 Webinars & Events", q: "Tell me about webinars & events" },
                        { label: "🏫 Education & Institutions", q: "Tell me about education & institutions" },
                        { label: "🏢 Enterprise Operations", q: "Tell me about enterprise operations" },
                      ].map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleSend(item.q)}
                          className="text-[11px] text-left p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] text-white/60 hover:text-white transition-all font-medium"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Popular Topics */}
                  <div>
                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.15em] mb-2.5">Popular Topics</div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: "💳 Pricing & Plans", q: "Show me pricing plans" },
                        { label: "⚡ Platform Features", q: "What are the platform features?" },
                        { label: "🤖 AI Capabilities", q: "Tell me about AI capabilities" },
                        { label: "📊 Analytics & Reporting", q: "Explain analytics & reporting" },
                        { label: "🎥 OYEN Live", q: "What is OYEN Live?" },
                        { label: "📅 Book a Demo", q: "I'd like to book a demo" },
                      ].map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleSend(item.q)}
                          className="text-[11px] text-left p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] text-white/60 hover:text-white transition-all font-medium"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* What Would You Like To Achieve? */}
                  <div>
                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.15em] mb-2.5">What Would You Like To Achieve?</div>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { label: "○ Run a Training Programme", q: "How do I run a training programme?" },
                        { label: "○ Launch a Fellowship", q: "How do I launch a fellowship?" },
                        { label: "○ Host a Webinar", q: "How do I host a webinar?" },
                        { label: "○ Manage Academic Programmes", q: "How do I manage academic programmes?" },
                        { label: "○ Coordinate Multiple Cohorts", q: "How do I coordinate multiple cohorts?" },
                        { label: "○ Explore Pricing", q: "Tell me about pricing plans" },
                        { label: "○ Speak With Sales", q: "I want to speak with sales" },
                      ].map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleSend(item.q)}
                          className="flex items-center justify-between text-[11px] text-left px-3 py-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.03] text-white/50 hover:text-white transition-all"
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-white/20 group-hover:text-brand-gold" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {isTyping && (
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 max-w-[85%] text-[13px] text-white/40 self-start flex items-center gap-1.5 font-light">
                  <span className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              )}
            </div>

            {/* Input Area */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-4 bg-white/[0.01] border-t border-white/5"
            >
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about pricing, features, solutions..."
                  className="w-full h-11 bg-white/[0.03] border border-white/5 rounded-xl px-4 pr-12 text-[12px] text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/40 transition-all font-light"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className={cn(
                    "absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center text-black shadow-lg transition-all",
                    input.trim()
                      ? "bg-brand-gold hover:scale-105 opacity-100"
                      : "bg-white/5 text-white/20 opacity-50 cursor-not-allowed"
                  )}
                >
                  <Send className="w-3 h-3" />
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

interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

function InteractiveForm({ 
  fields, 
  submitLabel, 
  onSubmit 
}: { 
  fields: FormField[]; 
  submitLabel: string; 
  onSubmit: (data: Record<string, string>) => void;
}) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Verify all fields filled
    const allFilled = fields.every((f) => formData[f.name]?.trim());
    if (!allFilled) return;

    setSubmitted(true);
    onSubmit(formData);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-3 text-emerald-400">
        <CheckCircle2 className="w-5 h-5 shrink-0" />
        <span className="text-[12px] font-medium">Form Submitted successfully.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 space-y-3">
      {fields.map((f) => (
        <div key={f.name} className="flex flex-col gap-1">
          <label className="text-[9px] font-bold text-white/40 uppercase tracking-[0.05em]">{f.label}</label>
          <input
            type={f.type}
            required
            placeholder={f.placeholder}
            value={formData[f.name] || ""}
            onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })}
            className="w-full h-8 bg-white/[0.03] border border-white/5 rounded-lg px-2.5 text-[11px] text-white placeholder:text-white/10 focus:outline-none focus:border-brand-gold/30 transition-all font-light"
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full h-8 bg-brand-gold hover:bg-brand-gold/90 text-black text-[11px] font-bold rounded-lg transition-all mt-1"
      >
        {submitLabel}
      </button>
    </form>
  );
}
