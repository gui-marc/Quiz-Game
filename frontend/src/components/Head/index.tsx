import React from "react";
import "./style.scss";

interface Props {
  gameState: String;
  questionNumber: number;
  questionHeading: String;
}

const Head: React.FC<Props> = ({
  gameState,
  questionNumber,
  questionHeading,
}) => {
  if (gameState === "start")
    return (
      <div className="head">
        <div className="container">
          <div className="flex">
            <div className="left">
              <h3>Bem vindo ao</h3>
              <h2>Web Development Quiz</h2>
              <h4 className="description">
                Nesse jogo, você responderá 5 perguntas técnicas a respeito do
                mundo de Desenvolvimento Web
              </h4>
              <hr className="lg-hide" />
            </div>
            <div className="right">
              <h1>Venha testar seu conhecimento!</h1>
            </div>
          </div>
          <h4 className="half-opacity game-hint">
            Para jogar, aperte no botão abaixo
          </h4>
        </div>
      </div>
    );
  else
    return (
      <div className="head">
        <div className="container">
          <h2>Web Development Quiz</h2>
          <h3 className="half-opacity question-index">
            Questão {questionNumber + 1}
            <small>/5</small>
          </h3>
          <hr />
          <h3 className="heading">{questionHeading}</h3>
        </div>
      </div>
    );
};

export default Head;
