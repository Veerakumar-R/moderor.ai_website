// Content model for the GRC Suite — Compliance IQ product page.
// Presentation lives in src/components/ciq/*, never here.

export const ciqRoute = "/products/compliance-iq";

export const ciqBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "GRC Suite", href: "/" },
  { label: "Compliance IQ", href: ciqRoute },
];

export const ciqHero = {
  badge: "GRC Suite · Compliance IQ",
  titleLine1: "IT Compliance Intelligence.",
  titleLine2: "Continuous Governance.",
  primaryCta: "Book a Demo",
  secondaryCta: "Platform Overview",
  description:
    "Govern IT controls, automate assessments, collect evidence, and maintain continuous visibility across every application, framework, and compliance requirement.",
  stat: {
    num: "8+",
    label: "Frameworks supported across application portfolios",
  },
  bandMarquee: [
    "IT GOVERNANCE",
    "AUTOMATED ASSESSMENTS",
    "EVIDENCE COLLECTION",
    "AUDIT READINESS",
  ],
  bandTagline:
    "Built on the moderor.ai Enterprise AI Control Plane for governed IT compliance intelligence.",
  kpis: [
    { value: 95, suffix: "%", label: "Faster Audit Readiness" },
    { value: 90, suffix: "%", label: "Less Manual Evidence Collection" },
    { value: 80, suffix: "%", label: "Fewer Compliance Gaps" },
    { text: "100%", suffix: "", label: "Enterprise Compliance Visibility" },
  ],
  kpiSection: {
    eyebrow: "Business Outcomes",
    titleLead: "Strengthen IT Governance with ",
    titleHighlight: "Measurable Outcomes",
    note: [
      "Replace spreadsheet-driven tracking with application-centric compliance workspaces and continuous assessment visibility.",
      "Stay audit-ready without last-minute evidence hunts or manual review cycles.",
    ],
  },
};

export const ciqChallenge = {
  tag: "Business Challenge",
  title: "Compliance Doesn't Fail During the Audit.",
  titleHighlight: "It Fails Between Assessments.",
  paragraphs: [
    "Most organizations manage IT compliance through spreadsheets, manual evidence collection, and periodic assessments. As applications grow and regulatory requirements expand, governance teams lose visibility into overdue checks, missing evidence, and control gaps.",
    "Issues surface only when audit preparation begins—when remediation is most disruptive and costly.",
    "Modern IT Governance requires continuous visibility—not last-minute audit preparation.",
  ],
  visualBadge: "The Result",
  visualClosing:
    "IT governance teams need continuous assessment visibility—not reactive audit preparation.",
  bullets: [
    "Spreadsheets and manual evidence collection slow every assessment cycle.",
    "Overdue compliance checks go unnoticed between assessment periods.",
    "Control gaps surface only when audit preparation begins.",
    "Application portfolios grow faster than governance visibility.",
    "Regulatory frameworks expand across disconnected tools and teams.",
    "Application owners lack structured workspaces for compliance activities.",
  ],
};

export const ciqSolution = {
  tag: "Solution Positioning",
  title: "Built for Intelligent",
  titleHighlight: "IT Governance",
  cards: [
    {
      variant: "split" as const,
      title: "Application-centric compliance, not another monitoring tool",
      body: "Compliance IQ transforms IT governance into a structured, application-centric compliance platform. It organizes regulatory frameworks into reusable rule templates, automates evidence collection, and provides real-time visibility into compliance posture across every application.",
      image: "/images/domain-outcomes/domain-compliance.png",
      imageAlt: "IT governance and application compliance visualization",
    },
    {
      variant: "plain" as const,
      title: "Powered by AI, automation, and enterprise governance",
      lead: "The platform automatically:",
      bullets: [
        "Organizes frameworks into reusable rule templates",
        "Automates evidence collection from enterprise systems",
        "Tracks scheduled assessments and overdue activities",
        "Initiates remediation workflows when gaps are detected",
        "Generates audit-ready reports on demand",
        "Maintains continuous evidence and traceability",
      ],
      closing: "One platform. One compliance view. Continuous IT governance.",
    },
  ],
};

