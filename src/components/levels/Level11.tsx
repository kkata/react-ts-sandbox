import { useState, useRef, useCallback } from "react";

export const Level11 = () => {
  const [count, setCount] = useState(0);

  const intervalRef = useRef<NodeJS.Timer | null>(null);

  // memoize functions
  // same reference will be provided after each render.
  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    console.log("start");
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  return (
    <div>
      <p>Level11</p>
      count: {count}
      <div>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
      </div>
    </div>
  );
};
