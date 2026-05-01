"use client"

import { UseCaseLayout, UseCaseData } from "@/components/shared/use-case-layout"
import { Globe, Users, BarChart, ShieldCheck } from "lucide-react"

const programsData: UseCaseData = {
  label: "For NGOs & Social Programs",
  hero: {
    title: "Scale your social impact with robust program infrastructure",
    subtext: "Manage distributed cohorts and track real-time outcomes for large-scale developmental initiatives."
  },
  problem: {
    title: "The challenge of scaling social impact",
    bullets: [
      "Fragmented data collection across distributed regional cohorts",
      "Manual reporting processes that delay stakeholder updates",
      "Difficulty in tracking long-term participant engagement",
      "Limited visibility into program delivery quality at scale"
    ]
  },
  solution: {
    title: "A unified system for high-impact program delivery",
    description: "OYEN GRID provides the infrastructure social programs need to move from spreadsheets to systems. It centralises data, automates reporting, and ensures consistent quality across every cohort."
  },
  features: [
    {
      title: "Distributed Cohort Tracking",
      description: "Manage multiple regional programs from a single dashboard with granular visibility into each location.",
      icon: Globe
    },
    {
      title: "Impact Data Hub",
      description: "Automatically aggregate attendance, completion, and assessment data for instant reporting.",
      icon: BarChart
    },
    {
      title: "Participant Lifecycle Management",
      description: "Track the entire journey from registration to milestone completion across various program types.",
      icon: Users
    },
    {
      title: "Verified Compliance",
      description: "Ensure all program activities meet donor and stakeholder requirements with automated audit trails.",
      icon: ShieldCheck
    }
  ],
  howItWorks: [
    {
      title: "Define program structure",
      description: "Set up standardized curriculum and tracking metrics for all your regional cohorts."
    },
    {
      title: "Deploy across regions",
      description: "Invite local coordinators and participants into a structured learning environment."
    },
    {
      title: "Aggregate & Report",
      description: "View real-time impact data and generate comprehensive reports for stakeholders and donors."
    }
  ],
  value: {
    title: "Transforming how programs operate",
    items: [
      { before: "Delayed manual impact reports", after: "Real-time stakeholder dashboards" },
      { before: "Inconsistent cohort management", after: "Standardised regional delivery" },
      { before: "Fragmented participant data", after: "Unified longitudinal tracking" }
    ]
  },
  finalCta: {
    title: "Start scaling your program's impact",
    subtext: "Stop fighting data. Start delivering change."
  }
}

export default function NGOsProgramsPage() {
  return <UseCaseLayout data={programsData} />
}
