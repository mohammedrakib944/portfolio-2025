"use client";
import Layout from "@/layout/layout";
import React, { useRef } from "react";
import { projects } from "./constants";
import ProjectCard from "@/components/project-card";
import Title from "@/components/title";
import useProject from "./hooks/useProject";

const Projects = () => {
  const container = useRef(null);
  useProject({ container });

  return (
    <Layout>
      <div ref={container} className="pb-[550px]">
        <Title size="md" className="text-center mb-16">
          <span className="font-medium">My</span> Projects
        </Title>
        <div className="absolute left-0 flex gap-x-5 project-section">
          {projects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
