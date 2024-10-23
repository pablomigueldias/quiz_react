import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./GameOver.css";

import WellDone from "../img/well_done.png";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de Jogo !</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>
      <img src={WellDone} alt="fim do quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reniciar</button>
    </div>
  );
};

export default GameOver;
