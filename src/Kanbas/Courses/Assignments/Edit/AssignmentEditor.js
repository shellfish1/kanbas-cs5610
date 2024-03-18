import React from 'react';

import {useNavigate, useParams, Link, useLocation} from "react-router-dom";
import {FaCircleCheck, FaEllipsisVertical} from "react-icons/fa6";
import {
	addAssignment,
	updateAssignment,
	deleteAssignment,
	setSelectedAssignment
} from "../reducers/assignmentsReducer";
import {useDispatch, useSelector} from "react-redux";


function AssignmentEditor() {
	const selectedAssignment = useSelector((state) =>
		state.assignmentsReducer.selectedAssignment)
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const assignmentId = selectedAssignment._id
	const courseId = selectedAssignment.course
	const navigate = useNavigate();
	const showEdit = !pathname.includes("/New")

	const handleSave = () => {
		console.log("Actually saving assignment TBD in later assignments");
		navigate(`/Kanbas/Courses/${courseId}/Assignments`);
	};


	return (
		<div className="wd-flex-grow-1" style={{marginLeft: "30px", marginRight: "30px"}}>
			<div className="wd-flex-row-container">
				<div className="wd-flex-grow-1"></div>
				<div className="d-flex float-end">
					<div className="flex-grow-1"></div>
					<p style={{marginTop: "7px", "marginRight": "10px", color: "green"}}>
						<FaCircleCheck style={{marginRight: "3px"}}/>
						Published
					</p>
					<button className="btn wd-rectangle-grey-button">
						<FaEllipsisVertical/>
					</button>
				</div>
			</div>
			<hr/>
			<form>
				<div className="mb-3">
					<label className="form-label">Assignment Name</label>
					<input type="text" className="form-control"
						   value={selectedAssignment.title}
						   onChange={(e) => setSelectedAssignment({...selectedAssignment, title: e.target.value})}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Description</label>
					<input type="text-area"
						   className="form-control"
						   value={selectedAssignment.description}
						   onChange={(e) => setSelectedAssignment({...selectedAssignment, description: e.target.value})}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Points</label>
					<input type="number"
						   className="form-control"
						   value={parseInt(selectedAssignment.maxScore)}
						   onChange={(e) => setSelectedAssignment({...selectedAssignment, maxScore: parseInt(e.target.value)})}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Available From</label>
					<input type="datetime-local"
						   value={selectedAssignment.startDate}
						   className="form-control"
						   onChange={(e) => setSelectedAssignment({...selectedAssignment, startDate: e.target.value})}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Available Till</label>
					<input type="datetime-local"
						   value={selectedAssignment.dueDate}
						   className="form-control"
						   onChange={(e) => setSelectedAssignment({...selectedAssignment, dueDate: e.target.value})}
					/>
				</div>
			</form>

			<br/>
			<hr/>
			<div className="wd-flex-row-container">
				<div className="form-check float-start">
					<input className="form-check-input" type="checkbox" value=""/>
					<label className="form-check-label">
						Notify users that this content has changed.
					</label>
				</div>
				<div className="wd-flex-grow-1"/>
				<div className="float-end">
					<Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
						<button className="btn" style={{background: "#eeeeee"}}>Cancel</button>
					</Link>
					&nbsp;
					{showEdit ? (
						<Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
							<button className="btn btn-secondary" onClick={() => updateAssignment(selectedAssignment)}>Update</button>
						</Link>
					) : (
						<Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
							<button className="btn btn-success"
									onClick={() => addAssignment(selectedAssignment)}
							>
								Add
							</button>
						</Link>
					)}

				</div>
			</div>
			<br/>
		</div>
	);
}

export default AssignmentEditor;
