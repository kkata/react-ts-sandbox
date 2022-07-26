import { useState } from "react";
import { Todo } from "./Todo";

export const UseRefExample3 = () => {
  const [todo, setTodo] = useState(true);

  return (
    <div>
      {todo && <Todo />}
      <button className="btn btn-primary" onClick={() => setTodo(!todo)}>
        Toggle Todo
      </button>
    </div>
  );
};
