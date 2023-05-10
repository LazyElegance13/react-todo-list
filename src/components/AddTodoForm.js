import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { TextField, Button } from "@mui/material";

function AddTodoForm() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;
        dispatch(addTodo(value));
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                label="Add todo" 
                variant="outlined" 
                size="small"
            />
            <Button type="submit" variant="contained" color="primary">
                Add
            </Button>
        </form>    
    );
}

export default AddTodoForm;