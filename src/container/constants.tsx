import Freelance from "@/assets/company/freelance.png";
import ShunnoIt from "@/assets/company/oit.jpg";
import Vivasoft from "@/assets/company/vivasoft.png";
import Portfolio from "@/assets/portfolio.jpg";
import { ProjectCardProps } from "@/components/project-card";
import {
  FaCss3,
  FaDocker,
  FaFacebook,
  FaGit,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiTypescript } from "react-icons/si";
export type SocialLinks = {
  id: number;
  title: string;
  url: string;
  icon: React.ReactNode;
};

export const social_links: SocialLinks[] = [
  {
    id: 1,
    icon: <FaFacebook />,
    title: "Facebook",
    url: "#",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    title: "Linkedin",
    url: "#",
  },
  {
    id: 3,
    icon: <FaXTwitter />,
    title: "XTwitter",
    url: "#",
  },
  {
    id: 4,
    icon: <FaYoutube />,
    title: "Youtube",
    url: "#",
  },
];

type Skills = {
  id: number;
  title: string;
  icon: React.ReactNode;
};

export const skills: Skills[] = [
  {
    id: 1,
    title: "JavaScript",
    icon: <FaJs />,
  },
  {
    id: 2,
    title: "Typescript",
    icon: <SiTypescript />,
  },
  {
    id: 3,
    title: "Docker",
    icon: <FaDocker />,
  },
  {
    id: 10,
    title: "Git",
    icon: <FaGit />,
  },
  {
    id: 4,
    title: "React.js",
    icon: <FaReact />,
  },
  {
    id: 5,
    title: "Node.Js",
    icon: <FaNodeJs />,
  },
  {
    id: 6,
    title: "Css3",
    icon: <FaCss3 />,
  },
  {
    id: 7,
    title: "Tailwind Css",
    icon: <RiTailwindCssFill />,
  },
  {
    id: 8,
    title: "Html",
    icon: <FaHtml5 />,
  },
  {
    id: 9,
    title: "Mongodb",
    icon: <SiMongodb />,
  },
];

export const experience = [
  {
    name: "Vivasoft",
    title: "Software Enginner L-1",
    logo: Vivasoft,
    duration: "Mar 2024 - Present",
    description:
      "Front-end developer build Career-Crawler, implementing new features and resolving bugs. Enhanced functionality and fixed issues for projects including Wellteam,  Financfy,  Pi-Access, and Pi-Admin.",
  },
  {
    name: "Freelance",
    title: "Web Developer - Frontend, Web-3",
    logo: Freelance,
    duration: "Dec 2021 - Jan 2024",
    description:
      "Successfully delivered over 60+ projects for a diverse clientele, both national and international, ensuring high client satisfaction through effective communication and technical proficiency.",
  },
  {
    name: "Shunno IT",
    title: "Front-end Developer",
    logo: ShunnoIt,
    duration: "Jan 2021 - Nov 2021",
    description:
      "Designed and developed the front-end for various services, notably the NetFee ISP Billing Management System.Optimized application performance by reducing API calls, implementing debouncing and lazy loading,and managing the global state.",
  },
];

export const projects: ProjectCardProps[] = [
  {
    title: "First Project",
    image_url: Portfolio,
    description:
      "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.",
    url: "#",
  },
  {
    title: "Second Project",
    image_url: Portfolio,
    description:
      "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.",
    url: "#",
  },
  {
    title: "Third Project",
    image_url: Portfolio,
    description:
      "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.",
    url: "#",
  },
  {
    title: "Fourth Project",
    image_url: Portfolio,
    description:
      "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.",
    url: "#",
  },
  {
    title: "Fourth Project",
    image_url: Portfolio,
    description:
      "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.",
    url: "#",
  },
  {
    title: "Fourth Project",
    image_url: Portfolio,
    description:
      "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.",
    url: "#",
  },
];
