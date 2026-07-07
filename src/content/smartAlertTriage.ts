// Content model for the GRC Suite — Smart Alert Triage product page.
// Presentation lives in src/components/sat/*, never here.

export const satRoute = "/products/smart-alert-triage";

export const satBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "GRC Suite", href: "/" },
  { label: "Smart Alert Triage", href: satRoute },
];

export const satHero = {
  badge: "GRC Suite · Smart Alert Triage",
  titleLine1: "Alert Intelligence. Pattern Discovery.",
  titleLine2: "Faster Investigations.",
  primaryCta: "Book a Demo",
  secondaryCta: "Platform Overview",
  description:
    "Go beyond alert prioritization with AI that filters noise, discovers hidden fraud patterns, uncovers unknown risks, and transforms fragmented alerts into investigation-ready intelligence.",
  stat: {
    num: "2.4M+",
    label: "Alerts triaged across financial crime operations",
  },
  bandMarquee: [
    "ALERT INTELLIGENCE",
    "PATTERN DISCOVERY",
    "ML ALERT SCORING",
    "CASE MANAGEMENT",
  ],
  bandTagline:
    "Built on the moderor.ai Enterprise AI Control Plane for governed investigation intelligence.",
  kpis: [
    { value: 80, suffix: "%", label: "False Positive Reduction" },
    { text: "3X", suffix: "", label: "Faster Investigations" },
    { value: 50, suffix: "%", label: "Analyst Productivity" },
    { text: "Higher", suffix: "", label: "Detection of Unknown Risk Patterns" },
  ],
  kpiSection: {
    eyebrow: "Business Outcomes",
    titleLead: "Transform Alert Data into ",
    titleHighlight: "Actionable Intelligence",
    note: [
      "AI-powered alert triage and pattern discovery across your financial crime operations.",
      "Reduce false positives, accelerate investigations, and uncover risks rule engines miss.",
    ],
  },
};

export const satChallenge = {
  tag: "Business Challenge",
  title: "Rules Can Only Detect the Risks They Were Designed to Find.",
  titleHighlight: "",
  paragraphs: [
    "Traditional rule engines identify known threats—but emerging fraud patterns and hidden risks often remain undetected.",
    "Meanwhile, investigation teams spend valuable time reviewing false positives instead of focusing on genuine threats.",
    "Smart Alert Triage combines AI-powered alert intelligence and pattern discovery to uncover hidden risks, reduce investigation noise, and accelerate every investigation.",
  ],
  visualBadge: "The Result",
  visualClosing:
    "Modern financial crime operations require investigation intelligence—not manual alert review at scale.",
  bullets: [
    "Emerging fraud patterns remain undetected by static rules.",
    "Analysts review high volumes of false positives daily.",
    "Hidden risks stay buried in fragmented alert data.",
    "Investigations lack consolidated, investigation-ready context.",
    "Rule engines only surface threats they were designed to find.",
    "Operational teams struggle to keep pace with alert volume.",
  ],
};

export const satSolution = {
  tag: "Solution Positioning",
  title: "Built for Alert Intelligence &",
  titleHighlight: "Pattern Discovery",
  cards: [
    {
      variant: "split" as const,
      title: "Beyond alert prioritization",
      body: "Traditional monitoring tools help you sort alerts. Smart Alert Triage combines AI-powered alert intelligence, pattern discovery, and policy-driven reasoning to identify hidden risks that traditional rule engines miss.",
      image: "/images/domain-outcomes/domain-risk.png",
      imageAlt: "Alert intelligence and pattern discovery visualization",
    },
    {
      variant: "plain" as const,
      title: "Powered by AI, machine learning, and enterprise knowledge",
      lead: "The platform automatically:",
      bullets: [
        "Scores and prioritizes high-risk alerts",
        "Discovers emerging fraud patterns and anomalies",
        "Consolidates related alerts into investigation-ready cases",
        "Applies enterprise policies with explainable AI",
        "Generates AI case summaries for faster reviews",
        "Learns continuously from analyst decisions",
      ],
      closing: "AI uncovers the risk. Your analysts stay in control.",
    },
  ],
};

