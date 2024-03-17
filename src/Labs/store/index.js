import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/reducers/helloReducer";
import counterReducer from "../a4/ReduxExamples/reducers/counterReducer";
import addReducer from "../a4/ReduxExamples/reducers/addReducer";
import todoReducer from "../a4/ReduxExamples/reducers/todoReducer";

const store = configureStore({
	reducer: {
		helloReducer,
		counterReducer,
		addReducer,
		todoReducer
	},
});
export default store;