// Content model for the BOM Suite — HR Compliance product page.
// Presentation lives in src/components/hr-compliance/*, never here.

export const hrRoute = "/products/hr-compliance";

export const hrBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "BOM Suite", href: "/suites/bom" },
  { label: "HR Compliance", href: hrRoute },
];

export const hrHero = {
  badge: "BOM Suite · HR Compliance",
  titleLine1: "Continuous Workforce Compliance.",
  titleLine2: "Intelligent HR Governance.",
  primaryCta: "Book a Demo",
  secondaryCta: "Explore Capabilities",
  description:
    "Continuously monitor HR policies, automate compliance checks, identify workforce risks, and maintain audit-ready records across every employee lifecycle — built on the Moderor.ai Enterprise AI Control Plane.",
  stat: {
    num: "10K+",
    label: "Compliance checks automated across enterprise workforces",
  },
  bandMarquee: [
    "WORKFORCE COMPLIANCE",
    "POLICY VALIDATION",
    "EXCEPTION MANAGEMENT",
    "AUDIT READINESS",
  ],
  bandTagline: "Partnering with leading enterprises to deliver continuous, governed HR compliance.",
  kpis: [
    { value: 90, suffix: "%", label: "Less Manual Compliance Tracking" },
    { value: 70, suffix: "%", label: "Faster Issue Resolution" },
    { text: "100%", suffix: "", label: "Audit Visibility" },
    { text: "3X", suffix: "", label: "Faster Compliance Reviews" },
  ],
  kpiSection: {
    eyebrow: "Business Outcomes",
    titleLead: "Strengthen HR Governance with",
    titleHighlight: "Measurable Outcomes",
    note: [
      "AI-powered policy validation and continuous monitoring across every employee lifecycle.",
      "Less manual tracking, faster resolution, and complete audit visibility for HR teams.",
    ],
  },
};

export const hrChallenge = {
  tag: "Business Challenge",
  title: "HR Compliance Shouldn't Depend on Spreadsheets and",
  titleHighlight: "Periodic Reviews.",
  paragraphs: [
    "As organizations grow, HR policies become harder to enforce consistently across employees, business units, and regions. Manual reviews, disconnected HR systems, and spreadsheet-driven tracking create compliance gaps, operational inefficiencies, and limited visibility into workforce risks.",
    "Organizations don't need more HR reports. They need continuous workforce compliance.",
  ],
  visualBadge: "The Result",
  visualTitle: "Where periodic HR reviews fall short",
  bullets: [
    "Policy violations are discovered too late.",
    "Compliance tracking lives in disconnected spreadsheets.",
    "Exceptions escalate without clear ownership.",
    "Onboarding and lifecycle events are reviewed inconsistently.",
    "Audit evidence is reconstructed before every review.",
    "HR teams spend more time tracking compliance than improving it.",
  ],
  closing: "Modern HR governance requires continuous compliance — not periodic reviews.",
  visualClosing:
    "Modern HR governance requires continuous compliance — not periodic reviews.",
};

export const hrSolution = {
  tag: "Solution Positioning",
  title: "Built for Continuous",
  titleHighlight: "Workforce Compliance.",
  cards: [
    {
      variant: "split" as const,
      title: "Beyond periodic HR reviews",
      body: "HR Compliance combines AI-powered policy validation, automated compliance monitoring, and intelligent exception management to continuously evaluate workforce compliance across your organization.",
      image: "/images/domain-outcomes/domain-identity.png",
      imageAlt: "Continuous workforce compliance and HR policy validation visualization",
    },
    {
      variant: "plain" as const,
      title: "One platform. One workforce view. Continuous HR compliance.",
      lead: "From onboarding to employee lifecycle events, the platform automatically:",
      bullets: [
        "Validates HR policies across lifecycle events",
        "Runs automated compliance checks",
        "Identifies and prioritizes exceptions",
        "Tracks remediation through resolution",
        "Maintains audit-ready evidence",
        "Applies policies consistently across regions",
      ],
      closing: "AI continuously monitors workforce compliance. Your HR teams remain in control.",
    },
  ],
};

