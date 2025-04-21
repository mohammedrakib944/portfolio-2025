"use client";
import React, { useRef } from "react";
import { social_links } from "./constants";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SocialLinks = () => {
  const social_container = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.from(".social", {
  //       y: -50,
  //       opacity: 0,
  //       stagger: 0.3,
  //       ease: "elastic.out(1,0.3)",
  //     });
  //   },
  //   { scope: social_container }
  // );

  return (
    <ul ref={social_container} className="flex gap-x-2">
      {social_links.map((item) => (
        <li key={item.id} className="social">
          <Link href={item.url}>
            <p className="p-3 border-2 text-lg rounded-sm hover:bg-black hover:text-white duration-200">
              {item.icon}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
