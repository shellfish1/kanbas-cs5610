import React,  { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard({ courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse }) {
/*
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        _id: "0",
        name: "New Course",
        number: 123,
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "reactjs.png"
    });
    const addNewCourse = () => {
        const newCourse = { ...course,
            _id: new Date().getTime().toString() };
        setCourses([...courses, { ...course, ...newCourse }]);
    };
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
*/


    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <hr/>

            <div className="card" style={{width: 600}}>
                <form className="card-body">
                    <h6 className="card-title">
                        Add Course
                    </h6>
                    {/*<p className="card-text">Comple to add a new course</p>*/}
                    <hr/>
                    <div className="form-group row">
                        <label htmlFor="addCourseName" className="col-2 col-form-label">Name</label>
                        <div className="col-10">
                            <input id="addCourseName" type="text" value={course.name} className="form-control"
                                   onChange={(e) => setCourse({...course, name: e.target.value})}/>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="addCourseNumber" className="col-2 col-form-label">Number</label>
                        <div className="col-10">
                            <input id="addCourseNumber" type="number" value={course.number} className="form-control"
                                   onChange={(e) => setCourse({...course, number: parseInt(e.target.value)})}/>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="addCourseStart" className="col-2 col-form-label">Start</label>
                        <div className="col-10">
                            <input id="addCourseStart" type="date" value={course.startDate} className="form-control"
                                   onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="addCourseEnd" className="col-2 col-form-label">End</label>
                        <div className="col-10">
                            <input id="addCourseEnd" type="date" value={course.endDate} className="form-control"
                                   onChange={(e) => setCourse({...course, endDate: e.target.value})}/>
                        </div>
                    </div>
                    <br/>
                    <button className="btn btn-success" onClick={addNewCourse}>
                        Add
                    </button>
                    &nbsp;
                    <button className="btn btn-secondary" onClick={updateCourse}>
                        Update
                    </button>
                </form>
            </div>


            <hr/>

            <h2>Published Courses (7)</h2>
            <hr/>
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{width: 300}}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top"
                                     style={{height: 150}}/>
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                          style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                        {course.name} </Link>
                                    <p className="card-text">{course.name}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-success">
                                        Go </Link>
                                    &nbsp;
                                    <button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}
                                            className="btn btn-danger">
                                        Delete
                                    </button>
                                    &nbsp;
                                    <button onClick={
                                        (event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}
                                            className="btn btn-secondary">
                                        Edit
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;