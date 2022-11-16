import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { buyPlan } from './features/game/gameSlice';
import { getFirstQuote, getRandomQuote, setQuotes } from './features/quote/quoteSlice';

function App() {
  const dispatch = useDispatch()
  const quote = useSelector((state) => state.quoteState.quote)
  const gameStarted = useSelector(state => state.gameState.gameStarted);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => {
        dispatch(setQuotes(data));
        // dispatch(getFirstQuote());
      });

  }, []);

  return (
    <div className="App">
      <div style={{ color: "red" }}>{quote.text}</div>
      <div style={{ color: "green" }}>{quote.author}</div>


      {gameStarted && <button onClick={() => dispatch(getRandomQuote())}>
        Get Random Quote
      </button>
      }

      {!gameStarted && <button onClick={() => dispatch(buyPlan())}>
        Play Plan
      </button>
      }

    </div>
  );
}

export default App;
