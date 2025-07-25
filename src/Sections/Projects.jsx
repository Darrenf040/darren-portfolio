import react from "/src/assets/icons/react.svg";
import node from "/src/assets/icons/nodejs.svg";
import mysql from "/src/assets/icons/mysql.svg";
import js from "/src/assets/icons/js.svg";
import html from "/src/assets/icons/html.svg";
import css from "/src/assets/icons/css.svg";
import link from "/src/assets/icons/link.svg";
import leftArrow from "/src/assets/icons/left-arrow.svg";
import rightArrow from "/src/assets/icons/right-arrow.svg";
import github from "/src/assets/icons/green-github.svg";
import nextjs from "/src/assets/icons/nextjs.svg";
import supabase from "/src/assets/icons/supabase.svg";
import tailwind from "/src/assets/icons/tailwind.svg";
import salonVideo from "/src/assets/videos/hair-salon.mp4";
import themeparkVideo from "/src/assets/videos/themepark.mp4";
import aau from "/src/assets/videos/aau.mp4";
import ttt from "/src/assets/videos/tictactoe.mp4";





import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ProjectLaptop from "../Components/ProjectLaptop";
import CanvasLoader from "../Components/CanvasLoader";

const projects = [
  {
    name: "Hair Salon Appointment Booking", 
    description: "Designed and developed a modern, responsive website for a local hair salon to showcase services, pricing, and booking options. The site features a clean, user-friendly layout with mobile optimization, SEO enhancements, and integrated contact forms to improve client engagement and appointment scheduling. Additionally, implemented email and SMS automations for appointment reminders, along with push notifications to enhance customer retention and communication",
    techStackIcons: [nextjs, supabase, tailwind],
    liveSite: "https://www.changezhairsalons.com",
    projectPreview: salonVideo

  },
  {
    name: "Theme Park Management",
    description:
      "A full-stack web application for streamlined theme park management with role-based access for customers, employees, and admins. Features include ticket purchasing, employee dashboards for ride/event management, admin tools for park operations, secure authentication, real-time data updates, and robust reporting — delivering an efficient and intuitive management experience.",
    techStackIcons: [react, node, mysql],
    liveSite: "https://gleaming-lokum-158537.netlify.app/",
    github: "https://github.com/Darrenf040/themepark",
    projectPreview: themeparkVideo,
    extra:
      "Please be aware that since the web app is hosted on a free tier, it may take a little longer to load the live site initially. Thank you for your patience!",
  },
  {
    name: "AAU basketball website",
    description:
      "Designed and developed a responsive website for an AAU basketball organization to showcase team information, game schedules, and player highlights. The site includes smooth scrolling navigation for easy access to sections like teams, schedule, and contact, as well as mobile optimization for on-the-go users. Integrated contact forms and media galleries to improve engagement with players, parents, and recruiters",
    techStackIcons: [nextjs],
    liveSite: "https://aau-basketball-website.vercel.app/",
    projectPreview: aau,
  },
  {
    name: "Tic Tac Toe",
    description:
      "This project is a classic Tic Tac Toe game built with HTML, CSS, and JavaScript. It offers three difficulty levels—Easy, Medium, and Hard—providing a fun and challenging experience for players of all skill levels. The Hard mode features an unbeatable AI powered by the Minimax algorithm, ensuring optimal gameplay. The project demonstrates clean UI design, dynamic interactivity, and advanced algorithm implementation.",
    techStackIcons: [html, css, js],
    liveSite: "https://darrenf040.github.io/Tic-Tac-Toe/",
    github: "https://github.com/Darrenf040/Tic-Tac-Toe",
    projectPreview: ttt,
  },
];


function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);

  const currentProject = projects[projectIndex];
  const projectLength = projects.length;
  const projectPreview = currentProject.projectPreview;

