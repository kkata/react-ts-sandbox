import { useState, useEffect } from "react";

export const Level04 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 300);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <p>Level04</p>
      count: {count}
    </div>
  );
};
