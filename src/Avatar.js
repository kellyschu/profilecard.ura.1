import "./styles.css";
import avatar from "./headshot.png";

function Avatar() {
  return (
    <div className="avatar">
      <img src={avatar} alt="Kelly Schumacher" className="avatar" />
    </div>
  );
}

export default Avatar;
