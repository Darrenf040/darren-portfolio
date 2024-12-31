import { useEffect, useRef, useState } from "react";

export default function Skills() {
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
    <div className="skills mt-10 phone:px-40 py-10 phone:max-tablet:px-3">
      <div
        ref={skillsRef}
        className="flex justify-between relative bg-[#252525] rounded-xl px-5"
      >
        <div className="flex relative items-center">
          <div className="flex-grow relative phone:max-tablet:hidden">
            <div className="border border-accent-color absolute left-[-120px] right-5"></div>
          </div>
          <div className="relative phone:max-tablet:hidden">
            <div className="border border-accent-color absolute left-[-120px] h-60 -z-50"></div>
          </div>
          <div className="relative phone:max-tablet:hidden">
            <div
              className="border border-accent-color absolute left-[-120px] top-60 -z-50"
              style={{ width: `calc(${elementWidth}px + 200px)` }}
            ></div>
          </div>

          <h1 className="text-accent-color">My Skills</h1>
        </div>
        <div className="flex items-center">
          <select name="" id="" className="bg-black">
            <option value="">
              {" "}
              <h2 className="mr-10">All</h2>
            </option>
            <option value="">
              {" "}
              <h2 className="mr-10">Frontend</h2>
            </option>
            <option value="">
              {" "}
              <h2 className="mr-10">Backend</h2>
            </option>
            <option value="">
              {" "}
              <h2 className="mr-10">Design</h2>
            </option>
            <option value="">
              {" "}
              <h2 className="mr-10">Tools</h2>
            </option>
          </select>
          <div className="relative phone:max-tablet:hidden">
            <div className="border border-accent-color absolute right-[-120px] left-5"></div>
          </div>
          <div className="relative phone:max-tablet:hidden">
            <div className="border border-accent-color absolute right-[-120px] h-60 -z-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
