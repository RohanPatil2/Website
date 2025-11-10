import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Rohan Upendra Patil's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Rohan Upendra Patil's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful ML/AI projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Rohan Upendra Patil's machine learning and AI projects.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Rohan Upendra Patil.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Rohan Upendra Patil's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Rohan Upendra Patil's resume.",
    metadata: {
      title: "Resume",
      description: "Rohan Upendra Patil's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Rohan Upendra Patil's professional journey and experience timeline.",
    },
  },
  publications: {
    title: "Publications & Research",
    description: "Research papers, patents, and academic contributions showcasing innovation in ML and AI.",
    metadata: {
      title: "Publications & Research",
      description: "Rohan Upendra Patil's research publications, patents, and academic work in machine learning and AI.",
    },
  },
  blog: {
    title: "Blog & Articles",
    description: "Technical tutorials, insights, and deep dives into MLOps, LLMs, and AI.",
    metadata: {
      title: "Blog & Articles",
      description: "Rohan Upendra Patil's technical blog covering MLOps, LLMs, and machine learning topics.",
    },
  },
  certifications: {
    title: "Certifications & Awards",
    description: "Professional certifications, academic achievements, and recognition.",
    metadata: {
      title: "Certifications & Awards",
      description: "Rohan Upendra Patil's certifications, awards, and professional achievements.",
    },
  },
  timeline: {
    title: "My Journey",
    description: "An interactive timeline of my educational path, career milestones, and key achievements in ML and AI.",
    metadata: {
      title: "Timeline - My Journey",
      description: "Rohan Upendra Patil's career timeline showcasing educational milestones, research achievements, and professional growth.",
    },
  },
};
