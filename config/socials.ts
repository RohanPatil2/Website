import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@your-github-username", // Please update this
    icon: Icons.gitHub,
    link: "https://github.com/your-github-username", // Please update this
  },
  {
    name: "LinkedIn",
    username: "Rohan Upendra Patil",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/rohanpatil7979/",
  },
  {
    name: "Twitter",
    username: "@your-twitter-username", // Please update this
    icon: Icons.twitter,
    link: "https://twitter.com/your-twitter-username", // Please update this
  },
  {
    name: "Gmail",
    username: "rpatil4@binghamton.edu",
    icon: Icons.gmail,
    link: "mailto:rpatil4@binghamton.edu",
  },
];