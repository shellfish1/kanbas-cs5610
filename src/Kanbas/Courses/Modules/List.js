import React, { useState } from "react";
import "../../styles/index.scss";
import { modules } from "../../Database";
import {FaEllipsisV, FaCheckCircle, FaPlusCircle, FaGripVertical} from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
	const { courseId } = useParams();
	const modulesList = modules.filter((module) => module.course === courseId);
	const [selectedModule, setSelectedModule] = useState(modulesList[0]);
	return (
		<ul className="wd-flex-grow-1 list-group">
			{
				modulesList.map(
					(module, index) => (
						<div className="wd-column-element">
							<li key={index}
								className="list-group-item list-group-item-secondary"
								onClick={() => setSelectedModule(module)}
							>
								<div>
									<FaGripVertical className="me-2" style={{marginRight: "5px"}}/>
									<span>
										<strong>{module.name}</strong>
									</span>
									<div className="float-end">
										<FaCheckCircle className="text-success" style={{color: "rgb(3, 133, 3)"}}/>
										<FaPlusCircle className="ms-2"/>
										<FaEllipsisV className="ms-2"/>
									</div>
								</div>
							</li>
							{
								selectedModule._id === module._id && (
									<ul className="list-group" style={{borderRadius: "0px"}}>
										{
											module.lessons?.map(
												(lesson, index) => (
													<li className="list-group-item" key={index}>
														<FaEllipsisV className="me-2"/>
														<h6 style={{display: "inline"}}>
															{lesson.name}
														</h6>
														<div className="float-end">
															<FaCheckCircle className="text-success"
																		   style={{color: "rgb(3, 133, 3)"}}/>
															<FaEllipsisV className="wd-fa-body-logo"/>
														</div>
													</li>
												)
											)
										}
									</ul>
								)
							}
						</div>

					)
				)
			}
		</ul>
	);
}

export default ModuleList;