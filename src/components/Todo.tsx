import { useState, useEffect, useRef } from "react";

type TodoProps =
  | {
      userId: number;
      id: number;
      title: string;
      completed: boolean;
    }
  | undefined;

export const Todo = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState<TodoProps>(undefined);

  const isMounted = useRef(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          // HELP: isMounted Ref is not working as expected. Is memory leak happening ?
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 2000);
      });

    // runs when component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, []);

  return loading ? <h3>Loading...</h3> : <h1>{todo && todo.title}</h1>;
};
