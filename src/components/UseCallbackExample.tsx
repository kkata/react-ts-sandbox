import React, { useState, useCallback } from "react";

type ButtonProps = {
  onClick: () => void;
};

export const UseCallbackExample = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  // useCallbackは、引数に渡した関数が変更された場合に再度実行される
  // これでButtonの再レンダリングが止まる
  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, "New task"]);
  }, [setTasks]);
  // const addTask = () => {
  //   setTasks((prevState) => [...prevState, "New task"]);
  // };

  return (
    <div>
      <Button onClick={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

// ButtonのレンダリングはReact.memoでは一度だけにならない
// ButtonのレンダリングはUseCallbackExampleのレンダリングに含まれる
const Button: React.FC<ButtonProps> = React.memo((props) => {
  console.log("Button rendered");
  return (
    <div>
      <button onClick={props.onClick} className="btn btn-primary">
        Add task
      </button>
    </div>
  );
});
