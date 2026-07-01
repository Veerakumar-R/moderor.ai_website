export const siteConfig = {
  name: "moderor.ai",
  tagline: "Governed Outcomes",
  domain: "moderor.ai",
  cta: {
    primary: "Book a Demo",
    secondary: "Start a 60-Day Pilot",
    ghost: "See Platform",
  },
};

export const routes = {
  home: "/",
  platform: "/platform",
  grcSuite: "/suites/grc-suite",
} as const;

export const navLinks = [
  { label: "Platform", href: routes.platform },
  { label: "Industries", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Resources", href: "#" },
];

export const headerNavLinks = [
  { label: "Platform", href: routes.platform },
  { label: "Industries", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Resources", href: "#" },
];

export const headerActionLinks = [
  { label: "Contact Sales", href: "#" },
  { label: "Sign In", href: "#" },
];

export const navSuites = [
  { label: "GRC Suite — Governance, Risk & Compliance", href: routes.grcSuite },
  { label: "BOM Suite — Business Operations Mesh", href: "#" },
  { label: "APPcelerate — Build & Run Software Faster", href: "#" },
  { label: "Platform Admin Console", href: "#" },
];

export const navMegaSidebar = {
  topResources: [
    {
      title: "From Reactive Audits to Continuous, Autonomous Assurance",
      href: "https://moderor.ai/whitepaper",
      image:
        "https://framerusercontent.com/images/tJM482UvnsLQXs2JLGTbG8Il6U.jpeg?width=400&height=225",
      imageAlt: "From Reactive Audits to Continuous, Autonomous Assurance whitepaper",
    },
    {
      title: "How agentic AI is ending the era of manual alert triage in financial crime operations",
      href: "https://moderor.ai/thought-leadership/how-agentic-ai-is-ending-the-era-of-manual-alert-triage-in-financial-crime-operations",
      image:
        "https://framerusercontent.com/images/pjNmDoayMI1u2g4npTEAzwqCmJg.png?width=400&height=216",
      imageAlt: "How agentic AI is ending the era of manual alert triage",
    },
    {
      title: "Compliance in 2026: From Control Function to Continuous Intelligence",
      href: "https://moderor.ai/thought-leadership/compliance-in-2026-from-control-function-to-continuous-intelligence",
      image:
        "https://framerusercontent.com/images/Hj9vxdjnC85Ib25B1BW1atJZXM.png?width=400&height=216",
      imageAlt: "Compliance in 2026: From Control Function to Continuous Intelligence",
    },
  ],
  quickLinks: [
    { label: "About Moderor", href: "#" },
    { label: "Customer Stories", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Whitepapers", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Contact Sales", href: "#" },
  ],
};

export const navSuitesMega = {
  suites: [
    {
      id: "grc",
      title: "GRC Suite",
      subtitle: "Governance · Risk · Compliance",
      description:
        "Continuous compliance monitoring, audit evidence, and regulatory intelligence — surfacing non-compliance before the regulator does.",
      href: routes.grcSuite,
      image: "/images/domain-outcomes/domain-compliance.png",
      imageAlt: "GRC Suite — compliance and audit visualization",
    },
    {
      id: "bom",
      title: "BOM Suite",
      subtitle: "Business Operations Mesh",
      description:
        "HR checkpoints, identity governance, and KYC verification — governed operations from onboarding through every access decision.",
      href: "#",
      image: "/images/domain-outcomes/domain-identity.png",
      imageAlt: "BOM Suite — identity and operations visualization",
    },
    {
      id: "appcelerate",
      title: "APPcelerate",
      subtitle: "Build & Run Software Faster",
      description:
        "Requirements, tests, vulnerabilities, and infrastructure — every engineering workflow monitored before it becomes an incident.",
      href: "#",
      image: "/images/domain-outcomes/domain-engineering.png",
      imageAlt: "APPcelerate — engineering and delivery visualization",
    },
    {
      id: "platform-admin",
      title: "Platform Admin Console",
      subtitle: "Governance Plane",
      description:
        "Central control for agents, policies, audit logs, and deployment — every action logged, governed, and traceable across suites.",
      href: "#",
      image: "/images/domain-outcomes/domain-risk.png",
      imageAlt: "Platform Admin Console — governance plane visualization",
    },
  ],
};

export const navProducts = {
  grc: [
    "Continuous Compliance Monitoring",
    "Auditor Workbench",
    "Risk Assessment",
    "Smart Alert Triage (ICAT)",
    "Regulatory Compliance",
    "AI Branch Audit",
  ],
  bom: [
    "HR Compliance",
    "Omni Connect",
    "Logical Access Management",
    "KYC Agentic Verify",
  ],
  appcelerate: [
    "AI BRD Generator",
    "AI App Builder",
    "VAPT",
    "QA Suite",
    "AIM Monitoring",
    "Synthetic Data Engine",
    "Query Builder",
  ],
};

function suiteMegaImage(id: "grc" | "bom" | "appcelerate") {
  const suite = navSuitesMega.suites.find((entry) => entry.id === id)!;
  return { image: suite.image, imageAlt: suite.imageAlt };
}

export const navProductsMega = {
  suites: [
    {
      id: "grc",
      title: "GRC Suite",
      ...suiteMegaImage("grc"),
      items: navProducts.grc,
    },
    {
      id: "bom",
      title: "BOM Suite",
      ...suiteMegaImage("bom"),
      items: navProducts.bom,
    },
    {
      id: "appcelerate",
      title: "APPcelerate",
      ...suiteMegaImage("appcelerate"),
      items: navProducts.appcelerate,
    },
  ],
  topResources: navMegaSidebar.topResources,
  quickLinks: navMegaSidebar.quickLinks,
};

export const tickerItems = [
  { num: "97", label: "Active agents" },
  { num: "14,086", label: "Logs triaged" },
  { num: "203,453", label: "MCP records synced" },
  { num: "98.5%", label: "KYC confidence avg." },
  { num: "80%", label: "False alerts eliminated" },
  { num: "95%", label: "Faster audit readiness" },
  { num: "572", label: "Audits under management" },
  { num: "85", label: "RAG knowledge bases" },
  { num: "Human-in-the-loop", label: "by design" },
];

export const heroContent = {
  eyebrow: "Agentic AI Platform",
  title: "Everyone is Building Agents.",
  titleHighlight: "We Deliver Governed Outcomes.",
  bannerSubtitle:
    "Governed agentic AI for regulated enterprises — from HR onboarding and audit readiness to vendor risk, regulatory compliance, and API delivery.",
  flow: [
    "HR onboarding",
    "audit readiness",
    "vendor risk",
    "regulatory compliance",
    "API delivery",
  ],
  proof: ["18 Products", "3 Suites", "1 Governance Plane", "Azure · Google Cloud · WSO2 · On-prem"],
  heroCard: {
    tag: "Moderor Smart Platform",
    mainHeadline: "Governed agents across",
    mainHeadlineHighlight: "your enterprise",
    mainSubline: "Orchestrated in real-time across every suite",
    ringValue: "97",
    ringCaption: "Active agents monitored",
    productsCard: {
      label: "Products",
      sub: "Live across the platform",
    },
    suitesCard: {
      label: "Suites",
      tags: ["GRC", "BOM", "APPcelerate"],
    },
    governanceCard: {
      label: "Governance Plane",
      sub: "Every action logged",
    },
    deployCard: {
      badge: "Deploy anywhere",
      subtitle: "Cloud · On-prem · Hybrid",
      platforms: [
        { id: "azure", label: "Azure" },
        { id: "gcp", label: "Google Cloud" },
        { id: "wso2", label: "WSO2" },
        { id: "onprem", label: "On-prem" },
      ],
    },
    floatPills: ["GRC Suite", "BOM Suite", "APPcelerate"],
    floatBadge: "Human-in-the-loop by design",
  },
  tagline: "Detection is automatic. Judgment is not.",
  taglineBold: "Detection is automatic. Judgment is not.",
};

export const outcomesSectionContent = {
  headlineLine1: "From onboarding to audit —",
  headlineLine2Accent: "earlier decisions",
  headlineLine2After: " at every step.",
  description:
    "Every Moderor product is built around one outcome: surface what matters before it costs you — whether that's a compliance failure, a vendor risk, a test gap, or a customer walking away.",
};

export const outcomeFeatureCards = [
  {
    id: "grc",
    title: "GRC Suite",
    subtitle: "Governance · Risk · Compliance",
    description:
      "Continuous compliance monitoring, audit evidence, and regulatory intelligence — surfacing non-compliance before the regulator does.",
    ctaHref: routes.grcSuite,
    centerLabel: "GRC",
    orbitItems: [
      { label: "CCM", icon: "◎" },
      { label: "Auditor Workbench", icon: "◈" },
      { label: "Risk Assessment", icon: "△" },
      { label: "Smart Alert Triage", icon: "◉" },
      { label: "Regulatory Compliance", icon: "✦" },
      { label: "AI Branch Audit", icon: "⬡" },
    ],
    visual: "grc" as const,
  },
  {
    id: "bom",
    title: "BOM Suite",
    subtitle: "Business Operations Mesh",
    description:
      "HR checkpoints, identity governance, and KYC verification — governed operations from onboarding through every access decision.",
    ctaHref: "#platform",
    centerLabel: "BOM",
    bomProducts: [
      { label: "HR Compliance", icon: "◐", lines: ["HR", "Compliance"] },
      { label: "Omni Connect", icon: "⇄", lines: ["Omni Connect"] },
      { label: "Logical Access (UAM)", icon: "⬡", lines: ["Logical Access", "(UAM)"] },
      { label: "KYC Agentic Verify", icon: "✓", lines: ["KYC Agentic", "Verify"] },
    ],
    visual: "bom" as const,
  },
  {
    id: "appcelerate",
    title: "APPcelerate",
    subtitle: "Build & Run Software Faster",
    description:
      "Requirements, tests, vulnerabilities, and infrastructure — every engineering workflow monitored before it becomes an incident.",
    ctaHref: "#platform",
    marqueeRows: [
      ["AI BRD Generator", "AI App Builder"],
      ["VAPT", "QA Suite"],
      ["AIM Monitoring", "Synthetic Data"],
      ["Query Builder"],
    ],
    visual: "app" as const,
  },
];

export const suites = [
  {
    id: "grc",
    num: "Ø1 — 6 products",
    name: "GRC Suite",
    subtitle: "Governance · Risk · Compliance",
    tags: ["CCM", "Auditor Workbench", "Risk Assessment", "Smart Alert Triage", "Regulatory Compliance", "AI Branch Audit"],
    tabIndex: 0,
  },
  {
    id: "bom",
    num: "Ø2 — 4 products",
    name: "BOM Suite",
    subtitle: "Business Operations Mesh",
    tags: ["HR Compliance", "Omni Connect", "Logical Access (UAM)", "KYC Agentic Verify"],
    tabIndex: 2,
  },
  {
    id: "appcelerate",
    num: "Ø3 — 7 products",
    name: "APPcelerate",
    subtitle: "Build & Run Software Faster",
    tags: ["AI BRD Generator", "AI App Builder", "VAPT", "QA Suite", "AIM Monitoring", "Synthetic Data", "Query Builder"],
    tabIndex: 3,
  },
];

export const outcomeTabs = [
  { pill: "Compliance", title: "Audit & Compliance", sub: "GRC Suite" },
  { pill: "Risk", title: "Risk & Vendor", sub: "GRC Suite" },
  { pill: "Identity", title: "HR & Identity", sub: "BOM Suite" },
  { pill: "Engineering", title: "Engineering & APIs", sub: "APPcelerate" },
];

export const outcomePanels = [
  {
    headline: "Find it before the regulator does.",
    description:
      "Agents evaluate every asset against every control, continuously — surfacing non-compliance the moment it appears, not in the next annual audit.",
    triggerText:
      "Control gap on payment gateway. RBI circular due Friday. Route finding to compliance owner with evidence.",
    benefits: [
      "Evaluates every asset against controls 24/7",
      "Routes findings to named owners with SLAs",
      "Collects audit evidence before reviews begin",
    ],
    outputs: [
      { title: "Route compliance finding", meta: "Owner: Compliance · Due: Friday" },
      { title: "Attach RBI circular evidence", meta: "Source: Regulatory feed · Status: Mapped" },
    ],
    metrics: [
      { num: "95%", label: "Faster audit readiness" },
      { num: "90%", label: "Reduction in compliance overhead" },
      { num: "572", label: "Audits under management" },
    ],
    products: [
      { name: "Continuous Compliance Monitoring", desc: "Non-compliance surfaced the moment it appears. Agents evaluate every asset 24/7 against every control." },
      { name: "Auditor Workbench", desc: "Evidence collected before the audit starts. MCP-connected sources, planned-vs-actual analytics." },
      { name: "Regulatory Compliance", desc: "RBI circulars and regulator notifications extracted, mapped, and actioned before obligations are missed." },
      { name: "AI Branch Audit", desc: "Branch risks surfaced before the regulator visits. CAE dashboards, residual risk by region." },
    ],
  },
  {
    headline: "Score the risk before it enters your business.",
    description:
      "Vendor proposals scored before onboarding completes. AI attention queues replace quarterly reviews. ML converts disconnected alerts into one entity-level case.",
    triggerText:
      "New vendor onboarding request. 47 alerts on entity ACME-442. Score risk and triage before contract signature.",
    benefits: [
      "Scores vendor risk before onboarding completes",
      "Reduces false alerts with ML entity triage",
      "Surfaces third-party risk alongside controls",
    ],
    outputs: [
      { title: "Score vendor onboarding risk", meta: "Entity: ACME-442 · Priority: High" },
      { title: "Merge 47 alerts into one case", meta: "Triage: ICAT · Owner: Risk ops" },
    ],
    metrics: [
      { num: "80%", label: "False positive reduction" },
      { num: "47+", label: "Alerts consolidated per case" },
      { num: "3×", label: "Faster vendor risk scoring" },
    ],
    products: [
      { name: "Risk Assessment", desc: "Vendor risk scored before onboarding completes. AI-updated attention queues and dynamic risk-weighted scoring." },
      { name: "Smart Alert Triage (ICAT)", desc: "80% of false alerts eliminated. ML scoring with versioned model registry measuring reduction per version." },
      { name: "Continuous Compliance Monitoring", desc: "Control failures surface continuously — vendor and third-party risks tracked alongside internal controls." },
    ],
  },
  {
    headline: "Know who has access. Before it becomes a problem.",
    description:
      "HR checkpoint failures caught before escalation. Access conflicts blocked automatically. KYC documents verified in minutes with full audit trail.",
    triggerText:
      "Access request for finance module. SOD conflict flagged for Priya. Verify KYC packet before provisioning.",
    benefits: [
      "Blocks critical SOD violations automatically",
      "Verifies KYC with audit-ready evidence",
      "Catches HR checkpoint failures early",
    ],
    outputs: [
      { title: "Block SOD access conflict", meta: "User: Priya · Action: HARD_BLOCK" },
      { title: "Verify KYC document packet", meta: "Confidence: 98.5% · Time: 4.1m" },
    ],
    metrics: [
      { num: "98.5%", label: "KYC confidence avg." },
      { num: "4.1m", label: "Avg. verification time" },
    ],
    products: [
      { name: "KYC Agentic Verify", desc: "Multi-agent document verification at 98.5% confidence. Audit-ready evidence log on every run." },
      { name: "Logical Access Management", desc: "Access conflicts blocked before breaches. Automatic HARD_BLOCK on critical SOD violations." },
      { name: "HR Compliance", desc: "Checkpoint failures caught before escalation. Agent-run validation across every employee and process." },
      { name: "Omni Connect", desc: "Dropped-off customers recovered before they're lost. AI voice and SMS across 13 languages." },
    ],
  },
  {
    headline: "Ship faster. Break less. Know sooner.",
    description:
      "Requirements written before scope creeps. Vulnerabilities closed before SLAs breach. Test failures found before deployment.",
    triggerText:
      "Sprint update: open VAPT findings, QA suite red on payment API. Block deploy until governed checks pass.",
    benefits: [
      "Generates requirements before scope creeps",
      "Closes vulnerabilities before SLA breach",
      "Finds test gaps before production deploy",
    ],
    outputs: [
      { title: "Block deploy — VAPT open", meta: "Findings: 3 critical · Owner: Eng lead" },
      { title: "Run QA suite on payment API", meta: "Coverage: OpenAPI · Status: Failing" },
    ],
    metrics: [
      { num: "40–70%", label: "Cost savings on app modernisation" },
      { num: "100%", label: "Test coverage from OpenAPI specs" },
    ],
    products: [
      { name: "AI BRD Generator", desc: "Requirements written and rated before scope creeps. AI-generated BRDs with quality scoring." },
      { name: "AI App Builder", desc: "Working prototypes before the meeting ends. Describe a screen, get production-ready code instantly." },
      { name: "VAPT", desc: "Vulnerabilities closed before SLAs breach. Qualys VMDR and OpenVAS reports normalised and tracked." },
      { name: "QA Suite", desc: "Test failures found before deployment. AI generates test suites from Swagger/OpenAPI specs end-to-end." },
      { name: "AIM — Realtime Monitoring", desc: "Infrastructure problems detected before incidents escalate. Ask-AI over live logs." },
    ],
  },
];

export const problemContent = {
  label: "The Problem",
  title: "The problem isn't building agents.",
  titleLine2: "It's running them.",
  intro:
    "Your board approved the AI budget. Your team shipped the prototype. Now legal wants to know what data it touches. Compliance wants an audit trail. IT wants to know where it runs. And the business wants to know why it's still not live.",
  body: "The problem was never building agents. It's governing them in production — across real data, real regulations, and real consequences. That's what Moderor is built for.",
  closing: "Without governance, agents don't scale.",
  closingBold: "Without Moderor, governance doesn't ship.",
  cards: [
    {
      title: "Governance",
      description:
        "Who owns what the agent does? Who approved the last action? What happens when it's wrong? Most platforms have no answer. Moderor routes every exception to a named human with a timestamp and a reason.",
    },
    {
      title: "Compliance",
      description:
        'Regulators don\'t accept "the AI decided." Every agent action in Moderor produces an audit-ready trail — model used, data touched, human sign-off, outcome logged. Exportable on demand.',
    },
    {
      title: "Production Scale",
      description:
        "Demos run in sandboxes. Production runs in regulated environments with real data, SOD controls, masked credentials, and air-gapped options. Moderor was built for the second environment, not the first.",
    },
  ],
};

export const governedHero = {
  body:
    "Every Moderor agent is authenticated, policy-bound, traceable, and audit-ready from the first run — not configured after the fact.",
};

export const governedPillars = [
  {
    num: "01",
    name: "Authenticated",
    desc:
      "Every agent carries masked credentials and role-based identity. Access is scoped, not open. Zero-trust from the connection layer up.",
    visual: "auth" as const,
  },
  {
    num: "02",
    name: "Policy-bound",
    desc:
      "Agents operate within defined guardrails — SOD rules, control thresholds, regulatory logic — enforced at runtime, not just configured at setup.",
    visual: "policy" as const,
  },
  {
    num: "03",
    name: "Traceable",
    desc:
      "Every decision, every action, every exception carries a full chain of reasoning — model used, data source, human approver, outcome. Nothing is anonymous.",
    visual: "trace" as const,
  },
  {
    num: "04",
    name: "Audit-ready",
    desc:
      "Regulator-ready exports on demand. Full evidence packages covering every agent run, approval, and remediation action — structured for your audit cycle.",
    visual: "audit" as const,
  },
];

export const governancePillars = governedPillars.map(({ num, name, desc }) => ({
  num,
  name,
  description: desc,
}));

export const infrastructureSection = {
  label: "Infrastructure Flexibility",
  title: "We Fly on",
  titleHighlight: "Your Plane",
  description:
    "Agents deploy on the infrastructure you already own. No new security model. No re-architecture. No data leaving your perimeter.",
};

export const infrastructureCards = [
  {
    id: "azure",
    icon: "azure",
    name: "Microsoft Azure",
    cardLabel: "Cloud Deploy",
    note: "Azure Financial Services, Entra ID, native agent deployment. VPC option available.",
    tag: "Live",
    tagVariant: "live" as const,
    visual: "deploy" as const,
    position: "tl" as const,
    checklist: ["VPC connected", "Entra ID synced", "Agent deployed"],
  },
  {
    id: "wso2",
    icon: "wso2",
    name: "WSO2",
    cardLabel: "Integration",
    note: "API gateway, identity layer, integration platform. Full MCP support.",
    tag: "Live",
    tagVariant: "live" as const,
    visual: "workflow" as const,
    position: "bl" as const,
    workflow: ["API Gateway", "Identity", "MCP Layer"],
  },
  {
    id: "gcp",
    icon: "gcp",
    name: "Google Cloud",
    cardLabel: "Multi-Region",
    note: "GCP-native, Vertex AI compatible. Multi-region deployment supported.",
    tag: "Live",
    tagVariant: "live" as const,
    visual: "analytics" as const,
    position: "tr" as const,
    metric: "+ 99.9%",
    metricLabel: "uptime SLA",
  },
  {
    id: "onprem",
    icon: "onprem",
    name: "On-prem / Air-gapped",
    cardLabel: "Perimeter",
    note: "Your GPUs, your firewall. Zero data leaving your perimeter. Full air-gap option.",
    tag: "Air-gapped",
    tagVariant: "air" as const,
    visual: "insights" as const,
    position: "br" as const,
    insights: ["Zero egress", "Your GPUs", "Full audit trail"],
  },
];

export const frameworks = [
  {
    name: "RBI",
    type: "Banking",
    logo: "/frameworks/rbi.webp",
    gridColumn: 2,
    gridRow: 1,
  },
  {
    name: "HIPAA",
    type: "Healthcare",
    logo: "/frameworks/hipaa.svg",
    gridColumn: 5,
    gridRow: 1,
  },
  {
    name: "ISO 27001",
    type: "Security",
    logo: "/frameworks/iso-27001.png",
    gridColumn: 1,
    gridRow: 2,
  },
  {
    name: "GDPR",
    type: "Privacy",
    logo: "/frameworks/gdpr.svg",
    gridColumn: 4,
    gridRow: 2,
  },
  {
    name: "SOX",
    type: "Financial",
    logo: "/frameworks/sox.png",
    gridColumn: 3,
    gridRow: 3,
  },
] as const;

export const humanFlowSteps = [
  {
    num: "01",
    label: "Agents Watch",
    sub: "97 agents evaluate controls continuously against live MCP data",
    highlight: false,
  },
  {
    num: "02",
    label: "Exceptions Surface",
    sub: "Non-compliance classified with matched reference and routed instantly",
    highlight: false,
  },
  {
    num: "03",
    label: "Humans Decide",
    sub: "Every finding reaches a named approver before any action is taken",
    highlight: true,
  },
  {
    num: "04",
    label: "Everything Logged",
    sub: "Model, data, approver, decision, action — all in a full audit trail",
    highlight: false,
  },
];

export const pilotSteps = [
  {
    week: "Week 0 — Start",
    title: "Connect & Configure",
    description:
      "Deploy on Azure, Google Cloud, WSO2, or on-prem. Connect one data source over MCP. Configure one workflow with your control set.",
    active: true,
  },
  {
    week: "Week 1–2 — Run",
    title: "Agents Go Live",
    description:
      "First findings surface within hours. Exceptions route to your Approval Center. Your team reviews, approves, and closes the first loop.",
    active: false,
  },
  {
    week: "Week 3–4 — Measure",
    title: "Real KPIs",
    description:
      "Detection time, false positive rate, time to remediation, audit evidence count. Real metrics from real production data — not a demo environment.",
    active: false,
  },
  {
    week: "Week 6 — Decision",
    title: "Expand or Exit",
    description:
      "Full evidence package. ROI calculation. Expand to additional workflows and suites — or exit with your data intact. No lock-in.",
    active: false,
  },
];

export const proofMetrics = [
  { value: "95", suffix: "%", label: "Faster audit readiness vs. manual processes" },
  { value: "80", suffix: "%", label: "False alerts eliminated before analysts see them" },
  { value: "98.5", suffix: "%", label: "KYC verification confidence average" },
  { value: "3", suffix: "×", label: "Faster investigations with smart alert triage" },
  { value: "572", suffix: "", label: "Audits currently under management" },
  { value: "203", suffix: "k", label: "MCP records synced live" },
  { value: "90", suffix: "%", label: "Reduction in compliance overhead" },
  { value: "100", suffix: "%", label: "Population validation coverage" },
];

export const finalCta = {
  label: "Stop Experimenting. Start Operating.",
  title: "See it on your data.",
  titleHighlight: "Live in weeks.",
  description: [
    "Connect a data source, point an agent at a workflow, and watch the first governed",
    "outcomes arrive — on your infrastructure, with your people in command.",
  ],
  footnote: "Azure · Google Cloud · WSO2 · On-prem · 60–90 day pilot · No lock-in",
};

export const footerLinks = {
  suites: [
    { label: "GRC Suite", href: routes.grcSuite },
    { label: "BOM Suite", href: "#" },
    { label: "APPcelerate", href: "#" },
    { label: "Platform Admin", href: "#" },
  ],
  platform: [
    { label: "Continuous Compliance", href: "#" },
    { label: "Risk Assessment", href: "#" },
    { label: "KYC Verify", href: "#" },
    { label: "AI App Builder", href: "#" },
  ],
  company: [
    { label: "About Moderor", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "Customer Stories", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Contact Sales", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Whitepapers", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "Sign In", href: "#" },
  ],
};

export const grcSuitePage = {
  metadata: {
    title: "GRC Suite — Continuous Governance. Smarter Risk Decisions.",
    description:
      "The GRC Suite brings together AI-powered products for governance, risk, compliance, audit, and regulatory operations.",
  },
  breadcrumb: [
    { label: "Home", href: routes.home },
    { label: "Suites", href: routes.home },
    { label: "GRC Suite", current: true as const },
  ],
  hero: {
    badge: "GRC Suite · Agent-Native",
    title: "Continuous Governance.",
    titleHighlight: "Smarter Risk Decisions.",
    tagline:
      "One intelligent suite for governance, risk, compliance, audit, and regulatory operations. The GRC Suite brings together AI-powered products that help organizations continuously monitor compliance, accelerate audits, manage operational and third-party risk, and stay ahead of regulatory change.",
    primaryCta: "Book a Demo",
    secondaryCta: "Explore Products",
    productsAnchor: "#products",
    visual: {
      shieldImage: "/images/grc-suite/grc-hero-shield.png",
      shieldAlt: "Global GRC governance shield with digital compliance network",
      trendCard: {
        label: "Compliance readiness",
        value: "95%",
        trend: "+12%",
        trendLabel: "vs last week",
        period: "Week",
        tooltip: "95%",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        series: [78, 82, 85, 90, 95],
        highlightIndex: 4,
      },
      frameworksCard: {
        title: "Active frameworks",
        viewAllLabel: "View all",
        items: [
          {
            name: "ISO 27001 Controls",
            score: "98% compliant",
            badge: "ISO",
            accent: "#ff7a00",
          },
          {
            name: "SOX Financial Controls",
            score: "94% compliant",
            badge: "SOX",
            accent: "#e06d00",
          },
        ],
      },
      scanChip: "3 controls scanning",
    },
  },
  why: {
    tag: "GRC Suite",
    title: "Why organizations need a",
    titleHighlight: "modern GRC suite",
    paragraphs: [
      "Enterprise risk evolves every day, but many organizations still rely on manual reviews, spreadsheets, and point-in-time assessments to manage governance and compliance. The result is delayed risk detection, fragmented visibility, longer audit cycles, and increased regulatory exposure.",
      "The GRC Suite replaces reactive processes with continuous monitoring, intelligent automation, and human-governed decision-making, helping organizations move from periodic compliance to continuous assurance.",
    ],
  },
  products: {
    label: "One Suite. Eight Intelligent Products.",
    title: "Every organization faces different",
    titleHighlight: "governance and compliance challenges.",
    description:
      "The GRC Suite brings together specialized products that work seamlessly through a common platform, shared data model, and unified governance framework.",
    items: [
      {
        num: "01",
        name: "Continuous Compliance Monitoring",
        description:
          "Monitor controls in real time to detect compliance gaps before they become audit findings.",
      },
      {
        num: "02",
        name: "Auditor Workbench",
        description:
          "Accelerate internal audits with AI-assisted evidence collection, control validation, and audit-ready documentation.",
      },
      {
        num: "03",
        name: "Third Party Risk Assessment",
        description:
          "Manage third-party risk throughout the supplier lifecycle with AI-powered assessments and continuous risk visibility.",
      },
      {
        num: "04",
        name: "Smart Alert Triage",
        description:
          "Reduce alert fatigue by prioritizing high-risk events and accelerating investigations.",
      },
      {
        num: "05",
        name: "Regulatory Intelligence",
        description:
          "Transform regulatory change into actionable compliance insights with intelligent obligation management.",
      },
      {
        num: "06",
        name: "AI Branch Audit",
        description:
          "Deliver faster, more consistent branch audits through AI-assisted execution and evidence-driven insights.",
      },
      {
        num: "07",
        name: "Compliance IQ",
        description:
          "Move from reactive audit preparation to continuous compliance readiness with automated assessments and real-time visibility.",
      },
      {
        num: "08",
        name: "Operational Risk Management",
        description:
          "Strengthen enterprise resilience with real-time operational risk visibility and intelligent control monitoring.",
      },
    ],
  },
  outcomes: {
    label: "Business Outcomes",
    title: "The GRC Suite helps",
    titleHighlight: "organizations.",
    rows: [
      {
        left: "Maintain continuous compliance readiness",
        right: "Reduce audit effort and accelerate audit execution",
      },
      {
        left: "Strengthen governance across the enterprise",
        right: "Improve operational and regulatory risk visibility",
      },
      {
        left: "Reduce manual effort through AI-powered automation",
        right: "Increase productivity across audit, risk, and compliance teams",
      },
      {
        left: "Improve regulatory confidence with complete audit trails",
        right: "Make faster, risk-informed business decisions",
      },
    ],
  },
  ai: {
    label: "Human-Governed AI.",
    howItWorks: {
      eyebrow: "How It Works",
      headline: "The GRC Suite combines",
      headlineAccent1: "AI automation",
      headlineConnector: "with",
      headlineAccent2: "human expertise",
      steps: [
        {
          label: "AI Automates",
          description:
            "Continuously monitors controls, analyzes evidence, identifies risks, and recommends actions.",
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
      eyebrow: "The Principle",
      headline: "Agents Detect.",
      headlineAccent: "Humans Decide.",
      headlineEnd: "Always.",
      description:
        "AI surfaces control gaps, evidence issues, and risk signals — but every recommendation routes through your team.",
      descriptionLine2: "Governed, traceable, and accountable by design.",
      cycle: [
        {
          label: "AI Agents",
          sub: "Detect. Analyze. Recommend.",
        },
        {
          label: "Humans Decide",
          sub: "Review. Decide. Approve.",
        },
        {
          label: "Accountable Actions",
          sub: "Execute. Track. Be accountable.",
        },
      ],
      cards: [
        {
          description:
            "AI continuously surfaces control gaps, evidence issues, and risk signals across your GRC program — before they become audit findings.",
        },
        {
          description:
            "Every recommendation routes through governed approval workflows with full traceability, stakeholder accountability, and immutable audit records.",
        },
      ],
    },
  },
  whyChoose: {
    label: "Why Choose GRC Suite",
    title: "One platform.",
    titleHighlight: "Complete governance.",
    description:
      "Continuous monitoring, unified workflows, and human-governed AI — built for enterprise GRC teams who need speed without sacrificing control.",
    items: [
      {
        name: "Continuous Monitoring",
        description:
          "Move beyond periodic assessments with continuous visibility across compliance, operational risk, audits, and regulatory obligations.",
      },
      {
        name: "Unified Governance",
        description:
          "Manage audit, compliance, operational risk, regulatory intelligence, and third-party risk through one integrated suite.",
      },
      {
        name: "Faster Decisions",
        description: "Turn fragmented data into actionable insights with AI-powered intelligence.",
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
    title: "Ready to Modernize Governance,",
    titleHighlight: "Risk and Compliance?",
    description:
      "See how the GRC Suite helps organizations replace reactive compliance with continuous governance, intelligent automation, and AI-assisted decision-making.",
    cta: "Book a Demo",
  },
};

export const platformPage = {
  metadata: {
    title: "The Enterprise AI Control Plane — Govern Every AI Agent",
    description:
      "moderor.ai is the Enterprise AI Control Plane that governs AI agents, orchestrates autonomous workflows, and secures enterprise AI with complete visibility across every business process.",
  },
  breadcrumb: [
    { label: "Home", href: routes.home },
    { label: "Platform", current: true as const },
  ],
  hero: {
    badge: "Enterprise AI Control Plane",
    title: "The Enterprise AI",
    titleHighlight: "Control Plane.",
    subhead: "Govern Every AI Agent. Orchestrate Every Workflow. Control Every Decision.",
    tagline:
      "Govern AI agents, orchestrate autonomous workflows, and secure enterprise AI with complete visibility across every business process. moderor.ai enables organizations to operationalize AI confidently — from pilot projects to enterprise-scale production.",
    primaryCta: "Book a Demo",
    secondaryCta: "Explore Platform Architecture",
    productsAnchor: "#capabilities",
    nodes: [
      { label: "Agent Management" },
      { label: "Workflow Orchestration" },
      { label: "Policy Engine" },
      { label: "Multi-Model Routing" },
      { label: "Human-in-the-Loop" },
      { label: "Observability" },
    ],
  },
  why: {
    tag: "The Governance Gap",
    title: "Enterprise AI is moving faster than",
    titleHighlight: "enterprise governance.",
    paragraphs: [
      "Organizations are rapidly adopting copilots, large language models, and AI agents to improve productivity and automate business processes. But as AI adoption accelerates, operating AI securely and consistently across the enterprise becomes increasingly complex.",
      "Without a centralized control layer, AI initiatives fragment into isolated experiments — each with its own risk profile, its own data exposure, and no shared accountability.",
    ],
    bulletsLabel: "Without a centralized control layer",
    bullets: [
      "AI agents operate independently across teams",
      "Business policies are enforced inconsistently",
      "Sensitive enterprise data becomes harder to govern",
      "AI decisions lack transparency and accountability",
      "Compliance and audit readiness become more challenging",
    ],
    closing:
      "moderor.ai changes that. It provides the Enterprise AI Control Plane that governs, orchestrates, secures, and monitors AI across your organization — transforming isolated AI initiatives into a trusted enterprise capability.",
  },
  capabilities: {
    label: "Platform Capabilities",
    title: "Everything required to run",
    titleHighlight: "enterprise AI.",
    description:
      "One platform to govern, orchestrate, secure, and observe AI across your organization — extending your existing investments rather than replacing them.",
    items: [
      {
        num: "01",
        name: "Agent Orchestration",
        description:
          "Coordinate autonomous AI agents that reason, collaborate, and execute complex business workflows across departments.",
      },
      {
        num: "02",
        name: "Enterprise Governance",
        description:
          "Apply enterprise policies, approval workflows, and operational guardrails consistently across every AI interaction.",
      },
      {
        num: "03",
        name: "Multi-Model Intelligence",
        description:
          "Leverage public, private, and fine-tuned AI models while maintaining centralized governance and intelligent model routing.",
      },
      {
        num: "04",
        name: "Knowledge Intelligence",
        description:
          "Ground AI responses in enterprise knowledge through RAG, vector search, graph intelligence, contextual memory, and semantic retrieval.",
      },
      {
        num: "05",
        name: "Enterprise Connectivity",
        description:
          "Securely connect AI agents with enterprise applications, APIs, databases, and documents using MCP and enterprise connectors.",
      },
      {
        num: "06",
        name: "Workflow Automation",
        description:
          "Transform repetitive business processes into governed autonomous workflows while maintaining complete operational control.",
      },
      {
        num: "07",
        name: "Human-in-the-Loop",
        description:
          "Ensure human oversight for business-critical decisions through configurable approval workflows and policy-driven review gates.",
      },
      {
        num: "08",
        name: "Enterprise Security",
        description:
          "Protect AI operations with role-based access, zero-trust principles, encryption, and secure execution boundaries.",
      },
      {
        num: "09",
        name: "Enterprise Observability",
        description:
          "Track every prompt, workflow, tool invocation, policy decision, and model response with complete operational visibility.",
      },
      {
        num: "10",
        name: "Deployment Flexibility",
        description:
          "Deploy wherever your business operates — public cloud, hybrid, private cloud, on-premises, or air-gapped infrastructure.",
      },
      {
        num: "11",
        name: "Lifecycle Management",
        description:
          "Manage AI agents from onboarding through production with versioning, governance, monitoring, telemetry, and optimization.",
      },
      {
        num: "12",
        name: "Explainability & Auditability",
        description:
          "Every AI decision, workflow, approval, and model response is fully traceable, explainable, and audit-ready.",
      },
    ],
  },
  outcomes: {
    label: "Enterprise Impact",
    title: "Transform enterprise AI into",
    titleHighlight: "business value.",
    rows: [
      {
        left: "Accelerate enterprise AI adoption",
        right: "Govern AI with enterprise-grade security and compliance",
      },
      {
        left: "Reduce operational complexity through centralized management",
        right: "Increase transparency with complete AI observability",
      },
      {
        left: "Reuse AI agents across departments to accelerate innovation",
        right: "Scale AI confidently using a unified governance framework",
      },
    ],
  },
  architecture: {
    eyebrow: "Platform Architecture",
    headline: "One Platform.",
    headlineAccent: "Complete Enterprise AI Control.",
    description:
      "Modern enterprises already have trusted investments in cloud, identity, security, and enterprise applications. moderor.ai extends — not replaces — your existing architecture, introducing a dedicated Enterprise AI Control Plane that governs how AI agents operate while integrating seamlessly with your ecosystem.",
    left: {
      title: "Consume",
      groups: [
        {
          title: "User Roles",
          items: [
            { name: "AI Governance Lead", icon: "UserCog" },
            { name: "Risk & Compliance", icon: "ShieldCheck" },
          ],
        },
        {
          title: "External Agents",
          items: [
            { name: "MS Copilot", logo: "/images/logos/copilot.svg" },
            { name: "SF Agentforce", logo: "/images/logos/salesforce.svg" },
            { name: "ServiceNow", logo: "/images/logos/servicenow.svg" },
          ],
        },
      ],
    },
    right: {
      title: "Connect",
      groups: [
        {
          title: "Model Providers",
          items: [
            { name: "OpenAI", icon: "Atom" },
            { name: "Claude", logo: "/images/logos/claude.svg" },
            { name: "Gemini", logo: "/images/logos/gemini.svg" },
            { name: "Mistral AI", logo: "/images/logos/mistral.svg" },
            { name: "Hugging Face", logo: "/images/logos/huggingface.svg" },
          ],
        },
        {
          title: "Agent Tools",
          items: [
            { name: "Databases", icon: "Database" },
            { name: "APIs", icon: "Webhook" },
            { name: "File Systems", icon: "FolderTree" },
          ],
        },
      ],
    },
    application: {
      title: "Moderor Application",
      items: ["Workflows", "Dashboards", "RBAC", "Audit Trail"],
    },
    core: {
      title: "Orchestration & Governance Plane",
      pillars: [
        { name: "Agents", sub: "Reason · Plan · Act", icon: "Bot", chips: ["GRC", "Business", "Custom", "Library"] },
        { name: "Models", sub: "Smart Routing", icon: "BrainCircuit", chips: ["Public", "On-Prem", "SLM", "Fine-tuned"] },
        { name: "Knowledge", sub: "RAG & Memory", icon: "BookOpen", chips: ["Vector", "Graph", "Memory", "Context"] },
        { name: "Connect", sub: "MCP & Tools", icon: "Plug", chips: ["Registry", "Servers", "A2A", "Secure"] },
      ],
    },
    deployment: {
      title: "Deployment Infrastructure",
      items: [
        { name: "AWS", logo: "/images/logos/aws.svg" },
        { name: "Azure", logo: "/images/logos/azure.svg" },
        { name: "GCP", logo: "/images/logos/gcp.svg" },
        { name: "OCI", logo: "/images/logos/oracle.svg" },
        { name: "On-Prem", icon: "Server" },
      ],
    },
  },
  principle: {
    eyebrow: "Category Positioning",
    headline: "AI Models Think.",
    headlineAccent: "AI Agents Act.",
    headlineEnd: "Moderor Governs.",
    description:
      "Foundation models generate intelligence and AI agents execute work — but moderor.ai governs how AI operates across your enterprise.",
    descriptionLine2:
      "Rather than replacing your existing AI investments, moderor extends them with enterprise-grade governance, orchestration, and observability.",
    cycle: [
      { label: "AI Models Think", sub: "Reason. Generate. Understand." },
      { label: "AI Agents Act", sub: "Execute. Automate. Deliver." },
      { label: "Moderor Governs", sub: "Control. Secure. Observe." },
    ],
    cards: [
      {
        description:
          "Foundation models generate intelligence and agents execute work — but neither answers to enterprise policy on its own.",
      },
      {
        description:
          "moderor becomes the operational layer that transforms AI into secure, enterprise-scale business execution.",
      },
    ],
  },
  whyChoose: {
    label: "Governed by Design",
    title: "Enterprise AI that",
    titleHighlight: "enterprises can trust.",
    description:
      "AI should accelerate innovation — not introduce operational risk. moderor.ai embeds governance into every stage of AI execution.",
    items: [
      {
        name: "Zero Trust Security",
        description:
          "Protect every interaction with identity-aware access controls, encryption, and least-privilege security.",
      },
      {
        name: "Policy Enforcement",
        description:
          "Apply business policies before, during, and after AI execution to ensure consistent governance.",
      },
      {
        name: "Human Oversight",
        description:
          "Keep people in control of critical business decisions through configurable approval workflows.",
      },
      {
        name: "Complete Auditability",
        description:
          "Capture every AI interaction, workflow execution, and approval with immutable audit trails.",
      },
      {
        name: "Explainable AI",
        description:
          "Provide complete visibility into how AI decisions were made with transparent, traceable reasoning.",
      },
    ],
  },
  finalCta: {
    title: "Govern Enterprise AI.",
    titleHighlight: "Execute with Confidence.",
    description:
      "Move beyond isolated AI pilots. Build enterprise AI that is governed, secure, observable, and ready for production — through a unified Enterprise AI Control Plane.",
    cta: "Book a Demo",
  },
};
