import { useState, useEffect } from "react";

export const Level03 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 300);
  }, []);
  return (
    <div>
      <p>Level03</p>
      count: {count}
    </div>
  );
};
