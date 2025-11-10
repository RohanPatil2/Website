export interface PublicationInterface {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "Patent" | "Conference" | "Journal" | "Preprint" | "Workshop";
  abstract: string;
  link?: string;
  pdfLink?: string;
  citations?: number;
  imageUrl?: string;
  tags: string[];
}

export const publications: PublicationInterface[] = [
  {
    id: "patent-power-quality",
    title: "Machine Learning-Based Power Quality Enhancement System",
    authors: ["Rohan Upendra Patil", "Co-inventors"],
    venue: "Office Journal of the Patent Office, India",
    year: 2023,
    type: "Patent",
    abstract:
      "This patent presents a novel ML-based approach to power quality monitoring in electrical grids. Employs advanced algorithms to detect and predict power quality issues including voltage sags, swells, harmonics, and transients. Key innovation: predictive analytics forecasting problems 30-60 minutes in advance. Achieved 95% accuracy in anomaly detection and reduced equipment damage by 40%. Patent No: 202321064729A, granted October 27, 2023.",
    link: "https://ipindiaonline.gov.in/",
    imageUrl: "/publications/patent-power-quality.png",
    tags: ["Machine Learning", "Smart Grid", "Power Systems", "Predictive Analytics"],
  },
  {
    id: "llm-bias-mitigation-paper",
    title:
      "Mitigating Bias in Large Language Models through Counterfactual Data Augmentation",
    authors: ["Rohan Upendra Patil", "Prof. Rakin (Advisor)"],
    venue: "In Preparation for NeurIPS 2025",
    year: 2025,
    type: "Conference",
    abstract:
      "Addresses bias in LLMs through novel debiasing techniques without complete retraining. Employs counterfactual data augmentation, projection-based debiasing, and self-debiasing prompts. Evaluation across multiple benchmarks (WEAT, StereoSet, WinoBias, HolisticBias, RealToxicityPrompts) shows 35% bias reduction while maintaining 95%+ task accuracy. Contributes to responsible AI with applications in commercial NLP and content moderation.",
    imageUrl: "/publications/llm-bias-paper.png",
    tags: ["LLM", "Bias Mitigation", "Fairness", "NLP", "Responsible AI"],
  },
  {
    id: "auv-rl-transfer",
    title:
      "Domain Randomization for Sim-to-Real Transfer in Autonomous Underwater Vehicle Control",
    authors: ["Rohan Upendra Patil", "Prof. Monika Roznere (Advisor)"],
    venue: "In Preparation for ICRA 2026",
    year: 2025,
    type: "Conference",
    abstract:
      "Novel domain randomization techniques for robust sim-to-real transfer of RL policies in AUVs. Developed SAC and TD3 controllers for 6-DOF thruster-driven AUVs achieving zero-shot sim-to-real transfer. Reduces reality gap by 40% through systematic variation of hydrodynamic parameters, thruster characteristics, and environmental disturbances. High-fidelity parallel simulator with ROS2 and Gazebo accelerates learning by 10x. Field experiments validate stable trajectory tracking under real ocean disturbances.",
    imageUrl: "/publications/auv-rl-paper.png",
    tags: ["Robotics", "Reinforcement Learning", "Sim-to-Real", "AUV", "Marine Robotics"],
  },
  {
    id: "neurallift-360-paper",
    title:
      "NeuralLift-360: Efficient 3D Reconstruction with Optimized Neural Radiance Fields",
    authors: ["Rohan Upendra Patil", "Team Contributors"],
    venue: "CVPR 2025 Workshop on Neural Rendering",
    year: 2024,
    type: "Workshop",
    abstract:
      "Optimized NeRF architecture for efficient 3D reconstruction on resource-constrained devices. Through novel training techniques, model compression, and integration of Vision Transformers and diffusion models, achieves 30% reduction in computational overhead and 25% improvement in quality. Enables real-time 3D rendering on mobile devices and edge platforms. Efficient attention mechanisms and pruning reduce memory footprint by 40% while maintaining high visual fidelity.",
    imageUrl: "/publications/neurallift-paper.png",
    tags: ["Computer Vision", "NeRF", "3D Reconstruction", "Deep Learning"],
  },
  // --- ADDED PUBLICATIONS START HERE ---
  {
    id: "stock-heuristic-analysis",
    title: "Enhancing Stock Market Predictions with Heuristic Analysis",
    authors: ["Rohan Upendra Patil", "Co-authors"],
    venue: "International Journal for Research in Applied Science and Engineering Technology",
    year: 2023,
    type: "Journal",
    abstract:
      "Introduced a groundbreaking heuristic approach for stock market analysis, seamlessly integrating diverse factors like historical trends, market sentiment, and economic indicators. Skillfully crafted and refined a predictive model through machine learning, delivering precise insights into stock movements.",
    // link: "URL_TO_PUBLICATION", // Optional: Add link if available
    tags: ["Machine Learning", "Stock Market", "Predictive Modeling", "Heuristics"],
  },
  {
    id: "credit-card-default",
    title: "Predicting Credit Card Defaults with Machine Learning",
    authors: ["Rohan Upendra Patil", "Co-authors"],
    venue: "International Journal for Research in Applied Science and Engineering Technology",
    year: 2023,
    type: "Journal",
    abstract:
      "Implemented a credit risk prediction model with a keen eye for precision, leveraging advanced machine learning techniques. By seamlessly integrating customer demographics and spending patterns, the model delivered nuanced assessments with remarkable accuracy.",
    // link: "URL_TO_PUBLICATION", // Optional: Add link if available
    tags: ["Machine Learning", "FinTech", "Credit Risk", "Data Science"],
  },
  {
    id: "amazon-food-reviews",
    title: "Unveiling Insights: Analyzing Amazon Fine Food Reviews with Machine Learning",
    authors: ["Rohan Upendra Patil", "Co-authors"],
    venue: "International Journal for Research in Applied Science and Engineering Technology",
    year: 2023,
    type: "Journal",
    abstract:
      "Implemented a machine learning model to dissect Amazon Fine Food reviews. Explored an array of features such as product sentiment, reviewer profiles, and historical trends to deliver nuanced insights, elevating overall analytical accuracy.",
    // link: "URL_TO_PUBLICATION", // Optional: Add link if available
    tags: ["Machine Learning", "NLP", "Sentiment Analysis", "Data Analysis"],
  },
  {
    id: "bert-stock-prediction",
    title: "Leveraging BERT for Enhanced Stock Market Prediction: A Comprehensive Review",
    authors: ["Rohan Upendra Patil", "Co-authors"],
    venue: "International Journal of Novel Research and Development",
    year: 2023,
    type: "Journal",
    abstract:
      "A comprehensive review of BERT (Bidirectional Encoder Representations from Transformers) models applied to stock market prediction. This paper analyzes existing literature, methodologies, and performance metrics for leveraging advanced NLP techniques in financial forecasting.",
    // link: "URL_TO_PUBLICATION", // Optional: Add link if available
    tags: ["Machine Learning", "NLP", "BERT", "Stock Market", "FinTech"],
  },
  // --- ADDED PUBLICATIONS END HERE ---
];

export const featuredPublications = [
  publications.find((p) => p.id === "patent-power-quality")!,
  publications.find((p) => p.id === "llm-bias-mitigation-paper")!,
  publications.find((p) => p.id === "auv-rl-transfer")!,
];