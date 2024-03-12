import React from 'react'
import '../../styles/index.scss'
import {FaCheckCircle, FaEllipsisV, FaPlus} from "react-icons/fa";
import {FaEllipsisVertical} from "react-icons/fa6";

function ModuleControls() {
	return (
		// TODO: Try removing the className from the top most div and add when combining all the components for module page.
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
				<button className="btn wd-rectangle-grey-button">
					Collapse All
				</button>
				<button className="btn wd-rectangle-grey-button">
					View Progress
				</button>
				<button className="btn dropdown-toggle wd-rectangle-grey-button">
					<FaCheckCircle/> Publish All
				</button>
				<button className="btn wd-rectangle-red-button btn-danger">
					<FaPlus/>Module
				</button>
				<button className="btn wd-rectangle-grey-button">
					<FaEllipsisVertical className="fa-solid"/>
				</button>
			</div>
		</div>
	);
}

export default ModuleControls;