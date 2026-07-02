// Content model for the GRC Suite — Auditor Workbench product page.
// Kept separate from site.ts so the marketing homepage content stays untouched.
// Presentation lives in src/components/auditor/*, never here.

export const auditorRoute = "/products/auditor-workbench";

export const auditorBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "GRC Suite", href: "/" },
  { label: "Auditor Workbench", href: auditorRoute },
];

export const auditorHero = {
  badge: "GRC Suite · Auditor Workbench",
  titleLine1: "Transform Internal Audits",
  titleLine2: "into Continuous Assurance",
  primaryCta: "Book a Demo",
  secondaryCta: "Explore Capabilities",
  description:
    "AI-powered evidence collection and continuous control validation for internal audit teams. Execute audits faster with intelligent, governed workflows. Stay audit-ready year-round with human-in-the-loop assurance.",
  stat: {
    num: "572+",
    label: "Audits under management across regulated enterprises",
  },
  // Big faded words scrolling through the dark band beneath the hero.
  bandMarquee: [
    "CONTINUOUS ASSURANCE",
    "AUDIT MANAGEMENT",
    "EVIDENCE AUTOMATION",
    "CONTROL VALIDATION",
  ],
  bandTagline: "Partnering with leading frameworks to deliver continuous, governed assurance.",
  kpis: [
    { value: 95, suffix: "%", label: "Faster Audit Readiness" },
    { value: 90, suffix: "%", label: "Reduction in Compliance Overhead" },
    { value: 80, suffix: "%", label: "Faster Risk Response" },
    { text: "Higher", suffix: "", label: "Accuracy Across Control Functions" },
  ],
  kpiSection: {
    eyebrow: "Live Platform Metrics",
    titleLead: "Running in your audit program.",
    titleHighlight: "Results That Matter",
    note: "Live production metrics from Auditor Workbench deployments — not benchmark estimates.",
  },
};

// Sample in-app walkthrough shown inside the device in the hero centre.
export const auditorApp = {
  name: "Auditor Workbench",
  greeting: "Good morning, Auditor",
  steps: ["Plan", "Collect", "Validate", "Report"],
};

export const auditorStats = {
  eyebrow: "Results That Matter",
  note: "Based on Auditor Workbench implementation outcomes.",
  metrics: [
    { value: "95", suffix: "%", label: "Faster Audit Readiness" },
    { value: "90", suffix: "%", label: "Reduction in Compliance Overhead" },
    { value: "80", suffix: "%", label: "Faster Risk Response" },
    { value: "Higher", suffix: "", label: "Accuracy Across Control Functions" },
  ],
};

export const auditorNarrative = {
  tagline: "Manual Audits Can't Keep Up",
  titleLead: "Audit Smarter.",
  titleHighlight: "Not Harder.",
  problem: [
    "Internal audit teams are expected to deliver greater assurance with fewer resources — while managing expanding regulations, growing audit scope, and increasing operational risk.",
    "Yet most audits still depend on spreadsheets, emails, screenshots, and manual evidence collection — slowing execution and limiting visibility into organizational risk.",
    "Auditor Workbench replaces fragmented audit processes with AI-powered execution that improves efficiency, consistency, and governance.",
  ],
  solution: [
    "Auditor Workbench automates the entire audit lifecycle, from planning and evidence collection to control validation, issue management, remediation, and reporting.",
    "AI handles repetitive audit activities while auditors retain complete ownership of every review, approval, and decision.",
    "The result is faster audits, stronger controls, and continuous assurance.",
  ],
};

export const auditorOutcomes = {
  eyebrow: "Business Outcomes That Drive Value",
  titleLead: "Outcomes the board can ",
  titleHighlight: "measure.",
  cards: [
    {
      icon: "Zap",
      name: "Faster Audit Execution",
      desc: "Reduce audit cycles with AI-powered evidence collection and intelligent automation.",
    },
    {
      icon: "BadgeCheck",
      name: "Better Audit Quality",
      desc: "Standardize audit planning, execution, and reporting across every engagement.",
    },
    {
      icon: "ShieldCheck",
      name: "Stronger Control Assurance",
      desc: "Continuously validate controls and identify issues before they become audit findings.",
    },
    {
      icon: "Users",
      name: "More Productive Teams",
      desc: "Free auditors from repetitive activities so they can focus on strategic risk analysis.",
    },
    {
      icon: "TriangleAlert",
      name: "Reduced Compliance Risk",
      desc: "Improve audit readiness by proactively identifying control gaps and remediation priorities.",
    },
    {
      icon: "GitBranch",
      name: "End-to-End Traceability",
      desc: "Maintain a complete audit trail across every audit, finding, approval, and remediation.",
    },
  ],
};

