"use client";

import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { WhyOyen } from "@/components/sections/why-oyen";
import { ProofKnowledge } from "@/components/sections/proof-knowledge";
import { EnterpriseSecurity } from "@/components/sections/enterprise-security";
import { GovernanceControl } from "@/components/sections/governance-control";
import { AIIntelligence } from "@/components/sections/ai-intelligence";
import { GlobalInfrastructure } from "@/components/sections/global-infrastructure";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050812]">
      <Header />
      
      {/* NARRATIVE FLOW: PROBLEM -> SOLUTION -> PROOF -> INFRASTRUCTURE */}
      
      {/* 1. THE HOOK */}
      <Hero />
      
      {/* 2. INSTANT AUTHORITY */}
      <SocialProof />
      
      {/* 3. THE "WHY": PROBLEM & STRUCTURAL LOGIC */}
      <WhyOyen />
      
      {/* 4. OPERATIONAL WISDOM (Asymmetric Layout) */}
      <ProofKnowledge />
      
      {/* 5. ABSOLUTE TRUST (Centered / Immersive Band) */}
      <EnterpriseSecurity />
      
      {/* 6. PRECISION CONTROL (Asymmetric Layout) */}
      <GovernanceControl />
      
      {/* 7. PREDICTIVE POWER (Centered / Holographic UI) */}
      <AIIntelligence />
      
      {/* 8. RESILIENT BACKBONE (Asymmetric Layout) */}
      <GlobalInfrastructure />
      
      {/* 9. COMPLETION */}
      <Footer />
    </main>
  );
}
