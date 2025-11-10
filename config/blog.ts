export interface BlogPostInterface {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: Date;
  readTime: number;
  tags: string[];
  category: "MLOps" | "LLM" | "Reinforcement Learning" | "Computer Vision" | "Tutorial" | "Best Practices";
  imageUrl?: string;
  link?: string;
  views?: number;
}

export const blogPosts: BlogPostInterface[] = [
  {
    id: "production-mlops-pipeline",
    title: "Building Production-Grade MLOps Pipelines: A Complete Guide",
    excerpt: "Learn how to build end-to-end MLOps pipelines with DVC, MLflow, and Airflow. Covers data versioning, experiment tracking, and automated retraining.",
    content: "Full article content here...",
    author: "Rohan Upendra Patil",
    publishDate: new Date("2024-09-15"),
    readTime: 12,
    tags: ["MLOps", "MLflow", "DVC", "Airflow", "Docker", "CI/CD"],
    category: "MLOps",
    imageUrl: "/blog/mlops-pipeline.png",
    link: "https://rohanpatil.dev/blog/production-mlops-pipeline",
    views: 1500,
  },
  {
    id: "llm-fine-tuning-lora",
    title: "Fine-Tuning LLaMA 3.1 with LoRA: Practical Guide",
    excerpt: "Hands-on tutorial on fine-tuning LLaMA 3.1-8B using LoRA. Parameter-efficient fine-tuning achieving 40% accuracy improvements.",
    content: "Full article content here...",
    author: "Rohan Upendra Patil",
    publishDate: new Date("2025-02-10"),
    readTime: 15,
    tags: ["LLM", "LoRA", "LLaMA", "Fine-tuning", "PyTorch"],
    category: "LLM",
    imageUrl: "/blog/llm-lora.png",
    link: "https://rohanpatil.dev/blog/llm-fine-tuning-lora",
    views: 2300,
  },
  {
    id: "rag-pipeline-chromadb",
    title: "Building RAG Pipelines with ChromaDB and LangChain",
    excerpt: "Step-by-step guide to implementing RAG systems. Includes optimization tips for reducing query latency by 40%.",
    content: "Full article content here...",
    author: "Rohan Upendra Patil",
    publishDate: new Date("2025-03-05"),
    readTime: 10,
    tags: ["RAG", "ChromaDB", "LangChain", "Vector Database", "LLM"],
    category: "LLM",
    imageUrl: "/blog/rag-chromadb.png",
    link: "https://rohanpatil.dev/blog/rag-pipeline-chromadb",
    views: 1800,
  },
  {
    id: "reinforcement-learning-auv",
    title: "Deep Reinforcement Learning for Autonomous Underwater Vehicles",
    excerpt: "How SAC and TD3 algorithms enable autonomous AUV control. Domain randomization for sim-to-real transfer.",
    content: "Full article content here...",
    author: "Rohan Upendra Patil",
    publishDate: new Date("2024-11-20"),
    readTime: 14,
    tags: ["Reinforcement Learning", "Robotics", "SAC", "TD3", "ROS2"],
    category: "Reinforcement Learning",
    imageUrl: "/blog/rl-auv.png",
    link: "https://rohanpatil.dev/blog/reinforcement-learning-auv",
    views: 950,
  },
  {
    id: "nerf-mobile-deployment",
    title: "Deploying Neural Radiance Fields on Mobile Devices",
    excerpt: "Optimizing NeRF models for mobile. Model compression reducing computational overhead by 30%.",
    content: "Full article content here...",
    author: "Rohan Upendra Patil",
    publishDate: new Date("2024-10-12"),
    readTime: 11,
    tags: ["NeRF", "Computer Vision", "Mobile", "Optimization"],
    category: "Computer Vision",
    imageUrl: "/blog/nerf-mobile.png",
    link: "https://rohanpatil.dev/blog/nerf-mobile-deployment",
    views: 720,
  },
  {
    id: "mlflow-experiment-tracking",
    title: "MLflow Best Practices: Experiment Tracking at Scale",
    excerpt: "Master MLflow for production ML workflows. Best practices battle-tested in production systems.",
    content: "Full article content here...",
    author: "Rohan Upendra Patil",
    publishDate: new Date("2024-08-25"),
    readTime: 9,
    tags: ["MLflow", "MLOps", "Experiment Tracking"],
    category: "MLOps",
    imageUrl: "/blog/mlflow-practices.png",
    link: "https://rohanpatil.dev/blog/mlflow-experiment-tracking",
    views: 1200,
  },
  {
    id: "llm-bias-detection",
    title: "Detecting and Mitigating Bias in Large Language Models",
    excerpt: "Comprehensive guide to bias detection in LLMs. Evaluation benchmarks and mitigation techniques.",
    content: "Full article content here...",
    author: "Rohan Upendra Patil",
    publishDate: new Date("2025-01-18"),
    readTime: 13,
    tags: ["LLM", "Bias", "Fairness", "Responsible AI"],
    category: "LLM",
    imageUrl: "/blog/llm-bias.png",
    link: "https://rohanpatil.dev/blog/llm-bias-detection",
    views: 1650,
  },
  {
    id: "docker-ml-deployment",
    title: "Containerizing ML Models with Docker: Production Guide",
    excerpt: "Containerize ML models using Docker for consistent deployments. Multi-stage builds and CI/CD integration.",
    content: "Full article content here...",
    author: "Rohan Upendra Patil",
    publishDate: new Date("2024-07-30"),
    readTime: 10,
    tags: ["Docker", "ML Deployment", "DevOps", "CI/CD"],
    category: "MLOps",
    imageUrl: "/blog/docker-ml.png",
    link: "https://rohanpatil.dev/blog/docker-ml-deployment",
    views: 1350,
  },
];

export const featuredBlogPosts = [
  blogPosts.find((p) => p.id === "production-mlops-pipeline")!,
  blogPosts.find((p) => p.id === "llm-fine-tuning-lora")!,
  blogPosts.find((p) => p.id === "rag-pipeline-chromadb")!,
];
