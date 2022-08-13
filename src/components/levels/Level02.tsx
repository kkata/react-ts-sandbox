import { useState, useEffect } from "react";

export const Level02 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 500);
  });
  return (
    <div>
      <p>Level02</p>
      count: {count}
    </div>
  );
};
