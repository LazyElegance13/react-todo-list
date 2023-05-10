import React from "react";
import { List } from "@mui/material";
import { useSelector } from 'react-redux';
import Task from "./Task";
import Filter from "./Filter"
import { Container } from "@mui/system";


function TaskList(props) {
    const { tasks, filter } = useSelector(state => state.todos);
    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') {
            return task.completed
        } else if (filter === 'incomplete') {
            return !task.completed
        } else {
            return true;
        }
    });

    return (
        <Container>
            <Filter />
            <List>
                {filteredTasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}   
            </List>        
        </Container>
    )
}

export default TaskList;

