import React from "react";
import "./style.scss";
import { Question } from "../../App";
import Alternative from "../Alternative";

interface Props {
  question: Question;
}

export const Game: React.FC<Props> = ({ question }) => {
  return (
    <div className="game">
      {question.alternatives.map((alternative, i) => {
        return <Alternative text={alternative.alternative} key={i} />;
      })}
    </div>
  );
};
