import React from "react";
// import axios from "axios";
import "./style.scss";

interface Props {
  text: String;
  onClick: any;
}

const Button: React.FC<Props> = ({ onClick, text }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
