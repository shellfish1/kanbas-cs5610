import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import {FaFileExport, FaFileImport} from "react-icons/fa";
import "../../index.css";
import React from 'react'
function GradesTable() {
	const { courseId } = useParams();
	const as = assignments.filter((assignment) => assignment.course === courseId);
	const es = enrollments.filter((enrollment) => enrollment.course === courseId);
	return (
		<div className="wd-flex-row-container">
			<div className="wd-flex-grow-1" style={{ marginLeft: "30px", marginRight: "30px"}}>
				<div className="wd-flex-row-container">
					<div className="wd-flex-grow-1"></div>
					<div className="d-flex float-end main-content-control">
						<div className="flex-grow-1"></div>
						<button className="btn" style={{ background: "#eeeeee", marginRight: "5px"}}>
							<FaFileImport style={{ marginRight: "3px"}}/>Import
						</button>
						<div className="dropdown">
							<button
								className="btn dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								style={{ background: "#eeeeee",  marginRight: "3px"}}
							>
								<FaFileExport style={{marginRight: "3px"}}/>Export

							</button>
						</div>
						<button className="btn" style={{ background: "#eeeeee", height: "38px"}}>
							<i className="fa-solid fa-gear"></i>
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<label className="form-label">Student Names</label>
						<input
							placeholder="Search Students"
							type="text"
							className="form-control"
						/>
					</div>
					<div className="col">
						<label className="form-label">Assignment Names</label>
						<input
							placeholder="Search Assignments"
							type="text"
							className="form-control"
						/>
					</div>
				</div>
				<br />
				<button className="btn" style={{ background: "#eeeeee" }}>
					<i className="fa fa-filter" style={{ marginRight: "5px" }}></i>Apply Filters
				</button>
				<hr />
			<div>
				<table className="table table-striped" style={{ border: "1", align: "center"}}>
					<thead>
					<tr>
						<th> Student Name </th>
						{as.map((assignment) => (<th>{assignment.title}</th>))}
					</tr>
					</thead>
					<tbody>
					{es
						.filter(e => e.course === courseId)
						.map((enrollment) => {
							const user = users.find((user) => user._id === enrollment.user);
							return (
								<tr>
									<td>{user?.firstName} {user?.lastName}</td>
									{assignments.filter(a => a.course === courseId).map((assignment) => {
										const grade = grades.find(
											(grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
										return (<td>{grade?.grade || ""}</td>);})}
								</tr>);
					})}
					</tbody>
				</table>
			</div>
			</div>
		</div>);
}
export default GradesTable;
