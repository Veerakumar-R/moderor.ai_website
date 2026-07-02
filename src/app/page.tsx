import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DomainOutcomesSection } from "@/components/DomainOutcomesSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { ProblemSection } from "@/components/ProblemSection";
import { GovernanceSection } from "@/components/GovernanceSection";
import { InfrastructureSection } from "@/components/InfrastructureSection";
import { FrameworksSection } from "@/components/FrameworksSection";
import { HumanControlSection } from "@/components/HumanControlSection";
import { PilotSection } from "@/components/PilotSection";
import { ProofSection } from "@/components/ProofSection";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <Hero />
        <OutcomesSection />
        <DomainOutcomesSection />
        <ProblemSection />
        <GovernanceSection />
        <InfrastructureSection />
        <FrameworksSection />
        <HumanControlSection />
        <PilotSection />
        <ProofSection />
        <FinalCTA ctaBelowDescription />
      </main>
    </>
  );
}
