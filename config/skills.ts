import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

// Rohan Patil's Skills Configuration
// Based on: Resume, LinkedIn, Projects, and Experience
export const skillsUnsorted: skillsInterface[] = [
  // ==================== CORE ML/AI SKILLS (Expert Level) ====================
  {
    name: "Python",
    description:
      "Primary language for ML research, data pipelines, and backend development. Used extensively in robotics RL controllers and LLM fine-tuning.",
    rating: 5,
    icon: Icons.javascript, // Note: Add python icon to Icons
  },
  {
    name: "PyTorch",
    description:
      "Deep learning framework for research and production. Used for RL controllers (SAC/TD3), LLM fine-tuning with LoRA, and NeRF optimization.",
    rating: 5,
    icon: Icons.react, // Note: Add pytorch icon
  },
  {
    name: "Machine Learning",
    description:
      "Advanced ML techniques including supervised/unsupervised learning, reinforcement learning, and neural architecture design for real-world applications.",
    rating: 5,
    icon: Icons.star,
  },
  {
    name: "Deep Learning",
    description:
      "Expertise in CNNs, Transformers, GANs, and diffusion models. Applied to 3D reconstruction, NLP, and computer vision tasks.",
    rating: 5,
    icon: Icons.star,
  },
  {
    name: "TensorFlow",
    description:
      "ML framework for model development and deployment. Used alongside PyTorch for production-grade ML systems.",
    rating: 4,
    icon: Icons.react, // Note: Add tensorflow icon
  },
  
  // ==================== NLP & LLM EXPERTISE ====================
  {
    name: "Large Language Models (LLM)",
    description:
      "Fine-tuning and deploying LLMs (LLaMA-3.1-8B) with LoRA for domain-specific tasks. Experience with bias mitigation and model alignment.",
    rating: 5,
    icon: Icons.star,
  },
  {
    name: "LangChain",
    description:
      "Building production-ready LLM applications with RAG pipelines, vector databases, and agentic workflows for real-time assistance.",
    rating: 4,
    icon: Icons.link,
  },
  {
    name: "Transformer Models",
    description:
      "Deep understanding of attention mechanisms, BERT, GPT architectures. Applied to bias detection and medical domain fine-tuning.",
    rating: 5,
    icon: Icons.star,
  },
  {
    name: "RAG",
    description:
      "Retrieval-Augmented Generation for medical assistance systems. Integrated ChromaDB for 40% faster query latency with 99% uptime.",
    rating: 4,
    icon: Icons.star,
  },
  {
    name: "Prompt Engineering",
    description:
      "Designing effective prompts for LLMs, including self-debiasing techniques and counterfactual data augmentation strategies.",
    rating: 4,
    icon: Icons.star,
  },

  // ==================== MLOPS & DEPLOYMENT ====================
  {
    name: "Docker",
    description:
      "Containerizing ML models and applications for consistent deployment across environments. Used in FluxForge MLOps pipeline.",
    rating: 5,
    icon: Icons.star, // Note: Add docker icon
  },
  {
    name: "MLflow",
    description:
      "Experiment tracking, model registry, and versioning for reproducible ML workflows. Central to production pipeline management.",
    rating: 4,
    icon: Icons.star,
  },
  {
    name: "Airflow",
    description:
      "Orchestrating ML pipelines for scheduled retraining and continuous model delivery. Handles drift detection and automated workflows.",
    rating: 4,
    icon: Icons.star,
  },
  {
    name: "Kubernetes",
    description:
      "Container orchestration for scalable ML model serving and distributed training workloads.",
    rating: 3,
    icon: Icons.star,
  },
  {
    name: "DVC",
    description:
      "Data versioning and pipeline management for reproducible ML experiments. Tracks datasets, models, and experiment configurations.",
    rating: 4,
    icon: Icons.gitBranch,
  },
  {
    name: "FastAPI",
    description:
      "Building high-performance REST APIs for ML model serving. Used for RAG medical assistant with 40% reduced latency.",
    rating: 5,
    icon: Icons.star,
  },
  {
    name: "CI/CD",
    description:
      "Automated testing and deployment pipelines using GitHub Actions and CML for continuous model delivery.",
    rating: 4,
    icon: Icons.star,
  },

  // ==================== CLOUD PLATFORMS ====================
  {
    name: "AWS",
    description:
      "Cloud infrastructure for ML workloads including EC2, S3, Lambda, and SageMaker. Deployed scalable production systems.",
    rating: 4,
    icon: Icons.amazonaws,
  },
  {
    name: "Google Cloud",
    description:
      "Experience with BigQuery, Vertex AI, and Cloud Functions. Multiple GCP certifications for ML and data engineering.",
    rating: 3,
    icon: Icons.star, // Note: Add GCP icon
  },
  {
    name: "Azure",
    description:
      "Microsoft cloud platform for ML services and deployment. Familiar with Azure ML and cognitive services.",
    rating: 3,
    icon: Icons.star, // Note: Add Azure icon
  },

  // ==================== DATABASES & DATA ENGINEERING ====================
  {
    name: "PostgreSQL",
    description:
      "Relational database for structured data storage and complex queries in production ML systems.",
    rating: 4,
    icon: Icons.mysql, // Note: Add postgresql icon
  },
  {
    name: "MongoDB",
    description:
      "NoSQL database for flexible schema design and document storage in web applications.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "ChromaDB",
    description:
      "Vector database for semantic search and RAG applications. Used in medical assistant for efficient retrieval.",
    rating: 4,
    icon: Icons.star,
  },
  {
    name: "Redis",
    description:
      "In-memory caching for fast data access and real-time features in production applications.",
    rating: 3,
    icon: Icons.star,
  },

  // ==================== ROBOTICS & RL ====================
  {
    name: "Reinforcement Learning",
    description:
      "Designing RL controllers (SAC/TD3) for 6-DOF AUVs with sim-to-real transfer. Active research in marine robotics.",
    rating: 5,
    icon: Icons.star,
  },
  {
    name: "Robot Operating System (ROS)",
    description:
      "ROS2 for robotics research, building parallel simulators with Gazebo for autonomous underwater vehicles.",
    rating: 4,
    icon: Icons.star,
  },

  // ==================== COMPUTER VISION ====================
  {
    name: "Computer Vision",
    description:
      "Advanced CV techniques including NeRF, semantic segmentation, and 3D reconstruction. Reduced computational overhead by 30%.",
    rating: 4,
    icon: Icons.star,
  },
  {
    name: "3D Image Reconstruction",
    description:
      "Neural Radiance Fields (NeRF) and diffusion models for real-time 3D reconstruction on low-compute devices.",
    rating: 4,
    icon: Icons.star,
  },
  {
    name: "Convolutional Neural Networks (CNN)",
    description:
      "Deep understanding of CNN architectures for image classification, object detection, and feature extraction.",
    rating: 4,
    icon: Icons.star,
  },

  // ==================== WEB DEVELOPMENT (Full Stack) ====================
  {
    name: "React",
    description:
      "Building interactive user interfaces for ML dashboards and web applications with modern React patterns.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Server-side rendered React applications for performant web apps with SEO optimization.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "Node.js",
    description:
      "Backend JavaScript runtime for building scalable APIs and server-side applications.",
    rating: 4,
    icon: Icons.nodejs,
  },
  {
    name: "TypeScript",
    description:
      "Type-safe JavaScript for building robust frontend and backend applications with better code quality.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "JavaScript",
    description:
      "Core web programming language for interactive frontend experiences and full-stack development.",
    rating: 4,
    icon: Icons.javascript,
  },
  {
    name: "HTML5",
    description:
      "Modern semantic markup for structuring web content and building accessible interfaces.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS",
    description:
      "Styling web applications with modern CSS including Flexbox, Grid, and responsive design patterns.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapid UI development with consistent design systems.",
    rating: 4,
    icon: Icons.tailwindcss,
  },
  {
    name: "Bootstrap",
    description:
      "Responsive framework for quick prototyping and mobile-first web design.",
    rating: 3,
    icon: Icons.bootstrap,
  },

  // ==================== BACKEND FRAMEWORKS ====================
  {
    name: "Flask",
    description:
      "Lightweight Python web framework for building REST APIs and ML model serving endpoints.",
    rating: 4,
    icon: Icons.star,
  },
  {
    name: "Django",
    description:
      "Full-featured Python web framework for rapid development of secure and maintainable applications.",
    rating: 3,
    icon: Icons.star,
  },
  {
    name: "Express.js",
    description:
      "Minimalist Node.js framework for building fast and scalable web APIs.",
    rating: 4,
    icon: Icons.express,
  },

  // ==================== ADDITIONAL PROGRAMMING LANGUAGES ====================
  {
    name: "Java",
    description:
      "Object-oriented programming for enterprise applications and algorithm implementation.",
    rating: 3,
    icon: Icons.star,
  },
  {
    name: "C++",
    description:
      "Systems programming and performance-critical applications. Used for competitive coding.",
    rating: 4,
    icon: Icons.star,
  },
  {
    name: "SQL",
    description:
      "Database query language for data manipulation, analysis, and complex joins across relational databases.",
    rating: 4,
    icon: Icons.star,
  },

  // ==================== DATA SCIENCE & ANALYTICS ====================
  {
    name: "Data Visualization",
    description:
      "Creating insightful visualizations using Matplotlib, Seaborn, and Plotly for data analysis and reporting.",
    rating: 4,
    icon: Icons.star,
  },
  {
    name: "Real-Time Data Processing",
    description:
      "Building streaming data pipelines for live health data with 99% uptime and 40% reduced query latency.",
    rating: 4,
    icon: Icons.star,
  },
  {
    name: "Predictive Analytics",
    description:
      "Statistical modeling and ML techniques for forecasting and pattern recognition in time-series data.",
    rating: 4,
    icon: Icons.star,
  },

  // ==================== TESTING & QUALITY ASSURANCE ====================
  {
    name: "Game Testing",
    description:
      "Systematic bug documentation and quality assurance using JIRA and Trello. Enhanced game stability by 15%.",
    rating: 3,
    icon: Icons.star,
  },

  // ==================== VERSION CONTROL & COLLABORATION ====================
  {
    name: "Git",
    description:
      "Version control for collaborative development, branching strategies, and code review workflows.",
    rating: 5,
    icon: Icons.gitBranch,
  },
  {
    name: "GitHub",
    description:
      "Code hosting, collaboration, and CI/CD integration for open-source and team projects.",
    rating: 5,
    icon: Icons.gitHub,
  },
  {
    name: "GitHub Actions",
    description:
      "Automating ML workflows, testing, and deployment pipelines for continuous integration.",
    rating: 4,
    icon: Icons.gitHub,
  },

  // ==================== SPECIALIZED ML TECHNIQUES ====================
  {
    name: "LoRA",
    description:
      "Low-Rank Adaptation for efficient LLM fine-tuning. Applied to LLaMA-3.1-8B for domain-specific optimization.",
    rating: 4,
    icon: Icons.star,
  },
  {
    name: "Neural Network Design",
    description:
      "Architecting custom neural networks for specific tasks including Vision Transformers and memory-augmented models.",
    rating: 4,
    icon: Icons.star,
  },
  {
    name: "Model Optimization (Pruning, Quantization)",
    description:
      "Reducing model size and inference time through pruning, quantization, and knowledge distillation techniques.",
    rating: 4,
    icon: Icons.star,
  },

  // ==================== SOFT SKILLS ====================
  {
    name: "Communication",
    description:
      "Strong written and verbal communication. Teaching assistant experience and Editor-in-Chief of 210-page magazine.",
    rating: 5,
    icon: Icons.star,
  },
  {
    name: "Agile Development",
    description:
      "Iterative development methodology for collaborative team projects and research experiments.",
    rating: 4,
    icon: Icons.star,
  },

  // ==================== SEO & WEB OPTIMIZATION ====================
  {
    name: "Search Engine Optimization (SEO)",
    description:
      "Optimizing websites for search engines. Increased organic traffic by 20% through advanced SEO strategies.",
    rating: 3,
    icon: Icons.star,
  },
  {
    name: "Responsive Web Design",
    description:
      "Creating mobile-first, accessible web experiences that work across all device sizes and browsers.",
    rating: 4,
    icon: Icons.star,
  },
];

