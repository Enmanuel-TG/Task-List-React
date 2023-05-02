import { useContext } from "react";
import { DataContext } from "./context/DataContext";
import { Task } from "./Task";

function uuid() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  } else {
    return Math.random().toString(36);
  }
}

export function TODO() {
  const { tasks, setTasks } = useContext(DataContext);

  function handleOnSubmit(event) {
    event.preventDefault();
    const Data = event.target;
    const formData = new FormData(Data);
    const IValue = formData.get("inputValue");

    const Task = {
      id: uuid(),
      title: IValue,
    };
    Task.title === ""
      ? alert("Please write something")
      : setTasks((prev) => {
          const temp = [...prev, Task];
          return temp;
        });
        console.log(Task);
    Data.reset();
  }

  console.log(tasks);
  return (
    <div className="TasksContainer">
      <form onSubmit={handleOnSubmit}>
        <input type="text " name="inputValue" placeholder="Write here" />
        <button type="submit">Click</button>
      </form>
      <div>
        <Task />
      </div>
    </div>
  );
}
