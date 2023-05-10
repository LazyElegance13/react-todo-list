import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: 'Learn React', completed: false}, 
    {id: 2, title: 'Learn Linear Algebra', completed: false}, 
    {id: 3, title: 'Learn Machine Learning', completed: false}, 
    ];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            state[index].completed = !state[index].completed;
        },
    },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;