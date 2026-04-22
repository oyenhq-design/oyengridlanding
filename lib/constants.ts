// Navigation
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
] as const

// Pricing
export const PRICING_TIERS = [
  {
    name: "BASIC",
    price: "₦25,000",
    description: "Perfect for getting started",
    features: [
      "1 programme",
      "50 participants",
      "Basic sessions",
      "Limited storage",
      "1 admin",
    ],
    popular: false,
  },
  {
    name: "STANDARD",
    price: "₦50,000",
    description: "For growing organisations",
    features: [
      "5 programmes",
      "200 participants",
      "Group chat",
      "Attendance tracking",
      "Basic AI (limited)",
      "3 admins",
    ],
    popular: true,
  },
  {
    name: "PREMIUM",
    price: "₦100,000",
    description: "For established programmes",
    features: [
      "Unlimited programmes",
      "500+ participants",
      "Full recordings",
      "Full tracking",
      "Advanced AI",
      "5–10 admins",
    ],
    popular: false,
  },
  {
    name: "PREMIUM+",
    price: "Custom",
    description: "Enterprise solutions",
    features: [
      "Enterprise features",
      "Custom solutions",
      "Dedicated support",
    ],
    popular: false,
  },
] as const

// Dashboard sidebar items
export const DASHBOARD_NAV_ITEMS = [
  { label: "Overview", href: "/app", icon: "Home" },
  { label: "Programmes", href: "/app/programmes", icon: "Briefcase" },
  { label: "Participants", href: "/app/participants", icon: "Users" },
  { label: "Sessions", href: "/app/sessions", icon: "Calendar" },
  { label: "Media Library", href: "/app/media", icon: "Film" },
  { label: "Messages", href: "/app/messages", icon: "MessageSquare" },
  { label: "Notes", href: "/app/notes", icon: "FileText" },
  { label: "Settings", href: "/app/settings", icon: "Settings" },
] as const

// Features
export const FEATURES = [
  {
    title: "Curriculum Architect",
    description: "Design multi-layered programmes with prerequisites, cohorts, and custom learning paths.",
    icon: "Briefcase",
  },
  {
    title: "Precision Delivery",
    description: "Execute live sessions seamlessly with automated scheduling, reminders, and strict access control.",
    icon: "Calendar",
  },
  {
    title: "Centralised Communications",
    description: "Streamline announcements and messaging across cohorts without leaving the platform.",
    icon: "MessageSquare",
  },
  {
    title: "Automated Asset Vault",
    description: "Securely store, organise, and permission class recordings and materials instantly.",
    icon: "Film",
  },
  {
    title: "Performance Analytics",
    description: "Monitor engagement, attendance, and completion rates with granular real-time dashboards.",
    icon: "BarChart3",
  },
  {
    title: "Automated Credentialing",
    description: "Issue verified, branded certificates automatically upon milestone or programme completion.",
    icon: "Award",
  },
] as const

// How it works
export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Create Your Programme",
    description:
      "Set up your programme structure with modules, sessions, and timelines.",
  },
  {
    step: "2",
    title: "Invite & Run Sessions",
    description:
      "Add participants and deliver sessions with live tracking and engagement tools.",
  },
  {
    step: "3",
    title: "Access & Analyse",
    description:
      "Access recordings, track completion, and generate insights from your programme data.",
  },
] as const

// Target users
export const TARGET_USERS = [
  {
    title: "Training Organisations",
    description:
      "Simplify programme delivery and participant management for professional training.",
    icon: "Building2",
  },
  {
    title: "Bootcamps",
    description:
      "Intensive, structured programmes with real-time tracking and engagement.",
    icon: "Zap",
  },
  {
    title: "Corporate Programmes",
    description:
      "Enterprise-grade solutions for internal training and professional development.",
    icon: "Briefcase",
  },
]
