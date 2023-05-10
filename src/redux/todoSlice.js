import { createSlice } from "@reduxjs/toolkit";

// let todoId = 3;

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        tasks: [
            {id: 1, title: 'Learn React', completed: false}, 
            {id: 2, title: 'Learn Linear Algebra', completed: false}, 
            {id: 3, title: 'Learn Machine Learning', completed: false},                 
        ],
        filter: 'all'
    },
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload,
                completed: false,
            };
            state.tasks.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.tasks = state.tasks.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.tasks.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions;

export default todoSlice.reducer;