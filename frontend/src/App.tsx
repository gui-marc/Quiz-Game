import React, { useState } from "react";
import axios from "axios";
import "./App.scss";

import Button from "./components/Button";
import Game, {
  isRightAlternative,
  currentAlternative,
  resetValidation,
} from "./components/Game";
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

// Getting questions from API
const PORT = 8080;
const API_URL = `http://localhost:${PORT}`;

const startGame = async () => {
  await axios.get(`${API_URL}/questions/random`).then((res) => {
    questions = res.data;
  });
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

  const handleButtonClick = () => {
    if (gameState === "start") {
      startGame()
        .then(() => setGameState("game"))
        .catch((e) => console.log(e));
      return;
    } else if (currentAlternative === -1) {
      // Forgot to point down an alternative
      console.log("Você precisa marcar uma alternativa !!");
      return;
    } else if (gameState === "game" && isRightAlternative === true) {
      if (questionNumber === questions.length - 1) {
        // Won the game
        setIsWarning(false);
        setShowPopup(true);
      } else {
        // Right Answer
        setQuestionNumber(questionNumber + 1);
        resetValidation();
        return;
      }
    } else if (gameState === "game" && isRightAlternative === false) {
      // Wrong Answer
      setIsWarning(true);
      setShowPopup(true);
      return;
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
