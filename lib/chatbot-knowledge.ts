// ─────────────────────────────────────────────────────────────────────────────
// OYEN GRID Chatbot Knowledge Base
// Intent library + natural language matching engine
// ─────────────────────────────────────────────────────────────────────────────

export interface KBIntent {
  id: string;
  category:
    | "platform"
    | "program"
    | "learner"
    | "cohort"
    | "attendance"
    | "reporting"
    | "facilitator"
    | "collaboration"
    | "ai"
    | "integrations"
    | "pricing"
    | "security"
    | "enterprise"
    | "implementation"
    | "support"
    | "usage";
  patterns: string[];
  response: string;
  bullets?: string[];
  followUpText?: string;
  ctaButtons?: string[];
  followUpTopics?: string[];
}

export interface MatchResult {
  intent: KBIntent | null;
  confidence: number; // raw count of matched patterns
  outOfScope: boolean;
}

// ─── Out-of-scope signal terms ────────────────────────────────────────────────
export const OUT_OF_SCOPE_TERMS = [
  "weather",
  "temperature",
  "forecast",
  "football",
  "soccer",
  "basketball",
  "cricket",
  "sports",
  "match score",
  "election",
  "politics",
  "president",
  "celebrity",
  "actor",
  "singer",
  "movie",
  "film",
  "music",
  "recipe",
  "cooking",
  "restaurant",
  "bitcoin",
  "crypto",
  "nft",
  "stock market",
  "breaking news",
  "headline",
];

// ─── In-scope anchors (override out-of-scope if present) ─────────────────────
export const IN_SCOPE_ANCHORS = [
  "oyen",
  "grid",
  "training",
  "program",
  "learner",
  "attendance",
  "report",
  "cohort",
  "facilitator",
  "pricing",
  "demo",
  "feature",
  "session",
  "analytics",
  "enrollment",
  "onboarding",
  "enterprise",
  "integration",
];

