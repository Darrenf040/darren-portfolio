import img from "/src/assets/tech-hand-touch.png";
import me from "/src/assets/me.jpeg";

import Slider from "../Components/Slider";
import Skills from "../Components/Skills";
import { useState } from "react";

function About() {
  const [skillFilter, setSkillFilter] = useState("all"); // Manage state here

  return (
    <section id="about" className="py-20">
      <h1 className="mb-5 desktop:px-40 tablet:px-10 phone:px-3">
        01 About Me
      </h1>
      <div className="desktop:px-40 phone:px-10 phone:max-tablet:px-3 grid desktop:grid-cols-[4fr_6fr] gap-2 phone:grid-cols-1">
        <div className="w-full rounded-xl flex flex-col justify-between bg-[#252525] p-5 gap-7">
          <div className="max-w-72 self-center">
            <img className="rounded-full" src={me} alt="" />
          </div>
          <div>
            <h2 className="mb-4">
              <b>Hi, I'm Darren Francis</b>
            </h2>
            <p className="opacity-60">
              I'm a college student pursuing a degree in Computer Science, with
              a focus on full-stack and web development. I'm passionate about
              creating dynamic and user-friendly web applications and constantly
              expanding my skills in modern technologies.
            </p>
          </div>
        </div>
        <div className="w-full rounded-xl bg-[#252525] p-5 flex flex-col justify-between">
          <div className="max-[270px] self-center">
            <img src={img} alt="" />
          </div>
          <div>
            <h2 className="mb-4">
              <b>My passion for coding</b>
            </h2>
            <p className="opacity-60">
              My passion for coding extends far beyond the classroom. Outside of
              school, I actively work on personal projects that allow me to
              solve real-world problems and turn ideas into reality.
            </p>
          </div>
        </div>
      </div>
      <Skills skillFilter={skillFilter} setSkillFilter={setSkillFilter} />
      <Slider skillFilter={skillFilter} /> {/* Pass skillFilter to Slider */}
    </section>
  );
}

export default About;
