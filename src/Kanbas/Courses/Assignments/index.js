import React from 'react';
import AssignmentList from "./List";
import AssignmentsControls from "./AssignmentsControls";
import {useParams} from "react-router";

function Assignments() {
	const { courseId } = useParams();
	return (
		<div className="wd-flex-grow-1" style={{ marginLeft: "30px", marginRight: "30px"}}>
			<AssignmentsControls courseId={courseId}/>
			<hr/>
			<AssignmentList courseId={courseId}/>
		</div>
	)
}

export default Assignments