export interface EducationInterface {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  gpa?: string;
  honors?: string[];
  coursework?: string[];
  activities?: string[];
  achievements: string[];
  logo?: string;
  institutionUrl?: string;
}

// Rohan Patil's Education
export const education: EducationInterface[] = [
  {
    id: "ms-cs-binghamton",
    degree: "Master of Science",
    field: "Computer Science",
    institution: "Binghamton University, SUNY",
    location: "Binghamton, New York",
    startDate: new Date("2024-08-01"),
    endDate: "Present",
    gpa: "4.0/4.0",
    honors: [
      "Graduate Research Excellence Award",
      "Dean's List - All Semesters",
    ],
    coursework: [
      "Advanced Machine Learning",
      "Deep Learning",
      "Reinforcement Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Advanced Algorithms",
      "Distributed Systems",
      "Cloud Computing",
    ],
    activities: [
      "Research Assistant - Marine Robotics Lab",
      "Graduate Research Assistant - LLM Bias Research",
      "Student Supervisor",
    ],
    achievements: [
      "Published research on LLM bias mitigation and marine robotics",
      "Developed state-of-the-art RL controllers for autonomous underwater vehicles",
      "Maintained perfect 4.0 GPA while conducting cutting-edge research",
      "Awarded Graduate Research Excellence Award for outstanding contributions",
      "Collaborated with faculty on multiple research projects in ML/AI",
    ],
    logo: "/experience/binghamton.jpg",
    institutionUrl: "https://www.binghamton.edu/",
  },
  {
    id: "be-cs-aissms",
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    institution: "AISSMS College of Engineering",
    location: "Pune, India",
    startDate: new Date("2020-08-01"),
    endDate: new Date("2024-05-31"),
    gpa: "9.2/10.0",
    honors: [
      "Excellence in Teaching Award (Teaching Assistant)",
      "First Class with Distinction",
      "Department Rank: Top 5%",
    ],
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Web Technologies",
    ],
    activities: [
      "Teaching Assistant - Artificial Intelligence (2022-2023)",
      "Teaching Assistant - Data Algorithms (2023-2024)",
      "Technical Club Member",
    ],
    achievements: [
      "Granted patent on Machine Learning-Based Power Quality Enhancement System",
      "Published 4 research papers in international journals on ML/AI applications",
      "Taught 130+ students as Teaching Assistant for AI and Data Algorithms courses",
      "Led student projects that won 3+ competitions in AI/ML domains",
      "Graduated with First Class with Distinction (9.2/10.0 GPA)",
      "Completed internships at One Club Cloud and Bowled.io gaining industry experience",
    ],
    logo: "/experience/aissms.jpg",
    institutionUrl: "https://www.aissmscoe.com/",
  },
];
