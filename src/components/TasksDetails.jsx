import { TasksDetailstWrapper, Card, MyP } from "../styles";
import { useContext, useEffect, memo } from "react";
import Context from "../context/Context";

export const TasksDetails = memo(() => {
    const { selectedTask } = useContext(Context);
    const {id, description, completed} = selectedTask;
    return (
        <TasksDetailstWrapper>
            {
                id === undefined ? (<p>No Task Selected</p>)
                    :
                    (
                        <Card>
                            <h4>Description: </h4>
                            <MyP>{description}</MyP>
                            <h5>Status:</h5>
                            <MyP>{completed ? "Completed" : "Pending"}</MyP>
                        </Card>
                    )
            }
        </TasksDetailstWrapper>
    );
});