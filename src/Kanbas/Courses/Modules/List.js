import React, { useState } from "react";
import "../../styles/index.scss";
import {FaEllipsisV, FaCheckCircle, FaGripVertical} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
	addModule,
	deleteModule,
	updateModule,
	setModule
} from "./reducers/moduleReducer";

function ModuleList({courseId}) {
	const moduleList = useSelector((state) =>
		state.modulesReducer.modules);
	const module = useSelector((state) =>
		state.modulesReducer.module);
	const dispatch = useDispatch();

	return (
		<>
			<div className="card" style={{width: 600}}>
				<div className="card-body">
					<h6 className="card-title">
						Add Module
					</h6>
					<hr/>
					<div className="form-group row">
						<label htmlFor="addModuleName" className="col-2 col-form-label">Name</label>
						<div className="col-10">
							<input id="addModuleName" type="text" value={module.name} className="form-control"
								   onChange={(e) => dispatch(setModule({...module, name: e.target.value}))}/>
						</div>
					</div>
					<br/>
					<div className="form-group row">
						<label htmlFor="addModuleDescription" className="col-2 col-form-label">Desc</label>
						<div className="col-10">
							<input id="addModuleDescription" type="text" value={module.description} className="form-control"
								   onChange={(e) => dispatch(setModule({...module, description: e.target.value}))}/>
						</div>
					</div>
					<br/>
					<button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
						Add
					</button>
					&nbsp;
					<button className="btn btn-secondary" onClick={() => dispatch(updateModule(module))}>
						Update
					</button>
				</div>
			</div>
			<hr/>
			<ul className="wd-flex-grow-1 list-group">
				{
					moduleList
						.filter((m) => m.course === courseId)
						.map(
							(courseModule, courseIndex) => {
								console.log(`C Index is ${courseIndex} Mod is ${courseModule.name}`)
								return(
									<div>
										<li key={courseIndex}
											className="list-group-item list-group-item-secondary"
											onClick={() => dispatch(setModule(courseModule))}
										>
											<div className="d-flex justify-content-between align-items-center">
												<div className="d-flex align-items-center">
													<FaGripVertical className="mx-1 my-0"/>
													<strong className="mx-1 my-0">{courseModule.name}</strong>
												</div>
												<div>
													<button className="btn btn-secondary mx-2"
															onClick={() => dispatch(setModule(module))}>Edit
													</button>
													<button className="btn btn-danger"
															onClick={() => {
																dispatch(deleteModule(module))
															}}>Delete
													</button>
													<FaEllipsisV className="mx-1"/>
												</div>
											</div>
										</li>
										{/*<br/>*/}
										<ul className="list-group" style={{borderRadius: "0px"}}>
											{
												courseModule.lessons.map(
													(lesson, lessonIndex) => {
														console.log(`Index is ${lessonIndex} lesson is ${lesson.name}`)
														return (
															<li className="list-group-item" key={lessonIndex}>
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
													}
												)
											}
										</ul>
										<br/>
									</div>
								)
							}
						)
				}
			</ul>
		</>

	)
}

export default ModuleList;