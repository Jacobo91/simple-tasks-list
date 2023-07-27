import { MyLi, ItemButtonsWrapper } from "../styles";
import { Button } from "./Button";
import { memo, useState } from "react";

// ICONS
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

export const TaskItem = memo(({
    task,
    onRemoveTask,
    onTaskSelection,
    onCompleteTask,
}) => {
    const { id, description, completed } = task;

    return (
        <MyLi
            onClick={onTaskSelection}
        >
            <p style={{ textDecoration: completed ? "line-through" : "none" }} >
                {description}
            </p>
            <ItemButtonsWrapper>
                <Button onClick={onRemoveTask} >
                    <DeleteIcon/>
                </Button>
                <Button  onClick={onCompleteTask} >
                    <CheckIcon/>
                </Button>
            </ItemButtonsWrapper>
        </MyLi>
    );
});