import React from 'react'
import '../../styles/index.scss'
import {FaPlus} from "react-icons/fa";
import {FaEllipsisVertical} from "react-icons/fa6";

function AssignmentControls() {
	return (
		<div className="wd-flex-row-container">
			<div className="search wd-flex-grow-1">
				<input
					type="text"
					className="form-control w-25"
					placeholder="Search for Assignment"
				/>
			</div>
			<div className="d-flex float-end">
				<div className="flex-grow-1"></div>
				<button className="btn wd-rectangle-grey-button" >
					<FaPlus/>Group
				</button>
				<button className="btn btn-danger">
					<FaPlus/>Assignment
				</button>
				<button className="btn wd-rectangle-grey-button" >
					<FaEllipsisVertical/>
				</button>
			</div>
		</div>
	);
}

export default AssignmentControls;