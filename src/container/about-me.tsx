"use client";
import React, { useRef } from "react";
import AboutImg from "@/assets/about-me.svg";
import Layout from "@/layout/layout";
import Image from "next/image";
import Title from "@/components/title";
import useAbout from "./hooks/useAbout";

const AboutMe = () => {
  const container = useRef(null);

  useAbout({ container });

  return (
    <Layout>
      <div ref={container} className="grid grid-cols-2 gap-x-4 py-40">
        <Image
          className="max-w-[450px] bg-white rounded-[10px] about-image"
          src={AboutImg}
          alt="About Image"
        />

        <div>
          <Title>
            <span className="font-medium">About</span> Me
          </Title>
          <p className="mt-10">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
