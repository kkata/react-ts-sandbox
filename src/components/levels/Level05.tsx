import { useState, useEffect } from "react";

export const Level05 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      setCount(count + 1);
    }, 1000);
    return () => {
      console.log("cleanup");
      clearInterval(interval);
    };
  }, [count]);
  return (
    <div>
      <p>Level05</p>
      count: {count}
    </div>
  );
};