const handleNavigation = (direction) => {
  const section = document.getElementById("projects");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  setProjectIndex((prevIndex) => {
    if (direction === "previous") {
      return prevIndex === 0 ? projectLength - 1 : prevIndex - 1;
    } else {
      return prevIndex === projectLength - 1 ? 0 : prevIndex + 1;
    }
  });
};
  return (
    <section id="projects" className="desktop:py-40">
      <h1 className="desktop:ml-40 tablet:ml-5 phone:ml-3 my-5">02 My Work</h1>
      <div className="w-full flex phone:max-desktop:flex-col">
        <div className="min-w-[60%] flex flex-col justify-between gap-4 bg-black p-8 rounded-lg">
          <h2 className="">{currentProject.name}</h2>
          <div>
            <p className="opacity-50 text-white leading-relaxed">
              {currentProject.description}
              <br />
            </p>
            {currentProject.extra && (
              <p className="mt-3 text-accent-color opacity-100">
                <span className="underline">Notice:</span>{" "}
                {currentProject.extra}
              </p>
            )}
          </div>
          <div className="flex justify-between desktop:items-center tablet:items-start phone:max-tablet:flex-col phone:max-tablet:gap-10">
            <div className="flex gap-3 items-center ">
              {currentProject.techStackIcons.map((icon) => {
                return (
                  <div className="bg-primary-color w-16 p-2 rounded-lg">
                    <img src={icon} alt="" />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-10 desktop:items-end tablet:items-start">
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  className="flex relative items-center justify-between gap-4 bg-primary-color p-2 rounded-lg desktop:w-full tablet:w-full phone:w-fit group"
                  target="_blank"
                >
                  <p className="relative">
                    Repository
                    <span className="absolute bottom-0 left-0 w-[50%] h-[2px] bg-secondary-color transition-[width] duration-300 group-hover:w-full"></span>
                  </p>
                  <div className="w-5">
                    <img src={github} alt="Github Repository link" />
                  </div>
                </a>
              )}
              {currentProject.liveSite && (
                <a
                  href={currentProject.liveSite}
                  className="flex items-center justify-between gap-4 bg-primary-color p-2 rounded-lg desktop:w-full tablet:w-full phone:w-fit group"
                  target="_blank"
                >
                  <p className="relative">
                    Live Site!
                    <span className="absolute bottom-0 left-0 bg-secondary-color h-[2px] w-[50%] transition-[width] group-hover:w-full"></span>
                  </p>
                  <div className="w-5">
                    <img src={link} alt="Live project link" />
                  </div>
                </a>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button onClick={() => handleNavigation("previous")}>
              <div className="w-10 rounded-full bg-primary-color p-2">
                <img src={leftArrow} alt="" />
              </div>
            </button>

            <button onClick={() => handleNavigation("next")}>
              <div className="w-10 rounded-full bg-primary-color p-2">
                <img src={rightArrow} alt="" />
              </div>
            </button>
          </div>
        </div>
        <div className="min-w-[40%] h-[690px]">
          <Canvas className="min-h-[400px] h-full phone:max-tablet:-z-50">
            <Center>
              <Laptop3DModel
                projectPreview={projectPreview}
                projectIndex={projectIndex}
              />
            </Center>
          </Canvas>
        </div>
      </div>
    </section>
  );
}

const Laptop3DModel = ({ projectPreview, projectIndex }) => {
  const { viewport } = useThree();
  const [scale, setScale] = useState(0);
  const [position, setPosition] = useState([]);

  useEffect(() => {
    // Calculate scale based on viewport width
    let calculatedScale = viewport.width / 4;
    let calculatedPosition = [0, -2, 1];

    if (window.innerWidth < 744) {
      calculatedScale = Math.max(0.8, viewport.width / 5.8);
      calculatedPosition = [0, 0, 1];
    } else if (window.innerWidth < 1048) {
      //max 1.9, min 1.6
      calculatedScale = Math.max(1.6, viewport.width / 6.5);
      calculatedPosition = [0, 0, 1];
    } else if (window.innerWidth < 500) {
      calculatedPosition = [0, 0, 0.5];
    }

    setPosition(calculatedPosition);
    setScale(calculatedScale);
  }, [viewport.width]);
  return (
    <>
      <ambientLight />
      <PerspectiveCamera makeDefault position={[-6, 3, 1.2]} fov={65} />
      <Suspense fallback={<CanvasLoader />}>
        <group scale={scale} position={position}>
          <ProjectLaptop video={projectPreview} next={projectIndex} />
        </group>
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
      />
    </>
  );
};

export default Projects;
