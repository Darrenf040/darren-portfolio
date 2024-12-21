import img from "/src/assets/tech-hand-touch.png";
import me from "/src/assets/me.jpeg";
import css from "/src/assets/icons/css.svg";
import figma from "/src/assets/icons/figma.svg";
import github from "/src/assets/icons/github.svg";
import html from "/src/assets/icons/html.svg";
import js from "/src/assets/icons/js.svg";
import mysql from "/src/assets/icons/mysql.svg";
import nodejs from "/src/assets/icons/nodejs.svg";
import python from "/src/assets/icons/python.svg";
import react from "/src/assets/icons/react.svg";
import sql from "/src/assets/icons/sql.svg";
import tailwind from "/src/assets/icons/tailwind.svg";

import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import InertiaPlugin from "gsap-trial/InertiaPlugin";
gsap.registerPlugin(Draggable, useGSAP, InertiaPlugin);

const skillIconsList = [
  {
    id: 1,
    src: css,
    alt: "css icon",
  },
  {
    id: 2,
    src: figma,
    alt: "figma icon",
  },
  {
    id: 3,
    src: github,
    alt: "github icon",
  },
  {
    id: 4,
    src: html,
    alt: "html icon",
  },
  {
    id: 5,
    src: js,
    alt: "javascript icon",
  },
  {
    id: 6,
    src: mysql,
    alt: "mysql icon",
  },
  {
    id: 7,
    src: nodejs,
    alt: "node.js icon",
  },
  {
    id: 8,
    src: python,
    alt: "python icon",
  },
  {
    id: 9,
    src: react,
    alt: "react.js icon",
  },
  {
    id: 10,
    src: sql,
    alt: "sql icon",
  },
  {
    id: 11,
    src: tailwind,
    alt: "tailwind.css icon",
  },
];

function About() {
  return (
    <section id="about" className="py-20">
      <h1 className="px-40 mb-5">01 About Me</h1>
      <div className="px-40 grid grid-cols-[4fr_6fr] gap-2">
        <div className="w-full rounded-xl flex flex-col justify-between bg-[#252525] p-5 gap-7">
          <div className="max-w-72 self-center">
            <img className="rounded-full" src={me} alt="" />
          </div>
          <div>
            <p className="mb-4">
              <b>Hi, I'm Darren Francis</b>
            </p>
            <p className="opacity-60 text-[16px]">
              I'm a college student pursuing a degree in Computer Science, with
              a focus on full-stack and web development. I'm passionate about
              creating dynamic and user-friendly web applications and constantly
              expanding my skills in modern technologies
            </p>
          </div>
        </div>
        <div className="w-full rounded-xl bg-[#252525] p-5 flex flex-col justify-between">
          <div className="max-[270px] self-center">
            <img src={img} alt="" />
          </div>
          <div>
            <p className="mb-4">
              <b>My passion for coding</b>
            </p>
            <p className="opacity-60 text-[16px]">
              My passion for coding extends far beyond the classroom. Outside of
              school, I actively work on personal projects that allow me to
              solve real-world problems and turn ideas into reality. Whether
              it's creating dynamic web applications or exploring innovative
              solutions, I'm driven by the goal of building something
              meaningful. Coding gives me the opportunity to combine creativity
              with problem-solving, and it's this blend that keeps me motivated
              to grow and push my limits every day
            </p>
          </div>
        </div>
      </div>
      <Skills />
      <Slider />
    </section>
  );
}

function Slider() {
  const sliderRef = useRef(null);
  const sliderTimeline = useRef(null);
  useGSAP(() => {
    sliderTimeline.current = gsap
      .timeline({ repeat: -1 })
      .to(sliderRef.current, {
        x: "100%",
        duration: 10,
        ease: "none",
      });
  });
  const handleMouseEnter = () => {
    sliderTimeline.current.pause();
  };

  const handleMouseLeave = () => {
    sliderTimeline.current.play();
  };
  return (
    <div
      className="bg-[#252525] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={sliderRef}
        id="slider"
        className="flex overflow-hidden justify-between"
      >
        {skillIconsList.map((icon) => (
          <div key={icon.id} className="w-[100px] h-[100px] flex-shrink-0 mx-2">
            <img src={icon.src} alt={icon.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
function Skills() {
  const skillsRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(0);

  useEffect(() => {
    if (skillsRef.current) {
      setElementWidth(skillsRef.current.offsetWidth);
    }

    // Optionally, update the width on window resize
    const handleResize = () => {
      if (skillsRef.current) {
        setElementWidth(skillsRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="skills mt-10 p-40 py-10">
      <div
        ref={skillsRef}
        className="flex justify-between relative bg-[#252525] rounded-xl px-5"
      >
        <div className="flex relative items-center">
          <div className="flex-grow relative">
            <div className="border border-accent-color absolute left-[-120px] right-5"></div>
          </div>
          <div className="relative">
            <div className="border border-accent-color absolute left-[-120px] h-60 -z-50"></div>
          </div>
          <div className="relative">
            <div
              className="border border-accent-color absolute left-[-120px] top-60 -z-50"
              style={{ width: `calc(${elementWidth}px + 200px)` }}
            ></div>
          </div>

          <h1 className="text-[40px] text-accent-color">My Skills</h1>
        </div>
        <div className="flex items-center">
          <h2 className="text-[30px] mr-10">Frontend</h2>
          <h2 className="text-[30px] mr-10">Backend</h2>
          <h2 className="text-[30px] mr-10">Design</h2>
          <h2 className="text-[30px]">Tools</h2>
          <div className="relative">
            <div className="border border-accent-color absolute right-[-120px] left-5"></div>
          </div>
          <div className="relative">
            <div className="border border-accent-color absolute right-[-120px] h-60 -z-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
