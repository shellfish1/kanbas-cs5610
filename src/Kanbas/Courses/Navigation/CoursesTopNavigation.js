import { courses } from "../../Database";
import {Link, useParams} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import React from "react";
import {FaGlasses} from "react-icons/fa";

function CoursesTopNavigation() {
	const { courseId } = useParams();
	const course = courses.find((course) => course._id === courseId);
	const semester = (c) => {
		const [year, day, month] = c?.startDate.split('-')
		return (`${day}${month}${year.substring(2, 4)}`)
	}
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
						Home
					</li>
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