import React from "react";
// import axios from "axios";
import "./style.scss";

interface Props {
  text: String;
  onClick: any;
  color: String;
}

const Button: React.FC<Props> = ({ onClick, text, color }) => {
  return (
    <button className={`button ${color}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
