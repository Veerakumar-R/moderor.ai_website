// Content model for the BOM Suite — Omni Connect product page.
// Presentation lives in src/components/omni-connect/*, never here.

export const omniRoute = "/products/omni-connect";

export const omniBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "BOM Suite", href: "/suites/bom" },
  { label: "Omni Connect", href: omniRoute },
];

export const omniHero = {
  badge: "BOM Suite · Omni Connect",
  titleLine1: "Recover Customers.",
  titleLine2: "Recover Revenue.",
  primaryCta: "Book a Demo",
  secondaryCta: "Explore Capabilities",
  description:
    "AI-powered customer re-engagement that detects drop-offs, initiates intelligent outreach, and converts abandoned journeys into completed transactions — built on the Moderor.ai Enterprise AI Control Plane.",
  stat: {
    num: "24/7",
    label: "Intelligent customer recovery across every channel",
  },
  bandMarquee: [
    "CUSTOMER RECOVERY",
    "INTELLIGENT OUTREACH",
    "MULTI-CHANNEL ENGAGEMENT",
    "REVENUE RECOVERY",
  ],
  bandTagline: "Partnering with leading enterprises to recover customers and revenue at scale.",
  kpis: [
    { value: 30, suffix: "%", label: "Higher Customer Recovery" },
    { text: "3X", suffix: "", label: "Faster Re-Engagement" },
    { text: "Real-Time", suffix: "", label: "Drop-Off Detection" },
    { text: "Continuous", suffix: "", label: "Journey Monitoring" },
  ],
  kpiSection: {
    eyebrow: "Business Outcomes",
    titleLead: "Turn Abandoned Journeys into",
    titleHighlight: "Recovered Revenue",
    note: [
      "AI detects customer drop-offs in real time and initiates intelligent, multi-channel outreach.",
      "Recover more customers, faster — without adding manual follow-up overhead.",
    ],
  },
};

export const omniChallenge = {
  tag: "Business Challenge",
  title: "Customer Drop-Offs Shouldn't Become",
  titleHighlight: "Lost Revenue.",
  paragraphs: [
    "Customers abandon journeys every day — incomplete purchases, stalled onboarding, unanswered inquiries, and silent churn. Manual follow-ups can't keep pace, and disconnected systems leave revenue on the table.",
    "Organizations don't need more dashboards. They need intelligent customer recovery.",
  ],
  visualBadge: "The Result",
  visualTitle: "Where manual follow-up falls short",
  bullets: [
    "Drop-offs are detected too late to recover.",
    "Follow-up depends on manual outreach and spreadsheets.",
    "Customers receive inconsistent communication across channels.",
    "Sales and support teams lack visibility into abandoned journeys.",
    "Revenue recovery is reactive instead of proactive.",
    "Teams spend more time chasing leads than closing conversions.",
  ],
  closing: "Modern customer engagement requires continuous recovery — not periodic follow-up.",
  visualClosing:
    "Modern customer engagement requires continuous recovery — not periodic follow-up.",
};

export const omniSolution = {
  tag: "Solution Positioning",
  title: "Built for Intelligent",
  titleHighlight: "Customer Recovery.",
  cards: [
    {
      variant: "split" as const,
      title: "Beyond manual follow-up",
      body: "Omni Connect combines AI-powered drop-off detection, intelligent outreach orchestration, and multi-channel engagement to recover customers before they churn.",
      image: "/images/domain-outcomes/domain-engineering.png",
      imageAlt: "Intelligent customer recovery and multi-channel engagement visualization",
    },
    {
      variant: "plain" as const,
      title: "One platform. Every channel. Continuous customer recovery.",
      lead: "From detection to conversion, the platform automatically:",
      bullets: [
        "Detects customer drop-offs in real time",
        "Initiates intelligent, context-aware outreach",
        "Orchestrates engagement across voice, SMS, and email",
        "Personalizes recovery journeys for each customer",
        "Tracks conversion and recovery metrics",
        "Integrates with CRM and contact center systems",
      ],
      closing: "AI continuously monitors customer journeys. Your teams recover revenue with confidence.",
    },
  ],
};

