import React from "react";
import "./style.scss";
import { Question } from "../../App";
import Alternative from "../Alternative";

interface Props {
  question: Question;
}

const abcd = ["a", "b", "c", "d"];

export const Game: React.FC<Props> = ({ question }) => {
  return (
    <div className="game" id="game">
      {question.alternatives.map((alternative, i) => {
        return (
          <Alternative
            text={`${abcd[i]}) ${alternative.alternative}`}
            key={i}
          />
        );
      })}
    </div>
  );
};