export const satCapabilities = {
  eyebrow: "Why Smart Alert Triage",
  titleLead: "How the product delivers those ",
  titleHighlight: "outcomes.",
  cards: [
    {
      icon: "Gauge",
      name: "ML Alert Scoring",
      desc: "Score alerts using behavioural patterns and historical intelligence.",
    },
    {
      icon: "Radar",
      name: "Pattern Discovery Engine",
      desc: "Identify new fraud patterns and anomalies beyond traditional rule engines.",
    },
    {
      icon: "Scale",
      name: "AI Policy Reasoning",
      desc: "Apply enterprise policies using explainable AI grounded in organizational knowledge.",
    },
    {
      icon: "Layers",
      name: "Entity-Level Case Management",
      desc: "Group alerts into investigation-ready cases with complete context.",
    },
    {
      icon: "FileText",
      name: "AI Case Summaries",
      desc: "Generate concise investigation summaries for faster analyst reviews.",
    },
    {
      icon: "BookOpen",
      name: "Knowledge Intelligence",
      desc: "Leverage enterprise knowledge and RAG to enrich every investigation.",
    },
    {
      icon: "RefreshCw",
      name: "Adaptive Feedback Loop",
      desc: "Continuously improve models using confirmed investigation outcomes.",
    },
    {
      icon: "LayoutDashboard",
      name: "Executive Dashboards",
      desc: "Track investigations, workloads, and operational KPIs in real time.",
    },
  ],
  feature: {
    icon: "ScanSearch",
    name: "Everything You Need to Investigate with Confidence",
    desc: "Smart Alert Triage combines AI-powered alert intelligence, pattern discovery, and enterprise governance to help investigation teams identify genuine threats faster and reduce operational noise.",
  },
};

export const satStakeholders = {
  label: "Enterprise Use Cases",
  titleLead: "Built for Every ",
  titleHighlight: "Financial Crime Function",
  cards: [
    {
      icon: "ShieldCheck",
      tagline: "Financial Crime Operations",
      title: "Improve investigation efficiency and reduce manual workloads.",
    },
    {
      icon: "Scale",
      tagline: "AML Investigation Teams",
      title: "Prioritize genuine threats while reducing false positives.",
    },
    {
      icon: "TriangleAlert",
      tagline: "Fraud Operations",
      title: "Detect emerging fraud patterns before they become major incidents.",
    },
    {
      icon: "ClipboardCheck",
      tagline: "Compliance Teams",
      title: "Strengthen regulatory readiness with explainable AI and complete auditability.",
    },
    {
      icon: "TrendingUp",
      tagline: "Risk Management",
      title: "Improve enterprise-wide visibility into operational and financial crime risk.",
    },
    {
      icon: "UserCheck",
      tagline: "MLROs",
      title: "Gain AI-powered oversight into investigations and compliance activities.",
    },
    {
      icon: "Building2",
      tagline: "Banking Operations",
      title: "Improve operational consistency across financial crime workflows.",
    },
    {
      icon: "ScanSearch",
      tagline: "Fraud Analysts",
      title: "Focus on the highest-risk cases with AI-assisted investigations.",
    },
  ],
};

export const satOutcomes = {
  eyebrow: "Enterprise Capabilities",
  titleLead: "Enterprise AI Built for Modern ",
  titleHighlight: "Investigation Teams",
  description:
    "Purpose-built for high-volume financial crime environments, Smart Alert Triage combines AI, machine learning, enterprise knowledge, and governance to improve every stage of the investigation lifecycle.",
  cards: [
    {
      icon: "Gauge",
      name: "ML Alert Scoring",
      desc: "Score alerts using behavioural patterns and historical intelligence.",
    },
    {
      icon: "Radar",
      name: "Pattern Discovery Engine",
      desc: "Identify new fraud patterns and anomalies beyond traditional rule engines.",
    },
    {
      icon: "Scale",
      name: "AI Policy Reasoning",
      desc: "Apply enterprise policies using explainable AI grounded in organizational knowledge.",
    },
    {
      icon: "Layers",
      name: "Entity-Level Case Management",
      desc: "Group alerts into investigation-ready cases with complete context.",
    },
    {
      icon: "FileText",
      name: "AI Case Summaries",
      desc: "Generate concise investigation summaries for faster analyst reviews.",
    },
    {
      icon: "BookOpen",
      name: "Knowledge Intelligence",
      desc: "Leverage enterprise knowledge and RAG to enrich every investigation.",
    },
    {
      icon: "RefreshCw",
      name: "Adaptive Feedback Loop",
      desc: "Continuously improve models using confirmed investigation outcomes.",
    },
    {
      icon: "LayoutDashboard",
      name: "Executive Dashboards",
      desc: "Track investigations, workloads, and operational KPIs in real time.",
    },
    {
      icon: "MessageSquare",
      name: "Ask AI",
      desc: "Investigate cases using natural language queries.",
    },
    {
      icon: "Lock",
      name: "Role-Based Access Control",
      desc: "Protect sensitive investigations with enterprise-grade access controls.",
    },
    {
      icon: "ScanEye",
      name: "Explainable AI",
      desc: "Understand every recommendation through transparent AI reasoning.",
    },
    {
      icon: "ListChecks",
      name: "Complete Audit Trails",
      desc: "Capture every alert, investigation, recommendation, and approval with end-to-end traceability.",
    },
  ],
};

