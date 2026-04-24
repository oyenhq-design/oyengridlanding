import { UseCaseLayout, UseCaseData } from "@/components/shared/use-case-layout"
import { Target, SearchCheck, CheckCircle2, Navigation } from "lucide-react"

const internshipsData: UseCaseData = {
  label: "For Internship Programmes",
  hero: {
    title: "Manage incoming talent pipelines with precision",
    subtext: "Track cohorts, evaluate progress, and convert your best interns into full-time hires using a single structured environment."
  },
  problem: {
    title: "Why most internship tracking fails",
    bullets: [
      "No centralized way to evaluate intern performance over time",
      "Supervisors rely on subjective, undocumented feedback",
      "Interns feel lost without a clear, structured roadmap",
      "HR struggles to aggregate data for final hiring decisions"
    ]
  },
  solution: {
    title: "A structured system for how you actually evaluate talent",
    description: "OYEN GRID replaces disconnected onboarding docs and informal check-ins with a rigorous, transparent operating system designed to nurture and measure early-career talent."
  },
  features: [
    {
      title: "Cohort Tracking",
      description: "Manage entire intakes of interns simultaneously, comparing progress and engagement across the board.",
      icon: Target
    },
    {
      title: "Supervisor Notes",
      description: "Equip managers with a dedicated, private space to log evaluations, feedback, and performance metrics securely.",
      icon: SearchCheck
    },
    {
      title: "Progress Evaluation",
      description: "Set clear milestones for interns and track their completion rates in real-time.",
      icon: Navigation
    },
    {
      title: "Completion Tracking",
      description: "Generate comprehensive final reports on intern performance to make objective hiring decisions.",
      icon: CheckCircle2
    }
  ],
  howItWorks: [
    {
      title: "Define the roadmap",
      description: "Create a structured timeline of milestones, training sessions, and evaluation points for the cohort."
    },
    {
      title: "Log feedback continuously",
      description: "Allow supervisors to document intern progress directly against the programme curriculum."
    },
    {
      title: "Make hiring decisions",
      description: "Use aggregated data and completion tracking to identify your top performers objectively."
    }
  ],
  value: {
    title: "What changes when you switch to OYEN GRID",
    items: [
      { before: "Subjective hiring decisions", after: "Data-backed talent evaluation" },
      { before: "Informal, undocumented feedback", after: "Structured supervisor tracking" },
      { before: "Disoriented interns", after: "Clear, milestone-driven roadmaps" }
    ]
  },
  finalCta: {
    title: "Start structuring your talent pipeline",
    subtext: "Stop managing chaos. Start operating with clarity."
  }
}

export default function InternshipProgrammesPage() {
  return <UseCaseLayout data={internshipsData} />
}
