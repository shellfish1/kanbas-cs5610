import React, { useState } from "react";
import "../../styles/index.scss";
import { assignments } from "../../Database";
import {FaEllipsisV, FaGripVertical, FaPlus, FaBook} from "react-icons/fa";
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import {FaCircleCheck} from "react-icons/fa6";

function AssignmentList() {
	const { courseId } = useParams();
	const assignmentList = assignments.filter((a) => a.course === courseId);

	return (
		<div>
			<ul className="wd-flex-grow-1 list-group">
				<li className="list-group-item list-group-item-secondary">
					<FaGripVertical style={{marginRight: "5px"}}/>
					<span><strong>Assignments</strong></span>
					<div className="float-end">
						<button
							className="btn rounded-pill"
							style={{background: "#eeeeee", marginRight: "20px"}}
						>
							40% of Total
						</button>
						<FaPlus style={{marginRight: "20px"}}/>
						<FaEllipsisV/>
					</div>
				</li>
			</ul>
			<ul className="list-group" style={{ borderRadius: "0" }}>
				{
					assignmentList.map( a => {
						return (
							<li className="list-group-item">
								<FaGripVertical style={{marginRight: "10px"}}/>
								<FaBook style={{color: "green"}}/>
								&nbsp;&nbsp;&nbsp;
								<h6 style={{ display: "inline" }}>
									<strong>
										<Link to={`/Kanbas/Courses/${courseId}/Assignments/${a._id}`}
											  style={{ color: "black" }}>
											{`${a._id} - ${a.title}`}
										</Link>
									</strong>
								</h6>
								<div className="float-end">
									<FaCircleCheck style={{ color: "green" }} />
									<FaEllipsisV/>
								</div>
								<div style={{ marginLeft: "70px", color: "#686464",  width: "600px"}}>
									<p style={{ fontSize: "15px", marginBottom: "1px" }}>
										Multiple Modules | Not available</p>
								</div>
							</li>
						)
					})
				}
			</ul>
		</div>
	);
}

export default AssignmentList;