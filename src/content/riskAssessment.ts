// Content model for the GRC Suite — Risk Assessment product page.
// Presentation lives in src/components/ra/*, never here.

export const raRoute = "/products/risk-assessment";

export const raBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "GRC Suite", href: "/" },
  { label: "Risk Assessment", href: raRoute },
];

export const raHero = {
  badge: "GRC Suite · Risk Assessment",
  titleLine1: "Smarter Third-Party Decisions.",
  titleLine2: "Lower Enterprise Risk.",
  primaryCta: "Book a Demo",
  secondaryCta: "Platform Overview",
  description:
    "Assess, onboard, monitor, and govern third parties through AI-powered due diligence, intelligent risk evaluation, automated compliance assessments, and continuous lifecycle monitoring.",
  stat: {
    num: "3X",
    label: "Faster third-party onboarding with governed workflows",
  },
  bandMarquee: [
    "THIRD-PARTY RISK",
    "AI DUE DILIGENCE",
    "LIFECYCLE MONITORING",
    "ONBOARDING GOVERNANCE",
  ],
  bandTagline:
    "Built on the moderor.ai Enterprise AI Control Plane for governed third-party risk lifecycle management.",
  kpis: [
    { value: 80, suffix: "%", label: "Faster Due Diligence" },
    { text: "3X", suffix: "", label: "Faster Third-Party Onboarding" },
    { value: 90, suffix: "%", label: "Improved Risk Assessment Accuracy" },
    { text: "Continuous", suffix: "", label: "Risk Monitoring" },
  ],
  kpiSection: {
    eyebrow: "Business Outcomes",
    titleLead: "Strengthen Third-Party Governance with ",
    titleHighlight: "Measurable Outcomes",
    note: [
      "Transform fragmented onboarding and periodic reviews into continuous, intelligent third-party risk governance.",
      "Assess faster, onboard with confidence, and monitor vendor risk throughout the entire relationship lifecycle.",
    ],
  },
};

export const raChallenge = {
  tag: "Business Challenge",
  title: "Third-Party Risk Doesn't End with",
  titleHighlight: "Onboarding.",
  paragraphs: [
    "Organizations rely on vendors, suppliers, contractors, partners, and service providers to run critical business operations. Yet many third-party assessments end once onboarding is complete, leaving organizations with limited visibility as risks evolve over time.",
    "Changing security posture, financial instability, regulatory actions, compliance failures, and operational disruptions can emerge long after the initial assessment.",
    "Modern third-party governance requires continuous lifecycle intelligence—not one-time assessments.",
  ],
  visualBadge: "The Result",
  visualClosing:
    "Third-party risk evolves continuously—your governance model must keep pace.",
  bullets: [
    "Assessments end at onboarding while vendor risk continues to evolve.",
    "Security posture and compliance failures emerge post-onboarding.",
    "Periodic reviews leave gaps between reassessment cycles.",
    "Fragmented tools create inconsistent due diligence processes.",
    "Procurement and risk teams lack shared lifecycle visibility.",
    "Audit trails and evidence scatter across spreadsheets and email.",
  ],
};

export const raSolution = {
  tag: "Solution Positioning",
  title: "Built for Intelligent Third-Party",
  titleHighlight: "Risk Lifecycle Management",
  cards: [
    {
      variant: "split" as const,
      title: "Beyond one-time vendor assessments",
      body: "Traditional TPRM platforms focus on assessments. Risk Assessment manages the entire third-party lifecycle—from AI-powered onboarding and intelligent risk scoring to compliance evaluation, approval workflows, and continuous reassessments.",
      image: "/images/domain-outcomes/domain-risk.png",
      imageAlt: "Third-party risk lifecycle management visualization",
    },
    {
      variant: "plain" as const,
      title: "Powered by AI, automation, and enterprise governance",
      lead: "The platform automatically:",
      bullets: [
        "Captures third-party information through intelligent onboarding",
        "Scores risk and criticality using configurable models",
        "Generates tailored questionnaires with AI",
        "Evaluates responses and evidence with explainable AI",
        "Routes multi-level reviews through governed workflows",
        "Schedules periodic reassessments based on risk and policy",
      ],
      closing: "Assess smarter. Onboard faster. Monitor continuously.",
    },
  ],
};

