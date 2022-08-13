import { useState, useRef } from "react";

export const Level10 = () => {
  const [count, setCount] = useState(0);

  const intervalRef = useRef<NodeJS.Timer | null>(null);

  // fixed bug: if start is called multiple times, setInterval will be called multiple times.
  // but might have a performance problem.
  const start = () => {
    if (intervalRef.current !== null) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    console.log("start");
  };

  const stop = () => {
    if (intervalRef.current === null) {
      return;
    }

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <p>Level10</p>
      count: {count}
      <div>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
      </div>
    </div>
  );
};
