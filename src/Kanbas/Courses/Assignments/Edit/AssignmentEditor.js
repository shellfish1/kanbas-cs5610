import React from 'react';

import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import {FaCircleCheck, FaEllipsisVertical} from "react-icons/fa6";
function AssignmentEditor() {
	const { assignmentId } = useParams();
	const assignment = assignments.find(
		(assignment) => assignment._id === assignmentId);
	const { courseId } = useParams();
	const navigate = useNavigate();
	const handleSave = () => {
		console.log("Actually saving assignment TBD in later assignments");
		navigate(`/Kanbas/Courses/${courseId}/Assignments`);
	};
	return (
		<div className="wd-flex-grow-1" style={{ marginLeft: "30px",  marginRight: "30px"}}>
			<div className="wd-flex-row-container">
				<div className="wd-flex-grow-1"></div>
				<div className="d-flex float-end">
					<div className="flex-grow-1"></div>
					<p style={{ marginTop: "7px", "marginRight": "10px", color: "green" }}>
						<FaCircleCheck style={{marginRight: "3px"}}/>
						Published
					</p>
					<button className="btn wd-rectangle-grey-button">
						<FaEllipsisVertical/>
					</button>
				</div>
			</div>
			<hr/>
			<div className="mb-3">
				<label className="form-label">Assignment Name</label>
				<input type="text" className="form-control" value={assignment.title}/>
			</div>
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
					<Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
						<button className="btn btn-danger">Save</button>
					</Link>
				</div>
			</div>
			<br/>
		</div>
		// <div>
		// 	<h2>Assignment Name</h2>
		// 	<input value={assignment?.title}
		// 		   className="form-control mb-2" />
		// 	<button onClick={handleSave} className="btn btn-success ms-2 float-end">
		// 		Save
		// 	</button>
		// 	<Link to={`/Kanbas/Courses/${courseId}/Assignments`}
		// 		  className="btn btn-danger float-end">
		// 		Cancel
		// 	</Link>
		// </div>
	);
}

export default AssignmentEditor;
