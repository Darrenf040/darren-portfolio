import { useContext } from "react";
import { skillContext } from "../Utils/SkillContext";

export default function SkillsFilter() {
  const { skillFilter, setSkillFilter } = useContext(skillContext);

  const handleFilterChange = (e) => {
    setSkillFilter(e.target.value); // Update the filter when a new option is selected
  };

  return (
    <select
      value={skillFilter}
      className="bg-black"
      onChange={handleFilterChange}
    >
      <option value="all">All</option>
      <option value="language">Languages</option>
      <option value="frontend">Frontend</option>
      <option value="backend">Backend</option>
      <option value="tool">Tools</option>
    </select>
  );
}
