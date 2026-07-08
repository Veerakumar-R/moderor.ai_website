// Content model for the GRC Suite — Continuous Compliance Monitoring product page.
// Presentation lives in src/components/ccm/*, never here.

export const ccmRoute = "/products/continuous-compliance-monitoring";

export const ccmBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "GRC Suite", href: "/" },
  { label: "Continuous Compliance Monitoring", href: ccmRoute },
];

export const ccmHero = {
  badge: "GRC Suite · Continuous Compliance Monitoring",
  titleLine1: "Continuous Compliance.",
  titleLine2: "Intelligent Remediation.",
  primaryCta: "Book a Demo",
  secondaryCta: "Platform Overview",
  description:
    "Continuously monitor IT assets, detect compliance violations in real time, automate remediation workflows, and maintain audit-ready visibility across every control, asset, and regulatory framework.",
  stat: {
    num: "160+",
    label: "Sub-controls monitored across enterprise assets",
  },
  bandMarquee: [
    "CONTINUOUS MONITORING",
    "AI REMEDIATION",
    "AUDIT-READY EVIDENCE",
    "CONTROL COVERAGE",
  ],
  bandTagline:
    "Built on the moderor.ai Enterprise AI Control Plane for governed continuous compliance.",
  kpis: [
    { value: 95, suffix: "%", label: "Faster Compliance Visibility" },
    { value: 80, suffix: "%", label: "Reduction in Manual Reviews" },
    { value: 90, suffix: "%", label: "Improved Remediation Efficiency" },
    { text: "100%", suffix: "", label: "Continuous Control Coverage" },
  ],
  kpiSection: {
    eyebrow: "Business Outcomes",
    titleLead: "Turn Continuous Monitoring into ",
    titleHighlight: "Continuous Assurance",
    note: [
      "AI agents evaluate enterprise assets against policies, controls, and regulatory frameworks—every day, not just at audit time.",
      "Detect violations early, accelerate remediation, and keep compliance teams audit-ready.",
    ],
  },
};

export const ccmChallenge = {
  tag: "Business Challenge",
  title: "Compliance Gaps Don't Wait for the",
  titleHighlight: "Next Audit.",
  paragraphs: [
    "Most organizations still rely on periodic compliance reviews, spreadsheets, and manual evidence collection. Between assessment cycles, configuration drift, policy violations, and control failures often go unnoticed.",
    "Teams discover issues only when an audit or regulatory review begins—when remediation is most expensive and disruptive.",
    "Modern compliance requires continuous visibility, continuous validation, and continuous action.",
  ],
  visualBadge: "The Result",
  visualClosing:
    "Modern enterprises require continuous compliance operations—not last-minute audit preparation.",
  bullets: [
    "Periodic reviews leave gaps between assessment cycles.",
    "Configuration drift and policy violations go unnoticed.",
    "Manual evidence collection slows every audit cycle.",
    "Control failures surface only when audits begin.",
    "Asset inventories grow faster than compliance coverage.",
    "Spreadsheet-driven tracking cannot scale with regulatory complexity.",
  ],
};

export const ccmSolution = {
  tag: "Solution Positioning",
  title: "Built for Continuous",
  titleHighlight: "Compliance Operations",
  cards: [
    {
      variant: "split" as const,
      title: "Beyond periodic compliance reviews",
      body: "Continuous Compliance Monitoring continuously evaluates IT assets against enterprise policies, audit controls, and regulatory frameworks. AI agents detect violations, recommend remediation, monitor corrective actions, and generate audit-ready evidence—keeping compliance teams informed before risks become audit findings.",
      image: "/images/domain-outcomes/domain-compliance.png",
      imageAlt: "Continuous compliance monitoring and control validation visualization",
    },
    {
      variant: "plain" as const,
      title: "Powered by AI, automation, and enterprise governance",
      lead: "The platform automatically:",
      bullets: [
        "Discovers and registers enterprise assets continuously",
        "Executes compliance rules against every asset in real time",
        "Detects policy violations and control failures automatically",
        "Assigns and tracks remediation through governed workflows",
        "Generates structured audit observations with evidence",
        "Maintains audit-ready visibility across 74–106 control categories",
      ],
      closing: "Detect. Prioritize. Remediate. Repeat.",
    },
  ],
};

