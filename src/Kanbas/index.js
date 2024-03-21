import React, {useState} from 'react';
import KanbasNavigation from "./Navigation";
import './styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {Navigate, Route, Routes} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
import db from "./Database/index"
function Kanbas() {
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
        setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
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

    return(
        <Provider store={store}>
            <div className="wd-flex-row-container">
                <div className="d-none d-sm-block">
                    <KanbasNavigation/>
                </div>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard"/>}/>
                    <Route path="Account" element={<h1>Account</h1>}/>
                    <Route path="Dashboard" element={
                        <Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}/>
                    }/>
                    <Route path="Courses/*" element={<h1>Courses</h1>}/>
                    <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}/>
                </Routes>
            </div>
        </Provider>

    );
}

export default Kanbas