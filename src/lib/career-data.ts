export interface CareerEntry {
  title: string;
  organization?: string;
  period: string;
  summary: string;
  bullets: string[];
  metric: string;
  href?: string;
}

export interface EducationEntry {
  institution: string;
  program: string;
  period: string;
  detail: string;
}

export interface Capability {
  title: string;
  description: string;
  tools: string[];
}

export const projectExperiences: CareerEntry[] = [
  {
    title: "Real-Time Financial Fraud Detection & Interpretation System",
    period: "Oct 2025 - Dec 2025",
    summary: "Built an explainable fraud analytics system for financial transaction review.",
    metric: "2.7M+ transactions",
    href: "/projects/fraud-detection",
    bullets: [
      "Processed and analyzed 2.7M+ financial transactions using Python and XGBoost to detect illicit patterns.",
      "Engineered automated batch processing for 481MB of complex financial datasets in under 60 seconds.",
      "Translated quantitative model outputs into clear Indonesian banking narratives for audit transparency and compliance reporting.",
    ],
  },
  {
    title: "Freelance HR Data Analyst",
    organization: "RevoU x Hasna Medika Group",
    period: "Apr 2025 - May 2025",
    summary: "Delivered workforce analytics and Tableau KPI dashboards for healthcare operations.",
    metric: "16.65% turnover analyzed",
    href: "/projects/hr-optimization",
    bullets: [
      "Identified key drivers behind a 16.65% turnover rate and 17-month average tenure.",
      "Analyzed demographic and contract-type data to recommend workforce optimization strategies.",
      "Evaluated specialist productivity, including Rp368.87K revenue per patient and claim rejection issues.",
      "Built Tableau dashboards and delivered a business report to support HR and recruitment decisions.",
    ],
  },
  {
    title: "Tech Stock Risk to Reward Analysis",
    organization: "RevoU Project",
    period: "Oct 2024 - Feb 2025",
    summary: "Modeled portfolio risk and returns from long-run market data.",
    metric: "11% higher CAGR",
    href: "/projects/stock-analysis",
    bullets: [
      "Analyzed 12 years of daily financial market data across 3,000+ trading days.",
      "Implemented Markowitz portfolio optimization and achieved an 11% higher CAGR than the industry benchmark.",
      "Built Tableau dashboards to improve financial metric interpretability and reporting efficiency by 10%.",
    ],
  },
];

export const workExperiences: CareerEntry[] = [
  {
    title: "Financial Planning Intern",
    organization: "Harbour Energy Indonesia",
    period: "Dec 2023 - Feb 2024",
    summary: "Supported financial planning and project economics for energy-sector investment decisions.",
    metric: "5% cost streamlining",
    bullets: [
      "Processed market data and financial reports using advanced Excel modeling.",
      "Delivered quantitative insights that improved project economics and decision-making efficiency.",
      "Developed financial forecasting models for Profit Sharing Contracts, identifying a 5% potential cost-streamlining opportunity.",
    ],
  },
  {
    title: "Project Analyst",
    organization: "180 Degrees Consulting UGM",
    period: "Jan 2022 - Jan 2023",
    summary: "Analyzed expansion and fundraising strategy for nonprofit and social-enterprise clients.",
    metric: "50% engagement increase",
    bullets: [
      "Analyzed hydropower renewable-energy pilot expansion data and uncovered operational inefficiencies.",
      "Helped drive a 10% reduction in operational inefficiencies and strengthen business strategy.",
      "Analyzed investor data, quantified funding opportunities, and supported capital-raising efforts that led to a 50% increase in successful investment engagements.",
    ],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    institution: "Universitas Gadjah Mada",
    program: "Bachelor of Economics",
    period: "Expected Aug 2026",
    detail: "GPA 3.15/4.00, thesis focus in Monetary Economics.",
  },
  {
    institution: "RevoU",
    program: "Full-Stack Data Analytics Program",
    period: "Oct 2024 - Apr 2025",
    detail: "Hands-on business cases using SQL, Python, and Tableau to extract insights and deliver data visualizations.",
  },
];

export const selectedMetrics = [
  { value: "2.7M+", label: "Transactions analyzed" },
  { value: "481MB", label: "Processed under 60s" },
  { value: "11%", label: "Higher CAGR" },
  { value: "16.65%", label: "Turnover analyzed" },
  { value: "5%", label: "Cost streamlining" },
  { value: "50%", label: "Investment engagement increase" },
];

export const coreCapabilities: Capability[] = [
  {
    title: "Financial Modeling",
    description: "DCF, comparable analysis, PSC forecasting, and market trend analysis for investment decisions.",
    tools: ["Excel", "Google Sheets", "PowerPoint"],
  },
  {
    title: "Data Analytics",
    description: "Business performance analysis, workforce analytics, and financial market risk assessment.",
    tools: ["Python", "SQL", "Pandas"],
  },
  {
    title: "Data Visualization",
    description: "Decision-ready dashboards that make complex metrics easier for stakeholders to interpret.",
    tools: ["Tableau", "Dashboards", "Reporting"],
  },
  {
    title: "Strategic Research",
    description: "Market research, investor data analysis, and recommendations for operational and capital strategy.",
    tools: ["Market Research", "Communication", "Leadership"],
  },
];
