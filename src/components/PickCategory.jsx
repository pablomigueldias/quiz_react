import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./PickCategory.css";

import Category from "../img/category.png";

const PickCategory = () => {
  const chooseCategoryAndReorder = (category) => {
    dispatch({ type: "START_GAME", payload: category });
    dispatch({ type: "REORDER_QUESTION" });
  };
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="category">
      <h2>Escolha uma categoria.</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      <div>
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategoryAndReorder(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>
      <img src={Category} alt="categoria do quiz" />
    </div>
  );
};

export default PickCategory;