export const omniCapabilities = {
  eyebrow: "Why Omni Connect",
  titleLead: "Everything You Need to Recover Customers with ",
  titleHighlight: "Intelligence",
  description:
    "Detect drop-offs automatically, orchestrate intelligent outreach, and convert abandoned journeys into completed transactions across every customer touchpoint.",
  cards: [
    {
      icon: "Radar",
      name: "Real-Time Drop-Off Detection",
      desc: "Identify abandoned journeys the moment customers disengage.",
    },
    {
      icon: "Zap",
      name: "Intelligent Outreach",
      desc: "Initiate context-aware recovery conversations automatically.",
    },
    {
      icon: "Waypoints",
      name: "Multi-Channel Engagement",
      desc: "Reach customers across voice, SMS, email, and messaging.",
    },
    {
      icon: "LayoutDashboard",
      name: "Unified Recovery Dashboard",
      desc: "Monitor drop-offs, outreach, and conversions from one view.",
    },
    {
      icon: "BarChart3",
      name: "Recovery Analytics",
      desc: "Track recovery rates, conversion metrics, and revenue impact.",
    },
    {
      icon: "Workflow",
      name: "Journey Orchestration",
      desc: "Design and automate recovery workflows across customer lifecycles.",
    },
    {
      icon: "UserCheck",
      name: "Personalized Engagement",
      desc: "Tailor outreach based on customer context and journey stage.",
    },
    {
      icon: "ShieldCheck",
      name: "Enterprise Governance",
      desc: "Maintain compliance and audit trails across every recovery interaction.",
    },
  ],
  feature: {
    icon: "Sparkles",
    name: "Enterprise AI Built for Customer Recovery",
    desc: "Purpose-built for enterprise customer engagement, Omni Connect combines AI, automation, and multi-channel orchestration to recover revenue at scale.",
  },
};

export const omniStakeholders = {
  label: "Built for Every Customer-Facing Team",
  titleLead: "Built for Every ",
  titleHighlight: "Customer Engagement Function",
  description:
    "Whether managing customer experience, sales operations, or contact center performance, Omni Connect empowers every stakeholder with AI-powered recovery at scale.",
  cards: [
    {
      icon: "HeartHandshake",
      tagline: "Customer Experience",
      title: "Recover abandoned journeys before customers churn.",
    },
    {
      icon: "TrendingUp",
      tagline: "Sales Teams",
      title: "Re-engage prospects and close stalled deals faster.",
    },
    {
      icon: "Headphones",
      tagline: "Contact Centers",
      title: "Automate intelligent outreach across voice and digital channels.",
    },
    {
      icon: "Megaphone",
      tagline: "Marketing Operations",
      title: "Convert drop-offs into completed conversions.",
    },
    {
      icon: "Building2",
      tagline: "Business Unit Leaders",
      title: "Monitor recovery performance across regions and teams.",
    },
    {
      icon: "BarChart3",
      tagline: "Revenue Operations",
      title: "Track recovery metrics and revenue impact in real time.",
    },
    {
      icon: "Network",
      tagline: "IT Administrators",
      title: "Configure integrations, channels, and access securely.",
    },
    {
      icon: "ShieldCheck",
      tagline: "Compliance & Governance",
      title: "Ensure every recovery interaction is governed and traceable.",
    },
  ],
};

