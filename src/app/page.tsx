import AboutMe from "@/container/about-me";
import Contact from "@/container/contact";
import Experience from "@/container/experience";
import Hero from "@/container/hero";
import Projects from "@/container/projects";
import Skills from "@/container/skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
