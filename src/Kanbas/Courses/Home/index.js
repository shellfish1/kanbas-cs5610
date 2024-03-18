import React from 'react';
import ModuleControls from "../Modules/ModuleControls";
import ModuleList from "../Modules/List";
import CourseStatus from "./CourseStatus";
import {useParams} from "react-router";

function Home() {
	const { courseId } = useParams();
	return (
		<div className="wd-flex-grow-1" style={{ marginLeft: "30px", marginRight: "30px"}}>
			<div className="wd-flex-row-container">
				<div className="wd-flex-grow-1 mr-5" style={{marginLeft: "10px", marginRight: "10px"}}>
					<ModuleControls/>
					<hr/>
					<ModuleList courseId={courseId}/>
				</div>
				<div className="d-none d-lg-block">
					<CourseStatus/>
				</div>
			</div>
		</div>
	)
}

export default Home;