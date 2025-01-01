import { useState } from "react";
import menu from "../assets/icons/mobile-menu.svg";
import close from "../assets/icons/menu-close.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex justify-between desktop:px-40 tablet:px-10 phone:px-3 py-4 fixed w-full backdrop-blur-lg z-40">
        <Link to="/#hero">DarrenF</Link>
        <nav>
          <ul className="flex gap-12">
            <li className="phone:max-tablet:hidden">
              <Link to="/#hero">Home</Link>
            </li>
            <li className="phone:max-tablet:hidden">
              <Link to="/#about">About</Link>
            </li>
            <li className="phone:max-tablet:hidden">
              <Link to="/#projects">Projects</Link>
            </li>
            <li className="phone:max-tablet:hidden">
              <Link to="/#contact">Contact</Link>
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
            } z-30 phone:px-3 py-4 tablet:hidden`}
          >
            <ul className="flex flex-col items-center justify-center gap-20 h-full text-3xl relative">
              <li className="absolute top-0 right-0">
                <button onClick={handleClick} className="p-0">
                  <img src={close} alt="Close icon" />
                </button>
              </li>

              <li>
                <Link to="/#hero" onClick={handleClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" onClick={handleClick}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/#projects" onClick={handleClick}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/#contact" onClick={handleClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
