import React from "react";
import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";



function Task({ task }) {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        // e.stopPropagation();
        dispatch(deleteTodo(task.id));
    }

    const handleToggle = () =>{
        dispatch(toggleTodo(task.id));
    }

    return (
        <ListItem>
            <Checkbox 
                edge="start"
                checked={task.completed}
                tabIndex={-1}
                disableRipple
                onClick={ handleToggle}
            />
            <ListItemText primary={task.title} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
            <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
}

export default Task;

