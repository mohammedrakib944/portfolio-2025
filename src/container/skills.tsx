"use client";
import Title from "@/components/title";
import Layout from "@/layout/layout";
import React, { useRef } from "react";
import { skills } from "./constants";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skills_container = useRef(null);
  // useGSAP(
  //   () => {
  //     gsap.from(".tech-item", {
  //       y: 50,
  //       opacity: 0,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: skills_container.current,
  //         start: "top 80%",
  //       },
  //     });
  //   },
  //   { scope: skills_container, dependencies: [skills_container] }
  // );
  return (
    <Layout>
      <Title size="md" className="text-center mt-20">
        <span className="font-medium">My</span> Skills
      </Title>

      <div
        ref={skills_container}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-24 mb-40"
      >
        {skills.map((item) => (
          <div key={item.id} className="tech-item">
            <div className="w-full py-10 border-2 text-5xl flex flex-col items-center rounded hover:bg-black hover:text-white duration-200">
              <p>{item.icon}</p>
              <p className="text-sm pt-3">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Skills;
