import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from '../components/TodoSlices.jsx'

export const store = configureStore({
    reducer: {
        todos: toDoReducer,
    },
})