import React from "react";
import { ListItem, ListItemText } from "@mui/material";


function Task({ task }) {
    return (
        <ListItem>
            <ListItemText primary={task} />
        </ListItem>
    );
}

export default Task;

