import { useContext } from "react";
import { DataContext } from "./context/DataContext";

export function Task() {
  const { tasks } = useContext(DataContext);

    return ((
        tasks.map((task) => (
        <ul key={task.id}>
          <li>{task.title}</li>
        </ul>
        ))
  )
  );
}
