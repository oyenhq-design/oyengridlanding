"use client"

import { UseCaseLayout, UseCaseData } from "@/components/shared/use-case-layout"
import { CalendarClock, ShieldAlert, BarChart3, MessageSquareText } from "lucide-react"

const bootcampsData: UseCaseData = {
  label: "For Bootcamps",
  hero: {
    title: "Deliver intensive bootcamps with full control and visibility",
    subtext: "Track every student, enforce attendance, and maintain high completion rates with a system built for intensity.",
    heroImage: "/bootcamp-dashboard.png"
  },
  problem: {
    title: "Most bootcamps break down because of this",
    bullets: [
      "You don't know who is falling behind until it's too late",
      "Manual attendance tracking eats up instruction time",
      "Students get lost in fragmented communication channels",
      "Inconsistent pacing across different cohorts"
    ]
  },
  solution: {
    title: "Stop managing bootcamps. Start operating them.",
    description: "OYEN GRID acts as your bootcamp's operating system. It enforces pacing, silently tracks engagement, and ensures you can focus on teaching rather than administration."
  },
  features: [
    {
      title: "Fixed Timetable System",
      description: "Lock in your curriculum schedule. Ensure every session runs on time, with automated reminders.",
      icon: CalendarClock
    },
    {
      title: "Attendance Enforcement",
      description: "Silent, background attendance tracking. Know instantly if a student misses critical hours.",
      icon: ShieldAlert
    },
    {
      title: "Progress Tracking",
      description: "Visualize cohort health in real-time. Identify struggling students before they drop out.",
      icon: BarChart3
    },
    {
      title: "Group Communication",
      description: "Keep cohort chatter, Q&A, and announcements centralized within the programme context.",
      icon: MessageSquareText
    }
  ],
  howItWorks: [
    {
      title: "Map the journey",
      description: "Sequence your intensive curriculum into structured daily or weekly sessions."
    },
    {
      title: "Launch the cohort",
      description: "Onboard students into a unified environment where everything is instantly available."
    },
    {
      title: "Monitor in real-time",
      description: "Watch engagement metrics and step in exactly when students need support."
    }
  ],
  value: {
    title: "What changes when you switch to OYEN GRID",
    items: [
      { before: "Guessing who is struggling", after: "Data-driven intervention" },
      { before: "Manual roll calls", after: "Automated attendance tracking" },
      { before: "Disjointed cohort experience", after: "Unified, premium student journey" }
    ]
  },
  finalCta: {
    title: "Scale your bootcamp operations today",
    subtext: "Stop managing chaos. Start operating with clarity."
  }
}

export default function BootcampsPage() {
  return <UseCaseLayout data={bootcampsData} />
}
