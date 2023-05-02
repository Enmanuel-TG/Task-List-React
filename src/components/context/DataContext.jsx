import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children}) {
    const [tasks, setTasks] = useState([]);
  return (
    <DataContext.Provider value={{ tasks, setTasks }}>
      {children}
    </DataContext.Provider>
  );
}
