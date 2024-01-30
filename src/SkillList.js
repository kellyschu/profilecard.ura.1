import "./styles.css";
import Skill from "./Skill";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="JavaScript" emoji="⚡️" color="blue" />
      <Skill skill="HTML + CSS" emoji="🎨" color="pink" />
      <Skill skill="GitHub" emoji="🐙" color="green" />
      <Skill skill="Netlify" emoji="🌐" color="red" />
      <Skill skill="React" emoji="⚛️" color="orange" />
    </div>
  );
}

export default SkillList;
