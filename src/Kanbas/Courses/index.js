import React from "react";
import CoursesTopNavigation from "./Navigation/CoursesTopNavigation";
import CourseSideNavigation from "./Navigation/CoursesSideNavigation";
import {Navigate, Route, Routes} from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Edit/AssignmentEditor";

function Courses() {
	return(
		<div className="wd-flex-grow-1">
			{/*<div className="d-none d-sm-flex">*/}

			{/*</div>*/}
			<CoursesTopNavigation className="d-none d-md-block"/>
			<hr/>
			<div className="wd-flex-row-container">
				<div className="d-none d-lg-block">
					<CourseSideNavigation/>
				</div>
				<Routes>
					<Route path="/" element={<Navigate to="Home"/>}/>
					<Route path="Home" element={<Home/>}/>
					<Route path="Modules" element={<Modules/>}/>
					<Route path="Piazza" element={<h1>Piazza</h1>}/>
					<Route path="Assignments" element={<Assignments/>}/>
					<Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
					<Route path="Grades" element={<h1>Grades</h1>}/>
				</Routes>
			</div>
		</div>
	);
}

export default Courses;