export const ccmCapabilities = {
  eyebrow: "Core Capabilities",
  titleLead: "Everything you need to continuously govern ",
  titleHighlight: "compliance.",
  cards: [
    {
      icon: "Scale",
      name: "Ruleset Management",
      desc: "Standardize compliance rules across ITGC, SOC 2, PCI DSS, GDPR, RBI, DPDP, and custom frameworks.",
    },
    {
      icon: "ScanSearch",
      name: "AI Asset Discovery",
      desc: "Continuously discover and register enterprise assets across your environment.",
    },
    {
      icon: "RefreshCw",
      name: "Continuous Rule Execution",
      desc: "Validate every asset against active compliance rules in real time.",
    },
    {
      icon: "TriangleAlert",
      name: "Compliance Monitoring",
      desc: "Detect policy violations and control failures automatically.",
    },
    {
      icon: "Workflow",
      name: "AI Remediation Workflows",
      desc: "Assign, track, and govern remediation through intelligent workflows.",
    },
    {
      icon: "FileText",
      name: "Audit Observations",
      desc: "Automatically generate structured observations with supporting evidence.",
    },
    {
      icon: "LayoutDashboard",
      name: "Compliance Dashboards",
      desc: "Monitor compliance posture across assets, controls, and business units.",
    },
    {
      icon: "FileChartColumn",
      name: "Regulatory Reporting",
      desc: "Generate audit-ready reports on demand for any framework or scope.",
    },
  ],
  feature: {
    icon: "ShieldCheck",
    name: "Every Control. Every Asset. Continuously.",
    desc: "Moderor's flagship GRC product evaluates enterprise assets across 74–106 control categories with 160+ sub-controls—spanning ITGC, GDPR, RBI, SOC 2, PCI DSS, DPDP, and vendor access.",
  },
};

export const ccmStakeholders = {
  label: "Enterprise Use Cases",
  titleLead: "Built for Every Team ",
  titleHighlight: "Responsible for Compliance",
  cards: [
    {
      icon: "ShieldCheck",
      tagline: "Compliance Teams",
      title: "Monitor enterprise-wide compliance continuously—not just at audit time.",
    },
    {
      icon: "Server",
      tagline: "IT Governance",
      title: "Maintain complete visibility across IT controls and configuration posture.",
    },
    {
      icon: "Users",
      tagline: "Asset Owners",
      title: "Resolve violations before they become audit findings.",
    },
    {
      icon: "ListChecks",
      tagline: "Task Owners",
      title: "Manage remediation activities efficiently with clear accountability.",
    },
    {
      icon: "FileSearch",
      tagline: "Internal Audit",
      title: "Access continuously validated compliance evidence on demand.",
    },
    {
      icon: "TrendingUp",
      tagline: "Risk Management",
      title: "Reduce operational and regulatory risk proactively.",
    },
    {
      icon: "Lock",
      tagline: "Security Teams",
      title: "Strengthen governance across enterprise assets and access controls.",
    },
    {
      icon: "BarChart3",
      tagline: "Executive Leadership",
      title: "Track compliance performance through enterprise dashboards.",
    },
  ],
};

export const ccmOutcomes = {
  eyebrow: "Enterprise Capabilities",
  titleLead: "Enterprise AI Built for ",
  titleHighlight: "Continuous Compliance",
  description:
    "Purpose-built for modern compliance operations, CCM combines AI, automation, policy intelligence, and enterprise governance to continuously monitor and improve compliance across the organization.",
  cards: [
    {
      icon: "Scale",
      name: "AI Ruleset Intelligence",
      desc: "Generate and maintain compliance rules across regulatory frameworks using AI.",
    },
    {
      icon: "ScanSearch",
      name: "AI Asset Discovery",
      desc: "Identify unmanaged assets and register them automatically.",
    },
    {
      icon: "RefreshCw",
      name: "Continuous Rule Execution",
      desc: "Evaluate every asset against active compliance controls in real time.",
    },
    {
      icon: "TriangleAlert",
      name: "Violation Detection",
      desc: "Identify policy breaches the moment they occur.",
    },
    {
      icon: "Zap",
      name: "Suggested Remediation",
      desc: "Recommend corrective actions using AI-powered reasoning.",
    },
    {
      icon: "ClipboardCheck",
      name: "Action & Approval Center",
      desc: "Manage remediation through governed approval workflows.",
    },
    {
      icon: "FileText",
      name: "AI Observation Drafting",
      desc: "Generate structured audit observations with risk context and evidence.",
    },
    {
      icon: "BookOpen",
      name: "Knowledge Intelligence",
      desc: "Leverage policies, regulations, and historical findings.",
    },
    {
      icon: "CalendarRange",
      name: "SLA Monitoring",
      desc: "Track remediation progress and escalate overdue actions.",
    },
    {
      icon: "LayoutDashboard",
      name: "Executive Dashboards",
      desc: "Monitor enterprise compliance posture in real time.",
    },
    {
      icon: "ScanEye",
      name: "Explainable AI",
      desc: "Understand every AI recommendation and remediation decision.",
    },
    {
      icon: "ListChecks",
      name: "Complete Audit Trails",
      desc: "Capture every rule execution, decision, approval, and action.",
    },
  ],
};

