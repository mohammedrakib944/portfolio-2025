"use client";
import Title from "@/components/title";
import Layout from "@/layout/layout";
import { useRef } from "react";
import { projects } from "./constants";
import useProject from "./hooks/useProject";

const Projects = () => {
  const container = useRef(null);

  useProject({ container });

  return (
    <Layout>
      <div ref={container} className="pb-12">
        <Title size="md" className="text-center mb-16">
          <span className="font-medium">My</span> Top Projects
        </Title>
        <div className="left-0 flex flex-col items-center gap-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card p-4 border border-black/40 w-full rounded "
            >
              <Title size="sm">{project.title}</Title>
              <p className="text-sm text-neutral-800">{project.description}</p>
            </div>
          ))}
        </div>
        <p className="w-full text-center pt-5 project-card">.</p>
        <p className="w-full text-center project-card">.</p>
        <p className="w-full text-center project-card">.</p>
        <h3 className="text-xl text-center pt-3 pb-10 project-card">60+</h3>
      </div>
    </Layout>
  );
};

export default Projects;
