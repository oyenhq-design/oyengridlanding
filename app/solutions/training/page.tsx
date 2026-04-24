import { UseCaseLayout, UseCaseData } from "@/components/shared/use-case-layout"
import { ClipboardList, Users, ShieldCheck, FolderSync } from "lucide-react"

const trainingData: UseCaseData = {
  label: "For Training Organisations",
  hero: {
    title: "Run structured training programmes without chaos",
    subtext: "Manage participants, sessions, and progress in one structured system built for real programme delivery."
  },
  problem: {
    title: "Most programmes break down because of this",
    bullets: [
      "Scattered tools (WhatsApp, Zoom, Google Drive)",
      "No visibility into participant progress",
      "Sessions are unstructured and hard to track",
      "No long-term records or continuity"
    ]
  },
  solution: {
    title: "A structured system for how you actually run programmes",
    description: "OYEN GRID is not just a tool. It’s a complete operating system designed exclusively for programme delivery, unifying your operations into a single, seamless environment."
  },
  features: [
    {
      title: "Standardised Delivery",
      description: "Ensure every cohort gets the same high-quality experience with repeatable, structured templates.",
      icon: ClipboardList
    },
    {
      title: "Cohort Tracking",
      description: "Monitor groups and individuals at a glance. Know exactly who is falling behind and who is excelling.",
      icon: Users
    },
    {
      title: "Resource Consolidation",
      description: "Stop hunting for links. Keep all session recordings, notes, and materials in one accessible hub.",
      icon: FolderSync
    },
    {
      title: "Permissions & Roles",
      description: "Give trainers, admins, and participants exactly the access they need, securely and effortlessly.",
      icon: ShieldCheck
    }
  ],
  howItWorks: [
    {
      title: "Create your structure",
      description: "Define your modules, sessions, and requirements inside a clean, logical builder."
    },
    {
      title: "Invite participants",
      description: "Onboard your cohort seamlessly with automated tracking and access control."
    },
    {
      title: "Deliver and track",
      description: "Run live sessions, monitor attendance silently, and track progress effortlessly."
    }
  ],
  value: {
    title: "What changes when you switch to OYEN GRID",
    items: [
      { before: "Scattered tools & links", after: "One unified platform" },
      { before: "Manual spreadsheet tracking", after: "Automated real-time visibility" },
      { before: "Disconnected sessions", after: "Continuous programme flow" }
    ]
  },
  finalCta: {
    title: "Start running structured programmes today",
    subtext: "Stop managing chaos. Start operating with clarity."
  }
}

export default function TrainingOrganisationsPage() {
  return <UseCaseLayout data={trainingData} />
}
