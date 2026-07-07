// Content model for the GRC Suite — Regulatory Compliance product page.
// Presentation lives in src/components/regulatory/*, never here.

export const regulatoryRoute = "/products/regulatory-compliance";

export const regulatoryBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "GRC Suite", href: "/" },
  { label: "Regulatory Compliance", href: regulatoryRoute },
];

export const regulatoryHero = {
  badge: "GRC Suite · Regulatory Compliance",
  titleLine1: "Stay Ahead of Regulatory",
  titleLine2: "Change with AI",
  primaryCta: "Book a Demo",
  secondaryCta: "Explore Capabilities",
  description:
    "Automatically monitor regulatory updates, transform complex regulations into actionable obligations, and maintain continuous compliance with AI-powered regulatory intelligence built on the Moderor.ai Enterprise AI Control Plane.",
  stat: {
    num: "248+",
    label: "Obligations tracked across regulated enterprises",
  },
  bandMarquee: [
    "REGULATORY INTELLIGENCE",
    "OBLIGATION MANAGEMENT",
    "CONTINUOUS MONITORING",
    "COMPLIANCE GOVERNANCE",
  ],
  bandTagline: "Partnering with leading frameworks to deliver continuous, governed regulatory intelligence.",
  kpis: [
    { text: "24/7", suffix: "", label: "Continuous Regulatory Monitoring" },
    { value: 90, suffix: "%", label: "Less Manual Research" },
    { text: "Faster", suffix: "", label: "Regulatory Impact Assessment" },
    { value: 100, suffix: "%", label: "Traceable Compliance Decisions" },
  ],
  kpiSection: {
    eyebrow: "Business Outcomes",
    titleLead: "Measurable Outcomes for Modern",
    titleHighlight: "Compliance Teams",
    note: [
      "AI-powered automation and continuous monitoring for every regulatory change.",
      "Less manual research, faster impact assessment, and traceable compliance decisions.",
    ],
  },
};

export const regulatoryChallenge = {
  tag: "Business Challenge",
  title: "Regulations Never Stop Changing. Neither Should Your",
  titleHighlight: "Compliance Program.",
  paragraphs: [
    "Organizations today operate across multiple regulators, jurisdictions, and industry frameworks.",
    "Every new circular, directive, advisory, enforcement action, or policy update creates new compliance obligations.",
    "Yet most compliance teams still rely on manual reviews, spreadsheets, legal bulletins, and periodic assessments to stay current.",
  ],
  visualBadge: "The Result",
  visualTitle: "Where periodic monitoring falls short",
  bullets: [
    "Regulatory changes are identified too late.",
    "Obligations are tracked inconsistently.",
    "Overlapping requirements remain hidden.",
    "Superseded regulations remain active.",
    "Compliance teams spend more time tracking regulations than managing compliance.",
  ],
  closing:
    "Modern compliance requires continuous regulatory intelligence—not periodic monitoring.",
};

export const regulatorySolution = {
  tag: "Solution Positioning",
  title: "Built for Continuous",
  titleHighlight: "Regulatory Intelligence.",
  cards: [
    {
      variant: "split" as const,
      title: "Beyond regulatory documentation",
      body: "Traditional compliance platforms help you document regulations. Regulatory Compliance Intelligence continuously transforms regulatory change into governed business obligations.",
      image: "/images/domain-outcomes/domain-compliance.png",
      imageAlt: "Continuous regulatory intelligence and obligation mapping visualization",
    },
    {
      variant: "plain" as const,
      title: "Powered by AI agents, enterprise knowledge, and intelligent reasoning",
      lead: "The platform automatically:",
      bullets: [
        "Monitors regulatory sources",
        "Extracts compliance obligations",
        "Maps regulatory relationships",
        "Detects overlaps and conflicts",
        "Tracks regulatory changes",
        "Maintains a continuously updated obligation register",
      ],
      closing: "AI organizes regulatory complexity. Your compliance team remains in control.",
    },
  ],
};

