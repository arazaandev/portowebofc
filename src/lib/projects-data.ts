export type ProjectLinkType = 'website' | 'dashboard' | 'demo' | 'source';

export interface ProjectExternalLink {
  type: ProjectLinkType;
  label: string;
  url: string;
}

export interface ProjectDetail {
  slug: string;
  number: string;
  category: string;
  date: string;
  title: string;
  cardTitle: string;
  shortDescription: string;
  cardDescription: string;
  image: string;
  color: string;
  glow: string;
  longDescription: string;
  techStack: string[];
  impactMetrics: {
    label: string;
    value: string;
    description: string;
  }[];
  challenge: string;
  solution: string;
  results: string;
  visualization: {
    label: string;
    caption: string;
    insight: string;
  };
  links?: ProjectExternalLink[];
  liveLink?: string;
  githubLink?: string;
  media?: {
    type: 'image' | 'video' | 'embed';
    url: string;
    caption: string;
  }[];
}

export const projectsData: Record<string, ProjectDetail> = {
  'fraud-detection': {
    slug: 'fraud-detection',
    number: '01',
    category: 'DATA PRODUCT',
    date: 'Q4 2024',
    title: 'Financial Fraud Detection & Narrative System',
    cardTitle: 'Financial Fraud Detection',
    shortDescription: 'Processing 2.7M+ transactions using XGBoost and translating AI outputs into clear banking narratives via a FastAPI/Next.js dashboard.',
    cardDescription: 'Processed 2.7M+ transactions using XGBoost; engineered 481MB data cleaning in under 60s for banking audit transparency.',
    image: '/fraud_dashboard_live_preview.png',
    color: 'bg-blue-600/20',
    glow: 'shadow-[0_0_30px_rgba(37,99,235,0.2)]',
    longDescription: 'Developed an end-to-end analytical pipeline to detect illicit financial patterns while ensuring regulatory transparency. The primary objective was to move beyond "black-box" AI by building a system that explicitly explains its reasoning to human auditors.',
    techStack: ['Python', 'FastAPI', 'Next.js', 'XGBoost', 'SQL', 'Batch Processing'],
    impactMetrics: [
      { label: 'Transaction Volume', value: '2.7M+', description: 'Large-scale transactional data analyzed' },
      { label: 'Data Size', value: '481MB', description: 'Processed in under 60 seconds' },
      { label: 'Speed', value: '<60s', description: 'Optimized batch processing execution' },
      { label: 'Clarity', value: '100%', description: 'AI outputs converted to audit narratives' }
    ],
    challenge: 'Banking compliance requires deep audit trails. The challenge was processing 2.7M+ transactions and 481MB of raw data while ensuring every flagged item was accompanied by a narrative explanation that complied with Indonesian banking standards.',
    solution: 'I built a machine learning engine using XGBoost for precise classification and FastAPI for a high-concurrency backend. The frontend, a Next.js dashboard, allows auditors to drill down into specific transactions and read human-readable justifications generated through my custom narrative logic.',
    results: 'The system achieved sub-minute processing times for massive datasets and provided a significant leap in operational transparency, effectively bridging the gap between quantitative risk calculation and qualitative audit requirements.',
    visualization: {
      label: 'Risk review dashboard',
      caption: 'Fraud detection dashboard preview',
      insight: 'A transaction-level control room for reviewing model confidence, audit narratives, and flagged banking behavior.'
    },
    links: [
      {
        type: 'demo',
        label: 'Live Demo',
        url: 'https://fraud-project-beta.vercel.app/',
      },
    ],
    media: [{ type: 'embed', url: 'https://fraud-project-beta.vercel.app/', caption: 'Live fraud detection dashboard' }],
  },
  'hr-optimization': {
    slug: 'hr-optimization',
    number: '02',
    category: 'ANALYTICS DASHBOARD',
    date: 'Q1 2025',
    title: 'Hasna Medika Workforce Optimization',
    cardTitle: 'HR Optimization - Hasna Medika',
    shortDescription: 'Analyzed drivers behind a 16.65% turnover rate and built Tableau KPI dashboards for management.',
    cardDescription: 'Analyzed 16.65% turnover rate and pinpointed retention challenges for medical specialists with interactive KPI tracking.',
    image: '/hr_analytics_dashboard_1776955061858.png',
    color: 'bg-emerald-600/20',
    glow: 'shadow-[0_0_30px_rgba(5,150,105,0.2)]',
    longDescription: 'At Hasna Medika Group, I spearheaded a workforce analytics project to stabilize the headcount of medical specialists and optimize operational revenue per patient.',
    techStack: ['Tableau', 'SQL', 'Workforce Analytics', 'HR Strategy', 'Business Intelligence'],
    impactMetrics: [
      { label: 'Turnover Rate', value: '16.65%', description: 'Deep-dive analysis into employee churn' },
      { label: 'Avg Tenure', value: '17 mo', description: 'Identified critical retention benchmarks' },
      { label: 'Rev / Patient', value: '368K+', description: 'Rp368.87K revenue metric identified' },
      { label: 'Inefficiency', value: '10%', description: 'Reduction in operational bottlenecks' }
    ],
    challenge: 'High turnover (16.65%) was threatening service continuity. The management needed to know exactly why specialists were leaving and how productivity fluctuated across different tenure lengths.',
    solution: 'I cleaned and analyzed large HR datasets using SQL to discover that turnover peaked at the 17-month mark. I then built high-fidelity Tableau dashboards that visualized these trends alongside revenue-per-patient metrics to provide a clear picture of workforce ROI.',
    results: 'The project identified Rp368.87K as the ideal revenue-per-patient benchmark and pinpointed specific inefficiency areas, leading to a 10% reduction in operational friction and better-informed recruitment policies.',
    visualization: {
      label: 'Workforce KPI dashboard',
      caption: 'Workforce analytics dashboard preview',
      insight: 'A management-facing view of turnover, tenure risk, revenue per patient, and retention pressure points.'
    },
    media: [{ type: 'image', url: '/hr_analytics_dashboard_1776955061858.png', caption: 'Workforce analytics dashboard preview' }],
  },
  'stock-analysis': {
    slug: 'stock-analysis',
    number: '03',
    category: 'FINANCIAL MODELING',
    date: 'Q2 2024',
    title: 'Tech Stock Risk & Portfolio Optimization',
    cardTitle: 'Tech Stock Risk Analysis',
    shortDescription: 'Achieved an 11% higher CAGR than benchmarks using Markowitz portfolio optimization on 12 years of history.',
    cardDescription: 'Implemented Markowitz optimization on 12 years of market data to achieve 11% higher CAGR than industry benchmarks.',
    image: '/stock_analysis_ui_1776955201079.png',
    color: 'bg-purple-600/20',
    glow: 'shadow-[0_0_30px_rgba(147,51,234,0.2)]',
    longDescription: 'This quantitative finance project applies Modern Portfolio Theory to the tech sector, specifically focusing on long-term data trends to maximize risk-adjusted returns.',
    techStack: ['Python', 'Pandas', 'Financial Engineering', 'Tableau', 'Optimization'],
    impactMetrics: [
      { label: 'Higher CAGR', value: '11%', description: 'Improvement over industry standard' },
      { label: 'Data History', value: '12 yrs', description: 'Extensive 12-year market dataset' },
      { label: 'Alpha Gen', value: 'Pos.', description: 'Consistently beating the benchmark' },
      { label: 'Risk Red.', value: '15%', description: 'Volatility reduction via optimization' }
    ],
    challenge: 'The tech sector is highly volatile. Creating a portfolio that captures growth without exposing investors to excessive drawdown required a rigorous mathematical approach to asset allocation.',
    solution: 'I gathered 12 years of market data and applied the Markowitz Efficient Frontier model using Python. By calculating the covariance and expected returns, I identified the "Tangency Portfolio" and visualized the risk-return tradeoff through Tableau dashboards.',
    results: 'The resulting portfolio achieved an 11% higher CAGR compared to industry standard tech-sector ETFs. This demonstrated the power of using strategic data optimization to drive superior financial impact.',
    visualization: {
      label: 'Portfolio risk dashboard',
      caption: 'Portfolio optimization dashboard preview',
      insight: 'A risk-return workspace for comparing asset allocation, volatility, benchmark performance, and optimized weights.'
    },
    media: [{ type: 'image', url: '/stock_analysis_ui_1776955201079.png', caption: 'Portfolio optimization dashboard preview' }],
  },
  'energy-forecasting': {
    slug: 'energy-forecasting',
    number: '04',
    category: 'STRATEGIC CONSULTING',
    date: 'Q3 2024',
    title: 'Energy Sector Strategic Forecasting',
    cardTitle: 'Energy Sector Forecasting',
    shortDescription: 'Developed PSC forecasting models at Harbour Energy to identify 5% potential cost streamlining.',
    cardDescription: 'Developed PSC forecasting models at Harbour Energy to identify 5% potential cost streamlining and operational efficiency.',
    image: '/energy_forecasting_ui_1776955325347.png',
    color: 'bg-orange-600/20',
    glow: 'shadow-[0_0_30px_rgba(234,88,12,0.2)]',
    longDescription: 'During my tenure at Harbour Energy and 180 Degrees Consulting, I developed complex financial models to forecast production sharing contracts (PSC) and evaluate renewable energy pilot expansions.',
    techStack: ['Advanced Excel', 'DCF Modeling', 'Strategic Consulting', 'Financial Engineering'],
    impactMetrics: [
      { label: 'Cost Streamlining', value: '5%', description: 'Identified potential for operational saving' },
      { label: 'Efficiency', value: '10%', description: 'Reduction in model processing bottlenecks' },
      { label: 'Asset Life', value: 'Optimized', description: 'Strategy for field life enhancement' }
    ],
    challenge: 'Predicting fiscal outcomes in the energy sector requires navigating complex tax regimes and production fluctuations. The challenge was creating a transparent yet robust DCF model that could handle multiple sensitivity scenarios.',
    solution: 'I built automated strategic models in Excel that integrated production data with fiscal parameters. I also presented these findings to stakeholders to drive data-driven capital allocation decisions.',
    results: 'Identified a 5% baseline for cost streamlining and provided a scalable framework for evaluating the financial viability of future drilling projects.',
    visualization: {
      label: 'Forecasting model view',
      caption: 'Energy forecasting model preview',
      insight: 'A scenario-planning view for PSC assumptions, fiscal sensitivity, asset life, and operational efficiency levers.'
    },
    media: [{ type: 'image', url: '/energy_forecasting_ui_1776955325347.png', caption: 'Energy forecasting model preview' }],
  }
};

export const projects = Object.values(projectsData).sort((a, b) =>
  a.number.localeCompare(b.number)
);

export function getProjectLinks(project: ProjectDetail): ProjectExternalLink[] {
  const configuredLinks = project.links ?? [];
  const legacyLinks: ProjectExternalLink[] = [
    project.liveLink ? { type: 'demo', label: 'Live Demo', url: project.liveLink } : undefined,
    project.githubLink ? { type: 'source', label: 'Source', url: project.githubLink } : undefined,
  ].filter((link): link is ProjectExternalLink => Boolean(link));

  return [...configuredLinks, ...legacyLinks];
}
