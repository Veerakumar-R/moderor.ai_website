// Content model for the GRC Suite — Operational Risk Management product page.
// Presentation lives in src/components/orm/*, never here.

export const ormRoute = "/products/operational-risk-management";

export const ormBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "GRC Suite", href: "/" },
  { label: "Operational Risk Management", href: ormRoute },
];

export const ormHero = {
  badge: "GRC Suite · Operational Risk Management",
  titleLine1: "AI-Powered Operational Risk",
  titleLine2: "Management",
  primaryCta: "Book a Demo",
  secondaryCta: "Explore Capabilities",
  description:
    "Continuously identify, assess, monitor, and mitigate operational risk with AI-powered automation, intelligent controls, and real-time risk insights built on the Moderor.ai Enterprise AI Control Plane.",
  stat: {
    num: "1,200+",
    label: "Risks under management across regulated enterprises",
  },
  bandMarquee: [
    "OPERATIONAL RISK INTELLIGENCE",
    "RCM AUTOMATION",
    "KRI MONITORING",
    "INCIDENT INTELLIGENCE",
  ],
  bandTagline: "Partnering with leading frameworks to deliver continuous, governed operational risk intelligence.",
  kpis: [
    { value: 80, suffix: "%", label: "Faster Risk Identification" },
    { text: "3X", suffix: "", label: "Faster Control Assessments" },
    { value: 90, suffix: "%", label: "Improved Risk Visibility" },
    { text: "Continuous", suffix: "", label: "Real-Time Risk Monitoring" },
  ],
  kpiSection: {
    eyebrow: "Live Platform Metrics",
    titleLead: "Running in your risk program.",
    titleHighlight: "Results That Matter",
    note: "Live production metrics from Operational Risk Management deployments — not benchmark estimates.",
  },
};

export const ormNarrative = {
  tagline: "Operational Risk Never Stands Still",
  titleLead: "Risk Programs That",
  titleHighlight: "Keep Pace.",
  centerImage: {
    src: "/images/grc-suite/grc-hero-shield.png",
    alt: "Operational risk management visualization with shield and risk intelligence network",
  },
  problem: [
    "Business processes evolve every day. Controls change. Incidents occur. Key Risk Indicators fluctuate — yet most organizations still rely on periodic workshops, spreadsheets, and manual Risk Control Matrix updates.",
    "The result is a risk register that often reflects yesterday's business, not today's reality. Risks are identified too late, RCMs become outdated, and KRIs are monitored in disconnected systems.",
    "Incidents are investigated after the damage is done, residual risk calculations require manual effort, and leadership makes decisions using incomplete information.",
  ],
  solution: [
    "Operational Risk Management continuously understands risk — powered by AI agents, enterprise knowledge, and intelligent automation that identifies risks, builds RCMs, monitors KRIs, and updates residual risk dynamically.",
    "The platform automatically detects operational incidents, prioritizes mitigation activities, and maintains a continuously updated operational risk register.",
    "AI continuously evaluates risk. Your risk teams remain in control.",
  ],
};

export const ormOutcomes = {
  eyebrow: "Measurable Outcomes Across Your Risk Program",
  titleLead: "Outcomes the board can ",
  titleHighlight: "measure.",
  cards: [
    {
      icon: "Zap",
      name: "80% Faster Risk Identification",
      desc: "Automatically identify business risks and control gaps from policies, SOPs, and operational processes.",
    },
    {
      icon: "ClipboardCheck",
      name: "3X Faster Control Assessments",
      desc: "Generate and maintain version-controlled Risk Control Matrices with minimal manual effort.",
    },
    {
      icon: "BarChart3",
      name: "90% Improved Risk Visibility",
      desc: "Track Key Risk Indicators in real time and trigger alerts when thresholds are breached.",
    },
    {
      icon: "Radar",
      name: "Continuous Risk Monitoring",
      desc: "Monitor operational risk posture in real time instead of relying on periodic assessments.",
    },
    {
      icon: "TriangleAlert",
      name: "Proactive Incident Intelligence",
      desc: "Automatically capture, classify, and map operational incidents to risks and controls.",
    },
    {
      icon: "GitBranch",
      name: "End-to-End Traceability",
      desc: "Capture every risk, control, incident, and approval with complete auditability.",
    },
  ],
};

