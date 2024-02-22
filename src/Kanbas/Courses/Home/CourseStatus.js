import React from 'react';
import {Link, useParams} from "react-router-dom";
import {assignments} from "../../Database";
import {FaBell, FaChartBar, FaFileImport, FaMicrophone, FaWindowClose} from "react-icons/fa";
import {FaMapLocation} from "react-icons/fa6";

function CourseStatus() {
	const { courseId } = useParams();
	const dueAssignments = assignments
		.filter( a => a?.course === courseId )
		.filter( b => {
			const dateDue = new Date(b?.dueDate);
			const dateNow = new Date(Date.now());

			return (
				( (dateDue.getTime() - dateNow.getTime()) < (7*1000*60*60*24) )
				&&
				( dateDue.getTime() > dateNow.getTime() )
			)
		});

	const getOnlyDate = (d) => {
		const dateDue = new Date(d)
		return `${dateDue.getDate()} - ${dateDue.toLocaleString("en-US", { month: "long" })}`
	}

	return (
		<div>
			<h5 className="mb-2">Course Status</h5>
			<hr/>
			<div className="float-top">
				<ul className="list-group">
					<li className="list-group-item" aria-hidden="true" style={{background: "#eeeeee"}}>
						<FaFileImport/> Import Existing Content
					</li>
					<li className="list-group-item" aria-hidden="true" style={{background: "#eeeeee"}}>
						<FaFileImport/> Import From Commons
					</li>
					<li className="list-group-item" aria-hidden="true" style={{background: "#eeeeee"}}>
						<FaMapLocation/> Choose Home Page
					</li>
					<li className="list-group-item" aria-hidden="true" style={{background: "#eeeeee"}}>
						<FaChartBar/> View Course Stream
					</li>
					<li className="list-group-item" aria-hidden="true" style={{background: "#eeeeee"}}>
						<FaMicrophone/> View Announcement
					</li>
					<li className="list-group-item" aria-hidden="true" style={{background: "#eeeeee"}}>
						<FaChartBar/> New Analytics
					</li>
					<li className="list-group-item" aria-hidden="true" style={{background: "#eeeeee"}}>
						<FaBell/> View Course Notifications
					</li>
				</ul>
			</div>
			<br/>
			<h5 className="mb-2">To Do</h5>
			<hr/>
			{
				(dueAssignments.length > 0) && (
					<ul  style={{listStyle: "none", padding: "0"}}>
						{
							dueAssignments.map(a => {
								return (
									<li>
										<div className="wd-flex-row-container">
											<Link to={`/Kanbas/Assignments/${a._id}/`} style={{color: "red"}}>
												{a._id} - {a.title}
											</Link>
											<div className="wd-flex-grow-1"></div>
											<FaWindowClose />
										</div>
										{a.maxScore} points | Due {getOnlyDate(a.dueDate)}
									</li>
								);
							})
						}
					</ul>
				)
			}
		</div>
	)
}

export default CourseStatus;