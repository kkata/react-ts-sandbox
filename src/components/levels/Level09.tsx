import { useState, useRef } from "react";

export const Level09 = () => {
  const [count, setCount] = useState(0);

  // useRef is the go-to hook if mutable variable is needed.
  const intervalRef = useRef<NodeJS.Timer>(null!);

  // If start is called multiple times, setInterval will be called multiple times.
  const start = () => {
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    console.log("start");
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>Level09</p>
      count: {count}
      <div>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
      </div>
    </div>
  );
};
