"use client";
import AboutMe from "@/container/about-me";
import Contact from "@/container/contact";
import Experience from "@/container/experience";
import Hero from "@/container/hero";
import Projects from "@/container/projects";
import Skills from "@/container/skills";
import { ReactLenis } from "lenis/react";

import { gsap, useGSAP } from "@/container/hooks/animation";

export default function Home() {
  useGSAP(
    () => {
      gsap.to(".hero-section", {
        y: 200,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 0%",
          end: "bottom -50%",
          scrub: true,
        },
      });
    },
    { dependencies: [] }
  );

  return (
    <ReactLenis root>
      <div className="hero-section">
        <Hero />
      </div>
      <Skills />
      <Experience />
      <AboutMe />
      <Projects />
      <Contact />
    </ReactLenis>
  );
}
