import "./styles.css";

function Skill(props) {
  return (
    <div>
      <div className="skill" style={{ backgroundColor: props.color }}>
        <span>
          {props.skill}
          {props.emoji}
        </span>
      </div>
    </div>
  );
}

export default Skill;
