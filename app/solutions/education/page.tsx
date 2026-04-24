"use client"

import { UseCaseLayout, UseCaseData } from "@/components/shared/use-case-layout"
import { BookOpen, GraduationCap, LayoutList, History } from "lucide-react"

const educationData: UseCaseData = {
  label: "For Educational Institutions",
  hero: {
    title: "Scale academic delivery with structured precision",
    subtext: "Organise courses, track student attendance, and maintain permanent academic records in one unified platform."
  },
  problem: {
    title: "Why legacy academic systems hold institutions back",
    bullets: [
      "Clunky, outdated LMS interfaces that frustrate students and faculty",
      "Course materials are scattered across different portals and drives",
      "Manual grading and attendance tracking wastes valuable teaching hours",
      "No centralized, modern way to maintain long-term student histories"
    ]
  },
  solution: {
    title: "A structured system for modern academic delivery",
    description: "OYEN GRID acts as the modern operating system for higher education. It replaces disjointed portals with a lightning-fast, structured environment for delivering courses and tracking student success."
  },
  features: [
    {
      title: "Structured Course Delivery",
      description: "Sequence lectures, assignments, and exams into clean, logical modules that students can easily follow.",
      icon: BookOpen
    },
    {
      title: "Student Tracking",
      description: "Monitor engagement, attendance, and assignment completion across entire graduating classes.",
      icon: GraduationCap
    },
    {
      title: "Content Organisation",
      description: "Centralize all syllabi, lecture recordings, and reading materials securely within the course context.",
      icon: LayoutList
    },
    {
      title: "Long-Term Academic Records",
      description: "Maintain permanent, easily accessible histories of student performance and cohort statistics.",
      icon: History
    }
  ],
  howItWorks: [
    {
      title: "Structure the semester",
      description: "Build out your course syllabi, assign faculty roles, and organize digital materials."
    },
    {
      title: "Enrol students",
      description: "Seamlessly onboard entire cohorts into their specific degree tracks and classes."
    },
    {
      title: "Deliver and assess",
      description: "Run lectures, track attendance automatically, and maintain permanent academic records."
    }
  ],
  value: {
    title: "What changes when you switch to OYEN GRID",
    items: [
      { before: "Clunky, fragmented portals", after: "One lightning-fast, unified system" },
      { before: "Lost syllabi and materials", after: "Centralized, structured course content" },
      { before: "Siloed student data", after: "Comprehensive academic histories" }
    ]
  },
  finalCta: {
    title: "Start modernising your academic delivery",
    subtext: "Stop managing chaos. Start operating with clarity."
  }
}

export default function EducationalInstitutionsPage() {
  return <UseCaseLayout data={educationData} />
}
