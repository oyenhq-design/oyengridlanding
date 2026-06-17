"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, RotateCcw, Home, Sparkles, CheckCircle2, ChevronRight, BarChart3, Users, Landmark, AlertCircle, Paperclip, Smile, MoreHorizontal, ArrowUp } from "lucide-react";
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
  const [mounted, setMounted] = useState(false);
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

  const resetChat = () => {
    const now = new Date();
    setMessages([
      {
        id: "init-1",
        role: "assistant",
        content: "Hi there! I'm OYEN's Virtual Agent.",
        timestamp: now,
      },
      {
        id: "init-2",
        role: "assistant",
        content: "How can I help?",
        timestamp: now,
        widget: "success"
      },
    ]);
    setRecStep(0);
    setRecAnswers({});
    setInput("");
    setSessionContext({ leadScore: "Low" });
  };

  useEffect(() => {
    setMounted(true);
    resetChat();
  }, []);

  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [messages, isTyping, recStep]);

  if (!mounted) return null;

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

    // Greetings
    if (q === "hello") {
      return {
        content: "Hello and welcome to OYEN GRID.\n\nI'm OYEN AI, here to help you explore solutions, features, pricing, and best practices for programme delivery.\n\nHow can I assist you today?"
      };
    }
    if (q === "hi there") {
      return {
        content: "Hi there. It's great to have you here.\n\nHow may I help you today?"
      };
    }
    if (q === "good morning") {
      return {
        content: "Good morning and welcome to OYEN GRID.\n\nI hope your day is off to a great start. How can I assist you today?"
      };
    }
    if (q === "hi" || q === "hello" || q === "hey" || q.startsWith("hi ") || q.startsWith("hello ") || q.startsWith("hey ") || q.includes("good morning") || q.includes("good afternoon") || q.includes("good evening")) {
      return {
        content: "Hello and welcome to OYEN GRID.\n\nI'm OYEN AI, your programme operations assistant.\n\nHow can I assist you today?"
      };
    }

    // Personal Questions
    if (q.includes("what's your name") || q.includes("what is your name")) {
      return {
        content: "My name is OYEN AI, the official AI assistant for OYEN GRID.\n\nI'm here to help organizations discover, evaluate and succeed with OYEN GRID."
      };
    }
    if (q.includes("who created you")) {
      return {
        content: "I was created to assist visitors and customers of OYEN GRID by providing information, guidance and support."
      };
    }
    if (q.includes("are you a real person") || q.includes("are you an ai") || q.includes("who are you") || q.includes("who am i speaking with")) {
      return {
        content: "I'm an AI assistant designed to help you quickly find information and guidance about OYEN GRID. If you'd prefer to speak with a human specialist, I can help arrange that as well."
      };
    }

    // Small Talk
    if (q.includes("how are you")) {
      return {
        content: "Thank you for asking. I'm doing well and ready to assist. How can I help you today?"
      };
    }
    if (q.includes("how's your day") || q.includes("how is your day")) {
      return {
        content: "My focus is always on helping visitors and customers, and I'm ready whenever you need assistance."
      };
    }
    if (q.includes("nice to meet you")) {
      return {
        content: "Nice to meet you as well. I'm glad you're here. How can I assist you today?"
      };
    }

    // Appreciation
    if (q === "thank you") {
      return {
        content: "You're very welcome. I'm happy I could help."
      };
    }
    if (q.includes("thanks a lot")) {
      return {
        content: "My pleasure. If there's anything else you'd like to explore, just let me know."
      };
    }
    if (q.includes("thank you") || q === "thanks" || q.startsWith("thanks ") || q.includes("appreciate it") || q.includes("helpful") || q.includes("great job") || q.includes("smart") || q.includes("intelligent")) {
      return {
        content: "Thank you. I'm glad the information was useful."
      };
    }

    // Uncertain Users
    if (q.includes("not sure where to start") || q.includes("i don't know where to start") || q.includes("where do i start")) {
      return {
        content: "No problem.\n\nCould you tell me a little about what you're trying to achieve?\n\nFor example:\n\n• Running a training programme\n• Hosting webinars\n• Managing academic learning\n• Coordinating internal operations\n\nOnce I understand your goals, I can guide you."
      };
    }
    if (q.includes("just exploring") || q.includes("looking around") || q.includes("exploring options") || q === "unsure") {
      return {
        content: "That's perfectly fine.\n\nMany organizations start by exploring solutions, features, or pricing before deciding what fits their needs."
      };
    }

    // Decision Support
    if (q.includes("which solution is best") || q.includes("what is the best option") || q.includes("what plan should")) {
      return {
        content: "The best solution depends on your organization and goals.\n\nCould you tell me:\n\n• What type of organization you run?\n• Approximately how many participants you manage?\n• Whether you're running programmes, events, or academic learning?\n\nI'll recommend the most suitable option."
      };
    }

    // Comparison Questions
    if (q.includes("why should i use oyen grid") || q.includes("why use oyen grid")) {
      return {
        content: "Organizations choose OYEN GRID because it centralizes programme operations into one platform.\n\nInstead of managing separate tools for meetings, attendance, assessments, resources and reporting, OYEN GRID brings everything together in a unified system."
      };
    }
    if (q.includes("what makes oyen grid different") || q.includes("what makes you different") || q.includes("moodle") || q.includes("google classroom") || q.includes("zoom") || q.includes("teams") || q.includes("talentlms") || q.includes("thinkific") || q.includes("kajabi") || q.includes("compare to")) {
      return {
        content: "While many platforms focus on individual functions, OYEN GRID is designed as a complete programme operating system that combines programme management, participant management, live delivery, attendance intelligence, analytics and AI-powered insights."
      };
    }

    // Concerns
    if (q.includes("will this be difficult to use") || q.includes("difficult to use") || q.includes("is it hard")) {
      return {
        content: "Not at all.\n\nOYEN GRID is designed to simplify operations, not add complexity. Most organizations can begin managing programmes and participants with minimal onboarding."
      };
    }
    if (q.includes("we already use zoom") || q.includes("already use zoom")) {
      return {
        content: "That's common.\n\nMany organizations initially use Zoom alongside other tools. OYEN GRID provides built-in live delivery while also centralizing attendance, participant tracking, assessments and reporting."
      };
    }

    // Sales Conversations
    if (q.includes("think we're interested") || q.includes("we are interested") || q.includes("im interested")) {
      return {
        content: "That's great to hear.\n\nWould you like to explore pricing, schedule a demo, or speak with a specialist to discuss your requirements?",
        widget: "success"
      };
    }
    if (q.includes("want a custom setup") || q.includes("custom setup") || q.includes("custom deployment")) {
      return {
        content: "A custom deployment may be the best option for your organization.\n\nI can connect you with an OYEN GRID specialist to discuss infrastructure, integrations and implementation requirements.",
        widget: "specialist-cta"
      };
    }

    // Human Handoff
    if (q.includes("can i speak with someone") || q.includes("speak with someone") || q.includes("talk to a human") || q.includes("contact support") || q.includes("speak with a representative")) {
      return {
        content: "Absolutely.\n\nOne of our specialists would be happy to assist.\n\nPlease share:\n\n• Name\n• Organization\n• Email Address\n• Phone Number\n\nand a team member will contact you.",
        widget: "specialist-form"
      };
    }

    // Ending Conversations
    if (q === "bye" || q === "goodbye" || q.startsWith("bye ") || q.startsWith("goodbye ")) {
      return {
        content: "Thank you for visiting OYEN GRID.\n\nIf you need assistance in the future, I'll be here to help. Have a wonderful day."
      };
    }
    if (q.includes("talk to you later") || q.includes("talk later") || q.includes("see you later")) {
      return {
        content: "I look forward to it. Have a great day."
      };
    }

    // Platform description check
    if (q.includes("what is oyen grid") || q.includes("tell me about your platform") || q.includes("what do you do") || q.includes("what is this website") || q.includes("what is the platform")) {
      return {
        content: "OYEN GRID is a Programme Operating System designed to help organizations manage programmes, participants, live sessions, attendance, assessments, certificates, analytics and AI-powered operational intelligence from one platform.\n\nWould you like to explore solutions, features, or pricing?",
        widget: "success"
      };
    }

    // Discovery / common challenge check
    if (q.includes("attendance has become difficult") || q.includes("difficult to track") || q.includes("too many cohorts") || q.includes("hard to manage") || q.includes("tracking progress") || q.includes("struggle to track") || q.includes("attendance tracking issue") || q.includes("manage several training")) {
      return {
        content: "That is a common challenge for growing programme teams.\n\nTo help recommend the most suitable setup, could you share:\n\n• How many participants do you typically manage?\n• Do you run multiple cohorts?\n• Are your sessions virtual, physical, or hybrid?"
      };
    }

    // Opinion / planning / suggestions check
    if (q.includes("what would you do") || q.includes("what do you suggest") || q.includes("which approach") || q.includes("how to plan") || q.includes("structure a bootcamp") || q.includes("launch a fellowship") || q.includes("planning")) {
      return {
        content: "When planning a structured cohort-based program (like a bootcamp or fellowship), I recommend this checklist:\n\n1. **Phased Intake**: Set up program registration forms to capture participant metrics.\n2. **Cohort Structuring**: Group participants into cohorts with dedicated facilitators.\n3. **Live Sync Events**: Schedule live video training sessions with automated attendance capturing (leveraging OYEN Live).\n4. **Structured Assessments**: Run weekly checkpoints and assignment grading.\n5. **Completion Rules**: Automate the generation and distribution of completion credentials.\n\nOYEN GRID handles all 5 steps natively. Would you like to review features or schedule a demo?",
        widget: "success"
      };
    }

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

    // Plan Comparison Flow
    if (q.includes("compare plan") || q.includes("compare pricing") || q.includes("plan differences") || q.includes("difference between plan") || q.includes("what is the difference between plans")) {
      return {
        content: "Here is a comparison of OYEN GRID plans across our delivery tiers:\n\n• **Basic** (₦15k - ₦35k/mo): Core program dashboards, registration forms, and basic participant directories.\n• **Standard** (₦35k - ₦75k/mo): Adds full cohort management, automated attendance tracking, and certificate distribution.\n• **Premium** (₦75k - ₦150k/mo): Adds advanced analytics reporting, custom branding, and AI session summaries.\n• **Premium+ / Enterprise** (Custom pricing): Dedicated cloud infrastructure, white-label portals, and API/integrations access.",
        widget: "success"
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

      setMessages((prev) => [...prev, botMsg]);
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
    <div className="fixed bottom-8 right-8 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="mb-4 w-[400px] h-[580px] flex flex-col bg-white border border-gray-200 rounded-[24px] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="px-5 py-4 flex items-center justify-between bg-gradient-to-r from-[#0D6EFD] to-[#8A2BE2] select-none shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-[20px] tracking-tight">oyen</span>
                <span className="text-white/95 font-medium text-[20px]">Virtual Agent</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetChat}
                  title="Reset Chat"
                  className="w-8 h-8 rounded-full hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Feed */}
            <div
              ref={feedRef}
              className="flex-1 px-5 py-5 overflow-y-auto space-y-5 bg-white scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent"
            >
              {messages.map((msg, i) => {
                const isAssistant = msg.role === "assistant";
                return (
                  <div key={msg.id || i} className={cn("flex gap-3 items-start w-full", !isAssistant && "justify-end")}>
                    {/* Left: Avatar for assistant */}
                    {isAssistant && (
                      <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-100 shadow-sm bg-gray-50">
                        <Image src="/oyen-ai-avatar.png" alt="OYEN BOT" width={40} height={40} className="object-cover" />
                      </div>
                    )}

                    {/* Right: Message Details */}
                    <div className={cn("flex flex-col gap-1.5", isAssistant ? "flex-1 max-w-[80%]" : "max-w-[80%]")}>
                      {/* Name / Tag / Timestamp */}
                      {isAssistant && (
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-400 select-none">
                          <span className="font-bold text-gray-800">OYEN</span>
                          <span className="text-[9px] bg-gray-100 text-gray-500 px-1 py-0.5 rounded font-bold uppercase tracking-wider">BOT</span>
                          <span>{msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '8:51 PM'}</span>
                        </div>
                      )}

                      {/* Text Bubble */}
                      {msg.content && (
                        <div
                          className={cn(
                            "rounded-[18px] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line shadow-sm border",
                            isAssistant
                              ? "bg-[#F3F4F6] border-gray-100 text-gray-800 rounded-tl-none self-start"
                              : "bg-[#0D6EFD] border-[#0D6EFD] text-white rounded-tr-none self-end ml-auto"
                          )}
                        >
                          <p>{msg.content}</p>
                        </div>
                      )}

                      {/* Inline Widgets */}
                      {isAssistant && msg.widget && (
                        <div className="w-full mt-2">
                          {msg.widget === "pricing-select" && (
                            <div className="flex flex-col gap-2">
                              {["🎓 Bootcamps", "🎤 Webinars", "🏫 Education", "🏢 Enterprise"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => selectPricingOption(opt)}
                                  className="text-sm text-left px-4 py-2 rounded-full border border-[#0D6EFD] hover:bg-[#0D6EFD]/5 bg-white text-[#0D6EFD] transition-all font-medium w-fit shadow-sm"
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
                            <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm max-w-[95%]">
                              <div className="text-sm font-bold text-gray-800">Need personalized guidance?</div>
                              <div className="text-xs text-gray-500 space-y-1">
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
                                className="w-full py-2 bg-[#0D6EFD] hover:bg-[#0D6EFD]/90 text-white text-xs font-semibold rounded-full transition-all"
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
                            <div className="flex flex-col gap-2">
                              {recStep === 0 && ["Bootcamps & Training", "Webinars & Events", "Education & Institutions", "Enterprise Operations"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="text-sm text-left px-4 py-2 rounded-full border border-[#0D6EFD] hover:bg-[#0D6EFD]/5 bg-white text-[#0D6EFD] transition-all font-medium w-fit shadow-sm"
                                >
                                  {opt}
                                </button>
                              ))}

                              {recStep === 1 && ["Under 100", "100 - 500", "500 - 2,000", "2,000+"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="text-sm text-left px-4 py-2 rounded-full border border-[#0D6EFD] hover:bg-[#0D6EFD]/5 bg-white text-[#0D6EFD] transition-all font-medium w-fit shadow-sm"
                                >
                                  {opt}
                                </button>
                              ))}

                              {recStep === 2 && ["1 - 2 programmes", "3 - 5 programmes", "More than 5 programmes"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="text-sm text-left px-4 py-2 rounded-full border border-[#0D6EFD] hover:bg-[#0D6EFD]/5 bg-white text-[#0D6EFD] transition-all font-medium w-fit shadow-sm"
                                >
                                  {opt}
                                </button>
                              ))}

                              {recStep === 3 && ["Yes, frequently", "No live sessions"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="text-sm text-left px-4 py-2 rounded-full border border-[#0D6EFD] hover:bg-[#0D6EFD]/5 bg-white text-[#0D6EFD] transition-all font-medium w-fit shadow-sm"
                                >
                                  {opt}
                                </button>
                              ))}

                              {recStep === 4 && ["Yes, issue certificates", "No certificate workflow"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="text-sm text-left px-4 py-2 rounded-full border border-[#0D6EFD] hover:bg-[#0D6EFD]/5 bg-white text-[#0D6EFD] transition-all font-medium w-fit shadow-sm"
                                >
                                  {opt}
                                </button>
                              ))}

                              {recStep === 5 && ["Yes, require intelligence", "Not required"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => handleRecommendationAnswer(opt)}
                                  className="text-sm text-left px-4 py-2 rounded-full border border-[#0D6EFD] hover:bg-[#0D6EFD]/5 bg-white text-[#0D6EFD] transition-all font-medium w-fit shadow-sm"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}

                          {msg.widget === "success" && (
                            <div className="flex flex-col gap-2">
                              <button
                                onClick={() => handleSend("Explore Features")}
                                className="text-sm text-left px-4 py-2 rounded-full border border-[#0D6EFD] hover:bg-[#0D6EFD]/5 bg-white text-[#0D6EFD] transition-all font-medium w-fit shadow-sm"
                              >
                                Explore Platform Features
                              </button>
                              <button
                                onClick={() => handleSend("Compare Pricing")}
                                className="text-sm text-left px-4 py-2 rounded-full border border-[#0D6EFD] hover:bg-[#0D6EFD]/5 bg-white text-[#0D6EFD] transition-all font-medium w-fit shadow-sm"
                              >
                                Compare Pricing Plans
                              </button>
                              <button
                                onClick={() => handleSend("Book a Demo")}
                                className="text-sm text-left px-4 py-2 rounded-full border border-[#0D6EFD] hover:bg-[#0D6EFD]/5 bg-white text-[#0D6EFD] transition-all font-medium w-fit shadow-sm"
                              >
                                Book a Demo
                              </button>
                              <button
                                onClick={() => handleSend("Speak with sales")}
                                className="text-sm text-left px-4 py-2 rounded-full border border-[#0D6EFD] hover:bg-[#0D6EFD]/5 bg-white text-[#0D6EFD] transition-all font-medium w-fit shadow-sm"
                              >
                                Speak with Enterprise Sales
                              </button>
                            </div>
                          )}

                          {msg.widget === "analytics" && (
                            <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm max-w-[95%]">
                              <div className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                                <BarChart3 className="w-4 h-4 text-[#0D6EFD]" />
                                <span>Operational Intelligence Telemetry</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-500">
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5">
                                  <div>Questions Asked</div>
                                  <div className="text-gray-800 text-sm font-bold mt-0.5">{analytics.questionsAsked}</div>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5">
                                  <div>Specialist CTAs</div>
                                  <div className="text-gray-800 text-sm font-bold mt-0.5">{analytics.specialistRequests}</div>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5">
                                  <div>Demos Booked</div>
                                  <div className="text-gray-800 text-sm font-bold mt-0.5">{analytics.demoRequests}</div>
                                </div>
                                <div className="bg-gray-50 border border-gray-100 rounded-lg p-2.5">
                                  <div>Sales Queries</div>
                                  <div className="text-gray-800 text-sm font-bold mt-0.5">{analytics.salesRequests}</div>
                                </div>
                              </div>
                              <div className="text-[10px] text-[#0D6EFD] font-semibold flex items-center gap-1 px-1">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Lead Score Status: {sessionContext.leadScore} Intent</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-100 shadow-sm bg-gray-50">
                    <Image src="/oyen-ai-avatar.png" alt="OYEN BOT" width={40} height={40} className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-400 select-none">
                      <span className="font-semibold text-gray-800">OYEN</span>
                      <span className="text-[9px] bg-gray-100 text-gray-500 px-1 py-0.5 rounded font-bold uppercase tracking-wider">BOT</span>
                    </div>
                    <div className="bg-[#F3F4F6] border border-gray-100 rounded-[18px] rounded-tl-none p-3 max-w-[85%] text-xs text-gray-500 self-start flex items-center gap-1 font-light">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="px-5 py-4 bg-white border-t border-gray-100 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex flex-col bg-white border border-gray-200 rounded-[20px] px-4 py-3 shadow-sm focus-within:border-blue-500/50 transition-all"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Write a message"
                  className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none font-normal"
                />
                <div className="flex items-center justify-between mt-2.5 pt-1.5 border-t border-gray-50">
                  <div className="flex items-center gap-3 text-gray-400">
                    <button type="button" className="hover:text-gray-600 transition-colors">
                      <Paperclip className="w-4 h-4" />
                    </button>
                    <button type="button" className="hover:text-gray-600 transition-colors">
                      <Smile className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center transition-all",
                      input.trim()
                        ? "bg-[#0D6EFD] text-white shadow-sm hover:scale-105"
                        : "bg-gray-100 text-gray-300 cursor-not-allowed"
                    )}
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </div>
              </form>
              
              {/* Footer Tagline */}
              <div className="text-center text-[10px] text-gray-400 mt-2.5">
                OYEN may retain transcripts for training purposes
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group relative overflow-hidden shadow-lg",
          isOpen
            ? "bg-white border border-gray-200 text-gray-800"
            : "bg-[#0D6EFD] border border-blue-600/30 text-white hover:bg-[#0D6EFD]/95"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {isOpen ? (
          <X className="w-5 h-5 text-gray-600" />
        ) : (
          <MessageSquare className="w-5 h-5 text-white" />
        )}
      </button>
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
      <div className="bg-emerald-50 border border-emerald-200 rounded-[14px] p-3 flex items-center gap-2 text-emerald-600">
        <CheckCircle2 className="w-4 h-4 shrink-0" />
        <span className="text-xs font-medium">Form submitted successfully.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-[16px] p-4 space-y-2.5 max-w-[95%] shadow-sm">
      {fields.map((f) => (
        <div key={f.name} className="flex flex-col gap-1">
          <label className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{f.label}</label>
          <input
            type={f.type}
            required
            placeholder={f.placeholder}
            value={formData[f.name] || ""}
            onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })}
            className="w-full h-8 bg-gray-50 border border-gray-200 rounded-lg px-2.5 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#0D6EFD] focus:bg-white transition-all font-light"
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full h-8 bg-[#0D6EFD] hover:bg-[#0D6EFD]/90 text-white text-xs font-bold rounded-lg transition-all mt-1 shadow-sm"
      >
        {submitLabel}
      </button>
    </form>
  );
}
