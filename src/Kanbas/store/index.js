import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducers/moduleReducer";
import assignmentsReducer from "../Courses/Assignments/reducers/assignmentsReducer";

const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer,
    }
});


export default store;