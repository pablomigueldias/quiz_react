import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.png";

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <div>
        <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
          Iniciar
        </button>
      </div>
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Welcome;
