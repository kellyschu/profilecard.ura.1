import "./styles.css";

function Skill({ skill, color, level }) {
  return (
    <div>
      <div
        className="skill"
        style={{
          backgroundColor:
            level === "beginner"
              ? "red"
              : level === "intermediate"
              ? "yellow"
              : level === "advanced"
              ? "green"
              : "",
        }}
      >
        <span>{skill}</span>
        <span>
          {level === "beginner"
            ? "👶"
            : level === "intermediate"
            ? "👍"
            : level === "advanced"
            ? "🏆"
            : ""}
        </span>
      </div>
    </div>
  );
}

export default Skill;
