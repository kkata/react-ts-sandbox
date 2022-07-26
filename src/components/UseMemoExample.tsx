import { useState, useEffect, useRef, useMemo } from "react";

export const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // const sqrt = getSqrt(number); // onClickでgetSqrt()が呼ばれる
  const sqrt = useMemo(() => getSqrt(number), [number]); // onClickでgetSqrt()が呼ばれない

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log("prevState + 1:", prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="form-control w-25"
      />

      <h2 className="mt-3">
        The sqrt of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className="btn btn-primary">
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
};

function getSqrt(n: number) {
  for (let i = 0; i <= 100; i++) {
    console.log(i);
  }
  console.log("Expensive calculation");
  return Math.sqrt(n);
}
