"use client";
import Button from "@/components/button";
import Title from "@/components/title";
import Layout from "@/layout/layout";
import React, { useRef } from "react";
import SocialLinks from "./social-links";
import useContact from "./hooks/useContact";

const Contact = () => {
  const container = useRef(null);
  useContact({ container });
  return (
    <Layout>
      <Title size="md" className="mt-10 text-center">
        <span className="font-medium">Contact</span> Me
      </Title>
      <div ref={container} className="pb-40 pt-16 grid grid-cols-2 gap-x-10">
        <form className="space-y-3">
          <input
            placeholder="Your first name"
            type="text"
            className="w-full border-2 px-4 py-3 rounded-sm input-item"
          />
          <input
            placeholder="Your email"
            type="text"
            className="w-full border-2 px-4 py-3 rounded-sm input-item"
          />
          <textarea
            name=""
            id=""
            placeholder="How can I help you?"
            className="w-full h-[150px] border-2 px-4 py-3 rounded-sm input-item"
          ></textarea>
          <div className="flex gap-x-3 input-item">
            <Button type="submit" className="">
              Get in touch
            </Button>
            <SocialLinks />
          </div>
        </form>
        <div>
          <Title>Let's talk for</Title>
          <Title>Something special</Title>

          <p className="py-4 text-neutral-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            iste quos, sequi dolores, illo vel rerum similique quo nisi ea atque
            neque vitae, ipsa dicta. Dolorum cupiditate itaque illo recusandae.
          </p>

          <Title size="sm">rakib@gmail.com</Title>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
