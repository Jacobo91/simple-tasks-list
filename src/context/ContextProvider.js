import { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [selectedTask, setSelectedTask] = useState({});

    return(
        <Context.Provider
            value={{
                tasks,
                setTasks,
                newTask,
                setNewTask,
                selectedTask,
                setSelectedTask,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;