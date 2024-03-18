import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";
// import {createReducer as assignmentsSlices} from "@reduxjs/toolkit/src";

const gatherAssignments = (a) => {
	const assignmentsDict = {};
	for (const assignment of a) {
		const courseId = assignment.course;
		if (!assignmentsDict[courseId]) {
			assignmentsDict[courseId] = [];
		}
		assignmentsDict[courseId].push(assignment);
	}
	return assignmentsDict;
}

const initialState = {
	assignments: gatherAssignments(assignments),
	selectedAssignment: {
		title: null,
		description: null,
		course: null,
		_id: null,
		startDate: null,
		dueDate: null,
		maxScore: null
	},
};

const assignmentsSlice = createSlice({
	name: "assignments",
	initialState,
	reducers: {
		addAssignment: (state, action) => {
			state.assignments = [
				{ ...action.payload, _id: new Date().getTime().toString() },
				...state.assignments,
			];
		},
		deleteAssignment: (state, action) => {
			state.assignments = state.assignments.filter(
				(a) => a._id !== action.payload
			);
		},
		updateAssignment: (state, action) => {
			state.assignments = state.assignments.map((a) => {
				if (a._id === action.payload._id) {
					return action.payload;
				} else {
					return a;
				}
			});
		},
		setSelectedAssignment: (state, action) => {
			state.selectedAssignment = action.payload
		}
	},
});

export const {addAssignment, setSelectedAssignment, updateAssignment, deleteAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;