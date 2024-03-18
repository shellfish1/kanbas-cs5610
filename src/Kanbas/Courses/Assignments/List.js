import React, { useState } from "react";
import "../../styles/index.scss";
import {FaEllipsisV, FaGripVertical, FaPlus, FaBook} from "react-icons/fa";
import {Link} from "react-router-dom";
import {FaCircleCheck} from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {deleteAssignment, setSelectedAssignment} from "./reducers/assignmentsReducer";

function AssignmentList({courseId}) {
	const assignmentList = useSelector((state) =>
		state.assignmentsReducer.assignments)[courseId];
	const dispatch = useDispatch();

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
							<li className="list-group-item" key={a._id}>
								<FaGripVertical style={{marginRight: "10px"}}/>
								<FaBook style={{color: "green"}}/>
								&nbsp;&nbsp;&nbsp;
								<h6 style={{ display: "inline" }}>
									<strong>
										<Link to={`/Kanbas/Courses/${courseId}/Assignments/${a._id}`}
											  data-cid={a.course}
											  data-aid={a._id}
											  style={{ color: "black" }}
											  onClick={(ev)=> {
												  const {aid, cid} = ev.target.dataset
												  const assignment = assignmentList.filter((ass) => ass._id === aid)[0]
												  dispatch(setSelectedAssignment(assignment))
											  }}
										>
											{`${a._id} - ${a.title}`}
										</Link>
									</strong>
								</h6>
								<div className="float-end">
									<button className="btn btn-danger mx-2"
											data-cid={a.course}
											data-aid={a._id}
											onClick={ (ev) => {
												const {aid, cid} = ev.target.dataset
												dispatch(deleteAssignment({course: cid, _id: aid}))
											} }>
										Delete
									</button>
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