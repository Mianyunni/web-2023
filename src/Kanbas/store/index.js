import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentsReducer from '../Courses/Assignments/assignmentsReducer';

const store = configureStore({
  reducer: {
    modules: modulesReducer,      // 这里改为"modules"
    assignments: assignmentsReducer // 这里改为"assignments"
  }
});

export default store;