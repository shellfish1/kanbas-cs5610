import React from 'react'
import '../../styles/index.scss'
import {FaPlus} from "react-icons/fa";
import {FaEllipsisVertical} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedAssignment} from "./reducers/assignmentsReducer";

function AssignmentControls({courseId}) {
	const selectedAssignment = useSelector((state) =>
		state.assignmentsReducer.selectedAssignment)
	const dispatch = useDispatch();
	return (
		<div className="wd-flex-row-container">
			<div className="search wd-flex-grow-1">
				<input
					type="text"
					className="form-control w-25"
					placeholder="Search for Assignment"
				/>
			</div>
			<div className="d-flex float-end">
				<div className="flex-grow-1"></div>
				<button className="btn wd-rectangle-grey-button" >
					<FaPlus/>Group
				</button>
				<Link to={"New"} className="btn btn-danger"
					onClick={() => {
						dispatch(setSelectedAssignment({
							title: null,
							description: null,
							course: courseId,
							_id: null,
							startDate: null,
							dueDate: null,
							maxScore: null
						}))
					}}>
					<FaPlus/>Assignment
				</Link>
				<button className="btn wd-rectangle-grey-button" >
					<FaEllipsisVertical/>
				</button>
			</div>
		</div>
	);
}

export default AssignmentControls;