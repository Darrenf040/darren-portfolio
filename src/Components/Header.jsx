import { useState } from "react";
import menu from "../assets/icons/mobile-menu.svg";
import close from "../assets/icons/menu-close.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex justify-between desktop:px-40 tablet:px-10 phone:px-3 py-4 fixed w-full backdrop-blur-lg z-40">
        <a href="/">DarrenF</a>
        <nav>
          <ul className="flex gap-12">
            <li className="phone:max-tablet:hidden">
              <a href="/#hero">Home</a>
            </li>
            <li className="phone:max-tablet:hidden">
              <a href="/#about">About</a>
            </li>
            <li className="phone:max-tablet:hidden">
              <a href="/#projects">Projects</a>
            </li>
            <li className="phone:max-tablet:hidden">
              <a href="/#contact">Contact</a>
            </li>
            <li className="tablet:hidden">
              <button onClick={handleClick} className="p-0">
                <img src={menu} alt="Hamburger menu" />
              </button>
            </li>
          </ul>
          <div
            className={`w-[70vw] h-screen absolute right-0 top-0 bottom-0 bg-secondary-color text-black ${
              isOpen ? "block" : "hidden"
            } z-30 phone:px-3 py-4`}
          >
            <ul className="flex flex-col items-center justify-center gap-20 h-full text-3xl relative">
              <li className="absolute top-0 right-0">
                <button onClick={handleClick} className="p-0">
                  <img src={close} alt="Close icon" />
                </button>
              </li>

              <li>
                <a href="/#hero" onClick={handleClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" onClick={handleClick}>
                  About
                </a>
              </li>
              <li>
                <a href="/#projects" onClick={handleClick}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/#contact" onClick={handleClick}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