// ─────────────────────────────────────────────────────────────────────────────
// KNOWLEDGE BASE
// ─────────────────────────────────────────────────────────────────────────────
export const KNOWLEDGE_BASE: KBIntent[] = [
  // ═══════════════════════════════════════════════════════════════
  // PLATFORM OVERVIEW
  // ═══════════════════════════════════════════════════════════════

  {
    id: "what-is-oyen-grid",
    category: "platform",
    patterns: [
      "what is oyen grid",
      "what is oyen",
      "tell me about oyen",
      "about oyen grid",
      "oyen grid overview",
      "what does oyen grid do",
      "what can oyen grid do",
      "platform overview",
      "describe oyen",
      "explain oyen",
      "overview of oyen",
      "what can it do",
    ],
    response:
      "OYEN GRID is the operating system for training delivery. It gives organizations a unified control center to plan, coordinate, and review training programs at any scale.",
    bullets: [
      "Program creation and scheduling",
      "Learner enrollment and progress tracking",
      "Attendance monitoring (online and in-person)",
      "Facilitator coordination and role management",
      "Automated reports and analytics",
      "AI-powered session tools and summaries",
    ],
    followUpText: "Would you like a live walkthrough of the platform?",
    ctaButtons: ["Book a Demo", "Explore Features"],
    followUpTopics: [
      "Program Management",
      "Learner Tracking",
      "AI Session Notes",
      "Pricing",
    ],
  },

  {
    id: "how-does-it-work",
    category: "platform",
    patterns: [
      "how does it work",
      "how does oyen work",
      "how does oyen grid work",
      "how it works",
      "what is the process",
      "workflow",
      "steps involved",
      "how to use oyen",
      "walk me through",
      "explain the process",
      "run a training program",
    ],
    response:
      "Running a training program with OYEN GRID follows a simple 5-step workflow from setup to reporting.",
    bullets: [
      "1. Create a training program and define your schedule",
      "2. Enroll learners, assign facilitators, and organize cohorts",
      "3. Monitor attendance and engagement in real time",
      "4. AI tools capture session notes and highlights automatically",
      "5. Generate and share reports with your team or sponsors",
    ],
    followUpText: "Would you like to book a demo to see this in action?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Program Management",
      "AI Session Notes",
      "Reporting & Analytics",
      "Attendance Tracking",
    ],
  },

  {
    id: "who-is-it-for",
    category: "platform",
    patterns: [
      "who is it for",
      "who can use it",
      "who uses oyen",
      "target audience",
      "is it for my organization",
      "suitable for",
      "designed for",
      "what type of organization",
      "which organizations",
      "what kind of company",
      "is it for nonprofits",
    ],
    response:
      "OYEN GRID is built for any organization that delivers structured training programs — from small NGOs to large enterprise teams.",
    bullets: [
      "Corporate training and HR / L&D teams",
      "NGOs and development organizations",
      "Schools and academic institutions",
      "Government training agencies",
      "Workforce development programs",
      "Professional certification bodies",
    ],
    followUpText:
      "Would you like to speak with our team about your specific use case?",
    ctaButtons: ["Talk to Sales", "Book a Demo"],
    followUpTopics: [
      "NGO Programs",
      "Corporate Training",
      "Enterprise Deployment",
      "Pricing",
    ],
  },

  {
    id: "is-cloud-based",
    category: "platform",
    patterns: [
      "cloud based",
      "cloud platform",
      "web based",
      "hosted",
      "saas",
      "do i need to install",
      "software installation",
      "is it online",
      "browser based",
      "access from anywhere",
      "remote access",
      "no installation",
    ],
    response:
      "Yes. OYEN GRID is a fully cloud-based SaaS platform. There is nothing to install — you access it directly from your browser from anywhere in the world.",
    bullets: [
      "No installation or infrastructure required",
      "Access from any device with a modern browser",
      "Automatic updates — no downtime or manual upgrades",
      "Data backed up securely in the cloud",
    ],
    followUpText:
      "Would you like to explore pricing plans or book a demo?",
    ctaButtons: ["View Pricing Plans", "Book a Demo"],
    followUpTopics: ["Security", "Data Protection", "Integrations", "Pricing"],
  },

  {
    id: "mobile-app",
    category: "platform",
    patterns: [
      "mobile app",
      "mobile application",
      "android",
      "ios",
      "iphone",
      "smartphone",
      "phone app",
      "tablet",
      "mobile device",
      "app store",
      "play store",
      "use on phone",
    ],
    response:
      "OYEN GRID is fully optimized for mobile browsers, so you can manage programs, view dashboards, and check attendance from any smartphone or tablet — no separate app download needed.",
    followUpText: "Would you like to see what the mobile experience looks like?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Attendance Tracking",
      "Program Management",
      "Learner Tracking",
    ],
  },

  {
    id: "free-trial",
    category: "platform",
    patterns: [
      "free trial",
      "try it for free",
      "trial period",
      "test the platform",
      "demo account",
      "sandbox",
      "pilot program",
      "can i try before buying",
      "test drive",
      "free demo",
    ],
    response:
      "We offer personalized demos and pilot programs so you can experience OYEN GRID with your actual training data before committing to a full subscription.",
    followUpText: "Would you like to schedule a personalized demo?",
    ctaButtons: ["Book a Demo", "Contact Sales"],
    followUpTopics: ["Pricing", "Implementation", "Onboarding"],
  },

  {
    id: "getting-started",
    category: "platform",
    patterns: [
      "how do i get started",
      "get started",
      "first steps",
      "sign up",
      "create account",
      "start using oyen",
      "begin",
      "where do i start",
      "how to begin",
      "start a program",
    ],
    response:
      "Getting started with OYEN GRID is straightforward. Our team handles setup so you can focus on delivering training.",
    bullets: [
      "1. Book a discovery call with our team",
      "2. We configure your account and import your data",
      "3. Your team gets a personalized onboarding session",
      "4. Go live with your first program within weeks",
    ],
    followUpText: "Ready to get started? Book a call with our team today.",
    ctaButtons: ["Book a Demo", "Talk to Sales"],
    followUpTopics: [
      "Onboarding",
      "Implementation Timeline",
      "Data Migration",
      "Pricing",
    ],
  },

  {
    id: "platform-languages",
    category: "platform",
    patterns: [
      "language support",
      "languages",
      "multi language",
      "english",
      "french",
      "local language",
      "localization",
      "translation",
    ],
    response:
      "OYEN GRID currently operates in English. Localization support for additional languages is on the product roadmap. Contact our team to share your language requirements.",
    followUpText:
      "Would you like to speak with our team about language needs?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Enterprise Plan", "Custom Solutions"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PROGRAM MANAGEMENT
  // ═══════════════════════════════════════════════════════════════

  {
    id: "program-management",
    category: "program",
    patterns: [
      "program management",
      "manage programs",
      "create program",
      "training program",
      "programme management",
      "how do i create a program",
      "set up a program",
      "program creation",
      "training setup",
      "manage training",
      "new program",
    ],
    response:
      "OYEN GRID's Program Management module is the core of the platform. It gives you full control over every training program from creation to completion.",
    bullets: [
      "Create programs with custom schedules and session plans",
      "Assign facilitators and coordinators per program",
      "Set enrollment criteria and learner caps",
      "Monitor program progress in real time",
      "Archive and duplicate programs for future cycles",
    ],
    followUpText: "Would you like to see program management in action?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Cohort Management",
      "Learner Tracking",
      "Attendance Tracking",
      "Reporting & Analytics",
    ],
  },

  {
    id: "multiple-programs",
    category: "program",
    patterns: [
      "multiple programs",
      "several programs",
      "run more than one program",
      "concurrent programs",
      "parallel programs",
      "many programs at once",
      "how many programs",
      "run two programs",
      "more than one training",
    ],
    response:
      "Yes. OYEN GRID supports running multiple training programs simultaneously with no limit on active programs.",
    bullets: [
      "Each program has its own schedule, learners, and facilitators",
      "Switch between programs from a unified dashboard",
      "Different teams can manage different programs independently",
      "Aggregate reporting across all programs in one view",
    ],
    followUpText:
      "Would you like to explore enterprise options for large-scale programs?",
    ctaButtons: ["Contact Sales", "Book a Demo"],
    followUpTopics: [
      "Cohort Management",
      "Facilitator Management",
      "Reporting & Analytics",
      "Enterprise Plan",
    ],
  },

  {
    id: "session-management",
    category: "program",
    patterns: [
      "session management",
      "manage sessions",
      "schedule sessions",
      "session scheduling",
      "training sessions",
      "virtual sessions",
      "session planning",
      "calendar scheduling",
      "session dates",
      "training schedule",
      "schedule a session",
    ],
    response:
      "Session management in OYEN GRID lets you plan, schedule, and track every session in a training program.",
    bullets: [
      "Create sessions with date, time, and duration",
      "Link sessions to specific cohorts or learner groups",
      "Automated reminders sent to learners and facilitators",
      "Track session completion and attendance per session",
    ],
    followUpText: "Would you like to see how session scheduling works?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Attendance Tracking",
      "AI Session Notes",
      "Cohort Management",
    ],
  },

  {
    id: "program-templates",
    category: "program",
    patterns: [
      "program template",
      "training template",
      "template",
      "duplicate program",
      "copy program",
      "reuse program",
      "clone program",
      "same program again",
      "program structure",
    ],
    response:
      "OYEN GRID allows you to duplicate existing programs as templates. Reuse your schedule, session structure, and facilitator assignments for new cohorts or training cycles with a few clicks.",
    followUpText: "Would you like to book a demo to see this feature?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: ["Program Management", "Cohort Management"],
  },

  {
    id: "program-deadlines",
    category: "program",
    patterns: [
      "deadline",
      "end date",
      "program timeline",
      "completion date",
      "program duration",
      "how long is a program",
      "program length",
      "program end",
    ],
    response:
      "You can set custom start and end dates for each training program. OYEN GRID tracks timelines and alerts your team when sessions or milestones are approaching or overdue.",
    followUpText: "Would you like to see how program timelines are managed?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Program Management",
      "Reporting & Analytics",
      "AI Alerts",
    ],
  },

  {
    id: "facilitator-assignment",
    category: "program",
    patterns: [
      "assign facilitator",
      "add facilitator to program",
      "facilitator assignment",
      "assign trainer",
      "trainer to program",
      "who facilitates",
    ],
    response:
      "You can assign one or more facilitators to any program or cohort in OYEN GRID. Each facilitator gets access to the tools relevant to their assigned sessions and learner groups.",
    followUpText:
      "Would you like to see facilitator assignment in a live demo?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Facilitator Management",
      "Team Collaboration",
      "Cohort Management",
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // LEARNER MANAGEMENT
  // ═══════════════════════════════════════════════════════════════

  {
    id: "learner-tracking",
    category: "learner",
    patterns: [
      "learner tracking",
      "track learners",
      "learner management",
      "manage learners",
      "how does learner tracking work",
      "learner progress",
      "track progress",
      "monitor learners",
      "learner engagement",
      "individual learner",
    ],
    response:
      "OYEN GRID's Learner Tracking module gives you a complete picture of every learner's journey from enrollment to completion.",
    bullets: [
      "Individual learner profiles with full activity history",
      "Attendance and participation tracked per session",
      "Progress milestones and completion rates",
      "Engagement signals and risk flags for at-risk learners",
      "Automated alerts for low attendance or missed sessions",
    ],
    followUpText: "Would you like to see learner tracking in a live demo?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Attendance Tracking",
      "Cohort Analytics",
      "Reporting & Analytics",
      "AI Alerts",
    ],
  },

  {
    id: "upload-learners",
    category: "learner",
    patterns: [
      "upload learners",
      "import learners",
      "bulk upload",
      "upload existing data",
      "can i import",
      "existing learner data",
      "upload from excel",
      "upload csv",
      "migrate learners",
      "upload a spreadsheet",
      "load learners",
    ],
    response:
      "Yes. OYEN GRID supports bulk learner uploads via Excel or CSV. You can import your existing learner roster and have it ready in minutes.",
    bullets: [
      "Supported formats: CSV and XLSX",
      "Map spreadsheet columns to OYEN GRID fields during import",
      "Data validation before final import to catch errors",
      "Manual enrollment also available for individual learners",
    ],
    followUpText:
      "Would you like to know more about our data migration support?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Data Migration", "Learner Tracking", "Implementation"],
  },

  {
    id: "learner-limit",
    category: "learner",
    patterns: [
      "how many learners",
      "learner limit",
      "number of learners",
      "scale learners",
      "maximum learners",
      "thousands of learners",
      "large learner base",
      "can i manage many learners",
      "learner capacity",
      "big cohort",
    ],
    response:
      "OYEN GRID is built to scale. You can manage from small cohorts of 10 to tens of thousands of learners depending on your plan.",
    bullets: [
      "Starter plans support smaller learner groups",
      "Standard plans support growing organizations",
      "Enterprise plans support unlimited learners at scale",
      "Cohort-based structure keeps large programs manageable",
    ],
    followUpText:
      "Would you like to discuss the right plan for your learner volume?",
    ctaButtons: ["Contact Sales", "View Pricing Plans"],
    followUpTopics: ["Pricing", "Enterprise Plan", "Cohort Management"],
  },

  {
    id: "learner-profiles",
    category: "learner",
    patterns: [
      "learner profile",
      "learner record",
      "learner details",
      "learner information",
      "profile page",
      "learner history",
      "individual record",
    ],
    response:
      "Each learner in OYEN GRID has a dedicated profile that consolidates their full training history.",
    bullets: [
      "Enrollment history across all programs",
      "Session-by-session attendance log",
      "Progress and completion status",
      "Notes and flags added by facilitators",
      "Certificate and achievement records",
    ],
    followUpText: "Would you like to see a learner profile in action?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Attendance Tracking",
      "Reporting & Analytics",
      "Certificates",
    ],
  },

  {
    id: "certificates",
    category: "learner",
    patterns: [
      "certificate",
      "certification",
      "completion certificate",
      "digital certificate",
      "issue certificate",
      "generate certificate",
      "award certificate",
      "credential",
      "certificate of completion",
    ],
    response:
      "OYEN GRID supports digital certificate generation for learners who complete programs. Certificates can be issued automatically upon completion or manually by program administrators.",
    bullets: [
      "Automatic issuance when completion criteria are met",
      "Custom branding and templates",
      "Downloadable PDF certificates for learners",
      "Certificate records visible in learner profiles",
    ],
    followUpText: "Would you like to see how certificate generation works?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Learner Tracking",
      "Program Management",
      "Reporting & Analytics",
    ],
  },

  {
    id: "learner-enrollment",
    category: "learner",
    patterns: [
      "enrollment",
      "enroll learner",
      "add learner",
      "register learner",
      "learner registration",
      "sign up learner",
      "self enrollment",
      "auto enrollment",
      "enroll in program",
    ],
    response:
      "Learner enrollment in OYEN GRID is flexible. Administrators can enroll learners manually, via bulk upload, or set up self-enrollment links for learners to register themselves.",
    bullets: [
      "Admin-managed enrollment from the dashboard",
      "Bulk CSV/Excel upload for large rosters",
      "Self-enrollment with unique registration links",
      "Optional enrollment approval workflows",
    ],
    followUpText: "Would you like to explore how enrollment fits your process?",
    ctaButtons: ["Book a Demo", "Contact Sales"],
    followUpTopics: [
      "Learner Tracking",
      "Cohort Management",
      "Program Management",
    ],
  },

  {
    id: "learner-completion",
    category: "learner",
    patterns: [
      "completion rate",
      "program completion",
      "did learner complete",
      "learner completed",
      "who finished",
      "course completion",
      "drop out",
      "drop off",
      "learner dropout",
    ],
    response:
      "OYEN GRID tracks completion status for every learner. You can see at a glance who has completed the program, who is at risk of dropping out, and who needs follow-up.",
    bullets: [
      "Completion rate displayed per cohort and program",
      "At-risk learners flagged automatically",
      "Filter learners by completion status",
      "Completion data included in all reports",
    ],
    followUpText: "Would you like to see completion tracking in a demo?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: ["Learner Tracking", "AI Alerts", "Reporting & Analytics"],
  },

  // ═══════════════════════════════════════════════════════════════
  // COHORT MANAGEMENT
  // ═══════════════════════════════════════════════════════════════

  {
    id: "what-are-cohorts",
    category: "cohort",
    patterns: [
      "what are cohorts",
      "what is a cohort",
      "cohort meaning",
      "explain cohorts",
      "cohort based learning",
      "how do cohorts work",
      "cohort structure",
      "define cohort",
    ],
    response:
      "A cohort in OYEN GRID is a defined group of learners who go through a training program together. Cohorts allow you to manage multiple groups independently within the same program.",
    bullets: [
      "Each cohort has its own schedule and attendance record",
      "Assign specific facilitators to each cohort",
      "Track progress per cohort separately",
      "Compare performance across cohorts in analytics",
    ],
    followUpText:
      "Would you like to see how cohort management works in a demo?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Cohort Analytics",
      "Facilitator Management",
      "Attendance Tracking",
      "Reporting & Analytics",
    ],
  },

  {
    id: "multiple-cohorts",
    category: "cohort",
    patterns: [
      "multiple cohorts",
      "several cohorts",
      "manage cohorts",
      "many cohorts",
      "does oyen grid support cohorts",
      "cohort management",
      "cohort support",
      "run cohorts",
      "concurrent cohorts",
    ],
    response:
      "Yes. OYEN GRID has native cohort support. You can run multiple cohorts simultaneously within a single program or across different programs.",
    bullets: [
      "No limit on the number of active cohorts",
      "Separate tracking and reporting per cohort",
      "Cohorts can have different start dates and facilitators",
      "Aggregate cohort data in program-level reports",
    ],
    followUpText:
      "Would you like to discuss how cohorts fit your training model?",
    ctaButtons: ["Book a Demo", "Talk to Sales"],
    followUpTopics: [
      "Program Management",
      "Cohort Analytics",
      "Facilitator Management",
    ],
  },

  {
    id: "cohort-analytics",
    category: "cohort",
    patterns: [
      "cohort analytics",
      "cohort performance",
      "cohort report",
      "cohort comparison",
      "compare cohorts",
      "cohort statistics",
      "cohort data",
    ],
    response:
      "OYEN GRID provides detailed analytics for each cohort, allowing you to compare performance, attendance, and completion rates across groups.",
    bullets: [
      "Attendance rate per cohort",
      "Completion and drop-off rates by group",
      "Session-by-session engagement trends",
      "Side-by-side cohort comparison in dashboards",
    ],
    followUpText:
      "Would you like to see the analytics dashboard in a demo?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Reporting & Analytics",
      "Attendance Tracking",
      "Learner Tracking",
    ],
  },

  {
    id: "cohort-scheduling",
    category: "cohort",
    patterns: [
      "cohort schedule",
      "schedule cohort",
      "cohort start date",
      "cohort dates",
      "cohort timetable",
      "stagger cohorts",
      "rolling cohort",
    ],
    response:
      "You can set independent schedules for each cohort in OYEN GRID. This supports rolling enrollment models, staggered start dates, and multi-location delivery.",
    followUpText: "Would you like to explore cohort scheduling in a demo?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: ["Cohort Management", "Program Management", "Session Management"],
  },

  // ═══════════════════════════════════════════════════════════════
  // ATTENDANCE TRACKING
  // ═══════════════════════════════════════════════════════════════

  {
    id: "attendance-tracking",
    category: "attendance",
    patterns: [
      "attendance tracking",
      "track attendance",
      "attendance monitoring",
      "how does attendance work",
      "attendance system",
      "mark attendance",
      "attendance management",
      "attendance feature",
      "can i track attendance",
    ],
    response:
      "OYEN GRID's Attendance Monitoring system automatically captures and records attendance across all training sessions.",
    bullets: [
      "Automatic attendance detection for virtual sessions (Zoom, Google Meet)",
      "Manual check-in options for in-person sessions",
      "Real-time attendance dashboard per session",
      "Automated alerts for absences and low attendance patterns",
      "Attendance data feeds directly into learner profiles and reports",
    ],
    followUpText:
      "Would you like to see the attendance dashboard in action?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Attendance Reports",
      "Learner Engagement",
      "Cohort Analytics",
      "AI Alerts",
    ],
  },

  {
    id: "online-attendance",
    category: "attendance",
    patterns: [
      "online attendance",
      "virtual attendance",
      "remote attendance",
      "track virtual",
      "online session attendance",
      "video call attendance",
      "virtual training attendance",
      "does it work for online",
      "remote training support",
    ],
    response:
      "Yes. OYEN GRID supports attendance tracking for fully virtual and hybrid training programs. It integrates with video platforms to detect participant presence automatically.",
    followUpText:
      "Would you like to see how virtual attendance works with Zoom?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Zoom Integration",
      "Attendance Reports",
      "AI Session Notes",
    ],
  },

  {
    id: "zoom-attendance",
    category: "attendance",
    patterns: [
      "zoom attendance",
      "zoom tracking",
      "zoom integration attendance",
      "track attendance on zoom",
      "zoom session",
      "zoom monitoring",
    ],
    response:
      "OYEN GRID integrates with Zoom to automatically pull attendance data from your live sessions. No manual check-in required.",
    bullets: [
      "Automatic join/leave time capture",
      "Duration thresholds to mark attendance as valid",
      "Attendance synced to learner profiles in real time",
      "Supports both Zoom webinars and meetings",
    ],
    followUpText: "Would you like to set up a Zoom integration demo?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Integrations",
      "Attendance Reports",
      "AI Session Notes",
    ],
  },

  {
    id: "attendance-dashboard",
    category: "attendance",
    patterns: [
      "attendance dashboard",
      "attendance overview",
      "view attendance",
      "is there an attendance dashboard",
      "attendance analytics",
      "attendance summary",
      "see who attended",
    ],
    response:
      "Yes. OYEN GRID includes a dedicated attendance dashboard that shows attendance data across sessions, cohorts, and programs in real time.",
    bullets: [
      "Session-level attendance breakdown",
      "Cohort attendance heatmaps",
      "Individual learner attendance history",
      "Filter by date range, program, or cohort",
      "Exportable to Excel or PDF",
    ],
    followUpText: "Would you like to see the attendance dashboard live?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Export Reports",
      "Cohort Analytics",
      "Learner Tracking",
      "Reporting & Analytics",
    ],
  },

  {
    id: "attendance-alerts",
    category: "attendance",
    patterns: [
      "attendance alert",
      "absence notification",
      "low attendance alert",
      "alert for missed session",
      "attendance notification",
      "absence tracking",
      "flag absent learner",
      "notify about absence",
    ],
    response:
      "OYEN GRID sends automated alerts when learners miss sessions or fall below your defined attendance threshold.",
    bullets: [
      "Set custom attendance thresholds per program",
      "Email or in-platform alerts sent to coordinators",
      "At-risk learner flags visible on the dashboard",
      "Escalation paths for facilitators to follow up",
    ],
    followUpText:
      "Would you like to see how alerts work in the platform?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: ["AI Alerts", "Learner Tracking", "Attendance Tracking"],
  },

  {
    id: "manual-attendance",
    category: "attendance",
    patterns: [
      "manual attendance",
      "in person attendance",
      "physical attendance",
      "check in",
      "register manually",
      "log attendance manually",
      "face to face attendance",
    ],
    response:
      "Yes. OYEN GRID supports manual attendance entry for in-person and hybrid sessions. Facilitators can mark attendance directly from the session management panel.",
    followUpText:
      "Would you like to see how manual check-in works?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Attendance Tracking",
      "Facilitator Management",
      "Attendance Reports",
    ],
  },

  {
    id: "attendance-reports",
    category: "attendance",
    patterns: [
      "attendance report",
      "export attendance",
      "attendance record",
      "attendance sheet",
      "download attendance",
      "attendance log",
      "attendance history",
    ],
    response:
      "Attendance reports in OYEN GRID are auto-generated and exportable in Excel, CSV, or PDF. You can generate reports by session, cohort, or full program.",
    followUpText:
      "Would you like to see how attendance reports are generated?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Export Reports",
      "Reporting & Analytics",
      "Sponsor Reports",
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // REPORTING & ANALYTICS
  // ═══════════════════════════════════════════════════════════════

  {
    id: "reporting-overview",
    category: "reporting",
    patterns: [
      "reporting",
      "how does reporting work",
      "reports",
      "generate reports",
      "report generation",
      "training reports",
      "can i get reports",
      "reporting feature",
    ],
    response:
      "OYEN GRID generates automated reports for every aspect of your training program — from attendance to learner progress to program-level outcomes.",
    bullets: [
      "Attendance reports per session, cohort, or program",
      "Learner progress and completion reports",
      "Facilitator activity summaries",
      "Sponsor and stakeholder summary reports",
      "Custom date range filtering",
    ],
    followUpText: "Would you like to see a sample report in a demo?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Export Reports",
      "Analytics Dashboard",
      "Sponsor Reports",
      "Attendance Reports",
    ],
  },

  {
    id: "export-reports",
    category: "reporting",
    patterns: [
      "export report",
      "download report",
      "export data",
      "download data",
      "can i export",
      "report export",
      "export to excel",
      "export to pdf",
      "excel export",
      "pdf export",
      "do you support excel",
      "csv export",
      "download excel",
      "save report",
    ],
    response:
      "Yes. All reports in OYEN GRID can be exported in multiple formats for sharing with stakeholders.",
    bullets: [
      "Export to Excel (XLSX) for further analysis",
      "Export to CSV for custom data processing",
      "Export to PDF for formal submissions and presentations",
      "One-click export from any report or dashboard view",
    ],
    followUpText: "Would you like to see what a full export looks like?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Reporting & Analytics",
      "Sponsor Reports",
      "Attendance Reports",
    ],
  },

  {
    id: "sponsor-reports",
    category: "reporting",
    patterns: [
      "sponsor report",
      "donor report",
      "stakeholder report",
      "funder report",
      "report for sponsor",
      "grant report",
      "reporting to donors",
      "program outcomes report",
      "funding report",
    ],
    response:
      "OYEN GRID supports sponsor-ready reports that summarize program outcomes, attendance, and learner progress in a clean, shareable format.",
    bullets: [
      "High-level summary dashboards for sponsors",
      "Learner completion and certification rates",
      "Attendance and engagement data by cohort",
      "Exportable as PDF for formal submissions",
    ],
    followUpText: "Would you like to see a sponsor report example?",
    ctaButtons: ["Book a Demo", "Contact Sales"],
    followUpTopics: [
      "Export Reports",
      "NGO Programs",
      "Program Management",
    ],
  },

  {
    id: "analytics-dashboard",
    category: "reporting",
    patterns: [
      "analytics dashboard",
      "analytics",
      "data analytics",
      "dashboard",
      "reporting dashboard",
      "insights",
      "program insights",
      "data visualization",
      "performance analytics",
      "program performance",
      "kpi",
      "metrics",
    ],
    response:
      "The OYEN GRID analytics dashboard gives you a real-time overview of all key training metrics in one view.",
    bullets: [
      "Program enrollment and completion rates",
      "Attendance trends across cohorts",
      "Learner engagement heatmaps",
      "Facilitator activity summaries",
      "Comparative analytics across programs",
    ],
    followUpText:
      "Would you like to see the analytics dashboard in a live session?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Cohort Analytics",
      "Attendance Tracking",
      "Reporting & Analytics",
    ],
  },

  {
    id: "real-time-analytics",
    category: "reporting",
    patterns: [
      "real time data",
      "live data",
      "real-time analytics",
      "live analytics",
      "up to date data",
      "instant reporting",
      "live attendance data",
      "live monitoring",
    ],
    response:
      "OYEN GRID provides real-time data across attendance, learner activity, and program performance. Dashboards refresh automatically during and after sessions.",
    followUpText: "Would you like to see real-time monitoring in action?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Attendance Dashboard",
      "Analytics Dashboard",
      "AI Alerts",
    ],
  },

  {
    id: "custom-reports",
    category: "reporting",
    patterns: [
      "custom report",
      "custom analytics",
      "build a report",
      "bespoke report",
      "tailor reports",
      "specific report",
      "custom dashboard",
    ],
    response:
      "OYEN GRID offers custom reporting configurations for Enterprise clients. Standard clients can filter and export built-in reports by date, cohort, program, and learner group.",
    followUpText:
      "Would you like to discuss custom reporting with our team?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Enterprise Plan", "Reporting & Analytics", "Export Reports"],
  },

  // ═══════════════════════════════════════════════════════════════
  // FACILITATOR MANAGEMENT
  // ═══════════════════════════════════════════════════════════════

  {
    id: "facilitator-management",
    category: "facilitator",
    patterns: [
      "facilitator management",
      "manage facilitators",
      "add facilitator",
      "facilitator role",
      "trainer management",
      "facilitator dashboard",
      "facilitator access",
      "how many facilitators",
      "multiple facilitators",
    ],
    response:
      "OYEN GRID includes robust facilitator management tools, allowing you to assign, manage, and monitor facilitators across all your training programs.",
    bullets: [
      "Assign facilitators to specific programs or cohorts",
      "Facilitator-specific dashboards and views",
      "Activity logs for each facilitator",
      "Facilitators can log session notes and flag learner issues",
      "No limit on the number of facilitators",
    ],
    followUpText: "Would you like to see facilitator tools in a demo?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Team Collaboration",
      "Program Management",
      "Cohort Management",
    ],
  },

  {
    id: "facilitator-roles",
    category: "facilitator",
    patterns: [
      "facilitator role",
      "trainer role",
      "user roles",
      "roles and permissions",
      "what can a facilitator do",
      "facilitator permissions",
      "access levels",
      "role based access",
    ],
    response:
      "OYEN GRID uses a role-based access system with distinct roles for Administrators, Program Coordinators, and Facilitators.",
    bullets: [
      "Administrators: Full platform access and configuration",
      "Coordinators: Manage assigned programs and cohorts",
      "Facilitators: Access session-level tools and learner notes",
      "Custom role permissions available on Enterprise plans",
    ],
    followUpText: "Would you like to learn more about role management?",
    ctaButtons: ["Book a Demo", "Contact Sales"],
    followUpTopics: [
      "Team Collaboration",
      "Enterprise Plan",
      "Program Management",
    ],
  },

  {
    id: "facilitator-notes",
    category: "facilitator",
    patterns: [
      "facilitator notes",
      "trainer notes",
      "session notes for facilitator",
      "log notes",
      "facilitator log",
      "add notes",
    ],
    response:
      "Facilitators in OYEN GRID can log session notes, flag learner concerns, and add observations directly to learner profiles. These notes are visible to program coordinators and administrators.",
    followUpText: "Would you like to see how facilitator notes work?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "AI Session Notes",
      "Learner Tracking",
      "Team Collaboration",
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // TEAM COLLABORATION
  // ═══════════════════════════════════════════════════════════════

  {
    id: "team-collaboration",
    category: "collaboration",
    patterns: [
      "team collaboration",
      "collaborate",
      "multiple trainers",
      "work together",
      "can facilitators collaborate",
      "team access",
      "shared access",
      "team management",
      "multiple admins",
      "coordinator collaboration",
    ],
    response:
      "Yes. OYEN GRID is designed for team-based training operations. Multiple facilitators, coordinators, and administrators can work simultaneously.",
    bullets: [
      "Real-time updates visible to all team members",
      "Assign tasks and notes to specific team members",
      "Role-based access keeps each user focused on their scope",
      "Full activity logs for accountability across the team",
    ],
    followUpText: "Would you like to see how team collaboration works?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Facilitator Management",
      "Program Management",
      "Role Management",
    ],
  },

  {
    id: "multiple-admins",
    category: "collaboration",
    patterns: [
      "multiple admins",
      "several admins",
      "more than one admin",
      "admin access",
      "who can be admin",
      "multiple users",
      "user management",
      "team members access",
    ],
    response:
      "Yes. OYEN GRID supports multiple administrators. Each organization can have multiple admin accounts with role-appropriate access and customizable permissions.",
    followUpText:
      "Would you like to explore enterprise team configurations?",
    ctaButtons: ["Contact Sales", "Book a Demo"],
    followUpTopics: [
      "Role Management",
      "Enterprise Plan",
      "Team Collaboration",
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // AI FEATURES
  // ═══════════════════════════════════════════════════════════════

  {
    id: "ai-overview",
    category: "ai",
    patterns: [
      "does oyen use ai",
      "artificial intelligence",
      "ai features",
      "ai tools",
      "machine learning",
      "does oyen grid use ai",
      "ai powered",
      "smart features",
      "ai capabilities",
      "what ai does oyen have",
      "intelligent features",
    ],
    response:
      "Yes. OYEN GRID integrates AI across key areas of the platform to reduce administrative burden and improve program quality.",
    bullets: [
      "AI Session Notes: Automatic session summaries from live calls",
      "AI Attendance Detection: Auto-capture from virtual platforms",
      "AI Alerts: Proactive learner risk and engagement flags",
      "AI Action Point Extraction: Pulls key decisions from sessions",
      "AI Report Summaries: Narrative summaries for stakeholders",
    ],
    followUpText: "Would you like a detailed walkthrough of our AI tools?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "AI Session Notes",
      "AI Alerts",
      "Attendance Tracking",
      "Reporting & Analytics",
    ],
  },

  {
    id: "ai-session-notes",
    category: "ai",
    patterns: [
      "ai session notes",
      "session notes",
      "ai notes",
      "automatic notes",
      "how do ai session notes work",
      "session summary",
      "meeting notes",
      "ai transcription",
      "auto notes",
      "session recording summary",
    ],
    response:
      "AI Session Notes automatically generate structured summaries of your training sessions from live call data.",
    bullets: [
      "Captures key discussion points and topics covered",
      "Extracts action items and decisions made",
      "Flags attendance anomalies detected during the session",
      "Summaries stored in the session record for team review",
      "Available for Zoom and Google Meet sessions",
    ],
    followUpText: "Would you like to see AI Session Notes in a live demo?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "AI Alerts",
      "Zoom Integration",
      "Attendance Tracking",
      "AI Summaries",
    ],
  },

  {
    id: "ai-alerts",
    category: "ai",
    patterns: [
      "ai alert",
      "smart alert",
      "ai notification",
      "automated alert",
      "proactive alert",
      "ai flag",
      "risk alert",
      "engagement alert",
      "automated notification",
      "smart notification",
    ],
    response:
      "OYEN GRID's AI Alerts proactively monitor learner and program health and notify coordinators before issues escalate.",
    bullets: [
      "Low attendance alerts for at-risk learners",
      "Engagement drop-off notifications",
      "Session no-show alerts",
      "Program completion risk flags",
      "Alerts delivered via email and in-platform dashboard",
    ],
    followUpText: "Would you like to see how AI alerts work in practice?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Attendance Tracking",
      "Learner Tracking",
      "AI Session Notes",
    ],
  },

  {
    id: "ai-summaries",
    category: "ai",
    patterns: [
      "ai summary",
      "automated summary",
      "report summary",
      "program summary",
      "narrative summary",
      "executive summary",
      "ai generated report",
      "summary report",
    ],
    response:
      "OYEN GRID can generate AI-written narrative summaries for training reports — especially useful for sponsor submissions and board presentations.",
    bullets: [
      "Plain-language summaries of program outcomes",
      "Highlights key achievements and attendance trends",
      "One-click generation from the reporting module",
      "Exportable as PDF or included in full reports",
    ],
    followUpText: "Would you like to see AI summaries in action?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Reporting & Analytics",
      "Sponsor Reports",
      "Export Reports",
    ],
  },

  {
    id: "ai-coordination",
    category: "ai",
    patterns: [
      "ai coordination",
      "ai coordinator",
      "coordination tools",
      "admin tools",
      "ai administration",
      "automate admin",
      "reduce admin work",
      "save time with ai",
      "ai efficiency",
      "administrative automation",
    ],
    response:
      "OYEN GRID's AI coordination tools are designed to eliminate the most time-consuming administrative tasks in training operations.",
    bullets: [
      "Automated attendance capture and logging",
      "Auto-generated session summaries",
      "Smart scheduling recommendations",
      "Automated reminder and follow-up messages",
      "AI-assisted report generation",
    ],
    followUpText:
      "Would you like to see how much admin time OYEN GRID can save?",
    ctaButtons: ["Book a Demo", "Contact Sales"],
    followUpTopics: [
      "AI Session Notes",
      "AI Alerts",
      "Reporting & Analytics",
    ],
  },

  {
    id: "ai-action-points",
    category: "ai",
    patterns: [
      "action points",
      "extract action points",
      "action items",
      "meeting action items",
      "ai extract",
      "key decisions",
      "follow up actions",
    ],
    response:
      "OYEN GRID's AI can extract action items and key decisions directly from session recordings or transcripts, creating a structured follow-up list that's accessible to all coordinators and facilitators.",
    followUpText:
      "Would you like to see AI action point extraction in a demo?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: ["AI Session Notes", "AI Coordination Tools", "Facilitator Notes"],
  },

  // ═══════════════════════════════════════════════════════════════
  // INTEGRATIONS
  // ═══════════════════════════════════════════════════════════════

  {
    id: "integrations-overview",
    category: "integrations",
    patterns: [
      "integrations",
      "what integrations",
      "does it integrate",
      "third party",
      "connect with",
      "works with",
      "compatible with",
      "integration support",
      "api integration",
      "connect oyen grid",
    ],
    response:
      "OYEN GRID integrates with the tools your team already uses for video conferencing, communication, and data management.",
    bullets: [
      "Zoom (attendance and session data)",
      "Google Meet (attendance sync)",
      "Microsoft Teams (session tracking)",
      "Slack (notifications and alerts)",
      "Google Calendar and Outlook (scheduling)",
      "Excel/CSV (data import and export)",
      "API access for custom integrations",
    ],
    followUpText:
      "Would you like to discuss a specific integration need?",
    ctaButtons: ["Contact Sales", "Book a Demo"],
    followUpTopics: [
      "Zoom Integration",
      "Google Meet",
      "Microsoft Teams",
      "Custom API",
    ],
  },

  {
    id: "zoom-integration",
    category: "integrations",
    patterns: [
      "zoom integration",
      "connect zoom",
      "zoom support",
      "oyen with zoom",
      "zoom compatibility",
      "does it work with zoom",
      "zoom and oyen",
    ],
    response:
      "Yes. OYEN GRID has a native Zoom integration that automatically syncs attendance, session data, and participant lists from your Zoom sessions.",
    followUpText: "Would you like to see the Zoom integration in action?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: ["AI Session Notes", "Attendance Tracking", "Integrations"],
  },

  {
    id: "google-meet-integration",
    category: "integrations",
    patterns: [
      "google meet",
      "google meet integration",
      "connect google meet",
      "does it work with google meet",
      "google meet attendance",
    ],
    response:
      "Yes. OYEN GRID supports Google Meet attendance syncing. Session participation data from Google Meet is automatically imported into your attendance records.",
    followUpText: "Would you like to see how this works in a demo?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: ["Zoom Integration", "Attendance Tracking", "Integrations"],
  },

  {
    id: "teams-integration",
    category: "integrations",
    patterns: [
      "microsoft teams",
      "ms teams",
      "teams integration",
      "connect teams",
      "does it work with teams",
      "teams attendance",
    ],
    response:
      "Yes. Microsoft Teams integration is available in OYEN GRID for session tracking and attendance monitoring. Contact our team to configure Teams integration for your account.",
    followUpText:
      "Would you like to discuss Teams integration with our team?",
    ctaButtons: ["Contact Sales", "Book a Demo"],
    followUpTopics: ["Zoom Integration", "Integrations", "Enterprise Plan"],
  },

  {
    id: "custom-integrations",
    category: "integrations",
    patterns: [
      "custom integration",
      "api",
      "rest api",
      "webhook",
      "developer api",
      "can i build integration",
      "custom connection",
      "api access",
      "integration api",
    ],
    response:
      "OYEN GRID offers API access for organizations that need custom integrations with internal systems or third-party tools. Our engineering team can assist with custom integration scopes.",
    followUpText:
      "Would you like to speak with our team about a custom integration?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Enterprise Plan", "Integrations", "Security"],
  },

  {
    id: "lms-integration",
    category: "integrations",
    patterns: [
      "lms integration",
      "learning management system",
      "lms",
      "moodle",
      "canvas",
      "blackboard",
      "connect to lms",
      "existing lms",
    ],
    response:
      "OYEN GRID can complement existing LMS platforms by handling the operational side of training delivery — attendance, coordination, and reporting — while your LMS manages content delivery. API integration options are available for seamless data flow.",
    followUpText:
      "Would you like to explore LMS integration options?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: [
      "Custom API",
      "Integrations",
      "Data Migration",
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // PRICING
  // ═══════════════════════════════════════════════════════════════

  {
    id: "pricing-overview",
    category: "pricing",
    patterns: [
      "pricing",
      "how much",
      "cost",
      "price",
      "subscription",
      "plans",
      "what is the price",
      "pricing plans",
      "what do you charge",
      "monthly cost",
      "annual cost",
      "pricing tiers",
      "how much does it cost",
    ],
    response:
      "OYEN GRID offers flexible pricing tiers designed for organizations of different sizes and needs.",
    bullets: [
      "Starter Plan: Ideal for small teams and pilot programs",
      "Standard Plan: For growing organizations with multiple cohorts",
      "Enterprise Plan: Custom pricing for large-scale deployments",
      "NGO and educational discounts available",
    ],
    followUpText:
      "Would you like to view detailed plans or speak with our sales team?",
    ctaButtons: ["View Pricing Plans", "Contact Sales"],
    followUpTopics: [
      "Enterprise Plan",
      "NGO Pricing",
      "Free Trial",
      "Book a Demo",
    ],
  },

  {
    id: "enterprise-pricing",
    category: "pricing",
    patterns: [
      "enterprise pricing",
      "enterprise plan cost",
      "enterprise cost",
      "large organization pricing",
      "custom pricing",
      "negotiated pricing",
      "volume pricing",
      "bulk pricing",
    ],
    response:
      "Enterprise pricing is custom-scoped based on your organization's size, number of programs, learners, and integration requirements. Our sales team will work with you to build the right package.",
    followUpText:
      "Would you like to speak with our enterprise sales team?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: [
      "Enterprise Plan",
      "Custom Solutions",
      "SLA & Support",
    ],
  },

  {
    id: "ngo-pricing",
    category: "pricing",
    patterns: [
      "ngo pricing",
      "non profit pricing",
      "nonprofit discount",
      "ngo discount",
      "charity pricing",
      "social sector pricing",
      "development organization pricing",
    ],
    response:
      "We offer special pricing considerations for NGOs, nonprofits, and social sector organizations. Our team can discuss flexible payment and pricing structures suited to grant-funded programs.",
    followUpText:
      "Would you like to speak with our team about NGO-specific pricing?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["NGO Programs", "Pricing", "Book a Demo"],
  },

  {
    id: "monthly-vs-annual",
    category: "pricing",
    patterns: [
      "monthly plan",
      "annual plan",
      "yearly plan",
      "monthly vs annual",
      "pay monthly",
      "pay annually",
      "billing",
      "subscription cycle",
      "billing cycle",
    ],
    response:
      "OYEN GRID is available on both monthly and annual billing cycles. Annual plans include a discount compared to monthly billing. Our team can walk you through the cost comparison.",
    followUpText: "Would you like to get a pricing breakdown?",
    ctaButtons: ["View Pricing Plans", "Contact Sales"],
    followUpTopics: ["Pricing", "Free Trial", "Enterprise Plan"],
  },

  {
    id: "payment-methods",
    category: "pricing",
    patterns: [
      "payment method",
      "how to pay",
      "payment options",
      "card payment",
      "bank transfer",
      "invoice",
      "billing method",
    ],
    response:
      "OYEN GRID accepts multiple payment methods including card payments, bank transfers, and invoice-based billing for enterprise clients. Contact our team to discuss the right billing arrangement for your organization.",
    followUpText: "Would you like to speak with our team about billing?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Pricing", "Enterprise Plan"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SECURITY
  // ═══════════════════════════════════════════════════════════════

  {
    id: "security-overview",
    category: "security",
    patterns: [
      "how secure",
      "security",
      "data security",
      "is it secure",
      "secure platform",
      "cybersecurity",
      "platform security",
      "how safe is my data",
      "data safety",
    ],
    response:
      "OYEN GRID is built with enterprise-grade security standards to protect your organization's data and learner information.",
    bullets: [
      "End-to-end data encryption (in transit and at rest)",
      "Role-based access control across all user types",
      "Secure cloud infrastructure",
      "Regular security audits and penetration testing",
      "Two-factor authentication (2FA) support",
    ],
    followUpText:
      "Would you like a detailed security briefing for your organization?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: [
      "Data Protection",
      "GDPR Compliance",
      "Enterprise Plan",
    ],
  },

  {
    id: "data-protection",
    category: "security",
    patterns: [
      "data protection",
      "protect data",
      "learner data",
      "personal data",
      "data privacy",
      "privacy policy",
      "data handling",
      "pii",
      "sensitive data",
    ],
    response:
      "OYEN GRID takes data protection seriously. Learner personal data is handled in compliance with data protection regulations and stored securely.",
    bullets: [
      "Data minimization principles applied",
      "Explicit consent mechanisms for learner data",
      "Data access restricted by role and permission scope",
      "Regular data audits",
      "Data deletion available upon request",
    ],
    followUpText:
      "Would you like to speak with our data protection team?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Security", "GDPR Compliance", "Enterprise Plan"],
  },

  {
    id: "gdpr-compliance",
    category: "security",
    patterns: [
      "gdpr",
      "data compliance",
      "compliance",
      "regulatory compliance",
      "ndpr",
      "data regulation",
      "privacy regulation",
      "is it gdpr compliant",
      "data laws",
    ],
    response:
      "OYEN GRID is designed with GDPR principles in mind, including data minimization, user consent, right to access, and right to erasure for learner data.",
    followUpText:
      "Would you like a compliance overview for your jurisdiction?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Data Protection", "Security", "Enterprise Plan"],
  },

  {
    id: "data-encryption",
    category: "security",
    patterns: [
      "data encryption",
      "encryption",
      "encrypted data",
      "is data encrypted",
      "ssl",
      "tls",
      "data in transit",
      "data at rest",
    ],
    response:
      "Yes. All data in OYEN GRID is encrypted both in transit (TLS/SSL) and at rest. This applies to learner data, session records, attendance logs, and reports.",
    followUpText: "Would you like a full security overview?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Security", "Data Protection", "Enterprise Plan"],
  },

  {
    id: "data-storage",
    category: "security",
    patterns: [
      "where is data stored",
      "data storage",
      "data location",
      "cloud storage",
      "server location",
      "data center",
      "where is my data",
      "data residency",
    ],
    response:
      "OYEN GRID stores data on secure, enterprise-grade cloud infrastructure. Organizations with specific data residency requirements (e.g., in-country storage) should contact our enterprise team for custom configurations.",
    followUpText:
      "Would you like to discuss data residency for your organization?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Security", "Enterprise Plan", "Data Protection"],
  },

  {
    id: "access-control",
    category: "security",
    patterns: [
      "access control",
      "who can access",
      "permission control",
      "restrict access",
      "limit access",
      "control who sees",
      "role access",
      "data access",
    ],
    response:
      "OYEN GRID uses a granular role-based access control (RBAC) system. Administrators define what each user can see and do, ensuring sensitive data is only accessible to authorized personnel.",
    followUpText: "Would you like to see how access control is configured?",
    ctaButtons: ["Book a Demo", "Contact Sales"],
    followUpTopics: ["Security", "Facilitator Roles", "Enterprise Plan"],
  },

  // ═══════════════════════════════════════════════════════════════
  // ENTERPRISE
  // ═══════════════════════════════════════════════════════════════

  {
    id: "enterprise-overview",
    category: "enterprise",
    patterns: [
      "enterprise plan",
      "enterprise solution",
      "large organization",
      "enterprise features",
      "enterprise deployment",
      "large scale",
      "enterprise support",
      "enterprise account",
      "is there an enterprise plan",
      "enterprise version",
    ],
    response:
      "OYEN GRID Enterprise is designed for large organizations that need custom configurations, dedicated support, and advanced operational features.",
    bullets: [
      "Unlimited programs, cohorts, and learners",
      "Dedicated account manager",
      "Custom integrations and API access",
      "SLA-backed uptime guarantees",
      "Priority support with escalation paths",
      "Custom role and permission configurations",
      "Data residency options",
    ],
    followUpText:
      "Would you like to speak with our enterprise sales team?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: [
      "Enterprise Pricing",
      "Custom Solutions",
      "SLA & Support",
      "Security",
    ],
  },

  {
    id: "custom-solutions",
    category: "enterprise",
    patterns: [
      "custom solution",
      "bespoke",
      "tailor made",
      "custom build",
      "customize",
      "customization",
      "white label",
      "branded platform",
      "custom features",
    ],
    response:
      "We offer custom configurations for enterprise clients, including white-label branding, custom feature development, and bespoke integration work.",
    followUpText:
      "Would you like to discuss your custom requirements with our team?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: [
      "Enterprise Plan",
      "Custom API",
      "Enterprise Pricing",
    ],
  },

  {
    id: "sla-support",
    category: "enterprise",
    patterns: [
      "sla",
      "service level agreement",
      "uptime guarantee",
      "guaranteed uptime",
      "support sla",
      "reliability",
      "availability",
      "99.9",
      "uptime",
    ],
    response:
      "OYEN GRID Enterprise plans include SLA-backed uptime guarantees and priority support to ensure your training programs run without interruption.",
    followUpText:
      "Would you like to discuss SLA requirements for your organization?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: [
      "Enterprise Plan",
      "Enterprise Pricing",
      "Security",
    ],
  },

  {
    id: "dedicated-support",
    category: "enterprise",
    patterns: [
      "dedicated support",
      "priority support",
      "dedicated team",
      "account manager",
      "personal account manager",
      "dedicated success manager",
    ],
    response:
      "Standard and Enterprise plan clients receive a dedicated account manager who provides proactive support, quarterly reviews, and acts as your primary point of contact at OYEN GRID.",
    followUpText:
      "Would you like to speak with our team about your plan options?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Enterprise Plan", "Pricing", "Customer Support"],
  },

  // ═══════════════════════════════════════════════════════════════
  // IMPLEMENTATION
  // ═══════════════════════════════════════════════════════════════

  {
    id: "implementation-overview",
    category: "implementation",
    patterns: [
      "implementation",
      "how to implement",
      "set up oyen grid",
      "deploy oyen",
      "implementation process",
      "rollout",
      "deploy",
      "setup process",
      "how do i set up",
    ],
    response:
      "OYEN GRID implementation is managed by our team from start to go-live. We handle the heavy lifting so your team can focus on training delivery.",
    bullets: [
      "Discovery and requirements gathering",
      "Account configuration and customization",
      "Data migration from existing systems",
      "Team onboarding and training sessions",
      "Go-live support and post-launch monitoring",
    ],
    followUpText:
      "Would you like to discuss your implementation timeline?",
    ctaButtons: ["Contact Sales", "Book a Demo"],
    followUpTopics: [
      "Implementation Timeline",
      "Data Migration",
      "Onboarding",
      "Training & Support",
    ],
  },

  {
    id: "implementation-timeline",
    category: "implementation",
    patterns: [
      "how long does implementation take",
      "implementation timeline",
      "how long to set up",
      "time to implement",
      "go live time",
      "setup time",
      "deployment time",
      "when can i start",
    ],
    response:
      "Implementation timelines vary based on your organization's size and complexity. Most organizations go live within 2–6 weeks.",
    bullets: [
      "Small teams: as fast as 1–2 weeks",
      "Mid-size organizations: 3–4 weeks",
      "Enterprise deployments: 4–8 weeks (including custom integrations)",
      "Our team supports you through every phase",
    ],
    followUpText:
      "Would you like to discuss your specific timeline with our team?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Implementation", "Onboarding", "Data Migration"],
  },

  {
    id: "onboarding",
    category: "implementation",
    patterns: [
      "onboarding",
      "onboard",
      "do you provide onboarding",
      "onboarding support",
      "team onboarding",
      "user training",
      "platform training",
      "get my team started",
    ],
    response:
      "Yes. OYEN GRID provides comprehensive onboarding support for all new clients. Our team trains your administrators, coordinators, and facilitators before go-live.",
    bullets: [
      "Dedicated onboarding sessions per team role",
      "Video walkthroughs and documentation provided",
      "Hands-on configuration support",
      "Post-go-live check-ins to ensure smooth operation",
    ],
    followUpText: "Would you like to start the onboarding conversation?",
    ctaButtons: ["Book a Demo", "Contact Sales"],
    followUpTopics: [
      "Implementation",
      "Training & Support",
      "Getting Started",
    ],
  },

  {
    id: "data-migration",
    category: "implementation",
    patterns: [
      "data migration",
      "migrate data",
      "move data",
      "transfer data",
      "existing data",
      "import existing",
      "migrate from another system",
      "bring my data",
      "migrate programs",
      "migration support",
    ],
    response:
      "OYEN GRID supports data migration from spreadsheets, existing LMS platforms, or other training management systems.",
    bullets: [
      "Learner rosters imported from Excel/CSV",
      "Historical program data mapped to OYEN GRID format",
      "Dedicated migration support from our team",
      "Data validation and review before full migration",
    ],
    followUpText:
      "Would you like to discuss your migration requirements?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Implementation", "Upload Learners", "Onboarding"],
  },

  {
    id: "training-support",
    category: "implementation",
    patterns: [
      "do you provide training",
      "training for staff",
      "staff training",
      "team training",
      "user training",
      "learn how to use",
      "help with training",
      "training materials",
    ],
    response:
      "Yes. We provide comprehensive training for your team as part of onboarding, and ongoing training resources are available post-launch.",
    bullets: [
      "Role-specific training sessions (admins, facilitators, coordinators)",
      "Video tutorials and documentation library",
      "Live Q&A sessions during onboarding",
      "Ongoing access to the OYEN GRID Help Center",
    ],
    followUpText: "Would you like to speak with our onboarding team?",
    ctaButtons: ["Contact Sales", "Book a Demo"],
    followUpTopics: ["Onboarding", "Implementation", "Customer Support"],
  },

  {
    id: "migration-timeline",
    category: "implementation",
    patterns: [
      "migration timeline",
      "how long migration takes",
      "time to migrate",
      "migration duration",
      "quick migration",
    ],
    response:
      "Data migration timelines depend on the volume and complexity of your data. Simple CSV uploads can be completed in hours. Full historical migrations from other platforms typically take 1–2 weeks with our team's support.",
    followUpText: "Would you like to discuss your migration scope?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Data Migration", "Implementation Timeline", "Onboarding"],
  },

  // ═══════════════════════════════════════════════════════════════
  // CUSTOMER SUPPORT
  // ═══════════════════════════════════════════════════════════════

  {
    id: "customer-support",
    category: "support",
    patterns: [
      "customer support",
      "support",
      "how do i contact support",
      "get help",
      "support team",
      "contact oyen",
      "help desk",
      "technical support",
      "i have an issue",
      "problem with the platform",
    ],
    response:
      "OYEN GRID provides multi-channel support to help you resolve issues quickly and keep your programs running smoothly.",
    bullets: [
      "In-platform help chat and ticketing",
      "Email support with defined response SLAs",
      "Dedicated account managers for Standard and Enterprise plans",
      "Help Center with documentation and tutorials",
      "Priority support for Enterprise clients",
    ],
    followUpText: "Would you like to contact our support team now?",
    ctaButtons: ["Contact Support"],
    followUpTopics: ["Help Center", "Account Manager", "Enterprise Plan"],
  },

  {
    id: "help-center",
    category: "support",
    patterns: [
      "help center",
      "documentation",
      "knowledge base",
      "user guide",
      "manual",
      "tutorial",
      "how to guide",
      "help articles",
      "support articles",
    ],
    response:
      "The OYEN GRID Help Center contains step-by-step guides, video tutorials, and FAQs covering all platform features. It is accessible directly from within your OYEN GRID account.",
    followUpText:
      "Would you like to be directed to our Help Center?",
    ctaButtons: ["Contact Support"],
    followUpTopics: ["Customer Support", "Onboarding", "Training & Support"],
  },

  {
    id: "support-hours",
    category: "support",
    patterns: [
      "support hours",
      "when is support available",
      "24 7 support",
      "weekend support",
      "after hours support",
      "response time",
    ],
    response:
      "Our standard support team is available during business hours (Mon–Fri). Enterprise clients with SLA agreements have access to extended support coverage. Typical email response time is under 1 business day.",
    followUpText: "Would you like to discuss support options for your plan?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: ["Customer Support", "Enterprise Plan", "SLA & Support"],
  },

  // ═══════════════════════════════════════════════════════════════
  // WHO USES OYEN GRID
  // ═══════════════════════════════════════════════════════════════

  {
    id: "ngo-usage",
    category: "usage",
    patterns: [
      "ngo",
      "non-governmental organization",
      "non profit",
      "nonprofit",
      "charity",
      "can ngos use oyen",
      "development organization",
      "ngo training",
      "social sector",
    ],
    response:
      "Yes. OYEN GRID is widely used by NGOs and development organizations to manage training programs funded by grants and institutional donors.",
    bullets: [
      "Donor-ready attendance records and outcome reports",
      "Multi-cohort management across program sites",
      "Beneficiary tracking and progress monitoring",
      "Special NGO pricing available",
    ],
    followUpText: "Would you like to speak with our NGO specialist?",
    ctaButtons: ["Contact Sales", "Book a Demo"],
    followUpTopics: [
      "Sponsor Reports",
      "NGO Pricing",
      "Cohort Management",
      "Learner Tracking",
    ],
  },

  {
    id: "school-usage",
    category: "usage",
    patterns: [
      "school",
      "schools",
      "education",
      "academic",
      "university",
      "college",
      "can schools use oyen",
      "educational institution",
      "campus",
    ],
    response:
      "Yes. Schools, universities, and educational institutions use OYEN GRID to manage structured training programs, short courses, and professional development programs.",
    bullets: [
      "Course scheduling and facilitator assignment",
      "Student/learner enrollment and progress tracking",
      "Attendance monitoring per class or session",
      "Progress reports for faculty and administration",
    ],
    followUpText:
      "Would you like to book a demo tailored to educational programs?",
    ctaButtons: ["Book a Demo", "Contact Sales"],
    followUpTopics: [
      "Program Management",
      "Learner Tracking",
      "Reporting & Analytics",
    ],
  },

  {
    id: "government-usage",
    category: "usage",
    patterns: [
      "government",
      "government agency",
      "government program",
      "public sector",
      "can government use oyen",
      "ministry",
      "agency training",
      "civil service training",
      "civil service",
    ],
    response:
      "Yes. Government agencies and public sector organizations use OYEN GRID to manage civil service training, workforce development, and compliance programs.",
    bullets: [
      "Compliant reporting and audit-ready records",
      "Large-scale learner management",
      "Multi-department program coordination",
      "Secure, role-based access for government teams",
    ],
    followUpText:
      "Would you like to discuss government deployment options?",
    ctaButtons: ["Contact Sales"],
    followUpTopics: [
      "Enterprise Plan",
      "Security",
      "Reporting & Analytics",
      "Data Protection",
    ],
  },

  {
    id: "corporate-usage",
    category: "usage",
    patterns: [
      "corporate",
      "company",
      "business",
      "corporate training",
      "employee training",
      "staff training",
      "l&d",
      "learning and development",
      "hr training",
      "workforce training",
    ],
    response:
      "OYEN GRID is a strong fit for corporate L&D teams. It centralizes employee training operations — from scheduling to tracking to reporting — in one platform.",
    bullets: [
      "Program management for onboarding and upskilling",
      "Attendance tracking for virtual and in-person sessions",
      "Team collaboration across HR and L&D departments",
      "Compliance and progress reports for leadership review",
    ],
    followUpText:
      "Would you like to see how OYEN GRID fits your L&D workflow?",
    ctaButtons: ["Book a Demo", "Contact Sales"],
    followUpTopics: [
      "Program Management",
      "Team Collaboration",
      "Reporting & Analytics",
    ],
  },

  {
    id: "remote-training",
    category: "usage",
    patterns: [
      "remote training",
      "virtual training",
      "online training",
      "hybrid training",
      "does it support remote",
      "work from home training",
      "distributed teams",
      "remote learning",
      "virtual program",
      "online learning",
    ],
    response:
      "Yes. OYEN GRID is built for remote and hybrid training delivery. All core features — attendance, reporting, learner tracking, and AI notes — work seamlessly for fully virtual programs.",
    bullets: [
      "Automatic attendance detection from Zoom and Google Meet",
      "AI session summaries for virtual calls",
      "Remote team collaboration tools for coordinators",
      "Learner dashboards accessible from anywhere",
    ],
    followUpText:
      "Would you like to see how OYEN GRID supports remote training?",
    ctaButtons: ["Book a Demo"],
    followUpTopics: [
      "Zoom Integration",
      "AI Session Notes",
      "Attendance Tracking",
      "Team Collaboration",
    ],
  },

  {
    id: "workforce-development",
    category: "usage",
    patterns: [
      "workforce development",
      "workforce training",
      "skill development",
      "upskilling",
      "reskilling",
      "vocational training",
      "professional development",
    ],
    response:
      "OYEN GRID supports workforce development programs of all sizes. Whether you're managing a 50-person upskilling cohort or a national training initiative with thousands of participants, the platform scales to your needs.",
    followUpText:
      "Would you like to discuss your workforce program requirements?",
    ctaButtons: ["Book a Demo", "Contact Sales"],
    followUpTopics: [
      "Cohort Management",
      "Learner Tracking",
      "Program Management",
      "Reporting & Analytics",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// INTENT MATCHING ENGINE
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Matches a natural-language query against the knowledge base.
 * Returns the best matching intent and a confidence score.
 * Confidence = number of patterns from the intent found in the query.
 * A score of 0 means no intent was matched (low confidence / fallback).
 */
export function matchIntent(query: string): MatchResult {
  const normalized = query.toLowerCase().trim();

  // ── Out-of-scope detection ────────────────────────────────────────────────
  const hasOutOfScopeTerms = OUT_OF_SCOPE_TERMS.some((t) =>
    normalized.includes(t)
  );
  const hasInScopeAnchor = IN_SCOPE_ANCHORS.some((t) =>
    normalized.includes(t)
  );

  if (hasOutOfScopeTerms && !hasInScopeAnchor) {
    return { intent: null, confidence: 0, outOfScope: true };
  }

  // ── Score each intent ─────────────────────────────────────────────────────
  let bestScore = 0;
  let bestIntent: KBIntent | null = null;

  for (const intent of KNOWLEDGE_BASE) {
    let score = 0;
    for (const pattern of intent.patterns) {
      if (normalized.includes(pattern.toLowerCase())) {
        score++;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  return {
    intent: bestIntent,
    confidence: bestScore,
    outOfScope: false,
  };
}