export const ciqCapabilities = {
  eyebrow: "Business Capabilities",
  titleLead: "Everything you need to govern IT compliance ",
  titleHighlight: "with confidence.",
  cards: [
    {
      icon: "Scale",
      name: "Rule Template Management",
      desc: "Standardize ITGC, PCI DSS, SOC 2, ISO 27001, and custom compliance frameworks.",
    },
    {
      icon: "Layers",
      name: "Application Compliance Workspace",
      desc: "Provide application owners with personalized compliance workspaces and assessments.",
    },
    {
      icon: "FileText",
      name: "Automated Evidence Collection",
      desc: "Collect evidence automatically from enterprise systems and connected applications.",
    },
    {
      icon: "CalendarRange",
      name: "Continuous Assessment Tracking",
      desc: "Monitor scheduled compliance activities and identify overdue assessments.",
    },
    {
      icon: "Workflow",
      name: "Exception & Remediation Management",
      desc: "Automatically initiate remediation workflows when compliance gaps are detected.",
    },
    {
      icon: "LayoutDashboard",
      name: "Compliance Dashboards",
      desc: "Monitor enterprise-wide compliance posture through real-time dashboards.",
    },
    {
      icon: "FileChartColumn",
      name: "Assessment Reporting",
      desc: "Generate audit-ready reports for applications, frameworks, or the enterprise.",
    },
    {
      icon: "BadgeCheck",
      name: "Complete Audit Readiness",
      desc: "Maintain continuous evidence and traceability for every compliance activity.",
    },
  ],
  feature: {
    icon: "ClipboardCheck",
    name: "Govern IT Compliance Across Every Application",
    desc: "Compliance IQ combines intelligent assessments, automated evidence collection, and policy-driven governance to simplify IT compliance across every application in your portfolio.",
  },
};

export const ciqStakeholders = {
  label: "Enterprise Use Cases",
  titleLead: "Built for Every Team ",
  titleHighlight: "Responsible for IT Governance",
  cards: [
    {
      icon: "ShieldCheck",
      tagline: "IT Governance Teams",
      title: "Monitor enterprise-wide compliance and governance performance.",
    },
    {
      icon: "Server",
      tagline: "Application Owners",
      title: "Complete assessments and manage compliance for assigned applications.",
    },
    {
      icon: "ClipboardCheck",
      tagline: "Compliance Teams",
      title: "Improve framework adherence and audit readiness.",
    },
    {
      icon: "FileSearch",
      tagline: "Internal Audit",
      title: "Access continuously validated evidence and assessment reports.",
    },
    {
      icon: "TrendingUp",
      tagline: "Risk Management",
      title: "Identify compliance gaps before they become operational risks.",
    },
    {
      icon: "Lock",
      tagline: "Security Teams",
      title: "Strengthen IT control governance across enterprise applications.",
    },
    {
      icon: "BarChart3",
      tagline: "Executive Leadership",
      title: "Monitor enterprise compliance posture through strategic dashboards.",
    },
    {
      icon: "Building2",
      tagline: "Regulated Industries",
      title: "Support PCI DSS, SOC 2, ITGC, ISO 27001, and custom frameworks.",
    },
  ],
};

export const ciqOutcomes = {
  eyebrow: "Enterprise Capabilities",
  titleLead: "Enterprise AI Built for Modern ",
  titleHighlight: "IT Governance",
  description:
    "Purpose-built for IT Governance teams, Compliance IQ combines AI, automation, and enterprise governance to simplify compliance operations across complex application environments.",
  cards: [
    {
      icon: "FileText",
      name: "AI Evidence Collection",
      desc: "Retrieve evidence automatically from connected enterprise systems.",
    },
    {
      icon: "Scale",
      name: "Compliance Intelligence",
      desc: "Evaluate evidence against compliance rules using AI-powered reasoning.",
    },
    {
      icon: "RefreshCw",
      name: "Frequency-Driven Assessments",
      desc: "Automate recurring compliance checks based on scheduled frequencies.",
    },
    {
      icon: "MessageSquare",
      name: "AI Reminder Agent",
      desc: "Notify application owners before assessments become overdue.",
    },
    {
      icon: "Workflow",
      name: "Automatic ITSM Ticketing",
      desc: "Create remediation tickets automatically for compliance failures.",
    },
    {
      icon: "Layers",
      name: "Application-Centric Assessments",
      desc: "Manage compliance at the application level with complete visibility.",
    },
    {
      icon: "LayoutDashboard",
      name: "Enterprise Dashboards",
      desc: "Monitor compliance trends, owner performance, and framework coverage.",
    },
    {
      icon: "BookOpen",
      name: "Knowledge Intelligence",
      desc: "Leverage enterprise knowledge to guide compliance assessments.",
    },
    {
      icon: "Lock",
      name: "Role-Based Access Control",
      desc: "Secure compliance data with enterprise-grade access controls.",
    },
    {
      icon: "ScanEye",
      name: "Explainable AI",
      desc: "Understand every compliance recommendation with transparent reasoning.",
    },
    {
      icon: "ListChecks",
      name: "Complete Audit Trails",
      desc: "Track every assessment, evidence submission, approval, and remediation.",
    },
    {
      icon: "Building2",
      name: "Enterprise Governance",
      desc: "Manage IT compliance through centralized governance and policy enforcement.",
    },
  ],
};

