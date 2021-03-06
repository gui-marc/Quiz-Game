import React from "react";
import "./style.scss";

interface Props {
  text: String;
}

const Alternative: React.FC<Props> = ({ text }) => {
  return (
    <div className="alternative">
      <p>{text}</p>
      <input type="radio" name="alternative" />
    </div>
  );
};

export default Alternative;
