import React from 'react';
import { useState } from 'react';

const ReactCounter = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const add = () => {
    setCount((i) => i + 1)
  };
  const subtract = () => {
    setCount((i) => i - 1)
  };

  return (
    <div id="react" className="counter">
      <button onClick={subtract}>-</button>
      <pre>{count}</pre>
      <button onClick={add}>+</button>
    </div>
  );
}

export default ReactCounter
