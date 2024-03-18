import React from 'react';
import ModuleControls from "./ModuleControls";
import ModuleList from "./List";
import {useParams} from "react-router";

function Modules() {
	const { courseId } = useParams();
	return (
		<div className="wd-flex-grow-1" style={{ marginLeft: "30px", marginRight: "30px"}}>
			<ModuleControls/>
			<hr/>
			<ModuleList courseId={courseId}/>
		</div>
	)
}

export default Modules