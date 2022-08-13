import { useState } from "react";

export const Level08 = () => {
  const [count, setCount] = useState(0);

  let interval: any = null;

  const start = () => {
    interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  // stop button does not work
  // New reference is created during each render, so stop will have reference to null.
  const stop = () => {
    clearInterval(interval);
  };

  return (
    <div>
      <p>Level08</p>
      count: {count}
      <div>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
      </div>
    </div>
  );
};
