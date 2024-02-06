import "./styles.css";
import Skill from "./Skill";
const skills = [
  { skill: "JavaScript", level: "intermediate" },
  { skill: "HTML + CSS", level: "advanced" },
  { skill: "GitHub", level: "intermediate" },
  { skill: "Netlify", level: "advanced" },
  { skill: "React", level: "intermediate" },
  { skill: "Next.js", level: "beginner" },
  { skill: "Redux", level: "beginner" },
];
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} />
      ))}
    </div>
  );
}

export default SkillList;