export const raCapabilities = {
  eyebrow: "Business Capabilities",
  titleLead: "Everything you need to manage third-party risk ",
  titleHighlight: "with confidence.",
  cards: [
    {
      icon: "MessageSquare",
      name: "AI Third-Party Intake",
      desc: "Capture third-party information through an intelligent conversational onboarding portal.",
    },
    {
      icon: "Gauge",
      name: "Risk & Criticality Scoring",
      desc: "Automatically classify third parties based on business impact and risk.",
    },
    {
      icon: "FileText",
      name: "AI Assessment Generation",
      desc: "Generate tailored questionnaires using AI and enterprise policies.",
    },
    {
      icon: "Scale",
      name: "AI Compliance Evaluation",
      desc: "Evaluate responses, supporting documents, and evidence with explainable AI.",
    },
    {
      icon: "ClipboardCheck",
      name: "Multi-Level Reviews",
      desc: "Support business, security, risk, and compliance approvals through governed workflows.",
    },
    {
      icon: "BadgeCheck",
      name: "Onboarding Decisions",
      desc: "Manage onboarding, rejection, clarification, and approval from one platform.",
    },
    {
      icon: "CalendarRange",
      name: "Periodic Reassessments",
      desc: "Automatically schedule reviews based on risk, criticality, and policy.",
    },
    {
      icon: "LayoutDashboard",
      name: "Complete Lifecycle Visibility",
      desc: "Monitor every assessment, decision, approval, and reassessment from a centralized dashboard.",
    },
  ],
  feature: {
    icon: "ShieldCheck",
    name: "Manage the Entire Third-Party Lifecycle",
    desc: "Risk Assessment combines intelligent due diligence, automated compliance evaluation, and continuous monitoring to help organizations understand third-party risk before, during, and after onboarding.",
  },
};

export const raStakeholders = {
  label: "Enterprise Use Cases",
  titleLead: "Built for Every ",
  titleHighlight: "Third-Party Risk Function",
  cards: [
    {
      icon: "TrendingUp",
      tagline: "Chief Risk Officers",
      title: "Gain enterprise-wide visibility into third-party risk exposure.",
    },
    {
      icon: "ShieldCheck",
      tagline: "Third-Party Risk Teams",
      title: "Automate due diligence and continuously govern third-party risk.",
    },
    {
      icon: "Building2",
      tagline: "Procurement Teams",
      title: "Accelerate onboarding while improving governance and compliance.",
    },
    {
      icon: "Lock",
      tagline: "Information Security Teams",
      title: "Evaluate security posture using AI-powered compliance assessments.",
    },
    {
      icon: "ClipboardCheck",
      tagline: "Compliance Teams",
      title: "Standardize assessments and maintain complete audit readiness.",
    },
    {
      icon: "Users",
      tagline: "Vendor Management Offices",
      title: "Manage onboarding, reviews, and reassessments centrally.",
    },
    {
      icon: "FileSearch",
      tagline: "Internal Audit",
      title: "Access fully traceable assessments and evidence-backed decisions.",
    },
    {
      icon: "UserCheck",
      tagline: "Business Owners",
      title: "Collaborate with third parties while maintaining governance visibility.",
    },
  ],
};

export const raOutcomes = {
  eyebrow: "Enterprise Capabilities",
  titleLead: "Enterprise AI Built for Modern ",
  titleHighlight: "Third-Party Governance",
  description:
    "Purpose-built for third-party risk teams, Risk Assessment combines AI, automation, and enterprise governance to simplify due diligence and lifecycle management across complex vendor portfolios.",
  cards: [
    {
      icon: "MessageSquare",
      name: "AI Enquiry Portal",
      desc: "Guide third parties through intelligent onboarding conversations.",
    },
    {
      icon: "ScanSearch",
      name: "Profile Intelligence",
      desc: "Automatically create enriched third-party profiles.",
    },
    {
      icon: "Gauge",
      name: "Risk & Criticality Engine",
      desc: "Calculate inherent risk using configurable scoring models.",
    },
    {
      icon: "FileText",
      name: "AI Assessment Builder",
      desc: "Generate questionnaires based on third-party type and risk.",
    },
    {
      icon: "Scale",
      name: "AI Compliance Evaluation",
      desc: "Assess every response with confidence scores and reasoning.",
    },
    {
      icon: "Zap",
      name: "Decision Intelligence",
      desc: "Support approvals, clarifications, overrides, and onboarding decisions.",
    },
    {
      icon: "RefreshCw",
      name: "Periodic Lifecycle Management",
      desc: "Automatically trigger reassessments using configurable schedules.",
    },
    {
      icon: "LayoutDashboard",
      name: "Executive Dashboards",
      desc: "Monitor onboarding progress, portfolio risk, and SLA performance.",
    },
    {
      icon: "BookOpen",
      name: "Knowledge Intelligence",
      desc: "Leverage policies, regulations, and historical assessments to improve AI decisions.",
    },
    {
      icon: "ScanEye",
      name: "Explainable AI",
      desc: "Understand every recommendation with transparent reasoning.",
    },
    {
      icon: "Lock",
      name: "Role-Based Access Control",
      desc: "Protect third-party information with enterprise-grade security.",
    },
    {
      icon: "ListChecks",
      name: "Complete Audit Trails",
      desc: "Capture every interaction, approval, override, and assessment with full traceability.",
    },
  ],
};

