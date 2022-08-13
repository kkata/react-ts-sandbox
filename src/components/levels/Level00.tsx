import { useState } from "react";

export const Level00 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Level00</p>
      count: {count}
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};