export const regulatoryNarrative = {
  tagline: "Regulations Never Stop Changing",
  titleLead: "Compliance That",
  titleHighlight: "Keeps Pace.",
  centerImage: {
    src: "/images/grc-suite/grc-outcomes-hub-scan.png",
    alt: "Regulatory intelligence visualization with scanning hub and compliance network",
  },
  problem: [
    "Organizations today operate across multiple regulators, jurisdictions, and industry frameworks. Every new circular, directive, advisory, enforcement action, or policy update creates new compliance obligations.",
    "Yet most compliance teams still rely on manual reviews, spreadsheets, legal bulletins, and periodic assessments to stay current — identifying regulatory changes too late and tracking obligations inconsistently.",
    "Overlapping requirements remain hidden, superseded regulations stay active, and compliance teams spend more time tracking regulations than managing compliance.",
  ],
  solution: [
    "Regulatory Compliance Intelligence continuously transforms regulatory change into governed business obligations — powered by AI agents, enterprise knowledge, and intelligent reasoning.",
    "The platform automatically monitors regulatory sources, extracts compliance obligations, maps regulatory relationships, and maintains a continuously updated obligation register.",
    "AI organizes regulatory complexity. Your compliance team remains in control.",
  ],
};

export const regulatoryIntegrations = {
  label: "Enterprise Integrations",
  title: "Works with Your Existing",
  titleHighlight: "Compliance Ecosystem",
  description:
    "Connect Regulatory Compliance Intelligence with your regulatory sources, enterprise systems, and governance platforms without disrupting existing workflows.",
  items: [
    { name: "Regulatory Authorities", icon: "Scale" },
    { name: "Enterprise GRC Platforms", icon: "Layers" },
    { name: "Document Management Systems", icon: "FileText" },
    { name: "Internal Policy Repositories", icon: "BookOpen" },
    { name: "Enterprise Knowledge Bases", icon: "Database" },
    { name: "APIs & MCP Connectors", icon: "Waypoints" },
    { name: "AWS, Azure, Google Cloud", icon: "Cloud" },
    { name: "On-Premises Deployments", icon: "Server" },
  ],
};

export const regulatoryCapabilities = {
  eyebrow: "Why Regulatory Compliance Intelligence",
  titleLead: "Everything Your Compliance Team Needs to Stay Ahead of ",
  titleHighlight: "Regulatory Change",
  description:
    "Regulatory Compliance Intelligence combines AI-powered automation, continuous monitoring, and enterprise governance to help compliance teams understand regulatory change, reduce manual effort, and maintain continuous compliance.",
  cards: [
    {
      icon: "Radar",
      name: "Continuous Regulatory Monitoring",
      desc: "Automatically monitor regulatory authorities and detect new publications as they happen.",
    },
    {
      icon: "FileSearch",
      name: "AI Obligation Extraction",
      desc: "Convert lengthy regulatory documents into structured, actionable compliance obligations.",
    },
    {
      icon: "Network",
      name: "Cross-Regulation Intelligence",
      desc: "Identify overlapping, complementary, and conflicting obligations across multiple regulations.",
    },
    {
      icon: "GitBranch",
      name: "Regulatory Linkage Mapping",
      desc: "Visualize relationships between regulations, amendments, and dependencies.",
    },
    {
      icon: "Layers",
      name: "Consolidated Obligation Register",
      desc: "Maintain a single, continuously updated repository of enterprise compliance obligations.",
    },
    {
      icon: "BarChart3",
      name: "Compliance Risk Insights",
      desc: "Identify areas of high regulatory impact before they become compliance issues.",
    },
    {
      icon: "LayoutDashboard",
      name: "Compliance Risk Dashboards",
      desc: "Visualize regulatory exposure through real-time analytics and executive dashboards.",
    },
    {
      icon: "BookOpen",
      name: "AI Knowledge Integration",
      desc: "Ground every recommendation using regulatory documents, policies, and enterprise knowledge.",
    },
    {
      icon: "ScanEye",
      name: "End-to-End Traceability",
      desc: "Maintain complete visibility from regulatory publication through business implementation.",
    },
  ],
  feature: {
    icon: "UserCheck",
    name: "Human-in-the-Loop Governance",
    desc: "AI recommends changes while compliance teams validate and approve every obligation — judgment stays with your team.",
  },
};

