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
      <Title size="md" className="mt-16 text-center">
        <span className="font-medium">Contact</span> Me
      </Title>
      <div ref={container} className="pb-20 pt-16 grid md:grid-cols-2 gap-10">
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
          <Title>{`Let's talk for`}</Title>
          <Title>{`Something special`}</Title>

          <p className="py-4 text-neutral-600">
            {`Have a project in mind or just want to say hello?
I'm always open to new opportunities and collaborations.`}
          </p>

          <Title size="sm">rakibuzzaman.contact@gmail.com</Title>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