export const omniOutcomes = {
  eyebrow: "Enterprise Capabilities",
  titleLead: "Enterprise AI Built for ",
  titleHighlight: "Customer Recovery",
  description:
    "Purpose-built for enterprise customer engagement, Omni Connect combines AI, automation, and multi-channel orchestration to recover customers and revenue at scale.",
  cards: [
    {
      icon: "Zap",
      name: "AI Recovery Engine",
      desc: "Detect and respond to customer drop-offs using intelligent automation.",
    },
    {
      icon: "Radar",
      name: "Journey Monitoring",
      desc: "Continuously track customer journeys across every touchpoint.",
    },
    {
      icon: "Phone",
      name: "Voice AI Outreach",
      desc: "Initiate intelligent voice conversations for high-value recoveries.",
    },
    {
      icon: "MessageSquare",
      name: "SMS & Messaging",
      desc: "Engage customers through automated text and messaging channels.",
    },
    {
      icon: "Mail",
      name: "Email Automation",
      desc: "Deliver personalized recovery emails at the right moment.",
    },
    {
      icon: "Workflow",
      name: "Workflow Builder",
      desc: "Design recovery workflows without coding.",
    },
    {
      icon: "LayoutDashboard",
      name: "Recovery Dashboards",
      desc: "Monitor drop-offs, outreach, and conversion in real time.",
    },
    {
      icon: "Waypoints",
      name: "CRM Integrations",
      desc: "Connect seamlessly with Salesforce, HubSpot, and enterprise CRMs.",
    },
    {
      icon: "ShieldCheck",
      name: "Role-Based Access Control",
      desc: "Protect customer data with granular enterprise access controls.",
    },
    {
      icon: "NotebookPen",
      name: "Complete Audit Trails",
      desc: "Capture every outreach, response, and recovery action.",
    },
    {
      icon: "Globe",
      name: "Multi-Region Support",
      desc: "Deploy recovery workflows across regions and languages.",
    },
    {
      icon: "FileChartColumn",
      name: "Recovery Reporting",
      desc: "Export recovery insights and revenue impact reports for leadership.",
    },
  ],
};

export const omniIntegrations = {
  label: "Enterprise Integrations",
  title: "Connect with the Customer Stack",
  titleHighlight: "You Already Use",
  description:
    "Integrate seamlessly with your CRM, contact center, and communication platforms to automate customer recovery without disrupting existing operations.",
  items: [
    {
      name: "CRM Platforms",
      icon: "Building2",
      desc: "Sync customer data and journey context automatically.",
    },
    {
      name: "Voice AI",
      icon: "Phone",
      desc: "Initiate intelligent voice outreach for high-value recoveries.",
    },
    {
      name: "SMS Gateways",
      icon: "MessageSquare",
      desc: "Engage customers through automated text messaging.",
    },
    {
      name: "Email Platforms",
      icon: "Mail",
      desc: "Deliver personalized recovery emails at scale.",
    },
    {
      name: "Contact Centers",
      icon: "Headphones",
      desc: "Integrate with enterprise contact center systems.",
    },
    {
      name: "REST APIs",
      icon: "Waypoints",
      desc: "Connect securely with enterprise applications.",
    },
    {
      name: "Analytics Platforms",
      icon: "BarChart3",
      desc: "Export recovery metrics and conversion insights.",
    },
    {
      name: "Cloud Infrastructure",
      icon: "Cloud",
      desc: "Deploy securely across cloud, hybrid, or on-premises environments.",
    },
  ],
};

export const omniPrinciple = {
  label: "Enterprise Trust",
  title: "Enterprise AI. Governed by Design.",
  description:
    "Every recovery interaction, outreach decision, and customer engagement is secured, governed, and fully traceable through the Moderor.ai Enterprise AI Control Plane.",
  items: [
    {
      icon: "ShieldCheck",
      badge: "Security",
      title: "Zero Trust Security",
      description: "Protect customer data with enterprise-grade security controls.",
    },
    {
      icon: "UserCheck",
      badge: "Oversight",
      title: "Human-in-the-Loop",
      description: "Keep teams in control of critical recovery decisions.",
    },
    {
      icon: "ScanEye",
      badge: "Transparency",
      title: "Explainable AI",
      description: "Understand every AI-generated outreach with transparent reasoning.",
    },
    {
      icon: "ListChecks",
      badge: "Enforcement",
      title: "Policy Enforcement",
      description: "Apply engagement policies consistently across every recovery workflow.",
    },
    {
      icon: "NotebookPen",
      badge: "Audit",
      title: "Complete Audit Trails",
      description: "Capture every outreach, response, and recovery action.",
    },
    {
      icon: "Building2",
      badge: "Governance",
      title: "Enterprise Governance",
      description: "Manage customer recovery with centralized oversight and control.",
    },
  ],
};

export const omniFinalCta = {
  titleLead: "Don't Let Customer Drop-Offs Become",
  titleHighlight: "Lost Revenue.",
  description:
    "Move beyond manual follow-up with AI-powered customer recovery that detects drop-offs, initiates intelligent outreach, and converts abandoned journeys into revenue.",
  primaryCta: "Book a Demo",
};
