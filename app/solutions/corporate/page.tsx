import { UseCaseLayout, UseCaseData } from "@/components/shared/use-case-layout"
import { Building, Lock, Network, PieChart } from "lucide-react"

const corporateData: UseCaseData = {
  label: "For Corporate Training",
  hero: {
    title: "Standardise and scale internal training across your organisation",
    subtext: "Equip your workforce with consistent, measurable development programmes backed by enterprise-grade controls."
  },
  problem: {
    title: "Most corporate training fails because of this",
    bullets: [
      "Inconsistent training delivery across different departments",
      "Compliance and completion rates are difficult to prove",
      "Sensitive internal materials lack proper access controls",
      "No centralized reporting for HR and management"
    ]
  },
  solution: {
    title: "A structured system for how you actually develop teams",
    description: "OYEN GRID provides the control and oversight enterprise teams require. It transforms fragmented internal training into a standardized, auditable, and secure operating system."
  },
  features: [
    {
      title: "Team-Based Participant Control",
      description: "Organise employees by department, role, or seniority to ensure they receive the exact training they need.",
      icon: Building
    },
    {
      title: "Role-Based Access",
      description: "Strict permission structures for administrators, department heads, internal trainers, and employees.",
      icon: Lock
    },
    {
      title: "Programme Standardisation",
      description: "Deploy templated onboarding and compliance courses globally, ensuring zero deviation in quality.",
      icon: Network
    },
    {
      title: "Internal Reporting",
      description: "Generate instant audits on completion rates, attendance, and engagement for executive review.",
      icon: PieChart
    }
  ],
  howItWorks: [
    {
      title: "Standardise the curriculum",
      description: "Build robust, repeatable training tracks for onboarding, compliance, and upskilling."
    },
    {
      title: "Assign roles and access",
      description: "Deploy training modules to specific departments with strict, secure access controls."
    },
    {
      title: "Track compliance",
      description: "Monitor progress and automatically flag employees who are falling behind on mandatory training."
    }
  ],
  value: {
    title: "What changes when you switch to OYEN GRID",
    items: [
      { before: "Fragmented departmental training", after: "Company-wide standardisation" },
      { before: "Unverifiable completion records", after: "Auditable compliance reporting" },
      { before: "Unsecured document sharing", after: "Enterprise-grade access control" }
    ]
  },
  finalCta: {
    title: "Start standardising your corporate training",
    subtext: "Stop managing chaos. Start operating with clarity."
  }
}

export default function CorporateTrainingPage() {
  return <UseCaseLayout data={corporateData} />
}
