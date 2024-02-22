import React from 'react';
import AssignmentList from "./List";
import AssignmentsControls from "./AssignmentsControls";

function Assignments() {
	return (
		<div className="wd-flex-grow-1" style={{ marginLeft: "30px", marginRight: "30px"}}>
			<AssignmentsControls/>
			<hr/>
			<AssignmentList/>
		</div>
	)
}

export default Assignments