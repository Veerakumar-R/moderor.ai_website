// Content model for the BOM Suite landing page.
// Presentation lives in src/components/bom-suite/*.

export const bomRoute = "/suites/bom";

export const bomProductRoutes = {
  hrCompliance: "/products/hr-compliance",
  userAccess: "/products/logical-access-uam",
  kycVerify: "/products/kyc-agentic-verify",
  omniConnect: "/products/omni-connect",
} as const;

export const bomSuitePage = {
  metadata: {
    title: "BOM Suite — Autonomous AI for Everyday Business Operations",
    description:
      "Business Operations Mesh combines autonomous AI agents with enterprise workflows to monitor, validate, engage, and execute operational work across HR, customer operations, identity, and business processes.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Suites", href: "/" },
    { label: "BOM Suite", current: true as const },
  ],
  hero: {
    badge: "BOM Suite · Business Operations Mesh",
    title: "Autonomous AI for Everyday",
    titleHighlight: "Business Operations.",
    tagline:
      "Modern enterprises don't need more dashboards—they need AI that continuously executes operational work across HR, customer operations, identity governance, and business processes. Business Operations Mesh combines autonomous AI agents with enterprise workflows to continuously monitor, validate, engage, and execute operational tasks across your organization.",
    primaryCta: "Book a Demo",
    secondaryCta: "Explore Products",
    productsAnchor: "#products",
    visual: {
      shieldImage: "/images/bom-suite/bom-hero-operations.png",
      shieldAlt:
        "3D operations icon with gear and circular workflow arrows",
    },
    mesh: {
      centerLabel: "BOM",
      products: [
        { label: "HR Compliance", icon: "◐", lines: ["HR", "Compliance"] },
        { label: "Omni Connect", icon: "⇄", lines: ["Omni Connect"] },
        { label: "Logical Access (UAM)", icon: "⬡", lines: ["Logical Access", "(UAM)"] },
        { label: "KYC Agentic Verify", icon: "✓", lines: ["KYC Agentic", "Verify"] },
      ],
    },
  },
  why: {
    tag: "Business Challenges",
    title: "Business operations are growing faster",
    titleHighlight: "than teams can manage.",
    paragraphs: [
      "As organizations scale, operational complexity grows across every department. HR, customer operations, identity management, and business processes often rely on disconnected systems, manual tasks, and fragmented workflows.",
      "The result is slower execution, inconsistent decisions, increased operational risk, and limited visibility across the business. Organizations don't need more operational tools. They need intelligent operations that continuously execute and adapt.",
    ],
  },
  intro: {
    tag: "The BOM Suite",
    title: "One AI platform.",
    titleHighlight: "Every business operation connected.",
    cards: [
      {
        variant: "split" as const,
        title: "AI agents & workflow automation",
        body: "Business Operations Mesh combines specialized AI agents, workflow automation, and enterprise governance to orchestrate operational work across the enterprise.",
        image: "/images/domain-outcomes/domain-engineering.png",
        imageAlt: "Enterprise workflow automation visualization",
      },
      {
        variant: "plain" as const,
        title: "Connected operational layer",
        body: "Instead of managing isolated processes, organizations gain a connected operational layer that continuously monitors events, executes workflows, and keeps teams in control.",
        closing: "Automate operations. Connect workflows. Scale with confidence.",
      },
    ],
  },
  products: {
    label: "Meet Your AI Workforce",
    title: "Specialized AI agents for every",
    titleHighlight: "critical business function.",
    description:
      "Business Operations Mesh includes purpose-built AI products designed to automate, govern, and optimize key operational functions.",
    items: [
      {
        num: "01",
        name: "HR Compliance",
        description:
          "Continuously monitor workforce compliance, automate policy validation, and identify HR exceptions before they become business risks.",
        href: bomProductRoutes.hrCompliance,
      },
      {
        num: "02",
        name: "User Access Management",
        description:
          "Govern user identities, automate access lifecycles, enforce policies, and continuously reduce identity-related risks.",
        href: bomProductRoutes.userAccess,
      },
      {
        num: "03",
        name: "KYC Agentic Verify",
        description:
          "Accelerate customer onboarding through AI-powered identity verification, document validation, and fraud detection.",
        href: bomProductRoutes.kycVerify,
      },
      {
        num: "04",
        name: "Omni Connect",
        description:
          "Recover abandoned customer journeys through intelligent AI conversations across voice, SMS, email, and digital channels.",
        href: bomProductRoutes.omniConnect,
      },
    ],
  },
  outcomes: {
    label: "Business Outcomes",
    title: "Transform business operations with",
    titleHighlight: "measurable outcomes.",
    metrics: [
      { value: "95%", label: "Faster Process Execution" },
      { value: "80%", label: "Reduction in Manual Effort" },
      { value: "3×", label: "Operational Productivity" },
      { value: "24/7", label: "Continuous AI Monitoring" },
    ],
  },
  capabilities: {
    label: "Enterprise AI Capabilities",
    title: "Enterprise AI built for",
    titleHighlight: "modern business operations.",
    description:
      "Business Operations Mesh combines AI, automation, and enterprise governance to continuously execute operational work while maintaining complete visibility and control.",
    items: [
      {
        name: "Autonomous AI Agents",
        description: "Execute repetitive operational tasks automatically.",
      },
      {
        name: "Workflow Orchestration",
        description: "Coordinate AI agents across connected business processes.",
      },
      {
        name: "Continuous Monitoring",
        description: "Detect operational events and exceptions in real time.",
      },
      {
        name: "Human-in-the-Loop",
        description: "Keep people in control of business-critical decisions.",
      },
      {
        name: "Enterprise Knowledge",
        description: "Ground AI decisions using enterprise data and business context.",
      },
      {
        name: "Enterprise Integrations",
        description: "Connect seamlessly with HRMS, CRM, ERP, IAM, and business applications.",
      },
      {
        name: "Explainable AI",
        description: "Understand every AI recommendation with transparent reasoning.",
      },
      {
        name: "Enterprise Governance",
        description: "Secure every workflow through policies, approvals, and audit trails.",
      },
    ],
  },
  personas: {
    label: "Built for Cross-Functional Operations",
    title: "Where BOM fits",
    titleHighlight: "in your organization.",
    description:
      "Help teams across HR, customer operations, IT, compliance, and leadership deploy AI-powered operations with confidence.",
    items: [
      {
        name: "HR Operations",
        description: "Automate workforce compliance and employee processes.",
      },
      {
        name: "Customer Operations",
        description: "Improve engagement and recover abandoned journeys.",
      },
      {
        name: "IT & Identity Teams",
        description: "Continuously govern user access and permissions.",
      },
      {
        name: "Compliance Teams",
        description: "Strengthen governance across operational processes.",
      },
      {
        name: "Risk Management",
        description: "Identify operational risks before they impact the business.",
      },
      {
        name: "Business Operations",
        description: "Optimize workflows and improve operational efficiency.",
      },
      {
        name: "Executive Leadership",
        description: "Gain enterprise-wide operational visibility and insights.",
      },
      {
        name: "Shared Services",
        description: "Standardize and automate business operations across departments.",
      },
    ],
  },
  integrations: {
    label: "Enterprise Integrations",
    title: "Connect with the systems",
    titleHighlight: "you already trust.",
    description:
      "Business Operations Mesh integrates seamlessly with your existing applications, enterprise platforms, and business infrastructure.",
    items: [
      { name: "HRMS Platforms", description: "Synchronize workforce and employee data." },
      { name: "CRM Platforms", description: "Connect customer journeys and engagement workflows." },
      { name: "Identity Providers", description: "Integrate enterprise authentication and user identities." },
      { name: "ERP Systems", description: "Automate finance and operational processes." },
      { name: "Enterprise Applications", description: "Connect business workflows across departments." },
      { name: "REST APIs", description: "Integrate securely with custom applications." },
      { name: "Cloud Infrastructure", description: "Deploy across cloud, hybrid, or on-premises environments." },
      { name: "Document Repositories", description: "Access enterprise documents and operational records." },
    ],
  },
  ai: {
    howItWorks: {
      eyebrow: "How It Works",
      headline: "BOM combines",
      headlineAccent1: "AI automation",
      headlineConnector: "with",
      headlineAccent2: "human oversight",
      steps: [
        {
          label: "AI Monitors",
          description:
            "Continuously detects operational events, compliance gaps, and workflow exceptions across the business.",
        },
        {
          label: "Humans Review",
          description:
            "Every recommendation is reviewed by the appropriate stakeholder before execution.",
        },
        {
          label: "Execute & Track",
          description:
            "Approved actions are executed and fully traceable, maintaining a complete audit trail.",
        },
      ],
      closingLead: "Technology accelerates execution.",
      closingHighlight: "People remain in control.",
    },
    principle: {
      titleLead: "Enterprise AI.",
      titleHighlight: "Governed by Design.",
      description:
        "Every AI agent, workflow, and operational decision is secured, governed, and fully traceable through the Moderor.ai Enterprise AI Control Plane.",
      feature: {
        name: "Human-in-the-Loop",
        description: "Maintain oversight for critical operational decisions.",
      },
      cards: [
        {
          name: "Zero Trust Security",
          description: "Protect enterprise operations with policy-driven security.",
        },
        {
          name: "Explainable AI",
          description: "Understand every AI recommendation with transparent reasoning.",
        },
        {
          name: "Policy Enforcement",
          description: "Apply enterprise policies consistently across workflows.",
        },
        {
          name: "Complete Audit Trails",
          description: "Capture every action, decision, and approval.",
        },
        {
          name: "Enterprise Governance",
          description: "Manage AI-powered operations with centralized visibility and control.",
        },
      ],
    },
  },
  platform: {
    label: "Moderor.ai Platform",
    title: "Powered by the Enterprise AI",
    titleHighlight: "Control Plane.",
    paragraphs: [
      "Business Operations Mesh is built on the Moderor.ai Enterprise AI Control Plane, enabling organizations to deploy AI agents with enterprise-grade governance, orchestration, explainability, and operational control.",
      "Together with the GRC Suite and APPcelerate, BOM creates a unified AI platform that transforms how enterprises govern, automate, and scale business operations.",
    ],
  },
  whyChoose: {
    label: "Why Choose BOM Suite",
    title: "One mesh.",
    titleHighlight: "Complete operations.",
    description:
      "Autonomous agents, connected workflows, and human-governed AI — built for teams who need speed without sacrificing control.",
    items: [
      {
        name: "Continuous Operations",
        description:
          "Move beyond periodic reviews with always-on monitoring across HR, identity, customer, and business workflows.",
      },
      {
        name: "Connected Workflows",
        description:
          "Orchestrate AI agents across HR compliance, access management, KYC, and customer engagement through one platform.",
      },
      {
        name: "Faster Execution",
        description: "Reduce manual effort and accelerate operational decisions with intelligent automation.",
      },
      {
        name: "Human-Governed AI",
        description:
          "Maintain complete oversight with built-in approval workflows and end-to-end traceability.",
      },
      {
        name: "Enterprise Ready",
        description:
          "Deploy on-premises or in the cloud and integrate seamlessly with your existing enterprise ecosystem.",
      },
    ],
  },
  finalCta: {
    title: "Transform Business Operations",
    titleHighlight: "with Autonomous AI.",
    description:
      "Move beyond manual workflows with AI-powered business operations that improve productivity, strengthen governance, and accelerate enterprise execution.",
    cta: "Book a Demo",
    secondaryCta: "Talk to a Business Operations Expert",
  },
};
