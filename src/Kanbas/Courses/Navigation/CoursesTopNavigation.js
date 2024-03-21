import {assignments} from "../../Database";
import {Link, useLocation, useParams} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import React from "react";
import {FaGlasses} from "react-icons/fa";

function CoursesTopNavigation({courses}) {
	const { courseId } = useParams();
	const { pathname } = useLocation();
	const course = courses.find((course) => course._id === courseId);
	const semester = (c) => {
		const [year, day, month] = c?.startDate.split('-')
		return (`${day}${month}${year.substring(2, 4)}`)
	}

	const section = (path) => {
		if ( path.toLowerCase().includes("courses")) {
			const idx = path.toLowerCase().indexOf("/courses")
			return path.substring(idx).split("/")[3]
		}
	}

	const isEditSection = (path) => {
		return path.toLowerCase().includes("assignments/")
	}

	const findAssignment = (path) => {
		if ( path.toLowerCase().includes("assignments")) {
			const idx = path.toLowerCase().indexOf("/assignments")
			const assignmentId =  path.substring(idx).split("/")[2]
			// console.log(JSON.stringify(assignmentId))
			const assignment =  assignments.find( a => a._id === assignmentId)
			// console.log(JSON.stringify(assignment))
			return assignment
		}
	}

	// console.log(JSON.stringify(useParams()))

	return (
		<div className="wd-flex-row-container wd-top-nav d-none d-sm-flex">
			{/*<h1><HiMiniBars3/> Course {course?.name}</h1>
			<i className="fa fa-bars fa-2x"></i>*/}
			<HiMiniBars3 className="fs-2" style={{color: "red"}}/>
			<nav aria-label="breadcrumb" className="pt-1" style={{marginLeft: "8px", alignContent: "center"}}>
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link to="#">
							{course?._id}.{course.number}.{semester(course)}
						</Link>
						{/*<a href="#">{course?._id}.{course.number}.{semester(course)}</a>*/}
					</li>
					<li className="breadcrumb-item">
						<Link to="#">
							>
						</Link>
					</li>
					<li className="breadcrumb-item active" aria-current="page">
						{section(pathname)}
					</li>
					{
						isEditSection(pathname) && (
							<li className="breadcrumb-item">
								<Link to="#">
									>
								</Link>
							</li>
						)
					}
					{
						isEditSection(pathname) && (
							<li className="breadcrumb-item active" aria-current="page">
								{findAssignment(pathname) != null ? findAssignment(pathname).title : "New"}
							</li>
						)
					}
				</ol>
			</nav>
			<div className="wd-flex-grow-1">
				<button className="btn btn-secondary float-end wd-rect-button" style={{height: "36px"}}>
					<FaGlasses className="fa-solid"/> &nbsp; Student View
				</button>
			</div>
		</div>
	);
}

export default CoursesTopNavigation;