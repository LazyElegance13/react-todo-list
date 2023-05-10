import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/todoSlice";
import { FormControl, Select, MenuItem } from "@mui/material";

function Filter() {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setFilter(e.target.value))
    };

    return (
        <FormControl fullWidth variant="outlined" sx={{ marginBottom: '1rem'}}>
            <Select 
                defaultValue="all"
                onChange={handleChange}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="incomplete">Incomplete</MenuItem>
                </Select>
        </FormControl>
    );
}

export default Filter;