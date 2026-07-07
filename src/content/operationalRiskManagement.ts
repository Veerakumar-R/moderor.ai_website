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
    eyebrow: "Business Outcomes",
    titleLead: "Measurable Outcomes Across Your",
    titleHighlight: "Risk Program",
    note: [
      "AI-powered automation and continuous monitoring across your operational risk program.",
      "Faster risk identification, improved visibility, and proactive incident intelligence.",
    ],
  },
};

export const ormChallenge = {
  tag: "Business Challenge",
  title: "Operational Risk Never Stands Still. Neither Should Your",
  titleHighlight: "Risk Program.",
  paragraphs: [
    "Business processes evolve every day. Controls change. Incidents occur. Key Risk Indicators fluctuate. Yet most organizations still rely on periodic workshops, spreadsheets, and manual Risk Control Matrix (RCM) updates.",
    "The result is a risk register that often reflects yesterday's business—not today's reality.",
  ],
  visualBadge: "The Result",
  visualClosing:
    "Modern operational risk requires continuous intelligence—not periodic assessments.",
  bullets: [
    "Risks are identified too late.",
    "Risk Control Matrices become outdated.",
    "KRIs are monitored in disconnected systems.",
    "Incidents are investigated after the damage is done.",
    "Residual risk calculations require manual effort.",
    "Leadership makes decisions using incomplete information.",
  ],
};

export const ormSolution = {
  tag: "Solution Positioning",
  title: "Built for Continuous",
  titleHighlight: "Operational Risk Intelligence.",
  cards: [
    {
      variant: "split" as const,
      title: "Beyond static risk registers",
      body: "Traditional risk platforms help you document risks periodically. Operational Risk Management continuously understands risk — powered by AI agents, enterprise knowledge, and intelligent automation.",
      image: "/images/domain-outcomes/domain-risk.png",
      imageAlt: "Operational risk intelligence and continuous monitoring visualization",
    },
    {
      variant: "plain" as const,
      title: "Powered by AI agents, enterprise knowledge, and intelligent automation",
      lead: "The platform automatically:",
      bullets: [
        "Identifies risks and controls",
        "Builds Risk Control Matrices",
        "Monitors KRIs continuously",
        "Detects operational incidents",
        "Updates residual risk dynamically",
        "Prioritizes mitigation activities",
      ],
      closing: "AI continuously evaluates risk. Your risk teams remain in control.",
    },
  ],
};

export const ormCapabilities = {
  eyebrow: "Why Operational Risk Management",
  titleLead: "How the product delivers those ",
  titleHighlight: "outcomes.",
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
      icon: "ScanEye",
      name: "End-to-End Traceability",
      desc: "Capture every risk, control, incident, and approval with complete auditability.",
    },
  ],
  feature: {
    icon: "LineChart",
    name: "Everything You Need to Manage Operational Risk with Confidence",
    desc: "Operational Risk Management combines AI-powered automation, continuous monitoring, and enterprise governance to help organizations identify risks earlier, strengthen controls, and improve operational resilience.",
  },
};

export const ormStakeholders = {
  label: "Enterprise Use Cases",
  titleLead: "Built for Every ",
  titleHighlight: "Operational Risk Function",
  cards: [
    {
      icon: "BarChart3",
      tagline: "Chief Risk Officers",
      title: "Gain enterprise-wide visibility into operational risk exposure and organizational resilience.",
    },
    {
      icon: "ShieldCheck",
      tagline: "Operational Risk Teams",
      title: "Continuously identify, assess, and monitor risks across business processes.",
    },
    {
      icon: "ClipboardCheck",
      tagline: "Compliance Teams",
      title: "Strengthen governance with standardized controls, traceable evidence, and continuous monitoring.",
    },
    {
      icon: "Users",
      tagline: "Business Risk Owners",
      title: "Manage risks proactively with AI-driven insights and guided mitigation workflows.",
    },
    {
      icon: "ScanEye",
      tagline: "Internal Audit Teams",
      title: "Validate control effectiveness using continuously updated operational risk information.",
    },
    {
      icon: "ListChecks",
      tagline: "Control Owners",
      title: "Monitor control performance and respond quickly to identified weaknesses.",
    },
    {
      icon: "Workflow",
      tagline: "Business Operations",
      title: "Improve operational resilience by identifying risks before they impact business performance.",
    },
    {
      icon: "Building2",
      tagline: "Executive Leadership",
      title: "Monitor enterprise risk posture through real-time dashboards and actionable insights.",
    },
  ],
};

