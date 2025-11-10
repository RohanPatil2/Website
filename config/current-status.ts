export interface CurrentWorkItem {
  id: string;
  title: string;
  description: string;
  icon: string; // emoji or icon name
  status: "active" | "learning" | "building" | "researching";
  category: "work" | "learning" | "side-project" | "research";
  progress?: number; // 0-100
  color?: string; // for the badge
}

export interface CurrentStatus {
  availability: "available" | "busy" | "in-meeting" | "focused";
  statusMessage: string;
  currentWork: CurrentWorkItem[];
  lastUpdated: Date;
}

// Your current status - Update this regularly!
export const currentStatus: CurrentStatus = {
  availability: "focused", // available, busy, in-meeting, focused
  statusMessage: "Deep diving into ML research 🚀",
  lastUpdated: new Date("2025-10-31"),
  currentWork: [
    {
      id: "marine-robotics",
      title: "Marine Robotics Research",
      description: "Developing RL controllers for autonomous underwater vehicles",
      icon: "🤖",
      status: "active",
      category: "research",
      progress: 75,
      color: "blue",
    },
    {
      id: "llm-bias",
      title: "LLM Bias Mitigation",
      description: "Researching fairness in large language models",
      icon: "🧠",
      status: "researching",
      category: "research",
      progress: 60,
      color: "purple",
    },
    {
      id: "mlops-pipeline",
      title: "FluxForge MLOps",
      description: "Building end-to-end ML pipeline with CI/CD",
      icon: "⚡",
      status: "building",
      category: "side-project",
      progress: 85,
      color: "green",
    },
    {
      id: "learning-transformers",
      title: "Advanced Transformers",
      description: "Deep diving into attention mechanisms and architecture",
      icon: "📚",
      status: "learning",
      category: "learning",
      progress: 40,
      color: "orange",
    },
  ],
};

// Status badge colors
export const statusColors = {
  available: {
    bg: "bg-green-500/10",
    border: "border-green-500/50",
    text: "text-green-500",
    dot: "bg-green-500",
  },
  busy: {
    bg: "bg-red-500/10",
    border: "border-red-500/50",
    text: "text-red-500",
    dot: "bg-red-500",
  },
  "in-meeting": {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/50",
    text: "text-yellow-500",
    dot: "bg-yellow-500",
  },
  focused: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/50",
    text: "text-blue-500",
    dot: "bg-blue-500",
  },
};

// Category colors
export const categoryColors = {
  work: {
    bg: "bg-blue-500/10",
    text: "text-blue-500",
  },
  learning: {
    bg: "bg-orange-500/10",
    text: "text-orange-500",
  },
  "side-project": {
    bg: "bg-green-500/10",
    text: "text-green-500",
  },
  research: {
    bg: "bg-purple-500/10",
    text: "text-purple-500",
  },
};
