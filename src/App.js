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
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>
          <div className="form-control">
            <label for="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="form-input"
              min="1"
              max="50"
              value="10"
            />
          </div>
          <div className="form-control">
            <label for="category">category</label>
            <select name="category" id="category" className="form-input">
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="form-control">
            <label for="difficulty">select difficulty</label>
            <select name="difficulty" id="difficulty" className="form-input">
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
