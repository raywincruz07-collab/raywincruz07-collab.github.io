export interface Project {
  title: string;
  problem: string;
  whatIBuilt: string;
  techStack: string[];
  outcome: string;
  githubUrl: string;
  caseStudyUrl: string;
}

export interface MoreProject {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface JourneyItem {
  title: string;
  description: string;
  period?: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    positioning: string;
    location: string;
    heroSummary: string;
    stats: string[];
    about: string;
    email: string;
    linkedin: string;
    github: string;
    message: string;
  };
  skills: SkillGroup[];
  projects: Project[];
  moreProjects: MoreProject[];
  journey: JourneyItem[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Raywin Cruz",
    positioning:
      "M.Sc. Data Science · AI Product Management · SAP HANA Cloud · GenAI/RAG",
    location: "University of Mannheim · Germany",
    heroSummary:
      "I work at the intersection of AI product management, data science, and cloud data systems. My focus is turning AI capabilities into practical product workflows through research, evaluation, clear documentation, and hands-on technical understanding.",
    stats: [
      "M.Sc. Data Science",
      "University of Mannheim",
      "SAP HANA Cloud",
      "AI Product Management",
      "GenAI/RAG Projects",
    ],
    about:
      "I am a Master’s student in Data Science at the University of Mannheim, currently working in AI Product Management related to SAP HANA Cloud. My work sits between technical AI understanding and product thinking: researching AI capabilities, evaluating product-relevant use cases, documenting findings clearly, and connecting GenAI/RAG concepts with practical cloud data workflows.",
    email: "raywincruz2003@gmail.com",
    linkedin: "https://www.linkedin.com/in/raywincruz",
    github: "https://github.com/raywincruz07-collab",
    message:
      "Open to meaningful conversations around AI product, data science, GenAI/RAG, and cloud data product work where technical understanding and product thinking both matter.",
  },
  skills: [
    {
      category: "Programming",
      skills: ["Python", "SQL", "TypeScript basics", "JavaScript"],
    },
    {
      category: "Data Science / ML",
      skills: [
        "pandas",
        "NumPy",
        "scikit-learn",
        "data preprocessing",
        "model evaluation",
        "data mining",
      ],
    },
    {
      category: "GenAI / RAG",
      skills: [
        "LLMs",
        "prompt engineering",
        "RAG evaluation",
        "embeddings",
        "vector search",
        "LangChain/LangGraph basics",
      ],
    },
    {
      category: "Data Engineering",
      skills: [
        "APIs",
        "ETL workflows",
        "PostgreSQL basics",
        "data validation",
        "Docker basics",
      ],
    },
    {
      category: "Tools & BI",
      skills: [
        "Git",
        "GitHub",
        "Jupyter",
        "VS Code / Antigravity",
        "Power BI",
        "Tableau",
      ],
    },
  ],
  projects: [
    {
      title: "Context Matters: Diversity-Aware Retrieval for RAG",
      problem:
        "Standard semantic retrieval can return redundant chunks and miss diverse perspectives, which weakens RAG answer quality.",
      whatIBuilt:
        "Designed an evaluation workflow comparing standard semantic retrieval with diversity-aware retrieval approaches such as MMR.",
      techStack: [
        "Python",
        "embeddings",
        "RAG evaluation",
        "vector search",
        "data analysis",
      ],
      outcome:
        "Explored how diversity-aware retrieval can improve context coverage and reduce redundant retrieved chunks in RAG workflows.",
      githubUrl:
        "https://github.com/raywincruz07-collab/Context-Matters-Evaluating-Diversity-Aware-Retrieval-for-RAG",
      caseStudyUrl: "",
    },
    {
      title: "Discourse Analysis — AI Product Development Project",
      problem:
        "Online discussions contain opinions and patterns that are difficult to analyze manually at scale.",
      whatIBuilt:
        "Built a structured analysis workflow to process discussion data and identify useful themes, patterns, and insights.",
      techStack: [
        "Python",
        "NLP basics",
        "data preprocessing",
        "analysis workflow",
        "visualization",
      ],
      outcome:
        "Learned how to move from raw text data to structured insights that can support product or research decisions.",
      githubUrl:
        "https://github.com/raywincruz07-collab/AI-PRODUCT-DEVELOPMENT-Discourse-Analysis",
      caseStudyUrl: "",
    },
    {
      title: "AI-Based Logistics Management System",
      problem:
        "Logistics operations need better visibility into demand, routing, and operational bottlenecks.",
      whatIBuilt:
        "Designed an AI-based logistics management system concept covering demand forecasting, route optimization, tracking, and supply-chain visibility.",
      techStack: [
        "Machine learning concepts",
        "forecasting",
        "route optimization",
        "system design",
        "data analytics",
      ],
      outcome:
        "Developed system-level thinking around how AI can support operational efficiency in logistics workflows.",
      githubUrl:
        "https://github.com/raywincruz07-collab/ai_logistics_management_system",
      caseStudyUrl: "",
    },
    {
      title: "Economic Framing Annotation",
      problem:
        "Analyzing how news articles or text data frame economic issues manually is slow and prone to subjective bias.",
      whatIBuilt:
        "Designed a text annotation workflow and preprocessing pipeline to label and analyze framing dimensions in economic text datasets.",
      techStack: [
        "Python",
        "NLP",
        "text preprocessing",
        "data annotation",
        "data analysis",
      ],
      outcome:
        "Explored standard NLP framing classification concepts, dataset labeling consistency, and baseline text analysis methods.",
      githubUrl:
        "https://github.com/raywincruz07-collab/economic-framing-annotation",
      caseStudyUrl: "",
    },
    {
      title: "Adult Income Prediction — Data Mining Project",
      problem:
        "Predict income categories from structured census-style data while handling preprocessing, feature selection, model evaluation, and bias considerations.",
      whatIBuilt:
        "Built a supervised machine learning workflow including data cleaning, feature engineering, model training, and evaluation.",
      techStack: [
        "Python",
        "pandas",
        "scikit-learn",
        "classification",
        "model evaluation",
      ],
      outcome:
        "Practiced exam-relevant data mining steps: preprocessing, train/test split, model comparison, evaluation metrics, and interpretation.",
      githubUrl: "",
      caseStudyUrl: "",
    },
  ],
  moreProjects: [
    {
      title: "AI Developer Enablement Platform / Knowledge Hub",
      category: "GenAI / Product Enablement",
      description:
        "Knowledge hub concept for AI guidance, use-case summaries, and practical enablement workflows.",
      techStack: [
        "GenAI",
        "Prompt Engineering",
        "Documentation",
        "Product Research",
      ],
      githubUrl: "",
    },
    {
      title: "Web Data Integration Project",
      category: "Data Engineering",
      description:
        "Data integration project focused on collecting, transforming, and structuring web-based data sources.",
      techStack: ["Python", "Data Integration", "APIs", "Data Cleaning"],
      githubUrl: "",
    },
    {
      title: "Knowledge Graph Recommender",
      category: "Knowledge Graphs",
      description:
        "Recommender concept using structured relationships and graph-based reasoning.",
      techStack: ["Knowledge Graphs", "Recommendation", "Data Modeling"],
      githubUrl: "",
    },
    {
      title: "Data Mining / Malware Classification",
      category: "Machine Learning",
      description:
        "Classification workflow for detecting malware patterns using data mining techniques.",
      techStack: [
        "Python",
        "Classification",
        "Model Evaluation",
        "Data Mining",
      ],
      githubUrl: "",
    },
    {
      title: "Payment Fraud Detection",
      category: "Machine Learning",
      description:
        "Fraud detection workflow using supervised ML concepts, feature engineering, and evaluation metrics.",
      techStack: ["Python", "pandas", "scikit-learn", "Fraud Detection"],
      githubUrl: "",
    },
    {
      title: "Enterprise Analytics / KPI Reporting",
      category: "Data Analytics",
      description:
        "Analytics and reporting work involving dashboards, SQL, Excel, and BI-style operational insights.",
      techStack: ["SQL", "Power BI", "Tableau", "Excel"],
      githubUrl: "",
    },
    {
      title: "Student Feedback Sentiment Analyzer",
      category: "NLP",
      description:
        "Sentiment analysis concept for extracting feedback patterns from student comments.",
      techStack: ["NLP", "Sentiment Analysis", "Python"],
      githubUrl: "",
    },
  ],
  journey: [
    {
      title: "AI Product Management — SAP HANA Cloud",
      description:
        "Focus: AI product workflows, use-case research, technical evaluation, stakeholder communication, and product-oriented AI understanding.",
      period: "Current",
    },
    {
      title: "M.Sc. Data Science — University of Mannheim",
      description:
        "Focus on Data Mining, Machine Learning, and Practical AI systems.",
      period: "Current",
    },
    {
      title: "AI / Data Science Project Work",
      description:
        "Developing hands-on RAG systems, building clean evaluation pipelines, and exploring open-source LLM alignment.",
    },
    {
      title: "Internship & Practical Experience",
      description:
        "Gaining experience in database schemas, ETL pipelines, and dashboard visualization.",
    },
  ],
};
