export interface CertificationInterface {
  id: string;
  title: string;
  organization: string;
  issueDate: Date;
  expiryDate?: Date | "No Expiry";
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  imageUrl?: string;
  type: "Certification" | "Award" | "Achievement" | "Honor";
}

export const certifications: CertificationInterface[] = [
  {
    id: "ms-computer-science",
    title: "Master of Science in Computer Science",
    organization: "SUNY Binghamton University",
    issueDate: new Date("2024-08-01"),
    expiryDate: "No Expiry",
    description: "MS in Computer Science focusing on Machine Learning, Deep Learning, and AI. Research in RL for robotics and LLM bias mitigation.",
    skills: ["Machine Learning", "Deep Learning", "Reinforcement Learning", "Computer Vision", "NLP"],
    imageUrl: "/certifications/ms-degree.png",
    type: "Achievement",
  },
  {
    id: "patent-power-quality",
    title: "Granted Patent - ML Power Quality System",
    organization: "Office Journal of the Patent Office, India",
    issueDate: new Date("2023-10-27"),
    expiryDate: "No Expiry",
    credentialId: "202321064729A",
    description: "Inventor on granted patent for ML-based power quality system. 95% accuracy, 40% reduction in equipment damage.",
    skills: ["Machine Learning", "Predictive Analytics", "Innovation"],
    imageUrl: "/certifications/patent-certificate.png",
    type: "Award",
  },
  {
    id: "aws-ml-specialty",
    title: "AWS Certified Machine Learning - Specialty",
    organization: "Amazon Web Services",
    issueDate: new Date("2024-06-15"),
    expiryDate: new Date("2027-06-15"),
    credentialUrl: "https://aws.amazon.com/certification/",
    description: "Validates expertise in building, training, and deploying ML models on AWS. Proficient in SageMaker and ML services.",
    skills: ["AWS", "Machine Learning", "SageMaker", "MLOps"],
    imageUrl: "/certifications/aws-ml.png",
    type: "Certification",
  },
  {
    id: "tensorflow-developer",
    title: "TensorFlow Developer Certificate",
    organization: "Google - TensorFlow",
    issueDate: new Date("2023-11-20"),
    expiryDate: new Date("2026-11-20"),
    credentialUrl: "https://www.tensorflow.org/certificate",
    description: "Proficiency in TensorFlow for deep learning. Covers neural networks, CNNs, RNNs, and NLP.",
    skills: ["TensorFlow", "Deep Learning", "Neural Networks", "Python"],
    imageUrl: "/certifications/tensorflow-cert.png",
    type: "Certification",
  },
  {
    id: "pytorch-scholarship",
    title: "PyTorch Scholarship Program",
    organization: "Udacity & Meta",
    issueDate: new Date("2023-09-01"),
    expiryDate: "No Expiry",
    description: "Selected for competitive PyTorch Scholarship. Completed advanced deep learning coursework. Top 10% of recipients.",
    skills: ["PyTorch", "Deep Learning", "Neural Networks"],
    imageUrl: "/certifications/pytorch-scholarship.png",
    type: "Honor",
  },
  {
    id: "deep-learning-specialization",
    title: "Deep Learning Specialization",
    organization: "DeepLearning.AI - Coursera",
    issueDate: new Date("2023-05-10"),
    expiryDate: "No Expiry",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/",
    description: "5-course specialization by Andrew Ng. Completed with distinction covering DL foundations and applications.",
    skills: ["Deep Learning", "Neural Networks", "CNNs", "RNNs", "TensorFlow"],
    imageUrl: "/certifications/dl-specialization.png",
    type: "Certification",
  },
  {
    id: "mlops-specialization",
    title: "Machine Learning Engineering for Production (MLOps)",
    organization: "DeepLearning.AI - Coursera",
    issueDate: new Date("2024-03-15"),
    expiryDate: "No Expiry",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/",
    description: "Production ML systems training. ML infrastructure, model serving, and building production-ready systems.",
    skills: ["MLOps", "Model Deployment", "ML Engineering", "CI/CD"],
    imageUrl: "/certifications/mlops-spec.png",
    type: "Certification",
  },
  {
    id: "research-award-binghamton",
    title: "Graduate Research Excellence Award",
    organization: "SUNY Binghamton University",
    issueDate: new Date("2025-01-15"),
    expiryDate: "No Expiry",
    description: "Outstanding research in ML and AI. Recognized for LLM bias mitigation and RL for autonomous systems.",
    skills: ["Research", "Machine Learning", "Academic Excellence"],
    imageUrl: "/certifications/research-award.png",
    type: "Award",
  },
  {
    id: "kubernetes-ckad",
    title: "Certified Kubernetes Application Developer (CKAD)",
    organization: "Cloud Native Computing Foundation",
    issueDate: new Date("2024-04-20"),
    expiryDate: new Date("2027-04-20"),
    credentialUrl: "https://www.cncf.io/certification/ckad/",
    description: "Validates ability to design and deploy cloud-native applications for Kubernetes.",
    skills: ["Kubernetes", "Docker", "DevOps", "Cloud Native"],
    imageUrl: "/certifications/ckad.png",
    type: "Certification",
  },
  {
    id: "teaching-excellence",
    title: "Excellence in Teaching Award",
    organization: "SUNY Binghamton - CS Department",
    issueDate: new Date("2024-12-15"),
    expiryDate: "No Expiry",
    description: "Outstanding TA for Data Structures and Research Methods. Highest student evaluations in department.",
    skills: ["Teaching", "Mentoring", "Communication", "Leadership"],
    imageUrl: "/certifications/teaching-award.png",
    type: "Award",
  },
];

export const featuredCertifications = [
  certifications.find((c) => c.id === "patent-power-quality")!,
  certifications.find((c) => c.id === "aws-ml-specialty")!,
  certifications.find((c) => c.id === "research-award-binghamton")!,
];