export const raIntegrations = {
  label: "Enterprise Integrations",
  title: "Connect with Your Existing",
  titleHighlight: "Third-Party Ecosystem",
  description:
    "Risk Assessment integrates seamlessly with procurement systems, security platforms, compliance repositories, and enterprise applications to streamline third-party governance.",
  items: [
    {
      name: "Procurement Platforms",
      icon: "Building2",
      desc: "Synchronize onboarding workflows and supplier records.",
    },
    {
      name: "Vendor Portals",
      icon: "Globe",
      desc: "Collect third-party information and supporting documents securely.",
    },
    {
      name: "Identity & Authentication",
      icon: "UserCheck",
      desc: "Enable secure access with enterprise identity providers and OTP verification.",
    },
    {
      name: "Document Repositories",
      icon: "FileText",
      desc: "Manage contracts, certifications, and compliance evidence centrally.",
    },
    {
      name: "Enterprise Knowledge Bases",
      icon: "BookOpen",
      desc: "Ground AI assessments using policies and regulatory frameworks.",
    },
    {
      name: "Enterprise Applications",
      icon: "Network",
      desc: "Integrate seamlessly with business systems through secure APIs.",
    },
    {
      name: "Cloud Infrastructure",
      icon: "Cloud",
      desc: "Deploy securely across AWS, Azure, GCP, hybrid, or on-premises environments.",
    },
    {
      name: "Risk & Compliance Systems",
      icon: "ShieldCheck",
      desc: "Exchange risk, assessment, and governance data across your ecosystem.",
    },
  ],
};

export const raPrinciple = {
  label: "Enterprise Trust",
  title: "Enterprise AI. Governed by Design.",
  description:
    "Every third-party assessment, onboarding decision, and compliance evaluation is governed by the moderor.ai Enterprise AI Control Plane, ensuring secure, explainable, and audit-ready third-party governance.",
  items: [
    {
      icon: "ShieldCheck",
      badge: "Security",
      title: "Zero Trust Security",
      description:
        "Protect third-party information with enterprise-grade security controls and least-privilege access.",
    },
    {
      icon: "UserCheck",
      badge: "Oversight",
      title: "Human-in-the-Loop",
      description: "Keep risk experts in control of every critical onboarding decision.",
    },
    {
      icon: "ScanEye",
      badge: "Transparency",
      title: "Explainable AI",
      description: "Understand every AI recommendation through transparent reasoning.",
    },
    {
      icon: "Scale",
      badge: "Enforcement",
      title: "Policy Enforcement",
      description: "Apply enterprise policies consistently across every assessment.",
    },
    {
      icon: "NotebookPen",
      badge: "Audit",
      title: "Complete Audit Trails",
      description:
        "Capture every assessment, approval, override, and lifecycle event with full traceability.",
    },
    {
      icon: "Building2",
      badge: "Governance",
      title: "Enterprise Governance",
      description:
        "Manage third-party risk through centralized oversight, control, and accountability.",
    },
  ],
};

export const raFinalCta = {
  titleLead: "Move Beyond Vendor Assessments.",
  titleHighlight: "Govern Every Third-Party Relationship.",
  description:
    "Transform fragmented onboarding and periodic reviews into AI-powered third-party lifecycle management with intelligent risk evaluation, continuous governance, and audit-ready visibility.",
  primaryCta: "Book a Demo",
};
