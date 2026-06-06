export interface Project {
  title: string;
  problem: string;
  whatIBuilt: string;
  techStack: string[];
  outcome: string;
  productLearning: string;
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
      "AI Product Management · GenAI/RAG · Data Science · Cloud Data Systems",
    location: "University of Mannheim · Germany",
    heroSummary:
      "I combine AI product thinking with hands-on data science and GenAI/RAG implementation. My work focuses on researching AI use cases, evaluating technical feasibility, building practical AI/data prototypes, and translating technical findings into clear product direction.",
    stats: [
      "AI Product Management",
      "Data Science & GenAI",
      "SAP HANA Cloud",
      "RAG / ML / Analytics",
      "Germany-based",
    ],
    about:
      "I am a Master’s student in Data Science at the University of Mannheim, currently working in AI Product Management related to SAP HANA Cloud. I position myself as a technical AI product profile: someone who can understand AI capabilities, evaluate feasibility, work with data and GenAI/RAG systems, and translate technical findings into product decisions, documentation, and stakeholder-ready insights.",
    email: "raywincruz2003@gmail.com",
    linkedin: "https://www.linkedin.com/in/raywincruz",
    github: "https://github.com/raywincruz07-collab",
    message:
      "Focused on AI Product Management with hands-on strength in GenAI/RAG, data science, AI evaluation, and cloud data product workflows.",
  },
  skills: [
    {
      category: "Product Management / AI Product",
      skills: [
        "AI use-case research",
        "product requirements",
        "stakeholder communication",
        "technical documentation",
        "feasibility evaluation",
        "product-oriented analysis",
      ],
    },
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
        "preprocessing",
        "classification",
        "model evaluation",
        "data mining",
        "fairness analysis",
      ],
    },
    {
      category: "GenAI / RAG",
      skills: [
        "LLMs",
        "prompt engineering",
        "retrieval evaluation",
        "embeddings",
        "vector search",
        "RAG evaluation",
        "hallucination-aware evaluation",
      ],
    },
    {
      category: "Data / Cloud Systems",
      skills: [
        "APIs",
        "ETL workflows",
        "PostgreSQL basics",
        "data validation",
        "Docker basics",
        "cloud data workflows",
      ],
    },
    {
      category: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Jupyter",
        "VS Code/Antigravity",
        "Power BI",
        "Tableau",
      ],
    },
  ],
  projects: [
    {
      title: "Context Matters: Diversity-Aware Retrieval for RAG",
      problem:
        "Medical RAG systems depend heavily on retrieval quality. If the retrieved context is redundant, incomplete, or weak, the final answer can become less useful and more prone to hallucination.",
      whatIBuilt:
        "Built and evaluated a medical RAG baseline pipeline using PubMedQA. Compared BM25, DPR, Contriever, and ColBERTv2 retrieval methods with a fixed LLM generator to understand retrieval behavior before adding diversity-aware retrieval.",
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
        "Evaluated retrieval using Recall@5, MRR, F1, and ROUGE-L. Learned how retrieval choice affects answer quality and identified the next product-relevant improvement path: diversity, coverage, faithfulness, and hallucination-aware evaluation.",
      productLearning:
        "Retrieval strategy is a product decision: choosing the wrong retriever degrades answer quality before the LLM is ever involved.",
      githubUrl:
        "https://github.com/raywincruz07-collab/Context-Matters-Evaluating-Diversity-Aware-Retrieval-for-RAG",
      caseStudyUrl: "",
    },
    {
      title: "Discourse Analysis — AI Product Development Project",
      problem:
        "Public discourse is fragmented across platforms, making it hard to track narratives, spikes, and topic movement manually.",
      whatIBuilt:
        "Built a research-oriented discourse analysis platform with data collectors, database storage, analysis modules, FastAPI backend, and dashboard views for posts, trends, narratives, origin traces, and AI-assisted summaries.",
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
        "Practiced product-style development from problem framing to system architecture, user-facing dashboard design, modular analysis workflows, and responsible handling of public data.",
      productLearning:
        "End-to-end product thinking requires decisions beyond features — architecture, ethics, and data ownership all shape what's buildable.",
      githubUrl:
        "https://github.com/raywincruz07-collab/AI-PRODUCT-DEVELOPMENT-Discourse-Analysis",
      caseStudyUrl: "",
    },
    {
      title: "AI-Based Logistics Management System",
      problem:
        "Logistics operations need better visibility into delivery delays, route context, operational KPIs, and decision-support signals.",
      whatIBuilt:
        "Designed an AI/data analytics logistics system that enriches shipment records with geolocation, route, and weather context to support delay-risk prediction and KPI monitoring.",
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
        "Learned how to convert raw operational records into enriched analytics data for prediction, monitoring, route-efficiency reasoning, and executive reporting.",
      productLearning:
        "Raw data is rarely decision-ready — enrichment (context, routing, weather) is what makes analytics actionable for operations teams.",
      githubUrl:
        "https://github.com/raywincruz07-collab/ai_logistics_management_system",
      caseStudyUrl: "",
    },
    {
      title: "Economic Framing Annotation",
      problem:
        "Large-scale immigration news analysis requires consistent identification of economic threat and economic benefit frames across thousands of paragraphs.",
      whatIBuilt:
        "Built a structured annotation pipeline for 10,000 German immigration news paragraphs using computational classification and validation against a human gold standard.",
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
      productLearning:
        "Annotation quality is a system design problem — prevalence and validation strategy determine whether any downstream analysis can be trusted.",
      githubUrl:
        "https://github.com/raywincruz07-collab/economic-framing-annotation",
      caseStudyUrl: "",
    },
    {
      title: "Adult Income Prediction — Data Mining Project",
      problem:
        "Income classification from census-style data requires careful preprocessing, model comparison, evaluation, and fairness analysis.",
      whatIBuilt:
        "Built a supervised machine learning workflow using the UCI Adult dataset, including preprocessing, feature engineering, baseline modeling, tuned classifiers, ensemble comparison, and fairness checks.",
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
        "Compared Logistic Regression, Decision Tree, Random Forest, XGBoost, SVM, and a soft-voting ensemble using accuracy, weighted F1, and ROC-AUC. Practiced fair model evaluation under class imbalance and analyzed model behavior across protected attributes.",
      productLearning:
        "Model selection is a tradeoff problem: accuracy alone is insufficient — fairness, interpretability, and class balance shape which model is appropriate for real use.",
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
        "Current focus on AI product workflows, use-case research, technical feasibility evaluation, stakeholder communication, documentation, and product-oriented AI understanding.",
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
