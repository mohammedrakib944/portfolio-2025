"use client";
import Logo from "@/assets/log-black.svg";
import Button from "@/components/button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import Layout from "./layout";
import { navUrls } from "./nav";
import { RiMenu3Line } from "react-icons/ri";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useView from "@/hooks/useView";
import Menu from "./menu";

const Navbar = () => {
  const nav_container = useRef(null);
  const [is_menu_open, set_menu_open] = useState(false);
  const { is_desktop } = useView();

  const toggle_menu = () => {
    set_menu_open((prev) => !prev);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".gsap_resume_button", {
        y: -150,
        duration: 1.5,
        delay: 1.5,
        opacity: 0,
        ease: "bounce.out",
      });
    },
    { scope: nav_container, dependencies: [] }
  );

  return (
    <nav className="py-3">
      <Layout>
        <div ref={nav_container} className="flex justify-between items-center">
          <Image
            src={Logo}
            className="gsap_logo w-[130px] py-2"
            alt="Logo Image"
          />

          {is_desktop && (
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
          )}

          <div className="gsap_resume_button">
            <Button rightIcon={<FaDownload />}>Resume</Button>
          </div>

          {!is_desktop && (
            <>
              <button className="text-2xl" onClick={toggle_menu}>
                <RiMenu3Line />
              </button>
            </>
          )}

          {!is_desktop && is_menu_open && <Menu set_menu_open={toggle_menu} />}
        </div>
      </Layout>
    </nav>
  );
};

export default Navbar;
