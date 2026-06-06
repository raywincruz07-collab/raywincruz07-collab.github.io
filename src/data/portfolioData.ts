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
      "I combine AI product thinking with hands-on data science to evaluate GenAI/RAG workflows, structure product-relevant insights, and build practical AI/data projects with Python, SQL, and modern evaluation methods.",
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
      "Currently focused on AI product management, SAP HANA Cloud, GenAI/RAG evaluation, and data-driven product workflows.",
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
        "Medical RAG systems need reliable retrieval because redundant or weak context can reduce answer quality and increase hallucination risk.",
      whatIBuilt:
        "Built and evaluated a baseline medical RAG pipeline on PubMedQA, comparing multiple retrieval methods including BM25, DPR, Contriever, and ColBERTv2 with a fixed LLM generator.",
      techStack: [
        "Python",
        "PubMedQA",
        "BM25",
        "DPR",
        "Contriever",
        "ColBERTv2",
        "FAISS",
        "RAG evaluation",
        "Mannheim Maki API",
      ],
      outcome:
        "Evaluated retrieval quality using Recall@5, MRR, F1, and ROUGE-L, with ColBERTv2 emerging as the strongest Sprint 1 baseline retriever. Identified the next improvement path: diversity-aware retrieval, coverage, faithfulness, and hallucination-focused evaluation.",
      githubUrl:
        "https://github.com/raywincruz07-collab/Context-Matters-Evaluating-Diversity-Aware-Retrieval-for-RAG",
      caseStudyUrl: "",
    },
    {
      title: "Discourse Analysis — AI Product Development Project",
      problem:
        "Public online discourse spreads across multiple platforms, making it difficult for researchers to track narratives, spikes, and cross-platform patterns manually.",
      whatIBuilt:
        "Built a research-oriented discourse analysis platform with collectors, database storage, analysis modules, FastAPI backend, and a frontend dashboard for exploring posts, trends, narratives, origin traces, and AI-assisted summaries.",
      techStack: [
        "Python",
        "FastAPI",
        "SQLite/PostgreSQL",
        "JavaScript",
        "HTML/CSS",
        "trend analysis",
        "narrative analysis",
        "LLM-assisted Q&A",
      ],
      outcome:
        "Practiced end-to-end AI product development: data collection, modular architecture, analysis workflows, dashboard design, export features, and ethical handling of public data.",
      githubUrl:
        "https://github.com/raywincruz07-collab/AI-PRODUCT-DEVELOPMENT-Discourse-Analysis",
      caseStudyUrl: "",
    },
    {
      title: "AI-Based Logistics Management System",
      problem:
        "Logistics teams need better visibility into delivery delays, routing context, operational KPIs, and decision-support insights.",
      whatIBuilt:
        "Designed an AI/data analytics logistics system using shipment records enriched with geolocation, routing, and weather context to support delay-risk prediction and KPI monitoring.",
      techStack: [
        "Python",
        "machine learning",
        "API enrichment",
        "Nominatim",
        "openrouteservice",
        "Open-Meteo",
        "Power BI",
        "KPI dashboards",
        "data pipeline design",
      ],
      outcome:
        "Built system-level understanding of how raw shipment records can become an enriched analytical dataset for prediction, monitoring, route efficiency logic, and executive reporting.",
      githubUrl:
        "https://github.com/raywincruz07-collab/ai_logistics_management_system",
      caseStudyUrl: "",
    },
    {
      title: "Economic Framing Annotation",
      problem:
        "Large-scale immigration news analysis requires consistent annotation of economic threat and economic benefit frames across thousands of paragraphs.",
      whatIBuilt:
        "Built a structured annotation pipeline for 10,000 German immigration news paragraphs, using a computational inference framework and validation against a human gold standard.",
      techStack: [
        "R",
        "annotation pipeline",
        "prompt-based classification",
        "validation workflow",
        "human gold standard",
        "evaluation metrics",
      ],
      outcome:
        "Validated the pipeline against a 200-row human gold standard, reaching F1 = 0.811 for Economic Threat and F1 = 0.769 for Economic Benefit. Learned how prevalence, recall, and validation design affect annotation reliability.",
      githubUrl:
        "https://github.com/raywincruz07-collab/economic-framing-annotation",
      caseStudyUrl: "",
    },
    {
      title: "Adult Income Prediction — Data Mining Project",
      problem:
        "Predicting income categories from census-style data requires careful preprocessing, feature engineering, model comparison, and fairness analysis.",
      whatIBuilt:
        "Built a full supervised machine learning pipeline for UCI Adult Income prediction, including data cleaning, feature engineering, baseline modeling, tuned classifiers, ensemble comparison, and fairness checks.",
      techStack: [
        "Python",
        "pandas",
        "scikit-learn",
        "XGBoost",
        "GridSearchCV",
        "classification",
        "fairness analysis",
        "model evaluation",
      ],
      outcome:
        "Compared Logistic Regression, Decision Tree, Random Forest, XGBoost, SVM, and a soft-voting ensemble using accuracy, weighted F1, and ROC-AUC. Practiced fair evaluation under class imbalance and analyzed model behavior across protected attributes.",
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
        "Current focus on AI product workflows, use-case research, technical evaluation, stakeholder communication, and product-oriented AI understanding.",
      period: "Current",
    },
    {
      title: "M.Sc. Data Science — University of Mannheim",
      description:
        "Graduate studies focused on data mining, machine learning, data management, responsible AI, and applied data science projects.",
      period: "Current",
    },
    {
      title: "AI/Data Project Portfolio",
      description:
        "Built academic and personal projects around RAG evaluation, NLP, data mining, logistics systems, knowledge organization, and analytics workflows.",
    },
    {
      title: "Internship & Practical Experience",
      description:
        "Gaining experience in database schemas, ETL pipelines, and dashboard visualization.",
    },
  ],
};
