import { useState, useEffect } from "react";

export const Level06 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("timeout");
      setCount(count + 1);
    }, 1000);
    return () => {
      console.log("cleanup");
      clearTimeout(timeout);
    };
  }, [count]);
  return (
    <div>
      <p>Level06</p>
      count: {count}
    </div>
  );
};