export const hrCapabilities = {
  eyebrow: "Why HR Compliance",
  titleLead: "Everything You Need to Govern HR Compliance with ",
  titleHighlight: "Confidence",
  description:
    "Automate HR compliance monitoring, standardize policy enforcement, and gain complete visibility into workforce compliance across every stage of the employee lifecycle.",
  cards: [
    {
      icon: "Radar",
      name: "Continuous Policy Monitoring",
      desc: "Continuously validate HR policies across every employee lifecycle event.",
    },
    {
      icon: "ClipboardCheck",
      name: "Automated Compliance Checks",
      desc: "Replace manual reviews with AI-powered compliance validation.",
    },
    {
      icon: "TriangleAlert",
      name: "Exception Management",
      desc: "Identify, prioritize, and resolve policy exceptions before they become risks.",
    },
    {
      icon: "LayoutDashboard",
      name: "Unified Workforce Visibility",
      desc: "Monitor workforce compliance from a centralized dashboard.",
    },
    {
      icon: "BarChart3",
      name: "Operational Intelligence",
      desc: "Track compliance trends, risks, and remediation activities in real time.",
    },
    {
      icon: "Globe",
      name: "Cross-Business Consistency",
      desc: "Apply HR policies consistently across business units and regions.",
    },
    {
      icon: "CalendarRange",
      name: "SLA-Based Issue Tracking",
      desc: "Prioritize and monitor non-compliance until resolution.",
    },
    {
      icon: "FileCheck2",
      name: "Audit-Ready Compliance",
      desc: "Maintain complete evidence and traceability for every compliance decision.",
    },
  ],
  feature: {
    icon: "UserCheck",
    name: "Enterprise AI Built for Modern HR Governance",
    desc: "Purpose-built for enterprise HR operations, HR Compliance combines AI, automation, and policy-driven governance to continuously monitor workforce compliance.",
  },
};

export const hrStakeholders = {
  label: "Built for Every HR & Compliance Team",
  titleLead: "Built for Every ",
  titleHighlight: "HR & Compliance Function",
  description:
    "Whether managing HR operations, compliance oversight, or enterprise governance, HR Compliance empowers every stakeholder with AI-powered insights to strengthen workforce compliance.",
  cards: [
    {
      icon: "Users",
      tagline: "HR Operations",
      title: "Automate workforce compliance across employee lifecycles.",
    },
    {
      icon: "ClipboardCheck",
      tagline: "HR Compliance Teams",
      title: "Continuously monitor policy adherence and exceptions.",
    },
    {
      icon: "UserCheck",
      tagline: "People Operations",
      title: "Improve onboarding consistency and workforce visibility.",
    },
    {
      icon: "ShieldCheck",
      tagline: "Risk & Compliance",
      title: "Reduce operational and regulatory compliance risks.",
    },
    {
      icon: "ScanEye",
      tagline: "Internal Audit",
      title: "Review HR compliance with complete traceability.",
    },
    {
      icon: "Building2",
      tagline: "Business Unit Leaders",
      title: "Monitor workforce compliance across regions and teams.",
    },
    {
      icon: "Network",
      tagline: "IT Administrators",
      title: "Configure rules, integrations, and user access securely.",
    },
    {
      icon: "BarChart3",
      tagline: "Executive Leadership",
      title: "Gain enterprise-wide visibility into workforce compliance.",
    },
  ],
};

