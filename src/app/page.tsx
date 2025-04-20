import AboutMe from "@/container/about-me";
import Experience from "@/container/experience";
import Hero from "@/container/hero";
import Skills from "@/container/skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <AboutMe />
    </div>
  );
}