// Sort skills by rating (highest first)
export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

// Featured skills for homepage (top 6)
export const featuredSkills = [
  skillsUnsorted.find(s => s.name === "Python")!,
  skillsUnsorted.find(s => s.name === "PyTorch")!,
  skillsUnsorted.find(s => s.name === "Machine Learning")!,
  skillsUnsorted.find(s => s.name === "Large Language Models (LLM)")!,
  skillsUnsorted.find(s => s.name === "Docker")!,
  skillsUnsorted.find(s => s.name === "AWS")!,
];

// Skills by category for better organization
export const skillsByCategory = {
  "Machine Learning & AI": [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Machine Learning",
    "Deep Learning",
    "Reinforcement Learning",
    "Computer Vision",
    "Neural Network Design",
  ],
  "NLP & LLMs": [
    "Large Language Models (LLM)",
    "Transformer Models",
    "LangChain",
    "RAG",
    "Prompt Engineering",
    "LoRA",
  ],
  "MLOps & Deployment": [
    "Docker",
    "Kubernetes",
    "MLflow",
    "Airflow",
    "DVC",
    "FastAPI",
    "CI/CD",
    "Model Optimization (Pruning, Quantization)",
  ],
  "Cloud Platforms": [
    "AWS",
    "Google Cloud",
    "Azure",
  ],
  "Databases": [
    "PostgreSQL",
    "MongoDB",
    "ChromaDB",
    "Redis",
    "SQL",
  ],
  "Web Development": [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS",
    "Tailwind CSS",
    "Flask",
    "Django",
    "Express.js",
  ],
  "Data Science": [
    "Data Visualization",
    "Real-Time Data Processing",
    "Predictive Analytics",
  ],
  "Robotics": [
    "Robot Operating System (ROS)",
    "Reinforcement Learning",
  ],
  "Tools & Others": [
    "Git",
    "GitHub",
    "GitHub Actions",
    "Communication",
    "Agile Development",
  ],
};
