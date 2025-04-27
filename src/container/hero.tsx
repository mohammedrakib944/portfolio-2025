"use client";
import HeroImg from "@/assets/hero.svg";
import Title from "@/components/title";
import Layout from "@/layout/layout";
import Image from "next/image";
import SocialLinks from "./social-links";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { mobile_width } from "@/config/responsive";

const Hero = () => {
  const hero_container = useRef(null);

  useGSAP(
    () => {
      if (window.innerWidth < mobile_width) return;

      const tl = gsap.timeline();
      tl.from(".rakib", {
        x: 100,
        opacity: 0,
        stagger: 0.1,
      });
      tl.to(".engineer-bg", {
        width: 240,
        color: "white",
      });
    },
    { scope: hero_container, dependencies: [] }
  );

  return (
    <Layout>
      <div
        ref={hero_container}
        className="pt-24 lg:pt-0 lg:min-h-[80vh] overflow-x-hidden flex gap-6 items-center "
      >
        <div className="lg:w-1/2 space-y-4">
          <Title className="flex gap-3">
            <span className="font-medium">{`Hello I'm`} </span>{" "}
            <div className="flex">
              <p className="rakib">R</p>
              <p className="rakib">a</p>
              <p className="rakib">k</p>
              <p className="rakib">i</p>
              <p className="rakib">b</p>
            </div>
          </Title>
          <Title className="text-4xl lg:text-6xl flex items-center gap-3">
            <p className="title">Software</p>{" "}
            <div className="flex items-center relative">
              <p className="absolute title py-2 text-white bg-[#305de6] lg:bg-transparent engineer">
                Enginner
              </p>
              <p className="w-0 h-[80px] bg-[#305de6] engineer-bg"></p>
            </div>
          </Title>
          <p className="title mb-20 lg:mb-24 text-neutral-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            temporibus sequi dolores fugiat blanditiis ab amet non optio atque.
            Et ullam nemo porro obcaecati eos, saepe cupiditate possimus hic
            error.
          </p>

          <SocialLinks />
        </div>

        <div className="hidden lg:block lg:w-1/2">
          <Image
            className="hero scale-110"
            src={HeroImg}
            alt="Md.Rakib Developer"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
