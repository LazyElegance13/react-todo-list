import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/todoSlice";



function Task({ task }) {
    const dispatch = useDispatch();

    return (
        <ListItem onClick={() => dispatch(toggleTodo(task.id))}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            {/* <ListItemText primary={task} /> */}
        </ListItem>
    );
}

export default Task;