export const auditorCapabilities = {
  eyebrow: "Everything Your Audit Team Needs",
  titleLead: "One workbench for the whole ",
  titleHighlight: "audit lifecycle.",
  cards: [
    {
      icon: "ScanSearch",
      name: "AI-Assisted Evidence Collection",
      desc: "Automatically gather evidence from enterprise systems to reduce manual effort and accelerate execution.",
    },
    {
      icon: "CalendarRange",
      name: "Intelligent Audit Planning",
      desc: "Plan, schedule, and manage audits from a centralized workspace with complete visibility.",
    },
    {
      icon: "ShieldCheck",
      name: "Continuous Control Validation",
      desc: "Monitor control effectiveness throughout the lifecycle to catch issues before they become findings.",
    },
    {
      icon: "Waypoints",
      name: "Automated Audit Workflows",
      desc: "Standardize execution through intelligent workflows that improve consistency and governance.",
    },
    {
      icon: "NotebookPen",
      name: "Digital Workpapers",
      desc: "Generate structured, audit-ready documentation automatically for every audit.",
    },
    {
      icon: "ScanEye",
      name: "Observation Management",
      desc: "Capture, prioritize, assign, and monitor audit observations with complete visibility.",
    },
    {
      icon: "ClipboardCheck",
      name: "Remediation Tracking",
      desc: "Track corrective actions through governed workflows and validate remediation progress.",
    },
    {
      icon: "LayoutDashboard",
      name: "Executive Dashboards",
      desc: "Monitor audit performance, findings, and enterprise risk through real-time insights.",
    },
    {
      icon: "FileChartColumn",
      name: "Audit-Ready Reporting",
      desc: "Generate standardized audit reports with complete evidence and full traceability.",
    },
  ],
  feature: {
    icon: "UserCheck",
    name: "Human-in-the-Loop Governance",
    desc: "Every AI recommendation is reviewed and approved by an auditor before any action is taken — judgment stays with your team.",
  },
};

export const auditorStakeholders = {
  label: "Designed for Every Audit Stakeholder",
  titleLead: "Built for everyone who",
  titleHighlight: "owns the audit.",
  cards: [
    {
      icon: "BarChart3",
      tagline: "Chief Audit Executives",
      title:
        "Enterprise-wide visibility into audit performance, control effectiveness, and organizational risk.",
      paragraph:
        "Gain enterprise-wide visibility into audit performance, control effectiveness, and organizational risk.",
    },
    {
      icon: "ClipboardCheck",
      tagline: "Internal Audit Teams",
      title:
        "Reduce manual effort and spend more time evaluating risks instead of collecting evidence.",
      paragraph:
        "Reduce manual effort and spend more time evaluating risks instead of collecting evidence.",
    },
    {
      icon: "ShieldCheck",
      tagline: "Risk & Compliance Leaders",
      title:
        "Strengthen governance through continuous control monitoring and proactive risk visibility.",
      paragraph:
        "Strengthen governance through continuous control monitoring and proactive risk visibility.",
    },
    {
      icon: "Workflow",
      tagline: "Business Process Owners",
      title:
        "Collaborate through standardized evidence requests and structured remediation workflows.",
      paragraph:
        "Collaborate through standardized evidence requests and structured remediation workflows.",
    },
  ],
};

export const auditorPrinciple = {
  label: "Human-Governed Automation",
  titleLead: "AI Executes. ",
  titleHighlight: "Auditors Lead.",
  how: {
    icon: "Workflow",
    label: "How It Works",
    cardTitleLead: "AI Executes. ",
    cardTitleHighlight: "Auditors Lead.",
    body: [
      "AI accelerates execution by collecting evidence, validating controls, and recommending findings.",
      "Auditors remain in control of every approval, review, and remediation decision — ensuring transparency, accountability, and regulatory confidence across the entire audit lifecycle.",
    ],
  },
  principle: {
    icon: "BadgeCheck",
    label: "The Principle",
    cardTitleLead: "Every decision. Every step. ",
    cardTitleHighlight: "Fully traceable.",
    body: [
      "No AI recommendation becomes an action without auditor review and approval. Every finding, decision, and remediation step is attributed, timestamped, and permanently logged.",
      "The result is an audit trail that regulators, boards, and external auditors can trust.",
    ],
  },
};

export const auditorFinalCta = {
  titleLead: "Ready to Rethink",
  titleHighlight: "Internal Audit?",
  description:
    "Transform manual audit execution into continuous assurance — with AI-powered automation, intelligent workflows, and human-governed decision making.",
  primaryCta: "Book a Demo",
};
