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

  function easeInOutCubic(x: number): number {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  return (
    <ReactLenis root options={{ easing: easeInOutCubic }}>
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
