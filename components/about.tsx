"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref  } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-8 text-left indent-8">
        Hi there! Thank you for coming out to visit my website {" "}
        <span role="img" aria-label="smile face">🙂</span>. {" "}
          I am a hard working and recent{" "}
          <span className="font-medium">Computer Science graduate</span> from the{" "}
          <span className="font-medium">University of Waterloo</span>, striving towards{" "}
          <a href="https://medium.com/remote-symfony-team/let-s-make-the-world-a-better-place-through-technology-are-you-in-f4a32591f5ee" target="_blank" className="underline">the goal of making the world a better place through technology</a>.{" "}
          Fully committed to the philosophy of life-long learning, I’m a{" "}
          <span className="font-medium">full stack developer</span> with a deep passion for{" "}
          <span className="font-medium">Python/Django, React and all things web development.</span> I had{" "} 
          <span className="italic">amazing internships</span> from a variety of industry sections that have taught me how to uphold{" "}
          <span className="font-medium">performance, usability, accessibility</span> through{" "} 
          <span className="font-medium">clean and efficient code</span> whenever I develop new features. 
      </p>
       <p className="text-left indent-8">
        Beyond coding, my other passions are playing soccer, doing my daily workouts, playing story-based games, watching uplifting{" "} 
        anime and spending time with others. One thing I{" "}
        <span className="italic">absolutely love</span> is reading about{" "}
        <a href="https://www.healthline.com/health/self-actualization" target="_blank" className="underline">Self-Actualization advice </a>and having a{" "}
        <a href="https://fastercapital.com/content/Progressive-thinking--Embracing-a-Forward-Looking-Mindset.html" target="_blank" className="underline">progressive mindset</a>. I am currently working on{" "}
        <span className="font-medium">a project that simplifies and enhances the process of organizing social group events</span>. 
      </p>
    </motion.section>
  );
}