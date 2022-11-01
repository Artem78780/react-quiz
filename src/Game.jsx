import { questions } from "./App";

function Game({step, question, onClickVariant}){
  const persent = Math.round((step / questions.length) * 100)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${persent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => {
          return (
            <li onClick={() => onClickVariant(index)} key={variant}>{variant}</li>
          )
        })}
      </ul>
    </>
  );
}

export default Game;