export const ormOutcomes = {
  eyebrow: "Enterprise Capabilities",
  titleLead: "Enterprise Capabilities Built for Modern ",
  titleHighlight: "Risk Management",
  description:
    "From AI-driven risk identification to continuous monitoring and intelligent remediation, Operational Risk Management provides everything organizations need to operationalize risk management at enterprise scale.",
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
      icon: "ScanEye",
      name: "End-to-End Traceability",
      desc: "Capture every risk, control, incident, and approval with complete auditability.",
    },
    {
      icon: "UserCheck",
      name: "Human-in-the-Loop Governance",
      desc: "AI recommends risk actions while risk professionals validate and approve every decision.",
    },
    {
      icon: "FileText",
      name: "Policy & SOP Intelligence",
      desc: "Extract operational risks and control requirements from enterprise policies and procedures.",
    },
    {
      icon: "BadgeCheck",
      name: "Automated Risk Assessments",
      desc: "Streamline inherent and residual risk scoring with guided workflows and expert review.",
    },
    {
      icon: "FileChartColumn",
      name: "Risk Analytics & Reporting",
      desc: "Deliver board-ready dashboards, trend analysis, and enterprise risk posture reporting.",
    },
  ],
};

export const ormIntegrations = {
  label: "Enterprise Integrations",
  title: "Connect with Your Existing",
  titleHighlight: "Risk Ecosystem",
  description:
    "Operational Risk Management integrates seamlessly with enterprise systems, business applications, and data sources to deliver continuous operational risk intelligence.",
  items: [
    {
      name: "Enterprise Applications",
      icon: "Building2",
      desc: "Connect ERP, CRM, HR, finance, and operational platforms.",
    },
    {
      name: "ITSM Platforms",
      icon: "Workflow",
      desc: "Integrate incidents and service events from existing IT operations tools.",
    },
    {
      name: "Document Repositories",
      icon: "FileText",
      desc: "Access policies, SOPs, procedures, and operational documentation.",
    },
    {
      name: "Enterprise Databases",
      icon: "Database",
      desc: "Leverage structured business data for continuous risk analysis.",
    },
    {
      name: "MCP Connectors",
      icon: "Waypoints",
      desc: "Integrate enterprise applications through secure AI-native connectors.",
    },
    {
      name: "Cloud Infrastructure",
      icon: "Cloud",
      desc: "Deploy across AWS, Microsoft Azure, Google Cloud, private cloud, or on-premises environments.",
    },
  ],
};

export const ormPrinciple = {
  label: "Enterprise Trust",
  title: "Enterprise AI. Governed by Design.",
  description:
    "Every operational risk decision is governed by the Moderor.ai Enterprise AI Control Plane, ensuring secure, explainable, and auditable AI-assisted risk management.",
  items: [
    {
      icon: "ShieldCheck",
      badge: "Security",
      title: "Zero Trust Security",
      description:
        "Protect operational risk data through enterprise-grade identity, access, and data protection.",
    },
    {
      icon: "UserCheck",
      badge: "Oversight",
      title: "Human-in-the-Loop",
      description:
        "Keep risk professionals in control of critical decisions with configurable approval workflows.",
    },
    {
      icon: "ScanEye",
      badge: "Transparency",
      title: "Explainable AI",
      description: "Understand the reasoning behind every AI-generated risk recommendation.",
    },
    {
      icon: "ListChecks",
      badge: "Enforcement",
      title: "Policy Enforcement",
      description: "Apply enterprise policies consistently across every operational risk workflow.",
    },
    {
      icon: "NotebookPen",
      badge: "Audit",
      title: "Complete Audit Trails",
      description:
        "Maintain immutable records of every risk, incident, control, and approval.",
    },
    {
      icon: "Building2",
      badge: "Governance",
      title: "Enterprise Governance",
      description:
        "Govern AI-powered risk management with centralized oversight and accountability.",
    },
  ],
};

export const ormFinalCta = {
  titleLead: "Stop Reacting to Operational Risk.",
  titleHighlight: "Start Staying Ahead of It.",
  description:
    "Transform operational risk complexity into actionable intelligence with AI-powered identification, continuous monitoring, and human-governed risk management.",
  primaryCta: "Book a Demo",
};
