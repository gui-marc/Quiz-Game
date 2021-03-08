import React from "react";
import "./style.scss";

interface Props {
  text: String;
  onClick: any;
}

const Alternative: React.FC<Props> = ({ text, onClick }) => {
  return (
    <div className="alternative">
      <p>{text}</p>
      <input type="radio" name="alternative" onClick={onClick} />
    </div>
  );
};

export default Alternative;
