import { useState } from "react";

export const Level01 = () => {
  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count + 1);
  }, 500);
  return (
    <div>
      <p>Level01</p>
      count: {count}
    </div>
  );
};