export const satIntegrations = {
  label: "Enterprise Integrations",
  title: "Connect with Your Existing",
  titleHighlight: "Financial Crime Ecosystem",
  description:
    "Smart Alert Triage integrates seamlessly with your existing AML, fraud, transaction monitoring, and enterprise systems—enhancing your current investments without replacing them.",
  items: [
    {
      name: "Transaction Monitoring Systems",
      icon: "Activity",
      desc: "Ingest and prioritize alerts from existing transaction monitoring platforms.",
    },
    {
      name: "AML Platforms",
      icon: "ShieldCheck",
      desc: "Enhance AML investigations with AI-powered alert intelligence and pattern discovery.",
    },
    {
      name: "Fraud Detection Solutions",
      icon: "Radar",
      desc: "Strengthen fraud detection by uncovering hidden patterns and emerging threats.",
    },
    {
      name: "Core Banking Systems",
      icon: "Building2",
      desc: "Access customer and transaction data for richer investigation context.",
    },
    {
      name: "Enterprise Data Sources",
      icon: "Database",
      desc: "Enrich investigations with internal and external business data.",
    },
    {
      name: "APIs & Document Repositories",
      icon: "FileText",
      desc: "Integrate securely with enterprise applications and document repositories.",
    },
    {
      name: "Enterprise Knowledge Bases",
      icon: "BookOpen",
      desc: "Leverage policies and institutional knowledge to improve AI-driven decisions.",
    },
    {
      name: "Cloud & Hybrid Deployment",
      icon: "Cloud",
      desc: "Deploy securely across AWS, Azure, GCP, private cloud, or on-premises.",
    },
  ],
};

export const satPrinciple = {
  label: "Enterprise Trust",
  title: "Enterprise AI. Governed by Design.",
  description:
    "Every investigation executed through Smart Alert Triage is governed by the moderor.ai Enterprise AI Control Plane, ensuring secure, explainable, and compliant AI-assisted decision-making.",
  items: [
    {
      icon: "ShieldCheck",
      badge: "Security",
      title: "Zero Trust Security",
      description:
        "Protect investigations with enterprise-grade security and least-privilege access.",
    },
    {
      icon: "UserCheck",
      badge: "Oversight",
      title: "Human-in-the-Loop",
      description: "AI recommends. Analysts review and make the final decision.",
    },
    {
      icon: "ScanEye",
      badge: "Transparency",
      title: "Explainable AI",
      description: "Understand every recommendation through transparent AI reasoning.",
    },
    {
      icon: "ListChecks",
      badge: "Enforcement",
      title: "Policy Enforcement",
      description: "Apply enterprise policies consistently across every investigation.",
    },
    {
      icon: "NotebookPen",
      badge: "Audit",
      title: "Complete Audit Trails",
      description:
        "Capture every alert, investigation, recommendation, and approval.",
    },
    {
      icon: "Building2",
      badge: "Governance",
      title: "Enterprise Governance",
      description:
        "Manage AI-powered investigations with centralized oversight and control.",
    },
  ],
};

export const satFinalCta = {
  titleLead: "Stop Reviewing Every Alert.",
  titleHighlight: "Start Discovering the Risks That Matter.",
  description:
    "Transform alert overload into investigation-ready intelligence with AI-powered alert triage, pattern discovery, and explainable investigation workflows. Reduce false positives. Discover unknown risks. Accelerate investigations.",
  primaryCta: "Book a Demo",
};
