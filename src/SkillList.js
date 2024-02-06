import "./styles.css";
import Skill from "./Skill";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="JavaScript" level="beginner" color="blue" />
      <Skill skill="HTML + CSS" level="intermediate" color="pink" />
      <Skill skill="GitHub" level="advanced" color="blue" />
      <Skill skill="Netlify" level="advanced" color="red" />
      <Skill skill="React" level="beginner" color="orange" />
    </div>
  );
}

export default SkillList;
