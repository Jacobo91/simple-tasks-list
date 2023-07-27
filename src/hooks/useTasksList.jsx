import Context from "../context/Context";
import { useContext, useCallback } from "react";
import { generateUniqueId } from "../utils";

export const useTasksLists = () => {
    const {tasks, setTasks, newTask, setNewTask,setSelectedTask} = useContext(Context);

    const handleChange = useCallback((e) => {
        const { value } = e.target;
        setNewTask(value);
    }, [setNewTask]);

    const handleAddTask = useCallback(() => {
        setTasks(prevTasks => [...prevTasks, {
            id: generateUniqueId(),
            description: newTask,
            completed: false,
        }]);
        setNewTask('');
    }, [setTasks, newTask, setNewTask]);

    const handleRemoveTask = useCallback((e, id) => {
        e.stopPropagation();
        setTasks(tasks.filter((task) => task.id !== id));
        setSelectedTask({});
    }, [setTasks, tasks, setSelectedTask]);

    const handleTaskSelection = useCallback((id) => {
        setSelectedTask(tasks.find(task => task.id === id));
    }, [setSelectedTask, tasks]);

    const handleTaskCompletion = useCallback((e, id) => {
        e.stopPropagation();
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: true,
                }
            }
            return task;
        })
        setTasks(updatedTasks);
        const updatedSelectedTask = updatedTasks.find((task) => task.id === id);
        setSelectedTask(updatedSelectedTask);
    }, [tasks, setTasks, setSelectedTask]);

    return {
        tasks,
        newTask,
        handleChange,
        handleAddTask,
        handleRemoveTask,
        handleTaskSelection,
        handleTaskCompletion
    }
};