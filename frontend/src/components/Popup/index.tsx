import React from "react";
import "./style.scss";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  isShowing: boolean;
  isWarning: boolean;
}

const Popup: React.FC<Props> = ({ isShowing, isWarning, children }) => {
  const setIconColor: any = (isWarning: Boolean) => {
    return isWarning ? "#ff4949" : "#7fe201";
  };

  const setIcon: any = (isWarning: Boolean) => {
    return isWarning ? faTimesCircle : faCheckCircle;
  };

  const setText: any = (isWarning: Boolean) => {
    return isWarning
      ? "Essa não era a resposta certa... Mas não desanime, tente novamente!"
      : "Você acertou todas as perguntas!! Você pode se considerar um bom Web Dev! O que resta agora é aplicar-se para aquele emprego que sempre sonhou!! ;)";
  };

  const setHeading: any = (isWarning: Boolean) => {
    return isWarning ? "Que pena!" : "Parabéns!";
  };

  return (
    <div className={`popup ${isShowing ? "" : "hidden"}`}>
      <div className="card">
        <div className="heading">
          <FontAwesomeIcon
            icon={setIcon(isWarning)}
            style={{
              color: setIconColor(isWarning),
              fontSize: "calc(20px + 3vmin)",
            }}
          />
          <h2>{setHeading(isWarning)}</h2>
        </div>
        <p>{setText(isWarning)}</p>
        {children}
      </div>
    </div>
  );
};

export default Popup;