export const ciqIntegrations = {
  label: "Enterprise Integrations",
  title: "Built Around Your Existing",
  titleHighlight: "Enterprise Ecosystem",
  description:
    "Compliance IQ integrates seamlessly with your existing enterprise applications to automate evidence collection and streamline compliance operations.",
  items: [
    {
      name: "ServiceNow",
      icon: "Workflow",
      desc: "Collect ITSM records, incidents, and CMDB data automatically.",
    },
    {
      name: "Jira",
      icon: "GitBranch",
      desc: "Capture change records and development evidence seamlessly.",
    },
    {
      name: "Microsoft 365",
      icon: "FileText",
      desc: "Retrieve policies and documents from SharePoint and OneDrive.",
    },
    {
      name: "Data Warehouses",
      icon: "Database",
      desc: "Validate operational reports and business transactions.",
    },
    {
      name: "Cloud Platforms",
      icon: "Cloud",
      desc: "Connect Azure, AWS, and Google Cloud environments.",
    },
    {
      name: "Enterprise APIs",
      icon: "Network",
      desc: "Integrate securely with enterprise applications and services.",
    },
    {
      name: "Identity Platforms",
      icon: "UserCheck",
      desc: "Synchronize users, roles, and application ownership data.",
    },
    {
      name: "Document Repositories",
      icon: "BookOpen",
      desc: "Collect evidence from enterprise document stores automatically.",
    },
  ],
};

export const ciqPrinciple = {
  label: "Enterprise Trust",
  title: "Enterprise AI. Governed by Design.",
  description:
    "Every assessment, evidence submission, and compliance decision is governed by the moderor.ai Enterprise AI Control Plane, ensuring secure, explainable, and audit-ready IT governance.",
  items: [
    {
      icon: "ShieldCheck",
      badge: "Security",
      title: "Zero Trust Security",
      description:
        "Protect compliance data with enterprise-grade security controls and least-privilege access.",
    },
    {
      icon: "UserCheck",
      badge: "Oversight",
      title: "Human-in-the-Loop",
      description: "Keep governance teams in control of critical compliance decisions.",
    },
    {
      icon: "ScanEye",
      badge: "Transparency",
      title: "Explainable AI",
      description: "Understand every compliance recommendation with transparent reasoning.",
    },
    {
      icon: "Scale",
      badge: "Enforcement",
      title: "Policy Enforcement",
      description: "Apply governance policies consistently across every assessment.",
    },
    {
      icon: "NotebookPen",
      badge: "Audit",
      title: "Complete Audit Trails",
      description:
        "Capture every assessment, approval, and remediation activity with full traceability.",
    },
    {
      icon: "Building2",
      badge: "Governance",
      title: "Enterprise Governance",
      description:
        "Manage compliance through centralized visibility, control, and accountability.",
    },
  ],
};

export const ciqFinalCta = {
  titleLead: "Govern IT Compliance",
  titleHighlight: "with Confidence.",
  description:
    "Replace manual assessments and spreadsheet-driven tracking with AI-powered IT governance that strengthens compliance, accelerates audits, and delivers continuous visibility.",
  primaryCta: "Book a Demo",
};
