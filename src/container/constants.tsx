import Freelance from "@/assets/company/freelance.png";
import ShunnoIt from "@/assets/company/oit.jpg";
import Vivasoft from "@/assets/company/vivasoft.png";
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
  FaGithub,
  // FaYoutube,
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
    id: 0,
    icon: <FaGithub />,
    title: "Github",
    url: "https://github.com/mohammedrakib944",
  },
  {
    id: 1,
    icon: <FaLinkedin />,
    title: "Linkedin",
    url: "www.linkedin.com/in/rakibuzzaman-js-dev",
  },
  {
    id: 2,
    icon: <FaFacebook />,
    title: "Facebook",
    url: "https://www.facebook.com/md.rakib.38",
  },
  {
    id: 3,
    icon: <FaXTwitter />,
    title: "XTwitter",
    url: "https://x.com/rakib_jrdev",
  },
  // {
  //   id: 4,
  //   icon: <FaYoutube />,
  //   title: "Youtube",
  //   url: "#",
  // },
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

export const projects = [
  {
    title: "Career Crawler",
    description:
      "Job market analyzer built with Next.js 14 and TypeScript, featuring dynamic state management and backend integration.",
    technologies: ["Next.js", "TypeScript", "RTK Query", "Shadcn UI"],
    link: null,
  },
  {
    title: "Wellteam",
    description:
      "Fitness tracking app where I optimized performance (48% → 97%) and SEO (62% → 100%).",
    technologies: ["Next.js", "TypeScript", "React Query"],
    link: null,
  },
  {
    title: "Blog Platform",
    description:
      "Full-stack blog system with OAuth, SEO, article publishing, commenting, and a powerful admin panel.",
    technologies: ["Next.js", "TypeScript", "Express.js", "MySQL", "Redux RTK"],
    link: "https://rakib-blog.vercel.app/",
  },
  {
    title: "Ecommerce Website",
    description:
      "Full-featured e-commerce platform with payment integration, product management, and secure login.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Redux RTK",
    ],
    link: null,
  },
  {
    title: "WebRTC Video Call App",
    description:
      "Real-time video calling app with room joining, screen sharing, and call control – all built without third-party libraries.",
    technologies: ["WebRTC", "Socket.io", "JavaScript"],
    link: null,
  },
  {
    title: "Blockchain Data Table",
    description:
      "Interactive front-end with 100% performance and blockchain wallet integration using Web3.js.",
    technologies: ["React.js", "GSAP", "Web3.js", "Ether.js"],
    link: "https://github.com/mohammedrakib944",
  },
];
