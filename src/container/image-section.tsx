"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

import project_bg_1 from "@/assets/test/bg.jpg";
import project_bg_3 from "@/assets/test/birds.jpg";
import project_bg_2 from "@/assets/test/hati.jpg";

import { gsap, useGSAP } from "./hooks/animation";

gsap.registerPlugin(ScrollTrigger);

const ProjectsTest = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<Array<HTMLDivElement | null>>([]);
  const imagesCardRef = useRef<Array<HTMLDivElement | null>>([]);

  // Text refs
  const numberRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  // Text Data
  const numbers = ["01", "02", "03"];
  const titles = ["ReviveNest", "Rakib", "NextGen"];
  const subtitles = ["UI/UX Design", "Product Design", "Development"];

  useGSAP(
    () => {
      const images = imagesRef.current;
      const images_card = imagesCardRef.current;

      // Set z-index
      images.forEach(
        (img, i) => img && gsap.set(img, { zIndex: images.length - i })
      );
      images_card.forEach(
        (card, i) => card && gsap.set(card, { zIndex: images_card.length - i })
      );

      // Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${images.length * 100}%`,
          scrub: true,
          pin: true,
          snap: {
            snapTo: 1 / (images.length - 1),
            duration: { min: 0.2, max: 0.5 },
            ease: "power1.inOut",
          },
          markers: true,
          onSnapComplete: (self) => {
            const progress = self.progress;
            const totalSections = numbers.length - 1;
            const currentIndex = Math.round(progress * totalSections);

            if (numberRef.current)
              numberRef.current.innerText = numbers[currentIndex];
            if (titleRef.current)
              titleRef.current.innerText = titles[currentIndex];
            if (subtitleRef.current)
              subtitleRef.current.innerText = subtitles[currentIndex];

            // Animation part
            if (numberRef.current) {
              gsap.fromTo(
                numberRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
              );
            }
            if (titleRef.current) {
              gsap.fromTo(
                titleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
              );
            }
            if (subtitleRef.current) {
              gsap.fromTo(
                subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
              );
            }
          },
        },
      });

      // Animate images
      images.forEach((img, i) => {
        if (img && i !== images.length - 1) {
          tl.to(img, { yPercent: -100, ease: "none" }, i);
        }
      });

      images_card.forEach((card, i) => {
        if (card && i !== images_card.length - 1) {
          tl.to(card, { yPercent: -100, ease: "none" }, i);
        }
      });
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Primary Section */}
      {[project_bg_1, project_bg_2, project_bg_3].map((src, i) => (
        <div
          key={i}
          ref={(el) => {
            imagesRef.current[i] = el;
          }}
          className="project-image absolute top-0 left-0 w-full h-screen object-cover"
        >
          <Image
            src={src}
            alt={`Background ${i + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[80%] h-[538px] flex items-center justify-center">
        {/* Text Area */}
        <div
          ref={numberRef}
          className="absolute overflow-hidden text-2xl text-white -mt-[42%]"
        >
          01
        </div>
        <div
          ref={titleRef}
          className="absolute overflow-hidden text-2xl text-white -ml-[85%]"
        >
          ReviveNest
        </div>
        <div className="absolute text-2xl overflow-hidden text-white -mr-[85%] flex items-center">
          <div ref={subtitleRef}>UI/UX Design</div> &nbsp;.&nbsp;Branding
        </div>

        {/* Small images area */}
        <div className="absolute w-[438px] h-[438px] overflow-hidden">
          {[project_bg_2, project_bg_1, project_bg_3].map((src, i) => (
            <div
              key={i}
              ref={(el) => {
                imagesCardRef.current[i] = el;
              }}
              className="project-card-image w-full h-full absolute to-0 object-cover"
            >
              <Image
                src={src}
                alt={`Background ${i + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsTest;
