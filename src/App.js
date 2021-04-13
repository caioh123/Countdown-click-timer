import React, { useEffect, useState } from "react";
import Btn from "./btn";

const App = () => {
  const [counter, setCounter] = useState(30);
  const [countdownIf, setCountdownIf] = useState(false);
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (counter > 0 && flag === true) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else if (counter === 0 && flag === true) {
      setCountdownIf(true);
    }
  }, [counter, flag]);

  const handleClick = () => {
    setCount(count + 1);
    setFlag(true);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>CONTADOR DE CLIQUES EM 30 SEGUNDOS</h1>
      </div>

      <Btn count={count} onClick={handleClick} disabled={countdownIf} />
      <div className="tempo">
        <h1>{counter}</h1>
      </div>
    </div>
  );
};

export default App;
