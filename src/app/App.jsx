import { SplitScreen } from "../components/SplitScreen";
import { TasksList } from "../components/TasksList";
import { TasksDetails } from "../components/TasksDetails";
import ContextProvider from "../context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <SplitScreen>
        <TasksList />
        <TasksDetails />
      </SplitScreen>
    </ContextProvider>
  );
}

export default App;