export const regulatoryStakeholders = {
  label: "Built for Every Compliance Function",
  titleLead: "Built for Every ",
  titleHighlight: "Compliance Function",
  description:
    "Whether managing regulatory affairs, enterprise compliance, or operational risk, Regulatory Compliance Intelligence empowers every stakeholder with AI-powered insights to make faster, more informed risk decisions.",
  cards: [
    {
      icon: "BarChart3",
      tagline: "Chief Compliance Officers",
      title: "Gain enterprise-wide visibility into regulatory obligations and compliance posture.",
    },
    {
      icon: "Globe",
      tagline: "Regulatory Affairs Teams",
      title: "Monitor regulatory updates continuously and assess business impact faster.",
    },
    {
      icon: "ClipboardCheck",
      tagline: "Compliance Managers",
      title: "Track obligations, coordinate reviews, and maintain continuous compliance.",
    },
    {
      icon: "FileSearch",
      tagline: "Compliance Analysts",
      title: "Reduce manual research and focus on validating regulatory obligations.",
    },
    {
      icon: "ShieldCheck",
      tagline: "Risk Management Teams",
      title: "Understand regulatory exposure across business units and jurisdictions.",
    },
    {
      icon: "Scale",
      tagline: "Legal Teams",
      title: "Analyze regulatory changes and understand cross-regulation dependencies.",
    },
    {
      icon: "ScanEye",
      tagline: "Internal Audit Teams",
      title: "Validate regulatory compliance using traceable evidence and obligation history.",
    },
    {
      icon: "Building2",
      tagline: "Business Owners",
      title: "Understand regulatory responsibilities and complete required actions on time.",
    },
  ],
};

export const regulatoryPrinciple = {
  label: "Enterprise AI. Governed by Design.",
  description:
    "Every regulatory obligation is governed by the Moderor.ai Enterprise AI Control Plane, ensuring secure, explainable, and auditable AI-assisted compliance.",
  items: [
    {
      icon: "ShieldCheck",
      badge: "Security",
      title: "Zero Trust Security",
      description:
        "Secure regulatory intelligence with enterprise-grade identity, access, and data protection.",
    },
    {
      icon: "UserCheck",
      badge: "Oversight",
      title: "Human-in-the-Loop",
      description:
        "Ensure every critical compliance decision is validated through expert human oversight.",
    },
    {
      icon: "ScanEye",
      badge: "Transparency",
      title: "Explainable AI",
      description:
        "Deliver transparent, evidence-based recommendations that auditors and regulators can trust.",
    },
    {
      icon: "ListChecks",
      badge: "Enforcement",
      title: "Policy Enforcement",
      description:
        "Automatically enforce internal policies and regulatory requirements across compliance operations.",
    },
    {
      icon: "NotebookPen",
      badge: "Audit",
      title: "Complete Audit Trails",
      description:
        "Maintain a tamper-resistant record of every regulatory change, review, and approval.",
    },
    {
      icon: "Building2",
      badge: "Governance",
      title: "Enterprise Governance",
      description:
        "Manage AI-powered compliance through centralized governance, accountability, and operational control.",
    },
  ],
};

export const regulatoryFinalCta = {
  titleLead: "Stop Chasing Regulatory Change.",
  titleHighlight: "Start Staying Ahead of It.",
  description:
    "Transform regulatory complexity into actionable intelligence with AI-powered monitoring, obligation management, and continuous compliance.",
  primaryCta: "Book a Demo",
};
