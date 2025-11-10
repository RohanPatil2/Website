import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

// Rohan Patil's Professional Experience
export const experiences: ExperienceInterface[] = [
  {
    id: "marine-robotics-research",
    position: "Research Assistant - Marine Robotics Lab",
    company: "Binghamton University",
    location: "Binghamton, New York",
    startDate: new Date("2025-06-01"), // Assuming you meant 2024, not 2025
    endDate: "Present",
    description: [
      "Leading RL controller design for autonomous underwater vehicles in the 'Learning to Swim' project",
      "Building parallel simulators with domain randomization for robust sim-to-real transfer",
      "Collaborating with advisor Monika Roznere on live experiment design and PID baselines",
      "Iterating on stability and tracking under nonlinear hydrodynamics and real-world disturbances",
    ],
    achievements: [
      "Designed state-of-the-art RL controllers (SAC/TD3) for 6-DOF thruster-driven AUVs achieving robust zero-shot sim-to-real transfer",
      "Built high-fidelity parallel simulator with Gazebo and ROS2 enabling 10x faster experiment iterations",
      "Implemented domain randomization techniques reducing reality gap by 40% compared to baseline approaches",
      "Published research findings contributing to marine robotics autonomy and underwater navigation",
      "Collaborated with cross-functional team on live AUV experiments testing controller performance in real ocean conditions",
    ],
    skills: [
      "Python",
      "PyTorch",
      "Reinforcement Learning",
      "Robot Operating System (ROS)",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
    ],
    companyUrl: "https://www.binghamton.edu/",
    logo: "/experience/binghamton.jpg",
  },
  {
    id: "llm-bias-research",
    position: "Graduate Research Assistant - School of Computing",
    company: "Binghamton University",
    location: "Binghamton, New York",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-05-31"),
    description: [
      "Developing bias mitigation techniques for large language models under Prof. Rakin's guidance",
      "Implementing counterfactual data augmentation and projection-based debiasing methods",
      "Tracking fairness metrics (WEAT, StereoSet) and toxicity while maintaining task accuracy",
      "Building reproducible pipelines for dataset curation, fine-tuning, and benchmarking",
    ],
    achievements: [
      "Reduced LLM bias scores by 35% using novel counterfactual data augmentation and self-debiasing prompts",
      "Developed automated evaluation pipeline across multiple bias suites (WinoBias, HolisticBias, RealToxicityPrompts)",
      "Fine-tuned BERT and GPT models with projection-based debiasing maintaining 95%+ task accuracy",
      "Built reproducible experiment framework using Hugging Face Transformers enabling rapid iteration on debiasing techniques",
      "Collaborated with Prof. Rakin on research design contributing to potential publication on LLM fairness",
    ],
    skills: [
      "Python",
      "PyTorch",
      "Large Language Models (LLM)",
      "Transformer Models",
      "Machine Learning",
      "NLP",
      "BERT",
    ],
    companyUrl: "https://www.binghamton.edu/watson/",
    logo: "/experience/binghamton.jpg",
  },
  {
    id: "ta-data-algorithms",
    position: "Teaching Assistant - Data Algorithms",
    company: "AISSMS College of Engineering",
    location: "Pune, India",
    startDate: new Date("2023-05-01"),
    endDate: new Date("2024-05-31"),
    description: [
      "Assisted in teaching advanced data structures and algorithms to 60+ undergraduate students",
      "Conducted lab sessions covering trees, graphs, dynamic programming, and algorithm analysis",
      "Graded assignments and exams providing detailed feedback to improve student understanding",
      "Held office hours for one-on-one mentoring on complex algorithmic concepts",
    ],
    achievements: [
      "Mentored 60+ students on complex data structures and algorithms improving average class performance by 15%",
      "Designed and delivered hands-on lab sessions on graph algorithms, dynamic programming, and complexity analysis",
      "Created supplementary learning materials and coding exercises helping students master challenging topics",
      "Received consistently positive student feedback for clear explanations and patient teaching approach",
      "Helped students prepare for technical interviews and competitive programming contests",
    ],
    skills: [
      "Python",
      "C++",
      "Data Structures",
      "Algorithm Optimization",
      "Communication",
      "Programming",
    ],
    companyUrl: "https://www.aissmscoe.com/",
    logo: "/experience/aissms.jpg",
  },
  {
    id: "ta-artificial-intelligence",
    position: "Teaching Assistant - Artificial Intelligence",
    company: "AISSMS College of Engineering",
    location: "Pune, India",
    startDate: new Date("2022-05-01"),
    endDate: new Date("2023-05-31"),
    description: [
      "Supported AI course covering machine learning fundamentals, neural networks, and search algorithms",
      "Led practical sessions on supervised learning, unsupervised learning, and basic deep learning",
      "Evaluated student projects on real-world AI applications and provided technical guidance",
      "Assisted professor in developing course materials and assignments",
    ],
    achievements: [
      "Taught 70+ students foundational AI and machine learning concepts including neural networks and search algorithms",
      "Organized hands-on workshops on AI/ML tools (scikit-learn, TensorFlow) for first and second-year students",
      "Mentored student projects on computer vision, NLP, and predictive analytics resulting in 3 competition wins",
      "Developed comprehensive lab exercises covering supervised learning, unsupervised learning, and neural network basics",
      "Recognized by department for exceptional teaching support and student engagement",
    ],
    skills: [
      "Python",
      "Machine Learning",
      "Artificial Intelligence (AI)",
      "TensorFlow",
      "Deep Learning",
      "Communication",
      "Neural Networks",
    ],
    companyUrl: "https://www.aissmscoe.com/",
    logo: "/experience/aissms.jpg",
  },
  {
    id: "student-supervisor",
    position: "Student Supervisor",
    company: "Binghamton University",
    location: "Binghamton, New York",
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-08-31"),
    description: [
      "Supervised undergraduate research projects and guided students on ML/AI implementations",
      "Provided technical mentorship on deep learning frameworks and research methodologies",
      "Assisted in lab management and coordinated research activities",
      "Evaluated student progress and provided constructive feedback on research direction",
    ],
    achievements: [
      "Supervised 5+ undergraduate students on machine learning research projects during summer 2025",
      "Guided students through complete research lifecycle from problem formulation to implementation and evaluation",
      "Mentored students on PyTorch, TensorFlow, and modern ML best practices improving their technical skills",
      "Coordinated weekly research meetings and progress reviews ensuring projects stayed on track",
      "Helped students develop research papers and presentations for academic conferences",
    ],
    skills: [
      "Python",
      "PyTorch",
      "Machine Learning",
      "Deep Learning",
      "Communication",
      "Programming",
    ],
    companyUrl: "https://www.binghamton.edu/",
    logo: "/experience/binghamton-supervisor.svg",
  },
  {
    id: "one-club-cloud",
    position: "Full-Stack Developer Intern",
    company: "One Club Cloud",
    location: "Pune, India (Remote)",
    startDate: new Date("2022-12-01"),
    endDate: new Date("2023-02-28"),
    description: [
      "Engineered responsive, interactive website using modern web technologies",
      "Implemented SEO strategies and performance optimizations for improved user experience",
      "Collaborated with design team to translate mockups into production-ready code",
      "Integrated backend APIs and managed asset optimization for faster load times",
    ],
    achievements: [
      "Developed fully responsive website using HTML5, CSS3, Bootstrap, and JavaScript boosting user engagement by 30%",
      "Reduced page load times by 40% through advanced asset management and code optimization techniques",
      "Implemented comprehensive SEO strategy increasing organic traffic by 20% within first month",
      "Decreased bounce rates by 25% through improved UI/UX design and mobile responsiveness",
      "Collaborated with backend team on PHP API integration for dynamic content delivery",
    ],
    skills: [
      "HTML5",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "Search Engine Optimization (SEO)",
      "Responsive Web Design",
      "Front-End Development",
    ],
    companyUrl: "#", // Add actual URL if available
    logo: "/experience/one-club-cloud-logo.svg",
  },
  {
    id: "bowled-io",
    position: "Game Testing Intern",
    company: "Bowled.io",
    location: "Pune, India (Remote)",
    startDate: new Date("2022-11-01"),
    endDate: new Date("2023-12-31"),
    description: [
      "Conducted comprehensive game testing to identify bugs and gameplay issues",
      "Documented findings using JIRA and Trello for efficient bug tracking and resolution",
      "Collaborated with developers to reproduce issues and verify fixes",
      "Developed test cases and quality assurance protocols for new features",
    ],
    achievements: [
      "Led comprehensive game testing initiatives systematically documenting 150+ bugs using JIRA and Trello",
      "Enhanced game stability by 15% through rigorous testing protocols and quality assurance measures",
      "Collaborated with cross-functional development team to prioritize and resolve critical gameplay issues",
      "Developed detailed test cases covering edge cases and user scenarios reducing post-launch bugs by 30%",
      "Provided actionable feedback on game mechanics and user experience contributing to improved player satisfaction",
    ],
    skills: [
      "Game Testing",
      "Communication",
      "Analytical Skills",
    ],
    companyUrl: "https://bowled.io/", // Verify this URL
    logo: "/experience/bowled-io-logo.svg",
  },
];
