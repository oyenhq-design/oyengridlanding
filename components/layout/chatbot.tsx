"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, RotateCcw, Home, Sparkles, CheckCircle2, ChevronRight, BarChart3, Users, Landmark, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  widget?: "demo" | "sales" | "waitlist" | "pricing-select" | "recommendation" | "success" | "specialist-cta" | "specialist-form" | "analytics";
  widgetData?: any;
}

interface SessionContext {
  organizationType?: string;
  participantsCount?: string;
  programmesCount?: string;
  solutionInterest?: string;
  pricingInterest?: string;
  leadScore: "Low" | "Medium" | "High";
}

interface AnalyticsData {
  questionsAsked: number;
  viewedSolutions: Record<string, number>;
  viewedFeatures: Record<string, number>;
  demoRequests: number;
  salesRequests: number;
  waitlistSignups: number;
  specialistRequests: number;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);

  // Upgrade States
  const [sessionContext, setSessionContext] = useState<SessionContext>({ leadScore: "Low" });
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    questionsAsked: 0,
    viewedSolutions: { "Bootcamps & Training": 0, "Webinars & Events": 0, "Education & Institutions": 0, "Enterprise Operations": 0 },
    viewedFeatures: { "Programme Management": 0, "Participant Management": 0, "OYEN Live": 0, "Attendance Intelligence": 0, "Certificates": 0 },
    demoRequests: 0,
    salesRequests: 0,
    waitlistSignups: 0,
    specialistRequests: 0,
  });

  // Diagnostic wizard state
  const [recStep, setRecStep] = useState(0);
  const [recAnswers, setRecAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    resetChat();
  }, []);

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
    setSessionContext({ leadScore: "Low" });
  };

  const updateAnalytics = (key: keyof AnalyticsData, subkey?: string) => {
    setAnalytics((prev) => {
      if (subkey && typeof prev[key] === "object") {
        const currentObj = prev[key] as Record<string, number>;
        return {
          ...prev,
          [key]: {
            ...currentObj,
            [subkey]: (currentObj[subkey] || 0) + 1,
          },
        };
      }
      return {
        ...prev,
        [key]: (prev[key] as number) + 1,
      };
    });
  };

  // Parses user message to extract details for Session Memory
  const extractSessionContext = (text: string) => {
    const q = text.toLowerCase();
    const updated = { ...sessionContext };

    // Extract Organization type
    if (q.includes("bootcamp")) updated.organizationType = "Bootcamp";
    if (q.includes("school") || q.includes("university") || q.includes("college") || q.includes("academy") || q.includes("institution")) {
      updated.organizationType = "Educational Institution";
    }
    if (q.includes("event") || q.includes("webinar") || q.includes("workshop")) {
      updated.organizationType = "Event Organizer";
    }
    if (q.includes("ngo") || q.includes("government")) updated.organizationType = "NGO / Gov";

    // Extract participants size
    const participantsMatch = q.match(/(\d+)\s*(participants|students|users|people|cohort size)/);
    if (participantsMatch) {
      updated.participantsCount = participantsMatch[1];
    } else if (q.includes("large scale") || q.includes("many users") || q.includes("thousands")) {
      updated.participantsCount = "2000+";
    }

    // Lead Scoring logic
    let score = updated.leadScore;
    const highIntentKeywords = ["enterprise", "white label", "api", "pricing", "demo", "integration", "custom deployment", "purchase", "cost", "how much", "buy", "scale"];
    const mediumIntentKeywords = ["solutions", "features", "attendance", "certificates", "live", "about"];

    const hasHigh = highIntentKeywords.some((kw) => q.includes(kw));
    const hasMedium = mediumIntentKeywords.some((kw) => q.includes(kw));

    if (hasHigh) score = "High";
    else if (hasMedium && score !== "High") score = "Medium";

    updated.leadScore = score;
    setSessionContext(updated);
  };

  const checkSmartEscalation = (text: string): boolean => {
    const q = text.toLowerCase();
    const escalationKeywords = [
      "enterprise deployment", "white-label", "api access", "custom integration", 
      "dedicated infrastructure", "large-scale", "government project", "university", 
      "ngo", "procurement", "security review", "compliance", "specialist", "human", 
      "speak with representative", "talk to support", "custom pricing"
    ];
    return escalationKeywords.some((kw) => q.includes(kw));
  };

  const getKnowledgeResponse = (query: string): { content: string; widget?: Message["widget"] } => {
    const q = query.toLowerCase();
    updateAnalytics("questionsAsked");
    extractSessionContext(query);

    // Smart Escalation Check
    if (checkSmartEscalation(query)) {
      updateAnalytics("specialistRequests");
      return {
        content: "This sounds like a specialized enterprise or custom operational requirement. Would you like to speak directly with an OYEN GRID Specialist for a tailored recommendation?",
        widget: "specialist-cta",
      };
    }

    // Diagnostics / Recommendation
    if (q.includes("recommend") || q.includes("choose") || q.includes("plan") || q.includes("diagnostic") || q.includes("which option")) {
      // Memory check: Do we already have enough context?
      if (sessionContext.organizationType && sessionContext.participantsCount) {
        let recommended = "";
        const sizeNum = parseInt(sessionContext.participantsCount) || 100;
        if (sessionContext.organizationType === "Bootcamp") {
          recommended = sizeNum > 500 ? "Bootcamps & Training Premium Plan (₦100,000/month)" : "Bootcamps & Training Standard Plan (₦50,000/month)";
        } else if (sessionContext.organizationType === "Educational Institution") {
          recommended = sizeNum > 500 ? "Education & Institutions Premium Plan (₦150,000/month)" : "Education & Institutions Standard Plan (₦75,000/month)";
        } else {
          recommended = "Webinars & Events Standard Plan (₦35,000/month)";
        }

        return {
          content: `Based on your earlier mention of running a **${sessionContext.organizationType}** with **${sessionContext.participantsCount}** participants, we recommend the **${recommended}**.\n\nThis plan covers your structured cohort delivery and telemetry requirements. Would you like to book a demo?`,
          widget: "success",
        };
      }

      return {
        content: "Let's run through our quick solutions diagnostic to recommend the perfect setup for your organization.",
        widget: "recommendation",
      };
    }

    // Solutions Info
    if (q.includes("bootcamp") || q.includes("training") || q.includes("fellowship")) {
      updateAnalytics("viewedSolutions", "Bootcamps & Training");
      return {
        content: "**Bootcamps & Training Solution**:\nOptimized for intensive cohorts, vocational training, and fellowships. Pricing plans:\n\n• **Basic**: ₦25,000/month\n• **Standard**: ₦50,000/month\n• **Premium**: ₦100,000/month\n• **Premium+**: Contact Sales",
        widget: "success",
      };
    }
    if (q.includes("webinar") || q.includes("event") || q.includes("workshop")) {
      updateAnalytics("viewedSolutions", "Webinars & Events");
      return {
        content: "**Webinars & Events Solution**:\nOptimized for virtual events, conferences, and workshops. Pricing plans:\n\n• **Basic**: ₦15,000/month\n• **Standard**: ₦35,000/month\n• **Premium**: ₦75,000/month\n• **Premium+**: Contact Sales",
        widget: "success",
      };
    }
    if (q.includes("education") || q.includes("university") || q.includes("school") || q.includes("college")) {
      updateAnalytics("viewedSolutions", "Education & Institutions");
      return {
        content: "**Education & Institutions Solution**:\nTailored for academic programs, schools, and training institutes. Pricing plans:\n\n• **Basic**: ₦35,000/month\n• **Standard**: ₦75,000/month\n• **Premium**: ₦150,000/month\n• **Premium+**: Contact Sales",
        widget: "success",
      };
    }
    if (q.includes("enterprise") || q.includes("waitlist")) {
      updateAnalytics("viewedSolutions", "Enterprise Operations");
      return {
        content: "Enterprise Operations is currently in development. Would you like to join the waitlist and receive early access updates?",
        widget: "waitlist",
      };
    }

    // Feature routing
    if (q.includes("live") || q.includes("video") || q.includes("audio") || q.includes("screen share")) {
      updateAnalytics("viewedFeatures", "OYEN Live");
      return {
        content: "**OYEN Live** facilitates video/audio conferencing, screen sharing, and automatic attendance extraction directly inside your programme dashboards."
      };
    }
    if (q.includes("attendance") || q.includes("track")) {
      updateAnalytics("viewedFeatures", "Attendance Intelligence");
      return {
        content: "**Attendance Intelligence** automates presence tracking, calculating time spent and engagement percentages during live sessions."
      };
    }
    if (q.includes("certificate") || q.includes("cert") || q.includes("credential")) {
      updateAnalytics("viewedFeatures", "Certificates");
      return {
        content: "Manage customizable certificate templates, automate issuing upon cohort completion, and host secure verification urls."
      };
    }

    // Analytics Trigger
    if (q.includes("show analytics") || q.includes("view analytics") || q.includes("dashboard")) {
      return {
        content: "Here is your live chatbot analytics telemetry dashboard:",
        widget: "analytics",
      };
    }

    // Default flows
    if (q.includes("pricing") || q.includes("cost") || q.includes("how much")) {
      return {
        content: "Which solution pricing would you like to review?",
        widget: "pricing-select",
      };
    }
    if (q.includes("demo")) {
      return {
        content: "I'd be happy to arrange a live demonstration. Please complete the form below to initiate lead validation:",
        widget: "demo",
      };
    }
    if (q.includes("sales") || q.includes("contact")) {
      return {
        content: "Please provide your corporate coordinates to reach our Enterprise Sales team:",
        widget: "sales",
      };
    }
    if (q.includes("specialist") || q.includes("human")) {
      return {
        content: "Need personalized guidance? Let's collect your requirements to connect you with an OYEN GRID Specialist.",
        widget: "specialist-form",
      };
    }

    // Generic doc / info responses
    return {
      content: "I couldn't find a precise answer for that. I can assist you as a Product Specialist, Solutions Consultant, or Support Assistant. What would you like to do next?",
      widget: "success",
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

      // If lead is High Intent, suggest Specialist CTA automatically
      if (sessionContext.leadScore === "High" && result.widget !== "specialist-form" && result.widget !== "specialist-cta") {
        setMessages((prev) => [
          ...prev,
          botMsg,
          {
            id: Math.random().toString(36).substring(7),
            role: "assistant",
            content: "💡 Based on your interests, we recommend speaking with an OYEN GRID Specialist for a tailored proposal.",
            timestamp: new Date(),
            widget: "specialist-cta",
          }
        ]);
      } else {
        setMessages((prev) => [...prev, botMsg]);
      }
      setIsTyping(false);
    }, 800);
  };

  const selectPricingOption = (option: string) => {
    handleSend(option);
  };

  const handleRecommendationAnswer = (answer: string) => {
    const steps = [
      "What type of organization are you?",
      "How many participants do you manage?",
      "How many programmes do you run?",
      "Do you host live sessions?",
      "Do you issue certificates?",
      "Do you require attendance tracking?"
    ];

    const currentStepName = steps[recStep];
    const updatedAnswers = { ...recAnswers, [currentStepName]: answer };
    setRecAnswers(updatedAnswers);

    // Save context in session context
    if (recStep === 0) setSessionContext((prev) => ({ ...prev, organizationType: answer }));
    if (recStep === 1) setSessionContext((prev) => ({ ...prev, participantsCount: answer }));

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
      if (recStep < 5) {
        setRecStep((prev) => prev + 1);
        let nextQuestion = "";
        if (recStep === 0) nextQuestion = "How many participants do you manage?";
        else if (recStep === 1) nextQuestion = "How many programmes do you run?";
        else if (recStep === 2) nextQuestion = "Do you host live session calls?";
        else if (recStep === 3) nextQuestion = "Do you issue certificate credentials?";
        else if (recStep === 4) nextQuestion = "Do you require automated attendance tracking?";

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
        const org = updatedAnswers[steps[0]];
        const size = updatedAnswers[steps[1]];
        let recommendation = "";

        if (org.includes("Event") || org.includes("Webinar")) {
          recommendation = "Based on your focus on events, we recommend the **Webinars & Events** solution (starting at ₦15,000/month). It provides highly efficient live session support and broadcast metrics.";
        } else if (org.includes("Institution") || org.includes("University")) {
          recommendation = "For academic workflows, we recommend the **Education & Institutions** solution (starting at ₦35,000/month). It integrates resource directories, assessments, and multi-department dashboards.";
        } else if (size.includes("2000+")) {
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

  const handleFormSubmit = (type: "demo" | "sales" | "waitlist" | "specialist", data: any) => {
    setIsTyping(true);
    updateAnalytics(`${type}Requests` as any);

    setTimeout(() => {
      let confirmationMessage = "";
      if (type === "demo") {
        confirmationMessage = `Thank you. A member of our team will contact you shortly to schedule your demo for ${data.organization || "your organization"}.`;
      } else if (type === "sales") {
        confirmationMessage = `Got it, ${data.name}! We've routed your enterprise specifications to our Accounts Executive. We'll reach out shortly.`;
      } else if (type === "waitlist") {
        confirmationMessage = `Thank you. You've been successfully added to the early access waitlist for Enterprise Operations.`;
      } else {
        confirmationMessage = `Thank you.\n\nYour request has been submitted successfully.\n\nAn OYEN GRID Specialist will contact you shortly to discuss your requirements and help identify the best solution for your organization.`;
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
    <div className="fixed bottom-8 right-8 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="mb-4 w-[350px] h-[480px] flex flex-col bg-[#0A0A0B]/95 backdrop-blur-[60px] border border-brand-gold/10 rounded-[24px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.85)]"
          >
            {/* Header */}
            <div className="px-4 py-3.5 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-xl overflow-hidden border border-brand-gold/20 shadow-[0_0_15px_rgba(245,185,66,0.1)]">
                    <Image src="/oyen-ai-avatar.png" alt="OYEN AI" width={32} height={32} className="object-cover" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#0A0A0B]" />
                </div>
                <div>
                  <div className="text-[12px] font-bold text-white tracking-tight">OYEN AI</div>
                  <div className="text-[7px] font-black text-white/20 uppercase tracking-[0.15em]">Institutional Copilot</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={resetChat}
                  title="Reset Chat"
                  className="w-7 h-7 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/30 hover:text-white transition-all"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-lg hover:bg-white/5 flex items-center justify-center text-white/30 hover:text-white transition-all"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Content Feed */}
            <div 
              ref={feedRef}
              className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent"
            >
              {messages.map((msg, i) => (
                <div key={msg.id || i} className="flex flex-col gap-1.5">
                  {/* Text bubble */}
                  {msg.content && (
                    <div
                      className={cn(
                        "flex flex-col gap-1 max-w-[85%] rounded-2xl px-3.5 py-3 text-[12px] leading-relaxed font-light border transition-all whitespace-pre-line",
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
                    <div className="w-full max-w-[90%] self-start">
                      {msg.widget === "pricing-select" && (
                        <div className="grid grid-cols-2 gap-1.5 bg-white/[0.01] border border-white/5 rounded-2xl p-2.5">
                          {["🎓 Bootcamps", "🎤 Webinars", "🏫 Education", "🏢 Enterprise"].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => selectPricingOption(opt)}
                              className="text-[10px] text-left p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 text-white/60 hover:text-white transition-all font-medium"
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
                            { name: "phone", label: "Phone Number", placeholder: "e.g. +234 ...", type: "tel" },
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
                            { name: "phone", label: "Phone Number", placeholder: "e.g. +234...", type: "tel" },
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

                      {msg.widget === "specialist-cta" && (
                        <div className="bg-[#0A0A0B] border border-brand-gold/20 rounded-2xl p-3.5 space-y-3 shadow-lg">
                          <div className="text-[11px] font-bold text-white tracking-tight">Need personalized guidance?</div>
                          <div className="text-[10px] text-white/50 space-y-1 font-light">
                            <div>✓ Choose the right solution</div>
                            <div>✓ Compare plans</div>
                            <div>✓ Discuss implementation</div>
                            <div>✓ Explore enterprise options</div>
                          </div>
                          <button
                            onClick={() => {
                              setMessages((prev) => [
                                ...prev,
                                {
                                  id: Math.random().toString(36).substring(7),
                                  role: "assistant",
                                  content: "Please fill in the specialized requirements form below:",
                                  timestamp: new Date(),
                                  widget: "specialist-form",
                                }
                              ]);
                            }}
                            className="w-full py-2 bg-brand-gold hover:bg-brand-gold/90 text-black text-[10px] font-bold rounded-lg transition-all"
                          >
                            Talk to a Specialist
                          </button>
                        </div>
                      )}

                      {msg.widget === "specialist-form" && (
                        <InteractiveForm 
                          fields={[
                            { name: "name", label: "Full Name", placeholder: "e.g. John Doe", type: "text" },
                            { name: "organization", label: "Organization Name", placeholder: "e.g. University of Lagos", type: "text" },
                            { name: "email", label: "Work Email", placeholder: "e.g. john@unilag.edu.ng", type: "email" },
                            { name: "phone", label: "Phone Number", placeholder: "e.g. +234...", type: "tel" },
                            { name: "orgType", label: "Organization Type", placeholder: "e.g. University", type: "text" },
                            { name: "participants", label: "Number of Participants", placeholder: "e.g. 1500", type: "number" },
                            { name: "programmes", label: "Number of Programmes", placeholder: "e.g. 5", type: "number" },
                            { name: "contactMethod", label: "Preferred Contact Method", placeholder: "Email or Phone", type: "text" },
                          ]}
                          submitLabel="Submit Specialist Request"
                          onSubmit={(data) => handleFormSubmit("specialist", data)}
                        />
                      )}

                      {msg.widget === "recommendation" && (
                        <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-2.5 flex flex-col gap-1.5">
                          {recStep === 0 && (
                            <div className="flex flex-col gap-1">
                              {["Bootcamps & Training", "Webinars & Events", "Education & Institutions", "Enterprise Operations"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="text-[10px] text-left px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 text-white/70 hover:text-white transition-all"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}

                          {recStep === 1 && (
                            <div className="flex flex-col gap-1">
                              {["Under 100", "100 - 500", "500 - 2,000", "2,000+"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="text-[10px] text-left px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 text-white/70 hover:text-white transition-all"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}

                          {recStep === 2 && (
                            <div className="flex flex-col gap-1">
                              {["1 - 2 programmes", "3 - 5 programmes", "More than 5 programmes"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="text-[10px] text-left px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 text-white/70 hover:text-white transition-all"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}

                          {recStep === 3 && (
                            <div className="flex gap-1.5">
                              {["Yes, frequently", "No live sessions"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="flex-1 text-[10px] text-center py-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 text-white/70 hover:text-white transition-all"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}

                          {recStep === 4 && (
                            <div className="flex gap-1.5">
                              {["Yes, issue certificates", "No certificate workflow"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="flex-1 text-[10px] text-center py-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 text-white/70 hover:text-white transition-all"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}

                          {recStep === 5 && (
                            <div className="flex gap-1.5">
                              {["Yes, require intelligence", "Not required"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="flex-1 text-[10px] text-center py-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-gold/40 text-white/70 hover:text-white transition-all"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {msg.widget === "success" && (
                        <div className="flex flex-col gap-1">
                          <button
                            onClick={() => handleSend("Explore Features")}
                            className="text-[10px] text-left px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all text-white/50 hover:text-white"
                          >
                            ⚡ Explore Platform Features
                          </button>
                          <button
                            onClick={() => handleSend("Compare Pricing")}
                            className="text-[10px] text-left px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all text-white/50 hover:text-white"
                          >
                            💳 Compare Pricing Plans
                          </button>
                          <button
                            onClick={() => handleSend("Book a Demo")}
                            className="text-[10px] text-left px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all text-white/50 hover:text-white"
                          >
                            📅 Book a Demo
                          </button>
                          <button
                            onClick={() => handleSend("Speak with sales")}
                            className="text-[10px] text-left px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all text-white/50 hover:text-white"
                          >
                            🏢 Speak with Enterprise Sales
                          </button>
                        </div>
                      )}

                      {msg.widget === "analytics" && (
                        <div className="bg-[#0A0A0B] border border-brand-gold/15 rounded-2xl p-3 space-y-2.5 shadow-lg">
                          <div className="text-[10px] font-bold text-white flex items-center gap-1.5">
                            <BarChart3 className="w-3.5 h-3.5 text-brand-gold" />
                            <span>Operational Intelligence Telemetry</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[9px] text-white/40">
                            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2">
                              <div>Questions Asked</div>
                              <div className="text-white text-[12px] font-bold mt-0.5">{analytics.questionsAsked}</div>
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2">
                              <div>Specialist CTAs</div>
                              <div className="text-white text-[12px] font-bold mt-0.5">{analytics.specialistRequests}</div>
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2">
                              <div>Demos Booked</div>
                              <div className="text-white text-[12px] font-bold mt-0.5">{analytics.demoRequests}</div>
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2">
                              <div>Sales Queries</div>
                              <div className="text-white text-[12px] font-bold mt-0.5">{analytics.salesRequests}</div>
                            </div>
                          </div>
                          <div className="text-[8px] text-brand-gold flex items-center gap-1 px-1">
                            <Sparkles className="w-2.5 h-2.5" />
                            <span>Lead Score Status: {sessionContext.leadScore} Intent</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* First Screen Options layout */}
              {messages.length === 1 && (
                <div className="pt-1.5 pb-4 space-y-4">
                  {/* Explore Solutions */}
                  <div>
                    <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.15em] mb-1.5">Explore Solutions</div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        { label: "🎓 Bootcamps & Training", q: "Tell me about bootcamps & training" },
                        { label: "🎤 Webinars & Events", q: "Tell me about webinars & events" },
                        { label: "🏫 Education & Institutions", q: "Tell me about education & institutions" },
                        { label: "🏢 Enterprise Operations", q: "Tell me about enterprise operations" },
                      ].map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleSend(item.q)}
                          className="text-[10px] text-left p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] text-white/60 hover:text-white transition-all"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Popular Topics */}
                  <div>
                    <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.15em] mb-1.5">Popular Topics</div>
                    <div className="grid grid-cols-2 gap-1.5">
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
                          className="text-[10px] text-left p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] text-white/60 hover:text-white transition-all"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* What Would You Like To Achieve? */}
                  <div>
                    <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.15em] mb-1.5">What Would You Like To Achieve?</div>
                    <div className="flex flex-col gap-1">
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
                          className="flex items-center justify-between text-[10px] text-left px-2.5 py-1.5 rounded-lg bg-white/[0.01] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.03] text-white/50 hover:text-white transition-all"
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="w-3 h-3 text-white/20" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {isTyping && (
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-3 max-w-[85%] text-[12px] text-white/40 self-start flex items-center gap-1 font-light">
                  <span className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              )}
            </div>

            {/* Persistent Availability Action Bar */}
            <div className="px-4 py-1.5 bg-white/[0.02] border-t border-white/5 flex gap-1.5 overflow-x-auto scrollbar-none shrink-0">
              <button 
                onClick={() => handleSend("Talk to a Specialist")}
                className="shrink-0 px-2 py-0.5 rounded bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold text-[9px] font-bold transition-all border border-brand-gold/20"
              >
                👨💼 Talk to a Specialist
              </button>
              <button 
                onClick={() => handleSend("Explore Pricing")}
                className="shrink-0 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-[9px] transition-all"
              >
                💳 Pricing
              </button>
              <button 
                onClick={() => handleSend("Book a Demo")}
                className="shrink-0 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-[9px] transition-all"
              >
                📅 Demo
              </button>
              <button 
                onClick={() => handleSend("Show Analytics")}
                className="shrink-0 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-[9px] transition-all"
              >
                📊 Telemetry
              </button>
            </div>

            {/* Input Area */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 bg-[#0A0A0B] border-t border-white/5 shrink-0"
            >
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about pricing, features, solutions..."
                  className="w-full h-9 bg-white/[0.03] border border-white/5 rounded-xl px-3.5 pr-10 text-[11px] text-white placeholder:text-white/20 focus:outline-none focus:border-brand-gold/40 transition-all font-light"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className={cn(
                    "absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center text-black shadow-lg transition-all",
                    input.trim()
                      ? "bg-brand-gold hover:scale-105 opacity-100"
                      : "bg-white/5 text-white/20 opacity-50 cursor-not-allowed"
                  )}
                >
                  <Send className="w-2.5 h-2.5" />
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
          "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group relative overflow-hidden",
          isOpen 
            ? "bg-white/[0.03] border border-white/10 text-white" 
            : "bg-[#0A0A0B] border border-brand-gold/30 text-white shadow-[0_0_20px_rgba(245,185,66,0.05)]"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {isOpen ? (
          <X className="w-4 h-4" />
        ) : (
          <div className="relative shrink-0">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-gold/20">
              <Image src="/oyen-ai-avatar.png" alt="OYEN AI" width={32} height={32} className="object-cover" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full border border-[#0A0A0B]" />
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
    const allFilled = fields.every((f) => formData[f.name]?.trim());
    if (!allFilled) return;

    setSubmitted(true);
    onSubmit(formData);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-3 flex items-center gap-2 text-emerald-400">
        <CheckCircle2 className="w-4 h-4 shrink-0" />
        <span className="text-[10px] font-medium">Form submitted successfully.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/[0.01] border border-white/5 rounded-2xl p-3 space-y-2">
      {fields.map((f) => (
        <div key={f.name} className="flex flex-col gap-0.5">
          <label className="text-[8px] font-bold text-white/40 uppercase tracking-[0.05em]">{f.label}</label>
          <input
            type={f.type}
            required
            placeholder={f.placeholder}
            value={formData[f.name] || ""}
            onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })}
            className="w-full h-7 bg-white/[0.03] border border-white/5 rounded-lg px-2 text-[10px] text-white placeholder:text-white/10 focus:outline-none focus:border-brand-gold/30 transition-all font-light"
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full h-7 bg-brand-gold hover:bg-brand-gold/90 text-black text-[10px] font-bold rounded-lg transition-all mt-1"
      >
        {submitLabel}
      </button>
    </form>
  );
}
