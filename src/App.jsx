import { DataProvider } from "./components/context/DataContext";
import { TODO } from "./components/Tasks";


export default function  App() {
  return (
    <>
      <DataProvider>
        <TODO />
      </DataProvider>
    </>
  );
}