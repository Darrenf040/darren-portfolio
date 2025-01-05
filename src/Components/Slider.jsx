import Marquee from "react-fast-marquee";
import { skillIconsList } from "../skillsList";
import { skillContext } from "../Utils/SkillContext";
import { useContext } from "react";

export default function Slider() {
  const skillFilter = useContext(skillContext);
  const filteredSkills = skillIconsList.filter((skill) => {
    if (skillFilter == "all") {
      return skill;
    }
    return skill.type.some((currentType) => currentType === skillFilter); // Check if any type matches skillFilter
  });

  return (
    <div className="bg-[#252525] overflow-hidden">
      <Marquee pauseOnHover={true} direction="right">
        <div
          id="slider"
          className="flex overflow-hidden justify-between w-full"
        >
          {filteredSkills.map((icon) => (
            <div
              key={icon.id}
              className="desktop:w-[100px] desktop:h-[100px] flex-shrink-0 mx-2 desktop:scale-100 tablet:max-desktop:scale-75 phone:max-tablet:scale-50 desktop:ml-20 tablet:ml-10 phone:ml-5"
            >
              <img src={icon.src} alt={icon.alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
