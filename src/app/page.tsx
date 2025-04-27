import AboutMe from "@/container/about-me";
import Contact from "@/container/contact";
import Experience from "@/container/experience";
import Hero from "@/container/hero";
import Projects from "@/container/projects";
import Skills from "@/container/skills";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <Skills />
      <Experience />
      <AboutMe />
      <Projects />
      <Contact />
    </ReactLenis>
  );
}
