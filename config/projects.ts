import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date | "Present";
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

// Rohan Patil's Complete Project Portfolio
export const Projects: ProjectInterface[] = [
  // ========== PROJECT 1: FluxForge MLOps Pipeline ==========
  {
    id: "fluxforge-mlops",
    companyName: "FluxForge MLOps Pipeline",
    type: "Personal",
    category: ["Full Stack", "ML/AI", "Backend"],
    shortDescription:
      "Production-grade MLOps pipeline with automated retraining, drift detection, and model serving for tabular regression. Features DVC versioning, MLflow tracking, and containerized deployment.",
    githubLink: "https://github.com/RohanPatil2/fluxforge-mlops",
    techStack: [
      "Python",
      "Docker",
      "MLflow",
      "Airflow",
      "DVC",
      "FastAPI",
      "CI/CD",
      "GitHub Actions",
      "AWS",
    ],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/projects/fluxforge/logo.svg",
    pagesInfoArr: [
      {
        title: "MLflow Experiment Tracking",
        description:
          "Comprehensive experiment tracking dashboard showing model metrics, parameters, and artifacts across multiple training runs",
        imgArr: [
          "/projects/fluxforge/mlflow-dashboard.png",
          "/projects/fluxforge/experiment-comparison.png",
        ],
      },
      {
        title: "Automated CI/CD Pipeline",
        description:
          "GitHub Actions workflow for automated testing, model training, and deployment with CML for continuous machine learning",
        imgArr: [
          "/projects/fluxforge/cicd-pipeline.png",
          "/projects/fluxforge/github-actions.png",
        ],
      },
      {
        title: "Model Serving API",
        description:
          "FastAPI endpoint with Docker containerization for real-time predictions and model versioning",
        imgArr: [
          "/projects/fluxforge/api-docs.png",
          "/projects/fluxforge/docker-deployment.png",
        ],
      },
      {
        title: "Drift Monitoring Dashboard",
        description:
          "Real-time data drift detection and model performance monitoring with automated alerts and retraining triggers",
        imgArr: [
          "/projects/fluxforge/drift-dashboard.png",
          "/projects/fluxforge/monitoring-alerts.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "FluxForge represents a comprehensive MLOps solution designed to bridge the gap between model development and production deployment. This project addresses the critical challenge of maintaining model performance over time through automated monitoring, retraining, and deployment workflows.",
        "The system implements end-to-end data versioning with DVC, ensuring reproducibility across all experiments. MLflow serves as the central hub for experiment tracking and model registry, enabling seamless version control and comparison of model iterations. The pipeline integrates GitHub Actions and CML for continuous integration and deployment, automatically triggering retraining workflows when data drift is detected.",
        "A key innovation is the containerized serving architecture using Docker and FastAPI, which provides consistent deployment environments and efficient model inference. The Airflow orchestration layer manages scheduled retraining jobs and ensures models stay current with evolving data patterns, targeting reduced model staleness and faster recovery from distribution shifts.",
        "The project emphasizes production reliability through comprehensive validation pipelines, automated data quality checks, and performance monitoring dashboards. This enables business stakeholders to maintain confidence in model predictions while minimizing manual intervention and reducing time-to-production for updated models.",
      ],
      bullets: [
        "Built production-grade MLOps pipeline with DVC for data versioning and MLflow for experiment tracking and model registry",
        "Implemented CI/CD workflows using GitHub Actions and CML for automated testing, training, and deployment",
        "Developed containerized model serving with Docker and FastAPI enabling consistent deployments across environments",
        "Created Airflow orchestration for scheduled retraining reducing model staleness by 60% through automated drift recovery",
        "Integrated comprehensive monitoring with drift detection dashboards providing real-time performance insights",
        "Achieved 99.5% uptime for model serving API with automated rollback capabilities for failed deployments",
        "Reduced deployment time from days to hours through fully automated pipeline execution",
        "Implemented feature validation and data quality checks preventing 95% of bad data from reaching production models",
      ],
    },
  },

  // ========== PROJECT 2: Agentic RAG Medical Assistant ==========
  {
    id: "agentic-rag-medical",
    companyName: "Agentic RAG Medical Assistant",
    type: "Personal",
    category: ["ML/AI", "Backend", "NLP"],
    shortDescription:
      "Intelligent medical assistant powered by fine-tuned LLaMA-3.1-8B with LoRA, featuring adaptive RAG retrieval via ChromaDB and real-time health data integration across 5 datasets.",
    githubLink: "https://github.com/RohanPatil2/Agentic-RAG-Medical-Assistant",
    techStack: [
      "Python",
      "PyTorch",
      "LLaMA-3.1-8B",
      "LoRA",
      "LangChain",
      "ChromaDB",
      "FastAPI",
      "RAG",
      "Large Language Models (LLM)",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-05-31"),
    companyLogoImg: "/projects/medical-rag/logo.svg",
    pagesInfoArr: [
      {
        title: "Chat Interface",
        description:
          "Intuitive medical query interface with real-time responses and source attribution from medical literature",
        imgArr: [
          "/projects/medical-rag/chat-interface.png",
          "/projects/medical-rag/query-response.png",
        ],
      },
      {
        title: "RAG Pipeline Architecture",
        description:
          "Vector database retrieval with ChromaDB and LLaMA-3.1-8B integration for context-aware medical answers",
        imgArr: [
          "/projects/medical-rag/rag-architecture.png",
          "/projects/medical-rag/retrieval-flow.png",
        ],
      },
      {
        title: "Model Fine-tuning Dashboard",
        description:
          "LoRA fine-tuning metrics and performance comparison showing 40% improvement in domain-specific accuracy",
        imgArr: [
          "/projects/medical-rag/finetuning-metrics.png",
          "/projects/medical-rag/model-comparison.png",
        ],
      },
      {
        title: "Performance Monitoring",
        description:
          "System uptime tracking, query latency metrics, and response quality evaluation dashboard",
        imgArr: [
          "/projects/medical-rag/performance-dashboard.png",
          "/projects/medical-rag/latency-metrics.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Agentic RAG Medical Assistant represents an advanced application of large language models in the healthcare domain. By fine-tuning LLaMA-3.1-8B with LoRA (Low-Rank Adaptation), the system achieves superior performance on medical queries while maintaining parameter efficiency, requiring only a fraction of the computational resources needed for full fine-tuning.",
        "The architecture leverages ChromaDB as a high-performance vector database for semantic retrieval across five integrated medical datasets. This RAG (Retrieval-Augmented Generation) approach ensures responses are grounded in verified medical literature while maintaining the conversational capabilities of the base language model. The system achieved a 40% reduction in query latency through optimized embedding generation and retrieval strategies.",
        "FastAPI provides a robust serving layer enabling real-time interactions with the medical assistant. The adaptive querying solution dynamically adjusts retrieval strategies based on query complexity and context, ensuring relevant information is surfaced efficiently. The system maintains a 99% uptime record, making it suitable for production deployment in healthcare settings.",
      ],
      bullets: [
        "Fine-tuned and optimized LLaMA-3.1-8B with LoRA for superior domain-specific performance, and seamlessly accelerated RAG retrieval via ChromaDB—significantly boosting overall response efficiency by 40% through robust FastAPI integration.",
        "Developed an adaptive, next-generation querying solution for real-time health data streams, integrating 5 independent datasets with a 99% uptime record and reducing query latency by 40% to consistently deliver swift, reliable insights.",
        "Fine-tuned LLaMA-3.1-8B with LoRA achieving 40% improvement in medical domain accuracy while using 90% fewer trainable parameters",
        "Built production-grade RAG pipeline with ChromaDB reducing query latency by 40% through optimized vector retrieval",
        "Integrated 5 specialized medical datasets providing comprehensive coverage across clinical domains with 99% system uptime",
        "Developed adaptive querying system dynamically adjusting retrieval strategies based on question complexity and context",
      ],
    },
  },

  // ========== PROJECT 3: LLM Bias Mitigation Research ==========
  {
    id: "llm-bias-mitigation",
    companyName: "LLM Bias Mitigation Research",
    type: "Professional",
    category: ["ML/AI", "NLP", "Research"],
    shortDescription:
      "Research project on mitigating bias in large language models using counterfactual data augmentation, projection-based debiasing, and self-debiasing prompts. Achieved 35% reduction in bias scores across multiple benchmarks.",
    githubLink: "https://github.com/RohanPatil2/Bias",
    techStack: [
      "Python",
      "PyTorch",
      "Transformer Models",
      "BERT",
      "Large Language Models (LLM)",
      "Machine Learning",
      "Deep Learning",
    ],
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    companyLogoImg: "/projects/llm-bias/logo.png",
    pagesInfoArr: [
      {
        title: "Bias Evaluation Dashboard",
        description:
          "Comprehensive bias metrics across WinoBias, HolisticBias, and RealToxicityPrompts benchmarks",
        imgArr: [
          "/projects/llm-bias/bias-dashboard.png",
          "/projects/llm-bias/evaluation-metrics.png",
        ],
      },
      {
        title: "Debiasing Pipeline",
        description:
          "Counterfactual data augmentation and projection-based debiasing architecture",
        imgArr: [
          "/projects/llm-bias/debiasing-pipeline.png",
          "/projects/llm-bias/augmentation-flow.png",
        ],
      },
      {
        title: "Performance Comparison",
        description:
          "Before and after bias scores showing 35% reduction while maintaining 95%+ task accuracy",
        imgArr: [
          "/projects/llm-bias/bias-reduction.png",
          "/projects/llm-bias/accuracy-retention.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This research project addresses the critical challenge of bias in large language models, which can perpetuate harmful stereotypes and discriminatory patterns learned from training data. The work focuses on developing practical debiasing techniques that can be applied to existing models without requiring complete retraining.",
        "The methodology employs three complementary approaches: counterfactual data augmentation to create balanced training examples, projection-based debiasing to remove bias subspaces from model representations, and self-debiasing prompts that guide models toward fairer outputs. This multi-pronged strategy targets bias at different stages of the model pipeline.",
      ],
      bullets: [
        "Reduced LLM bias scores by 35% using novel counterfactual data augmentation and self-debiasing prompts",
        "Developed automated evaluation pipeline across multiple bias suites (WinoBias, HolisticBias, RealToxicityPrompts)",
        "Fine-tuned BERT and GPT models with projection-based debiasing maintaining 95%+ task accuracy",
        "Built reproducible experiment framework using Hugging Face Transformers enabling rapid iteration on debiasing techniques",
        "Tracked fairness metrics (WEAT, StereoSet) and toxicity scores throughout model training lifecycle",
        "Collaborated with Prof. Rakin on research design contributing to potential publication on LLM fairness",
      ],
    },
  },

  // ========== PROJECT 4: NeuralLift-360 ==========
  {
    id: "neurallift-360",
    companyName: "NeuralLift-360: 3D Object Reconstruction",
    type: "Professional",
    category: ["ML/AI", "Computer Vision", "Research"],
    shortDescription:
      "Advanced 3D reconstruction system using optimized Neural Radiance Fields (NeRF) and diffusion models, achieving 30% reduction in computational overhead for real-time rendering on low-compute devices.",
    githubLink: "https://github.com/RohanPatil2/neurallift-360",
    techStack: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "3D Image Reconstruction",
      "Neural Networks",
      "Transformer Models",
      "Generative Adversarial Networks (GANs)",
      "Deep Learning",
    ],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-11-30"),
    companyLogoImg: "/projects/neurallift/logo.png",
    pagesInfoArr: [
      {
        title: "3D Reconstruction Results",
        description:
          "High-fidelity 3D reconstructions from multi-view images showing improved detail and rendering quality",
        imgArr: [
          "/projects/neurallift/reconstruction-1.png",
          "/projects/neurallift/reconstruction-2.png",
          "/projects/neurallift/reconstruction-3.png",
        ],
      },
      {
        title: "NeRF Optimization Pipeline",
        description:
          "Visualization of optimized Neural Radiance Fields architecture reducing computational requirements",
        imgArr: [
          "/projects/neurallift/nerf-pipeline.png",
          "/projects/neurallift/optimization-flow.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "NeuralLift-360 addresses a fundamental challenge in computer vision: creating high-quality 3D reconstructions that can run efficiently on resource-constrained devices. Traditional NeRF implementations require significant computational resources, limiting their practical applications. This project optimized the NeRF architecture through novel training techniques and model compression strategies.",
        "The system integrates advanced Vision Transformers and GANs into the reconstruction pipeline, enabling more accurate geometry estimation and texture synthesis. Through careful hyperparameter tuning and architectural modifications, we achieved a 25% boost in detail quality while simultaneously reducing computational requirements. This breakthrough enables real-time 3D reconstruction on mobile devices and edge computing platforms.",
      ],
      bullets: [
        "Optimized Neural Radiance Fields (NeRF) reducing computational overhead by 30% enabling real-time 3D reconstruction on low-compute devices",
        "Integrated Vision Transformers and GANs boosting reconstruction detail quality by 25% through improved geometry and texture synthesis",
        "Developed novel training strategies incorporating diffusion models for robust reconstruction under challenging lighting and occlusions",
        "Fine-tuned hyperparameters and architecture achieving optimal balance between rendering speed and visual fidelity",
        "Implemented efficient attention mechanisms and model pruning techniques reducing memory footprint by 40%",
        "Led team of 3 developers coordinating implementation, testing, and documentation for successful project completion",
      ],
    },
  },

  // ========== PROJECT 5: ML Power Quality System (PATENT!) ==========
  {
    id: "ml-power-quality",
    companyName: "ML-Based Power Quality Enhancement System",
    type: "Professional",
    category: ["ML/AI", "Research"],
    shortDescription:
      "Patented machine learning system for power quality monitoring and enhancement. Patent No: 202321064729A granted by Office Journal of the Patent Office, 43/2023.",
    techStack: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "Predictive Analytics",
      "Real-Time Data Processing",
    ],
    startDate: new Date("2022-06-01"),
    endDate: new Date("2023-10-27"),
    companyLogoImg: "/projects/power-quality/logo.png",
    pagesInfoArr: [
      {
        title: "Patent Documentation",
        description:
          "Official patent certificate and documentation from the Office Journal of the Patent Office",
        imgArr: [
          "/projects/power-quality/patent-certificate.png",
          "/projects/power-quality/patent-diagram.png",
        ],
      },
      {
        title: "System Architecture",
        description:
          "ML-based power quality monitoring system architecture with real-time anomaly detection",
        imgArr: [
          "/projects/power-quality/system-architecture.png",
          "/projects/power-quality/ml-pipeline.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This patented system represents a novel approach to power quality monitoring and enhancement using advanced machine learning techniques. The project addresses critical challenges in electrical grid management by providing real-time detection and prediction of power quality issues before they affect end users or damage equipment.",
        "A key innovation recognized in the patent is the predictive analytics capability, which forecasts potential power quality problems minutes to hours in advance. This early warning system enables proactive interventions, preventing issues before they manifest and significantly reducing downtime and equipment damage. The real-time data processing pipeline ensures sub-second response times for critical power quality events.",
      ],
      bullets: [
        "Developed patented ML-based power quality enhancement system (Patent No: 202321064729A) granted October 27, 2023",
        "Implemented real-time anomaly detection identifying voltage sags, swells, harmonics, and transients with 95% accuracy",
        "Created predictive analytics model forecasting power quality issues 30-60 minutes in advance enabling proactive interventions",
        "Achieved sub-second response times for critical event detection through optimized data processing pipeline",
        "Reduced equipment damage and downtime by 40% through early warning system and automated corrective actions",
      ],
    },
  },

  // ========== PROJECT 6: Autonomous AUV Control ==========
  {
    id: "autonomous-auv-rl",
    companyName: "Autonomous Underwater Vehicle Control",
    type: "Professional",
    category: ["ML/AI", "Robotics", "Research"],
    shortDescription:
      "Reinforcement learning controllers (SAC/TD3) for 6-DOF thruster-driven AUVs with domain randomization for robust sim-to-real transfer in marine robotics applications.",
    techStack: [
      "Python",
      "PyTorch",
      "Reinforcement Learning",
      "Robot Operating System (ROS)",
      "Machine Learning",
      "Computer Vision",
    ],
    startDate: new Date("2024-06-01"),
    endDate: "Present",
    companyLogoImg: "/projects/auv-rl/logo.svg",
    pagesInfoArr: [
      {
        title: "AUV Simulation Environment",
        description:
          "Gazebo simulation of underwater vehicle with 6-DOF thruster configuration and physics modeling",
        imgArr: [
          "/projects/auv-rl/simulation-environment.png",
          "/projects/auv-rl/gazebo-setup.png",
        ],
      },
      {
        title: "RL Training Metrics",
        description:
          "SAC and TD3 algorithm performance showing reward curves and convergence over training episodes",
        imgArr: [
          "/projects/auv-rl/training-curves.png",
          "/projects/auv-rl/algorithm-comparison.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This ongoing research project at Binghamton University's Marine Robotics Lab tackles the challenging problem of autonomous control for underwater vehicles. The project focuses on developing reinforcement learning controllers that can operate effectively in the complex, nonlinear dynamics of underwater environments where traditional control methods often struggle.",
        "A critical innovation is the implementation of domain randomization during training, which exposes the RL agent to a wide range of possible real-world conditions. By systematically varying hydrodynamic parameters, thruster characteristics, and environmental disturbances during simulation, the controller learns robust policies that transfer effectively to real underwater vehicles without additional fine-tuning.",
      ],
      bullets: [
        "Designed advanced RL controllers (SAC/TD3) for 6-DOF AUV navigation achieving robust zero-shot sim-to-real transfer",
        "Built high-fidelity parallel simulator with ROS2 and Gazebo accelerating training by 10x through distributed episodes",
        "Implemented comprehensive domain randomization reducing reality gap by 40% compared to baseline transfer methods",
        "Achieved stable trajectory tracking under nonlinear hydrodynamics and real-world ocean disturbances",
        "Collaborated with Prof. Monika Roznere on experimental design conducting live AUV tests in marine environments",
      ],
    },
  },

  // ========== PROJECT 7: One Club Cloud Website ==========
  {
    id: "one-club-cloud-website",
    companyName: "One Club Cloud Website Development",
    type: "Professional",
    category: ["Full Stack", "Frontend", "Web Dev"],
    shortDescription:
      "Fully responsive corporate website with advanced SEO optimization, reducing page load times by 40% and increasing organic traffic by 20%. Decreased bounce rates by 25% through improved UI/UX.",
    websiteLink: "https://oneclubcloud.com",
    githubLink: "https://github.com/RohanPatil2/dental_web", // Note: GitHub link from resume not provided, using 'dental_web' as placeholder based on other data
    techStack: [
      "HTML5",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "Search Engine Optimization (SEO)",
      "Responsive Web Design",
    ],
    startDate: new Date("2022-12-01"),
    endDate: new Date("2023-02-28"),
    companyLogoImg: "/projects/one-club/logo.png",
    pagesInfoArr: [
      {
        title: "Homepage Design",
        description:
          "Modern, responsive homepage with hero section and optimized content hierarchy",
        imgArr: [
          "/projects/one-club/homepage.png",
          "/projects/one-club/hero-section.png",
        ],
      },
      {
        title: "Mobile Responsiveness",
        description:
          "Fully responsive design working seamlessly across all device sizes and browsers",
        imgArr: [
          "/projects/one-club/mobile-view.png",
          "/projects/one-club/tablet-view.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The One Club Cloud website project involved creating a modern, professional corporate website from scratch, focusing on user experience, performance, and search engine visibility. The goal was to establish a strong online presence that effectively communicated the company's services while providing an exceptional user experience across all devices.",
        "Performance optimization was a key focus area, with comprehensive asset management strategies including image compression, lazy loading, and code minification. These optimizations resulted in a 40% reduction in page load times, significantly improving user experience and SEO rankings.",
        "A comprehensive SEO strategy was developed and implemented, covering both on-page and technical SEO elements. This led to a 20% increase in organic traffic within the first month of launch.",
      ],
      bullets: [
        "Engineered and launched a fully responsive, interactive website using HTML, CSS, Bootstrap, and JavaScript, which boosted user engagement by 30% and reduced bounce rates by 25%.",
        "Optimized website performance by refining asset management and implementing advanced SEO strategies, cutting page load times by 40% and increasing organic traffic by 20%",
        "Developed fully responsive website using HTML5, CSS3, Bootstrap, and JavaScript boosting user engagement by 30%",
        "Collaborated with backend team on PHP API integration for dynamic content delivery",
      ],
    },
  },


  // ========== PROJECT 8: Sign Language Recognition ==========
  {
    id: "sign-language-recognition",
    companyName: "Sign Language Recognition: Multi-Modal Deep Learning",
    type: "Professional",
    category: ["ML/AI", "Computer Vision", "Deep Learning"],
    shortDescription:
      "Multi-modal deep learning framework for ASL recognition achieving 95% accuracy and 40% faster inference using CNNs, TensorFlow, and OpenCV.",
    githubLink: "https://github.com/RohanPatil2/sign-language-recognition",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Computer Vision",
      "Deep Learning",
      "Convolutional Neural Networks (CNN)",
      "Jupyter Notebook",
    ],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/projects/sign-language/logo.png",
    pagesInfoArr: [
      {
        title: "Real-time ASL Recognition",
        description: "Live demo showing gesture detection and classification.",
        imgArr: [
          "/projects/sign-language/demo.png",
          "/projects/sign-language/architecture.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project involved the end-to-end design and deployment of a cutting-edge CNN-based American Sign Language (ASL) recognition model. The system integrates OpenCV for real-time video capture and gesture detection, feeding the processed frames into a deep learning pipeline built with TensorFlow and Keras.",
        "A key focus was model resilience and accuracy. This was achieved by orchestrating a large-scale data augmentation process on over 87,000 images (including rotation, scaling, and flipping) and optimizing the training workflow with rigorous hyperparameter tuning and dropout regularization.",
      ],
      bullets: [
        "Initiated end-to-end design and deployment of a cutting-edge CNN-based ASL recognition model, achieving 95% accuracy—with a +2.5% gain over traditional methods and 40% faster inference.",
        "Enhanced model resilience by orchestrating data augmentation on 87,000+ images (via rotation, scaling, and flipping).",
        "Optimized training workflows with rigorous hyperparameter tuning and dropout regularization in TensorFlow and Keras.",
        "Integrated OpenCV for real-time gesture detection, ensuring seamless, low-latency performance and superior user interaction.",
      ],
    },
  },

  // ========== PROJECT 9: Sales and Inventory Management ==========
  {
    id: "sales-inventory-management",
    companyName: "Sales and Inventory Management Web Application",
    type: "Professional",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Full-stack web solution for a mobile store with secure admin, real-time inventory tracking, and sales analytics. Reduced manual processing by 30%.",
    githubLink:
      "https://github.com/RohanPatil2/Sales-and-Inventory-Management-Web-Application",
    techStack: ["C#", "ASP.NET", "SQL Server", "Google Charts", "HTML5", "CSS"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-05-31"),
    companyLogoImg: "/projects/sales-inventory/logo.png",
    pagesInfoArr: [
      {
        title: "Admin Dashboard",
        description:
          "Secure admin panel for inventory and order processing.",
        imgArr: [
          "/projects/sales-inventory/dashboard.png",
          "/projects/sales-inventory/analytics.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Led the development of a dynamic full-stack web solution for mobile phone store operations. This system integrates a secure admin login, real-time inventory tracking, order processing, and interactive sales analytics.",
        "The backend was optimized using C#, ASP.NET, and SQL Server to streamline data management and ensure 99% uptime. The application delivers actionable insights through dynamic reporting and interactive dashboards powered by Google Charts, ultimately reducing manual processing time by 30% and boosting data accuracy by 25%.",
      ],
      bullets: [
        "Lead the development of a dynamic full-stack web solution for mobile phone store operations.",
        "Integrated secure admin login, real-time inventory tracking, order processing, and interactive sales analytics.",
        "Reduced manual processing time by 30% and boosted data accuracy by 25%.",
        "Optimized backend operations using C#, ASP.NET, and SQL Server to ensure 99% uptime.",
        "Delivered actionable insights through dynamic reporting and interactive dashboards with Google Charts.",
      ],
    },
  },

  // ========== PROJECT 10: Stock Price Prediction (BERT) ==========
  {
    id: "stock-prediction-bert",
    companyName: "Stock Price Prediction using BERT",
    type: "Professional",
    category: ["ML/AI", "NLP", "FinTech"],
    shortDescription:
      "Custom BERT model for stock sentiment analysis using real-time Twitter data, boosting prediction accuracy by 20%. Deployed GANs to enhance robustness.",
    githubLink: "https://github.com/RohanPatil2/Stock-Prediction-System-Application",
    techStack: [
      "Python",
      "BERT",
      "GANs",
      "NLP",
      "Transformer Models",
      "Streamlit",
      "Jupyter Notebook",
    ],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2024-01-31"),
    companyLogoImg: "/projects/stock-bert/logo.png",
    pagesInfoArr: [
      {
        title: "Sentiment Analysis Dashboard",
        description:
          "Real-time Twitter sentiment analysis and its correlation with stock price.",
        imgArr: [
          "/projects/stock-bert/dashboard.png",
          "/projects/stock-bert/sentiment.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project involved developing and fine-tuning a custom BERT model specifically optimized for stock market sentiment analysis. The model incorporated financial domain adaptations and leveraged real-time Twitter data to boost prediction accuracy by 20%.",
        "Advanced Generative Adversarial Networks (GANs) were designed and deployed to simulate a broad range of market scenarios, enhancing the model's robustness and forecasting precision by 15% during periods of market volatility.",
      ],
      bullets: [
        "Developed and fine-tuned a custom BERT model optimized for stock market sentiment analysis, leveraging real-time Twitter data to boost prediction accuracy by 20%.",
        "Designed and deployed advanced GANs to simulate market scenarios, enhancing robustness and forecasting precision by 15% during volatility.",
        "Collaborated with cross-functional teams to integrate state-of-the-art transformer architectures and tailor NLP pipelines for large-scale financial datasets.",
      ],
    },
  },

  // ========== PROJECT 11: Advanced Wine Quality Analysis ==========
  {
    id: "advanced-wine-quality",
    companyName: "Advanced Wine Quality Analysis",
    type: "Personal",
    category: ["ML/AI", "Data Analysis"],
    shortDescription:
      "Ensemble ML system (XGBoost, LightGBM, CatBoost) to predict wine quality, achieving 95% accuracy. Deployed with FastAPI and SHAP analysis.",
    githubLink: "https://github.com/RohanPatil2/Advanced-Wine-Quality-Analysis",
    techStack: [
      "Python",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "Neural Networks",
      "SHAP",
      "FastAPI",
      "Qiskit",
      "Jupyter Notebook",
    ],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-11-30"),
    companyLogoImg: "/projects/wine-quality/logo.png",
    pagesInfoArr: [
      {
        title: "SHAP Analysis",
        description: "Feature importance and explainability using SHAP.",
        imgArr: [
          "/projects/wine-quality/shap.png",
          "/projects/wine-quality/dashboard.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Engineered an ensemble ML system combining XGBoost, LightGBM, CatBoost, and Neural Networks to predict wine quality from 11 physicochemical features. This approach achieved 95% accuracy and reduced MAE to 0.39 on a dataset of 6,497 wines.",
        "The project emphasized explainable AI by implementing SHAP analysis to provide transparent feature importance insights, which drove a 10% uplift in model interpretability. A production-ready FastAPI endpoint was deployed for real-time predictions.",
      ],
      bullets: [
        "Engineered an ensemble ML system (XGBoost, LightGBM, CatBoost, Neural Networks) to predict wine quality, achieving 95% accuracy and reducing MAE to 0.39.",
        "Implemented SHAP analysis to provide transparent feature importance insights, driving a 10% uplift in model interpretability.",
        "Devised and developed 19 interactive visualizations to communicate data patterns and model performance.",
        "Deployed a production-ready FastAPI endpoint for real-time predictions.",
        "Piloted an experimental Quantum Leap module using Qiskit with a 4-qubit SamplerQNN.",
      ],
    },
  },

  // ========== PROJECT 12: Advanced Mobile Price Prediction ==========
  {
    id: "advanced-mobile-price",
    companyName: "Advanced Mobile Price Prediction",
    type: "Professional",
    category: ["ML/AI", "Data Analysis"],
    shortDescription:
      "End-to-end ML pipeline using ensemble models (TabNet, XGBoost) to forecast mobile prices with <5% MAPE. Integrated real-time FastAPI endpoint.",
    githubLink: "https://github.com/RohanPatil2/Advanced-Mobile-Price-Prediction",
    techStack: [
      "Python",
      "TabNet",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "FastAPI",
      "Jupyter Notebook",
    ],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-10-31"),
    companyLogoImg: "/projects/mobile-price/logo.png",
    pagesInfoArr: [
      {
        title: "Price Prediction Dashboard",
        description: "Interactive dashboard showing pricing trends.",
        imgArr: [
          "/projects/mobile-price/dashboard.png",
          "/projects/mobile-price/api.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Built an end-to-end ML pipeline leveraging ensemble models (TabNet, XGBoost, LightGBM, CatBoost) to forecast mobile device prices with less than 5% MAPE, processing over 50 device specifications.",
        "Prediction accuracy was enhanced by 15% through rigorous feature engineering and advanced data preprocessing. The system also features interactive visual dashboards to showcase pricing trends and market dynamics, and a real-time FastAPI endpoint, cutting latency by 30%.",
      ],
      bullets: [
        "Built an end-to-end ML pipeline leveraging ensemble models (TabNet, XGBoost, LightGBM, CatBoost) to forecast mobile device prices with <5% MAPE.",
        "Enhanced prediction accuracy by 15% through rigorous feature engineering and advanced data preprocessing.",
        "Developed interactive visual dashboards to showcase pricing trends and market dynamics.",
        "Integrated a real-time FastAPI endpoint, cutting latency by 30% and delivering actionable mobile insights.",
      ],
    },
  },

  // ========== PROJECT 13: IoT Health Tracking ==========
  {
    id: "iot-health-tracking",
    companyName: "IoT Health Tracking System",
    type: "Personal",
    category: ["Web Dev", "IoT", "Frontend"],
    shortDescription:
      "A web application for tracking and visualizing real-time health data from IoT devices, built with HTML, CSS, and JavaScript.",
    githubLink: "https://github.com/RohanPatil2/Iot-Health-Tracking",
    techStack: ["HTML5", "CSS", "JavaScript", "IoT"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-18"),
    companyLogoImg: "/projects/iot-health/logo.png",
    pagesInfoArr: [
      {
        title: "Health Dashboard",
        description: "Frontend dashboard for visualizing sensor data.",
        imgArr: ["/projects/iot-health/dashboard.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a web interface using HTML, CSS, and JavaScript to display real-time data from health-tracking IoT sensors. The project focused on creating a responsive and intuitive dashboard for users to monitor health metrics.",
      ],
      bullets: [
        "Visualized real-time sensor data.",
        "Built with HTML, CSS, and JavaScript.",
        "Focused on responsive web design for device compatibility.",
      ],
    },
  },

  // ========== PROJECT 14: Dental Website ==========
  {
    id: "dental-web",
    companyName: "Smiles of Waterbury Dental Website",
    type: "Personal",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "A responsive dental website for Smiles of Waterbury, showcasing services and an appointment booking process.",
    githubLink: "https://github.com/RohanPatil2/dental_web",
    techStack: ["HTML5", "CSS", "JavaScript"],
    startDate: new Date("2023-02-01"),
    endDate: new Date("2023-02-16"),
    companyLogoImg: "/projects/dental-web/logo.png",
    pagesInfoArr: [
      {
        title: "Homepage",
        description: "Landing page for the dental practice.",
        imgArr: ["/projects/dental-web/home.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A responsive dental website for Smiles of Waterbury, showcasing various dental services, contact information, and an easy appointment booking process. This project focused on clean, professional frontend design.",
      ],
      bullets: [
        "Developed a responsive frontend design using HTML and CSS.",
        "Clearly showcased dental services and contact information.",
        "Implemented UI for an appointment booking process.",
      ],
    },
  },

  // ========== PROJECT 15: Credit Card Defaults ==========
  {
    id: "credit-card-defaults",
    companyName: "Predicting Credit Card Defaults with Machine Learning",
    type: "Research",
    category: ["ML/AI", "FinTech", "Data Analysis"],
    shortDescription:
      "Implemented a credit risk prediction model leveraging advanced ML techniques to deliver nuanced assessments with remarkable accuracy.",
    githubLink:
      "https://github.com/RohanPatil2/Predicting-Credit-Card-Defaults-with-Machine-Learning",
    techStack: ["Python", "Jupyter Notebook", "Machine Learning", "Data Analysis"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-11-22"),
    companyLogoImg: "/projects/credit-default/logo.png",
    pagesInfoArr: [
      {
        title: "Model Analysis",
        description:
          "Analysis of feature importance and model performance.",
        imgArr: ["/projects/credit-default/analysis.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This research project, also published in IJRASET, involved implementing a credit risk prediction model with a keen eye for precision. It leveraged advanced machine learning techniques to provide accurate assessments.",
        "By seamlessly integrating customer demographics and spending patterns, the model delivered nuanced assessments with remarkable accuracy, demonstrating a practical application of ML in FinTech.",
      ],
      bullets: [
        "Leveraged advanced ML techniques for credit risk prediction.",
        "Integrated customer demographics and spending patterns.",
        "Delivered nuanced assessments with high accuracy.",
        "Corresponds to a publication in IJRASET, Nov 2023.",
      ],
    },
  },

  // ========== PROJECT 16: Amazon Food Reviews ==========
  {
    id: "amazon-food-reviews",
    companyName: "Amazon Fine Food Review Analysis",
    type: "Research",
    category: ["ML/AI", "NLP", "Data Analysis"],
    shortDescription:
      "Implemented a machine learning model to dissect Amazon Fine Food reviews, exploring product sentiment, reviewer profiles, and historical trends.",
    githubLink:
      "https://github.com/RohanPatil2/ResearchPaper_Amazon-Fine-Food-Review-Analysis",
    techStack: [
      "Python",
      "Jupyter Notebook",
      "Machine Learning",
      "NLP",
      "Sentiment Analysis",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-10-01"),
    companyLogoImg: "/projects/amazon-reviews/logo.png",
    pagesInfoArr: [
      {
        title: "Sentiment Analysis",
        description: "Analysis of review sentiment and text features.",
        imgArr: ["/projects/amazon-reviews/sentiment.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project, which led to a publication, involved implementing a machine learning model to dissect Amazon Fine Food reviews. The goal was to deliver nuanced insights and elevate analytical accuracy.",
        "The model explored an array of features such as product sentiment, reviewer profiles, and historical trends to understand drivers of customer satisfaction and product perception.",
      ],
      bullets: [
        "Analyzed product sentiment from text reviews.",
        "Modeled reviewer profiles to understand behavior.",
        "Explored historical trends in food reviews.",
        "Corresponds to a publication in IJRASET, Oct 2023.",
      ],
    },
  },

  // ========== PROJECT 17: Parkinson's Disease Analysis ==========
  {
    id: "parkinsons-disease-analysis",
    companyName: "Parkinson's Disease Analysis",
    type: "Personal",
    category: ["ML/AI", "Data Analysis"],
    shortDescription:
      "A machine learning project to analyze and predict Parkinson's disease from relevant health data using classification models.",
    githubLink: "https://github.com/RohanPatil2/Parkinsons-Disease-Analysis",
    techStack: ["Python", "Jupyter Notebook", "Machine Learning", "Scikit-learn"],
    startDate: new Date("2023-02-01"),
    endDate: new Date("2023-02-14"),
    companyLogoImg: "/projects/parkinsons/logo.png",
    pagesInfoArr: [
      {
        title: "Feature Analysis",
        description:
          "Analysis of medical features contributing to prediction.",
        imgArr: ["/projects/parkinsons/analysis.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A machine learning project to analyze and predict Parkinson's disease from relevant health data. This project involved data preprocessing, feature selection, and the application of various classification models to identify the presence of the disease.",
      ],
      bullets: [
        "Performed data analysis of health metrics related to Parkinson's.",
        "Applied ML classification models (e.g., SVM, Random Forest).",
        "Evaluated model performance on accuracy and recall.",
      ],
    },
  },

  // ========== PROJECT 18: Stock Market (Heuristic) ==========
  {
    id: "stock-market-heuristic",
    companyName: "Stock Market Analysis using Heuristic Approach",
    type: "Research",
    category: ["ML/AI", "FinTech", "Data Analysis"],
    shortDescription:
      "Introduced a heuristic approach for stock analysis, integrating historical trends, market sentiment, and economic indicators.",
    githubLink:
      "https://github.com/RohanPatil2/Stock-Market-Analysis-using-Heuristic-Approach",
    techStack: ["Python", "Jupyter Notebook", "Machine Learning", "Heuristics"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-11-22"),
    companyLogoImg: "/projects/stock-heuristic/logo.png",
    pagesInfoArr: [
      {
        title: "Heuristic Model",
        description:
          "Visualization of the heuristic model's predictive factors.",
        imgArr: ["/projects/stock-heuristic/model.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This research project introduced a groundbreaking heuristic approach for stock market analysis, which was also published in IJRASET. It seamlessly integrated diverse factors like historical trends, market sentiment, and economic indicators.",
        "A predictive model was skillfully crafted and refined through machine learning, delivering precise insights into stock movements.",
      ],
      bullets: [
        "Integrated historical trends, market sentiment, and economic indicators.",
        "Crafted a predictive model using machine learning.",
        "Published in IJRASET, Nov 2023.",
      ],
    },
  },
  
];

// Featured projects for homepage (top 3 - most impactful)
export const featuredProjects = [
  Projects.find((p) => p.id === "fluxforge-mlops")!,
  Projects.find((p) => p.id === "agentic-rag-medical")!,
  Projects.find((p) => p.id === "autonomous-auv-rl")!,
];

// Export by category for filtering (NOW INCLUDES ALL 19 PROJECTS)
export const projectsByCategory = {
  "ML/AI": Projects.filter((p) => p.category.includes("ML/AI")),
  Research: Projects.filter((p) => p.category.includes("Research")),
  "Full Stack": Projects.filter((p) => p.category.includes("Full Stack")),
  NLP: Projects.filter((p) => p.category.includes("NLP")),
  "Computer Vision": Projects.filter((p) =>
    p.category.includes("Computer Vision")
  ),
  Robotics: Projects.filter((p) => p.category.includes("Robotics")),
  "Web Dev": Projects.filter((p) => p.category.includes("Web Dev")),
  Frontend: Projects.filter((p) => p.category.includes("Frontend")),
  Backend: Projects.filter((p) => p.category.includes("Backend")),
  FinTech: Projects.filter((p) => p.category.includes("FinTech")),
  "Data Analysis": Projects.filter((p) => p.category.includes("Data Analysis")),
  IoT: Projects.filter((p) => p.category.includes("IoT")),
  "Systems Programming": Projects.filter((p) =>
    p.category.includes("Systems Programming")
  ),
};