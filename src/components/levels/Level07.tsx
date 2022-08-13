import { useState, useEffect } from "react";

export const Level07 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      // called once after component is unmounted
      console.log("cleanup");
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <p>Level07</p>
      count: {count}
    </div>
  );
};