export const ormCapabilities = {
  eyebrow: "Everything You Need to Manage Operational Risk",
  titleLead: "Manage operational risk with ",
  titleHighlight: "confidence.",
  cards: [
    {
      icon: "ScanSearch",
      name: "AI Risk Identification",
      desc: "Automatically identify business risks and control gaps from policies, SOPs, and operational processes.",
    },
    {
      icon: "Layers",
      name: "Automated Risk Control Matrix",
      desc: "Generate and maintain version-controlled Risk Control Matrices with minimal manual effort.",
    },
    {
      icon: "Activity",
      name: "Continuous KRI Monitoring",
      desc: "Track Key Risk Indicators in real time and trigger alerts when thresholds are breached.",
    },
    {
      icon: "TriangleAlert",
      name: "Incident Intelligence",
      desc: "Automatically capture, classify, and map operational incidents to risks and controls.",
    },
    {
      icon: "ShieldCheck",
      name: "AI Control Testing",
      desc: "Recommend control testing plans, collect evidence, and continuously evaluate control effectiveness.",
    },
    {
      icon: "TrendingUp",
      name: "Residual Risk Management",
      desc: "Continuously update inherent and residual risk based on incidents, KRIs, and control performance.",
    },
    {
      icon: "Waypoints",
      name: "Mitigation Tracking",
      desc: "Prioritize remediation activities, assign ownership, and monitor progress through completion.",
    },
    {
      icon: "LayoutDashboard",
      name: "Executive Dashboards",
      desc: "Track operational risk trends, KRIs, incidents, and mitigation progress in real time.",
    },
    {
      icon: "ScanEye",
      name: "End-to-End Traceability",
      desc: "Capture every risk, control, incident, and approval with complete auditability.",
    },
  ],
  feature: {
    icon: "UserCheck",
    name: "Human-in-the-Loop Governance",
    desc: "AI recommends risk assessments and control changes while risk professionals validate and approve every decision — judgment stays with your team.",
  },
};

export const ormStakeholders = {
  label: "Built for Every Operational Risk Function",
  titleLead: "Built for everyone who",
  titleHighlight: "owns the risk.",
  cards: [
    {
      icon: "BarChart3",
      tagline: "Chief Risk Officers",
      title: "Gain enterprise-wide visibility into operational risk exposure and organizational resilience.",
      paragraph:
        "Gain enterprise-wide visibility into operational risk exposure and organizational resilience.",
    },
    {
      icon: "ShieldCheck",
      tagline: "Operational Risk Teams",
      title: "Continuously identify, assess, and monitor risks across business processes.",
      paragraph:
        "Continuously identify, assess, and monitor risks across business processes.",
    },
    {
      icon: "ClipboardCheck",
      tagline: "Compliance Teams",
      title: "Strengthen governance with standardized controls, traceable evidence, and continuous monitoring.",
      paragraph:
        "Strengthen governance with standardized controls, traceable evidence, and continuous monitoring.",
    },
    {
      icon: "Users",
      tagline: "Business Risk Owners",
      title: "Manage risks proactively with AI-driven insights and guided mitigation workflows.",
      paragraph:
        "Manage risks proactively with AI-driven insights and guided mitigation workflows.",
    },
    {
      icon: "ScanEye",
      tagline: "Internal Audit Teams",
      title: "Validate control effectiveness using continuously updated operational risk information.",
      paragraph:
        "Validate control effectiveness using continuously updated operational risk information.",
    },
    {
      icon: "ListChecks",
      tagline: "Control Owners",
      title: "Monitor control performance and respond quickly to identified weaknesses.",
      paragraph:
        "Monitor control performance and respond quickly to identified weaknesses.",
    },
    {
      icon: "Workflow",
      tagline: "Business Operations",
      title: "Improve operational resilience by identifying risks before they impact business performance.",
      paragraph:
        "Improve operational resilience by identifying risks before they impact business performance.",
    },
    {
      icon: "Building2",
      tagline: "Executive Leadership",
      title: "Monitor enterprise risk posture through real-time dashboards and actionable insights.",
      paragraph:
        "Monitor enterprise risk posture through real-time dashboards and actionable insights.",
    },
  ],
};

export const ormPrinciple = {
  label: "Enterprise AI. Governed by Design.",
  titleLead: "AI Evaluates. ",
  titleHighlight: "Experts Lead.",
  how: {
    icon: "Workflow",
    label: "How It Works",
    cardTitleLead: "AI Evaluates. ",
    cardTitleHighlight: "Experts Lead.",
    body: [
      "AI continuously identifies risks, builds RCMs, monitors KRIs, detects incidents, and updates residual risk dynamically.",
      "Risk professionals remain in control of every review, approval, and mitigation decision — ensuring transparency, accountability, and regulatory confidence.",
    ],
  },
  principle: {
    icon: "BadgeCheck",
    label: "The Principle",
    cardTitleLead: "Every risk. Every step. ",
    cardTitleHighlight: "Fully traceable.",
    body: [
      "No AI recommendation becomes an action without expert review and approval. Every risk assessment, control change, and mitigation step is attributed, timestamped, and permanently logged.",
      "The result is an operational risk trail that regulators, boards, and auditors can trust.",
    ],
  },
};

export const ormFinalCta = {
  titleLead: "Stop Reacting to Operational Risk.",
  titleHighlight: "Start Staying Ahead of It.",
  description:
    "Transform operational risk complexity into actionable intelligence with AI-powered identification, continuous monitoring, and human-governed risk management.",
  primaryCta: "Book a Demo",
};
