import React, { useState } from "react";
import axios from "axios";
import "./App.scss";

import Button from "./components/Button";
import { Game } from "./components/Game";
import Head from "./components/Head";
import Popup from "./components/Popup";

// Axios Headers
axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

export interface Question {
  heading: String;
  alternatives: Array<any>;
  answerIndex: Number;
}

let questions: Array<Question>;

const API_URL = "http://localhost:8080";

const startGame = async () => {
  await axios.get(`${API_URL}/questions/random`).then((res) => {
    questions = res.data;
  });
  return questions;
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState("start");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isWarning, setIsWarning] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const restartGame = () => {
    setShowPopup(false);
    setGameState("start");
    setQuestionNumber(0);
  };

  const verifyAlternative = () => {};

  const handleButtonClick = () => {
    if (gameState === "start") {
      startGame().then(() => setGameState("game"));
    } else if (gameState === "game" && questionNumber < questions.length - 1) {
      //! Verificar se marcou alternativa correta
      setQuestionNumber(questionNumber + 1);
    } else if (
      gameState === "game" &&
      questionNumber === questions.length - 1
    ) {
      setIsWarning(false);
      setShowPopup(true);
      // restartGame();
    }
  };

  return (
    <div className="App">
      <Popup isShowing={showPopup} isWarning={isWarning}>
        <Button color="success" onClick={restartGame} text="Recomeçar Jogo" />
      </Popup>
      <Head
        gameState={gameState}
        questionNumber={questionNumber}
        questionHeading={
          questions !== undefined ? questions[questionNumber].heading : " "
        }
      />
      {gameState === "game" ? (
        <Game question={questions[questionNumber]} />
      ) : null}
      <div className="button-div">
        <Button
          color="main"
          onClick={handleButtonClick}
          text={gameState === "start" ? "Iniciar Jogo" : "Próximo"}
        />
      </div>
    </div>
  );
};

export default App;
