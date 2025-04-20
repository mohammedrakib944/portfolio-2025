"use client";
import React, { useRef } from "react";
import Layout from "./layout";
import Logo from "@/assets/log-black.svg";
import Image from "next/image";
import { navUrls } from "./nav";
import Button from "@/components/button";
import { FaDownload } from "react-icons/fa6";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NAV_ANIMATION } from "./nav.animate";

const Navbar = () => {
  const nav_container = useRef(null);
  const { LOGO, LINK, RESUME_BUTTON } = NAV_ANIMATION;

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline();
  //     tl.from(".gsap_logo", LOGO);
  //     tl.from(".gsap_link", LINK);
  //     tl.from(".gsap_resume_button", RESUME_BUTTON);
  //   },
  //   { scope: nav_container, dependencies: [] }
  // );

  return (
    <nav className="py-3">
      <Layout>
        <div ref={nav_container} className="flex justify-between items-center">
          <Image
            src={Logo}
            className="gsap_logo w-[130px] py-2"
            alt="Logo Image"
          />

          <ul className="gsap_navlinks flex gap-x-6">
            {navUrls.map((url) => (
              <li
                key={url.id}
                className="gsap_link font-semibold hover:underline cursor-pointer"
              >
                {url.title}
              </li>
            ))}
          </ul>

          <div className="gsap_resume_button">
            <Button rightIcon={<FaDownload />}>Resume</Button>
          </div>
        </div>
      </Layout>
    </nav>
  );
};

export default Navbar;
