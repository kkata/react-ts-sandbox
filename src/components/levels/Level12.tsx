import { useState, useRef, useCallback } from "react";

// To simplify the code, we encapsulate all the logic in a single function.
const useCounter = (initialValue: number, ms: number) => {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, ms);
    console.log("start");
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return { count, start, stop, reset };
};

export const Level12 = () => {
  // custom hook is cleaner than using useState and useRef.
  const { count, start, stop, reset } = useCounter(0, 1000);

  return (
    <div>
      <p>Level12</p>
      count: {count}
      <div>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};