export const ccmIntegrations = {
  label: "Enterprise Integrations",
  title: "Connect with Your Existing",
  titleHighlight: "Enterprise Ecosystem",
  description:
    "Continuous Compliance Monitoring integrates with your existing IT, security, and governance platforms to continuously validate compliance without disrupting existing processes.",
  items: [
    {
      name: "Identity Platforms",
      icon: "UserCheck",
      desc: "Synchronize users, roles, and ownership automatically.",
    },
    {
      name: "ServiceNow",
      icon: "Workflow",
      desc: "Track incidents, configuration items, and remediation workflows.",
    },
    {
      name: "Jira",
      icon: "GitBranch",
      desc: "Capture change records and development evidence.",
    },
    {
      name: "Cloud Platforms",
      icon: "Cloud",
      desc: "Continuously monitor AWS, Azure, and Google Cloud environments.",
    },
    {
      name: "Enterprise APIs",
      icon: "Network",
      desc: "Connect enterprise systems securely via governed integrations.",
    },
    {
      name: "Knowledge Bases",
      icon: "BookOpen",
      desc: "Leverage internal policies and regulatory documentation.",
    },
    {
      name: "Document Repositories",
      icon: "FileText",
      desc: "Collect evidence from enterprise documents automatically.",
    },
    {
      name: "Asset Management Systems",
      icon: "Database",
      desc: "Maintain an accurate, continuously updated asset inventory.",
    },
  ],
};

export const ccmPrinciple = {
  label: "Enterprise Trust",
  title: "Enterprise AI. Governed by Design.",
  description:
    "Every compliance decision, remediation workflow, and audit observation is governed by the moderor.ai Enterprise AI Control Plane, ensuring secure, explainable, and audit-ready compliance operations.",
  items: [
    {
      icon: "ShieldCheck",
      badge: "Security",
      title: "Zero Trust Security",
      description:
        "Protect compliance operations with enterprise-grade security and least-privilege access.",
    },
    {
      icon: "UserCheck",
      badge: "Oversight",
      title: "Human-in-the-Loop",
      description: "Keep compliance teams in control of every critical remediation decision.",
    },
    {
      icon: "ScanEye",
      badge: "Transparency",
      title: "Explainable AI",
      description: "Understand every recommendation with transparent AI reasoning.",
    },
    {
      icon: "Scale",
      badge: "Enforcement",
      title: "Policy Enforcement",
      description: "Continuously enforce enterprise compliance policies across every asset.",
    },
    {
      icon: "NotebookPen",
      badge: "Audit",
      title: "Complete Audit Trails",
      description:
        "Capture every rule execution, approval, and remediation with end-to-end traceability.",
    },
    {
      icon: "Building2",
      badge: "Governance",
      title: "Enterprise Governance",
      description:
        "Govern compliance through centralized visibility, control, and accountability.",
    },
  ],
};

export const ccmFinalCta = {
  titleLead: "Stop Preparing for Compliance.",
  titleHighlight: "Start Operating It.",
  description:
    "Move beyond periodic reviews with AI-powered Continuous Compliance Monitoring that detects violations, accelerates remediation, and keeps your organization audit-ready every day.",
  primaryCta: "Book a Demo",
};
