import React, { useState } from "react";
// import axios from "axios";
import "./App.scss";

import Button from "./components/Button";
import { Game } from "./components/Game";
import Head from "./components/Head";

export interface Question {
  heading: String;
  alternatives: Array<String>;
  answerIndex: Number;
}

const firstQuestion: Question = {
  heading: "Primeira Questão",
  alternatives: ["Alternativa 1", "Alternativa 2", "Alternativa 3"],
  answerIndex: 1,
};

const secondQuestion: Question = {
  heading: "Segunda Questão",
  alternatives: ["Alternativa 1", "Alternativa 2", "Alternativa 3"],
  answerIndex: 1,
};

const thirdQuestion: Question = {
  heading: "Terceira Questão",
  alternatives: ["Alternativa 1", "Alternativa 2", "Alternativa 3"],
  answerIndex: 1,
};

const questions: Array<Question> = [
  firstQuestion,
  secondQuestion,
  thirdQuestion,
];

// const BASE_URL = "";

const App: React.FC = () => {
  const [gameState, setGameState] = useState("start");
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleButtonClick = () => {
    if (gameState === "start") {
      setGameState("game");
    } else if (gameState === "game" && questionNumber < questions.length - 1) {
      //! Verificar se marcou alternativa correta
      setQuestionNumber(questionNumber + 1);
    } else if (
      gameState === "game" &&
      questionNumber === questions.length - 1
    ) {
      console.log("Parabens, você ganhou o jogo!");
    }
  };

  return (
    <div className="App">
      <Head gameState={gameState} questionNumber={questionNumber} />
      {gameState === "game" ? (
        <Game question={questions[questionNumber]} />
      ) : null}
      <div className="button-div">
        <Button
          onClick={handleButtonClick}
          text={gameState === "start" ? "Iniciar Jogo" : "Próximo"}
        />
      </div>
    </div>
  );
};

export default App;
