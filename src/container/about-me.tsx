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
      <div
        ref={container}
        className="md:grid grid-cols-2 gap-x-4 py-20 md:py-32"
      >
        {
          <Image
            className="hidden md:block max-w-[450px] bg-white rounded-[10px] about-image"
            src={AboutImg}
            alt="About Image"
          />
        }

        <div className="px-2 lg:px-0">
          <Title>
            <span className="font-medium">About</span> Me
          </Title>
          <p className="mt-6 mb-2">
            {`I'm Md Rakibuzzaman, a dedicated Software Engineer with a strong focus on front-end development. With over three years of hands-on experience in both professional and freelance environments, I’ve built 60+ web applications that range from sleek portfolio sites to complex real-time systems.`}
          </p>
          <p className="mb-2">
            {`Currently, I work at Vivasoft Limited, where I contribute to large-scale production apps like Career-Crawler and Wellteam, enhancing performance, SEO, and user experience.`}
          </p>
          <p className="mb-2">
            {`My work is driven by clean code, performance, and maintainability. I love solving problems, optimizing systems, and pushing the boundaries with modern web technologies – whether that’s with GSAP animations, blockchain integration, or building a WebRTC video chat from scratch.`}
          </p>
          <p>{`I’m always learning, always building, and always aiming to deliver impactful solutions.`}</p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
