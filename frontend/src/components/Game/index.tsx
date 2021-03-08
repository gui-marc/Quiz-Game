import React from "react";
import "./style.scss";
import { Question } from "../../App";
import Alternative from "../Alternative";

interface Props {
  question: Question;
}

const abcd = ["a", "b", "c", "d"];

export let isRightAlternative: Boolean = false;
export let currentAlternative: number = -1;

export const resetValidation = () => {
  isRightAlternative = false;
};

const Game: React.FC<Props> = ({ question }) => {
  const verifyAlternative = (i: number) => {
    currentAlternative = i;
    if (i >= 0 && i === question.answerIndex) {
      isRightAlternative = true;
    } else {
      isRightAlternative = false;
    }
  };

  return (
    <div className="game" id="game">
      {question.alternatives.map((alternative, i) => {
        return (
          <Alternative
            text={`${abcd[i]}) ${alternative.alternative}`}
            key={i}
            onClick={() => verifyAlternative(i)}
          />
        );
      })}
    </div>
  );
};

export default Game;