export const hrOutcomes = {
  eyebrow: "Enterprise Capabilities",
  titleLead: "Enterprise AI Built for Modern ",
  titleHighlight: "HR Governance",
  description:
    "Purpose-built for enterprise HR operations, HR Compliance combines AI, automation, and policy-driven governance to continuously monitor workforce compliance at enterprise scale.",
  cards: [
    {
      icon: "Zap",
      name: "AI Compliance Engine",
      desc: "Evaluate HR policies automatically using configurable business rules.",
    },
    {
      icon: "ListChecks",
      name: "Policy Rule Management",
      desc: "Create, modify, and manage HR compliance rules without coding.",
    },
    {
      icon: "Radar",
      name: "Continuous Monitoring",
      desc: "Run scheduled compliance checks across HR systems automatically.",
    },
    {
      icon: "TriangleAlert",
      name: "Risk Classification",
      desc: "Prioritize issues using configurable severity levels.",
    },
    {
      icon: "LayoutDashboard",
      name: "Compliance Dashboards",
      desc: "Monitor workforce compliance, trends, and remediation progress.",
    },
    {
      icon: "Eye",
      name: "Exception Governance",
      desc: "Track approvals and policy exceptions with complete transparency.",
    },
    {
      icon: "Workflow",
      name: "Workflow Automation",
      desc: "Automate compliance notifications and issue tracking.",
    },
    {
      icon: "Waypoints",
      name: "Enterprise Integrations",
      desc: "Connect seamlessly with HRMS, payroll, and enterprise applications.",
    },
    {
      icon: "ShieldCheck",
      name: "Role-Based Access Control",
      desc: "Protect sensitive workforce data with granular access controls.",
    },
    {
      icon: "NotebookPen",
      name: "Complete Audit Trails",
      desc: "Capture every compliance check, action, and approval.",
    },
    {
      icon: "Building2",
      name: "Enterprise Governance",
      desc: "Manage workforce compliance through centralized policy enforcement.",
    },
    {
      icon: "FileChartColumn",
      name: "Compliance Reporting",
      desc: "Export compliance insights and operational reports for leadership.",
    },
  ],
};

export const hrIntegrations = {
  label: "Enterprise Integrations",
  title: "Connect with the HR Ecosystem",
  titleHighlight: "You Already Use",
  description:
    "Integrate seamlessly with your HR systems, identity platforms, and enterprise applications to automate workforce compliance without disrupting existing operations.",
  items: [
    {
      name: "HRMS Platforms",
      icon: "Users",
      desc: "Synchronize workforce data automatically.",
    },
    {
      name: "Payroll Systems",
      icon: "FileText",
      desc: "Validate payroll-related compliance requirements.",
    },
    {
      name: "Identity Providers",
      icon: "ShieldCheck",
      desc: "Integrate with enterprise authentication services.",
    },
    {
      name: "Document Repositories",
      icon: "BookOpen",
      desc: "Access employee records securely.",
    },
    {
      name: "Enterprise Applications",
      icon: "Building2",
      desc: "Connect HR workflows across business systems.",
    },
    {
      name: "REST APIs",
      icon: "Waypoints",
      desc: "Integrate securely with enterprise applications.",
    },
    {
      name: "Reporting Platforms",
      icon: "FileChartColumn",
      desc: "Export compliance insights and operational reports.",
    },
    {
      name: "Cloud Infrastructure",
      icon: "Cloud",
      desc: "Deploy securely across cloud, hybrid, or on-premises environments.",
    },
  ],
};

export const hrPrinciple = {
  label: "Enterprise Trust",
  title: "Enterprise AI. Governed by Design.",
  description:
    "Every compliance check, policy evaluation, and workforce decision is secured, governed, and fully traceable through the Moderor.ai Enterprise AI Control Plane.",
  items: [
    {
      icon: "ShieldCheck",
      badge: "Security",
      title: "Zero Trust Security",
      description: "Protect workforce data with enterprise-grade security controls.",
    },
    {
      icon: "UserCheck",
      badge: "Oversight",
      title: "Human-in-the-Loop",
      description: "Keep HR teams in control of critical compliance decisions.",
    },
    {
      icon: "ScanEye",
      badge: "Transparency",
      title: "Explainable AI",
      description: "Understand every AI-generated compliance finding with transparent reasoning.",
    },
    {
      icon: "ListChecks",
      badge: "Enforcement",
      title: "Policy Enforcement",
      description: "Apply HR policies consistently across every compliance workflow.",
    },
    {
      icon: "NotebookPen",
      badge: "Audit",
      title: "Complete Audit Trails",
      description: "Capture every check, approval, and remediation activity.",
    },
    {
      icon: "Building2",
      badge: "Governance",
      title: "Enterprise Governance",
      description: "Manage workforce compliance with centralized oversight and control.",
    },
  ],
};

export const hrFinalCta = {
  titleLead: "Govern Workforce Compliance with",
  titleHighlight: "Confidence.",
  description:
    "Move beyond manual HR reviews with AI-powered compliance monitoring that strengthens governance, improves operational efficiency, and keeps your organization audit-ready.",
  primaryCta: "Book a Demo",
};
