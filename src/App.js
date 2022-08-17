import React, { useState } from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';
function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <div className="modal-container">
        <div className="modal-content">
          <h2>congrats!</h2>
          <p>You answered 0% of questions correctly</p>
          <button className="close-btn">play again</button>
        </div>
      </div>
      <section className="quiz">
        <p className="correct-answers">correct answers : 0/0</p>
        {questions.map((singleQuestion, index) => {
          console.log(singleQuestion);
          const { question, incorrect_answers, correct_answers } =
            singleQuestion;
          return (
            <article className="container" key={`Q_${index}`}>
              <h2>{question}</h2>
              <div className="btn-container">
                <button className="answer-btn">Japan</button>
                <button className="answer-btn">Australia</button>
                <button className="answer-btn">Germany</button>
                <button className="answer-btn">China</button>
              </div>
            </article>
          );
        })}

        <button className="next-question">next question</button>
      </section>
    </main>
  );
}

export default App;
