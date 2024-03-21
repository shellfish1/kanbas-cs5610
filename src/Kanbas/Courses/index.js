import React from "react";
import CoursesTopNavigation from "./Navigation/CoursesTopNavigation";
import CourseSideNavigation from "./Navigation/CoursesSideNavigation";
import {Navigate, Route, Routes} from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Edit/AssignmentEditor";
import GradesTable from "./Grades/GradesTable";
import 'bootstrap/dist/css/bootstrap.min.css'

function Courses({courses}) {
	return(
		<div className="wd-flex-grow-1">
			{/*<div className="d-none d-sm-flex">*/}

			{/*</div>*/}
			<CoursesTopNavigation courses={courses} className="d-none d-md-block"/>
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
					<Route path="Assignments/New" element={<AssignmentEditor/>}/>
					<Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
					<Route path="Grades" element={<GradesTable/>}/>
				</Routes>
			</div>
		</div>
	);
}

export default Courses;