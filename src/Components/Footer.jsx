import React from "react";
import linkedIn from "/src/assets/icons/linkedin.svg";
import github from "/src/assets/icons/green-github.svg";
import email from "/src/assets/icons/mail.svg";

const Footer = () => {
  return (
    <footer className="px-40 py-20 flex justify-between bg-black">
      <p className="text-[16px]" href="">
        darrenfr83@gmail.com
      </p>
      <div className="flex gap-5">
        <a
          className="w-[25px]"
          href="https://www.linkedin.com/in/darren-francis-8299ab253/"
          target="_blank"
        >
          <img src={linkedIn} alt="Linkedin icon" />
        </a>
        <a
          className="w-[25px]"
          href="https://github.com/Darrenf040"
          target="_blank"
        >
          <img src={github} alt="Github icon" />
        </a>
        <a className="w-[25px]" href="mailto:darrenfr83@email.com">
          <img src={email} alt="Mail icon" />
        </a>
      </div>
      <p className="text-[16px]">© 2024 Darren Francis All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
