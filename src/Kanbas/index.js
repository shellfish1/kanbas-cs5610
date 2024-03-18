import React from 'react';
import KanbasNavigation from "./Navigation";
import './styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {Navigate, Route, Routes} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
    return(
        <Provider store={store}>
            <div className="wd-flex-row-container">
                <div className="d-none d-sm-block">
                    <KanbasNavigation/>
                </div>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard"/>}/>
                    <Route path="Account" element={<h1>Account</h1>}/>
                    <Route path="Dashboard" element={<Dashboard/>}/>
                    <Route path="Courses/*" element={<h1>Courses</h1>}/>
                    <Route path="Courses/:courseId/*" element={<Courses/>}/>
                </Routes>
            </div>
        </Provider>

    );
}

export default Kanbas