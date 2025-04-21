"use client";
import Title from "@/components/title";
import Layout from "@/layout/layout";
import React, { useRef } from "react";
import { experience } from "./constants";
import Image from "next/image";
import { cn } from "@/utils/cn";
import useExprience from "./hooks/useExprience";

const Experience = () => {
  const container = useRef(null);

  // useExprience({ container });

  return (
    <div ref={container} className="bg-black py-20">
      <Layout>
        <Title size="md" className="text-center mb-16 text-white">
          <span className="font-medium">My</span> Experience
        </Title>

        <div className="max-w-[800px] mx-auto space-y-4">
          <p className="text-white text-lg font-semibold">
            January 2021 - Present
          </p>
          {experience.map((item) => (
            <div
              key={item.name}
              className={cn(
                "experience border border-white/40 p-10 rounded-lg",
                item.name === "Vivasoft" && "hover:bg-violet-500/10",
                item.name === "Freelance" && "hover:bg-sky-500/10",
                item.name === "Shunno IT" && "hover:bg-red-500/10"
              )}
            >
              <div className="flex start justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    className={cn(
                      "size-12 rounded-full bg-white",
                      item.name === "Shunno IT" && "p-3"
                    )}
                    src={item.logo}
                    alt={item.name}
                  />
                  <div>
                    <h2 className="text-xl text-white">{item.title}</h2>
                    <p className="text-xs text-white/70">{item.name}</p>
                  </div>
                </div>

                <p className="text-sm text-white pt-1">{item.duration}</p>
              </div>
              <p className="pt-5 text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Experience;
