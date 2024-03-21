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
			const newAssignment = { ...action.payload, _id: new Date().getTime().toString() }
			const courseId = newAssignment.course

			console.log(`courseId is ${courseId} newAssignment is ${JSON.stringify(newAssignment)}`)
			if( courseId in state.assignments){
				state.assignments = {
					...state.assignments,
					[courseId] : [...state.assignments[courseId], newAssignment]
				}
			}else{
				state.assignments = {
					...state.assignments,
					[courseId] : [newAssignment]
				}
			}

		},
		deleteAssignment: (state, action) => {
			const cid = action.payload.course
			const aid = action.payload._id
			state.assignments = {
				...state.assignments,
				[cid] : [...state.assignments[cid].filter(
					(a) => a._id !== aid
				)]
			}
		},
		updateAssignment: (state, action) => {
			const newAssignment = action.payload
			const courseId = newAssignment.course
			state.assignments = {
				...state.assignments,
				[courseId] : [ ...state.assignments[courseId].map((a) => {
					if (a._id === action.payload._id) {
						console.log("1WDSASFQACDVADVSDVSDV")
						return newAssignment;
					} else {
						return a;
					}
				})]
			}
			console.log(JSON.stringify(state.assignments[courseId]))
		},
		setSelectedAssignment: (state, action) => {
			console.log(JSON.stringify(action.payload))
			state.selectedAssignment = action.payload
		}
	},
});

export const {addAssignment, setSelectedAssignment, updateAssignment, deleteAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;