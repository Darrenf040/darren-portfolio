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

export default function Slider() {
  return (
    <div className="bg-[#252525] overflow-hidden">
      <div id="slider" className="flex overflow-hidden justify-between">
        {skillIconsList.map((icon) => (
          <div
            key={icon.id}
            className="desktop:w-[100px] desktop:h-[100px] flex-shrink-0 mx-2 desktop:scale-100 tablet:max-desktop:scale-75 phone:max-tablet:scale-50"
          >
            <img src={icon.src} alt={icon.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
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
