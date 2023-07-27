import { MyInput } from "../styles";
import { memo } from "react";

export const Input = ({
    newTask,
    onInputChange
}) => {
    return(
        <MyInput
            type="text"
            placeholder="Add new task..."
            id="task input field"
            value={newTask}
            onChange={onInputChange}
        />
    )
};