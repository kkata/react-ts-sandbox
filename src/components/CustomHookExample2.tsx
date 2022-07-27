import { useLocalStorage } from "../hooks/useLocalStorage";

export const CustomHookExample2 = () => {
  // HELP: Is this custom hook weird ??
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const taskObg = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObg]);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <input
            className="form-control"
            id="task"
            type="text"
            value={task}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <hr />
      {Array.isArray(tasks) && tasks.length > 0 && (
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item">
              {task.task}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
