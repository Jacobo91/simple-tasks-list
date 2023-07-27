import { TasksListWrapper, AddTaskWrapper, MyUl, Titles } from "../styles";
import { TaskItem } from "./TaskItem";
import { Button } from "./Button";
import { useTasksLists } from "../hooks/useTasksList";
import { Input } from "./Input";

// Icons
import AddIcon from '@mui/icons-material/Add';


export const TasksList = () => {

    const {        
        tasks,
        newTask,
        handleChange,
        handleAddTask,
        handleRemoveTask,
        handleTaskSelection,
        handleTaskCompletion} = useTasksLists();

    return(
        <TasksListWrapper>
            <Titles>Tasks List</Titles>
            <AddTaskWrapper>
                <Input
                    newTask={newTask}
                    onInputChange={handleChange}
                />
                <Button
                    onClick={handleAddTask}
                    id="add button"
                >
                    <AddIcon/>
                </Button>
            </AddTaskWrapper>
            <MyUl id="tasks ul" >
                {tasks?.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onRemoveTask={(e) => handleRemoveTask(e, task.id)}
                        onTaskSelection={() => handleTaskSelection(task.id)}
                        onCompleteTask={(e) => handleTaskCompletion(e, task.id)}
                    />
                ))}
            </MyUl>
        </TasksListWrapper>
    );
};